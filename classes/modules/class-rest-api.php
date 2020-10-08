<?php

namespace WPLF;

class RestApi extends Module {
  public $namespace = 'wplf/v2';
  private $x;

  public function __construct(Plugin $wplf) {
    $this->x = $wplf;
    parent::__construct($wplf);
    $this->registerEndpoints();
  }

  public function registerEndpoints() {
    $this->registerSubmitEndpoint();
    $this->registerSubmissionsEndpoint();
    $this->registerRenderEndpoint();
    $this->registerFormEndpoint();
  }

  public function registerSubmissionsEndpoint() {
    $endpoint = 'submissions'; // Could also accept /submissions/$formId but that has no extra value

    register_rest_route($this->namespace, $endpoint, [
      'callback' => [$this, 'getSubmissions'],
      'methods' => ['GET'],
      // 'permission_callback' => function () {
      //   return current_user_can('edit_posts');
      // },
      'permission_callback' => '__return_true',

    ]);
  }

  public function registerRenderEndpoint() {
    $endpoint = 'render'; // Could also accept /submissions/$formId but that has no extra value

    register_rest_route($this->namespace, $endpoint, [
      'callback' => [$this, 'render'],
      'methods' => ['POST'],
      'permission_callback' => '__return_true',
      // 'permission_callback' => function() { return current_user_can('edit_posts'); },
    ]);
  }

  public function registerSubmitEndpoint() {
    $endpoint = 'submit';

    register_rest_route($this->namespace, $endpoint, [
      'callback' => [$this, 'handleSubmission'],
      'methods' => ['GET', 'POST'],
      'permission_callback' => '__return_true',
    ]);
  }

  public function registerFormEndpoint() {
    $endpoint = 'form';

    register_rest_route($this->namespace, $endpoint, [
      'callback' => [$this, 'getForm'],
      'methods' => ['GET'],
      // 'permission_callback' => function () {
      //   return current_user_can('edit_posts');
      // },
      'permission_callback' => '__return_true',

    ]);
  }

  public function getForm($request) {
    $params = $request->get_params();
    $formId = $params['form'] ?? null;
    // $this->x->loadModule('submissions');

    // var_dump($this->submissions);

    try {
      $form = new Form(get_post($formId));
      // [$submissions, $totalPages] = $this->submissions->getFormSubmissions($form);

      $response = new \WP_REST_Response($form);
      $response->set_headers(array_merge($response->get_headers(), [
        // 'X-WP-Total' => count($submissions),
        // 'X-WP-TotalPages' => $totalPages,
      ]));

      return $response;
    } catch (Error $e) {
      isDebug() && log($e->getMessage());

      return new \WP_REST_Response(['error' => $e->getMessage(), 'data' => $e->getData()], 500);
    }
  }

  public function getSubmissions($request) {
    $params = $request->get_params();
    $formId = $params['form'] ?? null;
    $page = (int) ($params['page'] ?? 0);

    try {
      $form = new Form(get_post($formId));
      $form->setFields($this->io->getFormFields($form));

      if (!$form->isPublished()) {
        throw new Error(__('Form is not published', 'wplf'));
      }


      [$submissions, $totalPages] = $this->io->getFormSubmissions($form, $page);

      $response = new \WP_REST_Response($submissions);
      $response->set_headers(array_merge($response->get_headers(), [
        'X-WP-Total' => count($submissions), // Total number of results in this response
        'X-WP-TotalPages' => $totalPages,
      ]));

      return $response;
    } catch (Error $e) {
      isDebug() && log($e->getMessage());

      return new \WP_REST_Response(['error' => $e->getMessage(), 'data' => $e->getData()], 500);
    }
  }

  public function render($request) {
    $params = $request->get_params();
    $formId = $params['formId'] ?? null;
    $lang = $params['lang'] ?? null;
    $html = $params['content'] ?? null;

    if ($this->polylang && $lang) {
      // var_dump(get_locale()); // en_US by default
      // var_dump(get_available_languages());

      /**
       * What needs to be done: convert $lang (language code) into a locale (en_US) to support most languages.
       *
       * Does it work? Maybe.
       *
       * In my tests, the language is already en_US and it doesn't seem to work most of the time.
       * It works if the form is configured to FINNISH and then overridden here, but a form in ENGLISH doesn't translate.
       */
      $x = switch_to_locale(sanitize_text_field($lang));
      // var_dump($x); // true for success, false for failure. Also false if it didn't change.
    }

    try {
      $form = new Form(get_post($formId));
      $html = $this->core->render($form, ['content' => $html, 'printAdditionalFields' => false], true);

      $response = new \WP_REST_Response(['html' => trim($html), 'form' => $form]);

      return $response;
    } catch (Error $e) {
      isDebug() && log($e->getMessage());

      return new \WP_REST_Response(['error' => $e->getMessage(), 'data' => $e->getData()], 500);
    }
  }

  public function handleSubmission($request) {
    $params = $request->get_params();
    $formId = $params['_formId'] ?? null;

    try {
      $form = new Form(get_post($formId));
      $form->setFields($this->io->getFormFields($form));

      // If there's a _nojs present in the form submission, user doesn't have JavaScript on.
      $useFallback = apply_filters('wplfSetNoJsFallback', isset($params['_nojs']), $form);
      $useFallback = true;

      // You can disable the fallback entirely if you need to.
      $allowFallback = apply_filters('wplfAllowNoJsFallback', true, $form);

      $entries = array_merge($params, $request->get_file_params());
      $submission = $this->io->createSubmission($form, $entries);

      if ($useFallback) {
        if (!$allowFallback) {
          throw new Error(__('JavaScript is required to submit the form. Enable JavaScript before continuing.', 'wplf'));
        }

        $referrer = $submission->getReferrer();
        $url = $referrer['url'];

        /**
         * @see https://github.com/libreform/libreform/issues/10
         */
        $referrerContainsParams = strpos($url, '?');
        $url = $url . ($referrerContainsParams ? '&' : '?') . "wplfAfterSubmissionOfFormId=$formId&wplfSubmissionUuid=$submissionUuid";

        header("Location: $url");
        return;
      }

      $response = new \WP_REST_Response([
        'submission' => $submission,
        'message' => $this->selectors->parse($form->getSuccessMessage(), $form, $submission),
      ]);

      return $response;
    } catch (Error $e) {
      isDebug() && log($e->getMessage());

      if ($useFallback) {
        wp_die(
            '<h1>' . $e->getMessage() . '</h1>' .
            '<p>' . esc_html__('Go back to the previous page and try again.', 'wplf') . '</p>',
            400
        );

        exit;
      }

      return new \WP_REST_Response(['error' => $e->getMessage(), 'data' => $e->getData()], 500);
    }
  }
}
