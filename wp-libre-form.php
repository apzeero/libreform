<?php
/**
 * Plugin name: WP Libre Form
 * Plugin URI: https://github.com/anttiviljami/wp-libre-form
 * Description: HTML form builder for WordPress
 * Version: 0.1
 * Author: @anttiviljami
 * Author URI: https://github.com/anttiviljami/
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl.html
 * Text Domain: wp-libre-form
 *
 * This plugin is a simple html form maker for WordPress.
 */

/** Copyright 2016 Seravo Oy

  This program is free software; you can redistribute it and/or modify
  it under the terms of the GNU General Public License, version 3, as
  published by the Free Software Foundation.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, write to the Free Software
  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

*/

if ( !class_exists('WP_Libre_Form')) :

class WP_Libre_Form {
  public static $instance;

  public static function init() {
    if ( is_null( self::$instance ) ) {
      self::$instance = new WP_Libre_Form();
    }
    return self::$instance;
  }

  private function __construct() {
    require_once 'classes/class-cpt-wplf-form.php';
    require_once 'classes/class-cpt-wplf-submission.php';
    require_once 'inc/wplf-ajax.php';

    // default functionality
    require_once 'inc/wplf-form-actions.php';
    require_once 'inc/wplf-form-validation.php';

    // init our plugin classes
    CPT_WPLF_Form::init();
    CPT_WPLF_Submission::init();

    add_action( 'plugins_loaded', array( $this, 'load_our_textdomain' ) );
  }

  /**
   * Load our plugin textdomain
   */
  public static function load_our_textdomain() {
    load_plugin_textdomain( 'wp-libre-form', false, dirname( plugin_basename(__FILE__) ) . '/lang/' );
  }

  /**
   * Public version of wplf_form
   */
  public function wplf_form( $id , $content = '', $xclass = '' ) {
    return CPT_WPLF_Form::wplf_form($id, $content, $xclass);
  }
}

endif;

// init the plugin
WP_Libre_Form::init();

