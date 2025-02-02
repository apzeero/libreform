(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WPLF"] = factory();
	else
		root["WPLF"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Take data from wp_localize_script and assign it into a module.
 */
/* harmony default export */ __webpack_exports__["a"] = ((function (window) {
  return Object.assign({
    backendUrl: null,
    fetchCredentials: 'same-origin',
    requestHeaders: {
      'X-WP-Nonce': null
    },
    assetsDir: null,
    settings: {
      autoinit: true,
      parseLibreformShortcodeInRestApi: true,
      hasUnfilteredHtml: true,
      debugLevel: 'all'
    },
    post: null,
    i18n: {// This list is bound to change so frequently that there's no point in including any defaults.
    }
  }, window.wplfData);
})(window));

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _global_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var debugLevel = _global_data__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].settings.debugLevel; // Assign the methods we're going to use into a variable, fallbacking to empty functions if they do not exist.

var console = window.console || {
  log() {},

  error() {}

};

var notice = function notice(message) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return debugLevel === 'all' && console.log("WPLF: ".concat(message), params);
};

var error = function error(message) {
  for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    params[_key2 - 1] = arguments[_key2];
  }

  return debugLevel !== 'none' && console.error("WPLF error: ".concat(message), params);
};
/**
 * Fancy console wrapper that lets us keep optional logging on.
 */


/* harmony default export */ __webpack_exports__["a"] = ({
  notice,
  error
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Type guard.
 */
function isElementish(e) {
  return e ? 'getAttribute' in e && 'tagName' in e : false;
}

/* harmony default export */ __webpack_exports__["a"] = (isElementish);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SubmitState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseType; });
var SubmitState;

(function (SubmitState) {
  SubmitState[SubmitState["Unsubmitted"] = 0] = "Unsubmitted";
  SubmitState[SubmitState["Submitting"] = 1] = "Submitting";
  SubmitState[SubmitState["Success"] = 2] = "Success";
  SubmitState[SubmitState["Error"] = 3] = "Error";
})(SubmitState || (SubmitState = {}));

var ResponseType;

(function (ResponseType) {
  ResponseType["GetForm"] = "getForm";
  ResponseType["GetForms"] = "getForms";
  ResponseType["GetSubmissions"] = "getSubmissions";
  ResponseType["GetSubmission"] = "getSubmission";
  ResponseType["DeleteSubmissions"] = "deleteSubmissions";
  ResponseType["RenderForm"] = "renderForm";
  ResponseType["SubmitForm"] = "submitForm";
  ResponseType["ApiError"] = "apiError";
})(ResponseType || (ResponseType = {}));

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ instance; });

// UNUSED EXPORTS: Client

// EXTERNAL MODULE: ./node_modules/abort-controller/browser.js
var browser = __webpack_require__(9);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./assets/scripts/lib/global-data.ts
var global_data = __webpack_require__(1);

// CONCATENATED MODULE: ./assets/scripts/lib/create-request.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/**
 * Abortable fetch-wrapper for making api calls to the WPLF api.
 */

function request(target) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var controller;

  var abort = function abort() {
    if (controller && controller.abort) {
      controller.abort();
    }
  };

  var promise = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res, headers, status, statusText, url, ok, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            controller = new browser_default.a();
            _context.next = 4;
            return fetch(global_data["a" /* default */].backendUrl + target, _objectSpread({
              method: 'GET',
              signal: controller.signal,
              credentials: global_data["a" /* default */].fetchCredentials || 'same-origin',
              headers: global_data["a" /* default */].requestHeaders || {}
            }, options));

          case 4:
            res = _context.sent;
            headers = res.headers, status = res.status, statusText = res.statusText, url = res.url, ok = res.ok;
            _context.next = 8;
            return res.json();

          case 8:
            data = _context.sent;
            controller = null;
            return _context.abrupt("return", {
              headers,
              status,
              statusText,
              url,
              ok,
              data
            });

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            controller = null;

            if (!(_context.t0.name !== 'AbortError')) {
              _context.next = 18;
              break;
            }

            throw _context.t0;

          case 18:
            return _context.abrupt("return", _context.t0);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }))();

  return Object.assign(promise, {
    abort
  });
}
// EXTERNAL MODULE: ./assets/scripts/types.ts
var types = __webpack_require__(4);

// CONCATENATED MODULE: ./assets/scripts/classes/wplf-api.ts
function wplf_api_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function wplf_api_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { wplf_api_ownKeys(Object(source), true).forEach(function (key) { wplf_api_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { wplf_api_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function wplf_api_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function wplf_api_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function wplf_api_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { wplf_api_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { wplf_api_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var wplf_api_Client = /*#__PURE__*/function () {
  function Client() {
    _classCallCheck(this, Client);
  }

  _createClass(Client, [{
    key: "requestRender",
    value: function () {
      var _requestRender = wplf_api_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, content) {
        var body, response, x;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                body = new FormData();
                body.append('content', content);
                body.append('form', id.toString());

                if (global_data["a" /* default */].lang) {
                  body.append('lang', global_data["a" /* default */].lang);
                }

                _context.next = 6;
                return request('/renderForm', {
                  method: 'POST',
                  body
                });

              case 6:
                response = _context.sent;

                if (!response.ok) {// throw new Error('Unable to render form')
                }

                x = wplf_api_objectSpread(wplf_api_objectSpread({}, response), {}, {
                  kind: types["a" /* ResponseType */].RenderForm
                });
                return _context.abrupt("return", x);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function requestRender(_x, _x2) {
        return _requestRender.apply(this, arguments);
      }

      return requestRender;
    }()
  }, {
    key: "requestForm",
    value: function () {
      var _requestForm = wplf_api_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(idOrSlug) {
        var lang, url, response, x;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                lang = '';

                if (global_data["a" /* default */].lang) {
                  lang = "&lang=".concat(global_data["a" /* default */].lang);
                }

                url = "/getForm?form=".concat(idOrSlug).concat(lang);
                _context2.next = 5;
                return request(url, {
                  method: 'GET'
                });

              case 5:
                response = _context2.sent;

                if (!response.ok) {// throw new Error('Unable to get form')
                }

                x = wplf_api_objectSpread(wplf_api_objectSpread({}, response), {}, {
                  kind: types["a" /* ResponseType */].GetForm
                });
                return _context2.abrupt("return", x);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function requestForm(_x3) {
        return _requestForm.apply(this, arguments);
      }

      return requestForm;
    }()
  }, {
    key: "requestForms",
    value: function () {
      var _requestForms = wplf_api_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(page) {
        var lang, url, response, x;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                lang = '';

                if (global_data["a" /* default */].lang) {
                  lang = "&lang=".concat(global_data["a" /* default */].lang);
                }

                url = "/getForms?page=".concat(page).concat(lang);
                _context3.next = 5;
                return request(url, {
                  method: 'GET'
                });

              case 5:
                response = _context3.sent;

                if (!response.ok) {// throw new Error('Unable to get forms')
                }

                x = wplf_api_objectSpread(wplf_api_objectSpread({}, response), {}, {
                  kind: types["a" /* ResponseType */].GetForms
                });
                return _context3.abrupt("return", x);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function requestForms(_x4) {
        return _requestForms.apply(this, arguments);
      }

      return requestForms;
    }()
  }, {
    key: "deleteSubmissions",
    value: function () {
      var _deleteSubmissions = wplf_api_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(formIdOrSlug, submissionUuids) {
        var response, x;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return request("/deleteSubmissions", {
                  method: 'DELETE',
                  headers: wplf_api_objectSpread(wplf_api_objectSpread({}, global_data["a" /* default */].requestHeaders), {}, {
                    'Content-Type': 'application/json'
                  }),
                  body: JSON.stringify({
                    form: formIdOrSlug,
                    submissionUuids
                  })
                });

              case 2:
                response = _context4.sent;

                if (!response.ok) {// throw new Error('Unable to delete submissions')
                }

                x = wplf_api_objectSpread(wplf_api_objectSpread({}, response), {}, {
                  kind: types["a" /* ResponseType */].DeleteSubmissions
                });
                return _context4.abrupt("return", x);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteSubmissions(_x5, _x6) {
        return _deleteSubmissions.apply(this, arguments);
      }

      return deleteSubmissions;
    }()
  }, {
    key: "requestSubmissions",
    value: function () {
      var _requestSubmissions = wplf_api_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(formIdOrSlug, page, limit) {
        var response, x;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return request("/getSubmissions?form=".concat(formIdOrSlug, "&page=").concat(page, "&limit=").concat(limit), {
                  method: 'GET'
                });

              case 2:
                response = _context5.sent;

                if (!response.ok) {// throw new Error('Unable to get submissions')
                }

                x = wplf_api_objectSpread(wplf_api_objectSpread({}, response), {}, {
                  kind: types["a" /* ResponseType */].GetSubmissions
                });
                return _context5.abrupt("return", x);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function requestSubmissions(_x7, _x8, _x9) {
        return _requestSubmissions.apply(this, arguments);
      }

      return requestSubmissions;
    }()
  }, {
    key: "requestSubmission",
    value: function () {
      var _requestSubmission = wplf_api_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(formIdOrSlug, submissionUuid) {
        var response, x;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return request("/getSubmission?form=".concat(formIdOrSlug, "&uuid=").concat(submissionUuid), {
                  method: 'GET'
                });

              case 2:
                response = _context6.sent;

                if (!response.ok) {// throw new Error('Unable to get submission')
                }

                x = wplf_api_objectSpread(wplf_api_objectSpread({}, response), {}, {
                  kind: types["a" /* ResponseType */].GetSubmission
                });
                return _context6.abrupt("return", x);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function requestSubmission(_x10, _x11) {
        return _requestSubmission.apply(this, arguments);
      }

      return requestSubmission;
    }()
  }, {
    key: "sendSubmission",
    value: function () {
      var _sendSubmission = wplf_api_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(body) {
        var response, x;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return request("/submitForm", {
                  method: 'POST',
                  body
                });

              case 2:
                response = _context7.sent;

                if (!response.ok) {// throw new Error('Unable to send submission')
                }

                x = wplf_api_objectSpread(wplf_api_objectSpread({}, response), {}, {
                  kind: types["a" /* ResponseType */].SubmitForm
                });
                return _context7.abrupt("return", x);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function sendSubmission(_x12) {
        return _sendSubmission.apply(this, arguments);
      }

      return sendSubmission;
    }()
  }]);

  return Client;
}();

var instance = new wplf_api_Client();
 // export default instance

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ensureNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isNum; });
/**
 * parseInt/parseFloat wrapper. TypeScript will complain if you try to
 * parseInt a number, this will not.
 */
function ensureNum(x) {
  var float = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (typeof x === 'number') {
    return x;
  } else {
    return float ? parseFloat(x) : parseInt(x, 10);
  }
}
/**
 * Check if string value is numeric.
 */

function isNum(x) {
  if (x && x.length > 0 && x.match(/^[0-9]*$/)) {
    return true;
  }

  return false;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ wplf_tabs_WPLF_Tabs; });

// EXTERNAL MODULE: ./assets/scripts/lib/log.ts
var log = __webpack_require__(2);

// CONCATENATED MODULE: ./assets/scripts/classes/wplf-storage.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * localStorage wrapper, prefixes automatically.
 */

var wplf_storage_WPLF_Storage = /*#__PURE__*/function () {
  function WPLF_Storage() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'wplf';

    _classCallCheck(this, WPLF_Storage);

    this.prefix = prefix;
  }

  _createClass(WPLF_Storage, [{
    key: "get",
    value: function get(key, defaultValue) {
      var data = localStorage.getItem(this.prefix + key);

      if (data !== null) {
        var value = data ? JSON.parse(data) : data;
        return value;
      } else {
        log["a" /* default */].notice("No value found for ".concat(key, ", falling back to default"), defaultValue);
        return defaultValue;
      }
    }
  }, {
    key: "set",
    value: function set(key, value) {
      try {
        localStorage.setItem(this.prefix + key, JSON.stringify(value));
        return true;
      } catch (e) {
        log["a" /* default */].error(e, key, value);
        return false;
      }
    }
  }]);

  return WPLF_Storage;
}();

var instance = new wplf_storage_WPLF_Storage();

// EXTERNAL MODULE: ./assets/scripts/lib/is-elementish.ts
var is_elementish = __webpack_require__(3);

// CONCATENATED MODULE: ./assets/scripts/classes/wplf-tabs.ts
function wplf_tabs_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function wplf_tabs_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function wplf_tabs_createClass(Constructor, protoProps, staticProps) { if (protoProps) wplf_tabs_defineProperties(Constructor.prototype, protoProps); if (staticProps) wplf_tabs_defineProperties(Constructor, staticProps); return Constructor; }




var wplf_tabs_WPLF_Tabs = /*#__PURE__*/function () {
  function WPLF_Tabs(element) {
    var _this = this;

    wplf_tabs_classCallCheck(this, WPLF_Tabs);

    this.remember = false;
    this.name = '';

    this.handleClick = function (e) {
      var target = e.target;

      if (Object(is_elementish["a" /* default */])(target)) {
        var tabName = target.getAttribute('data-target');

        if (tabName) {
          _this.switchTab(tabName);
        } else {
          log["a" /* default */].notice('Unable to switch tab as data-target was empty');
        }
      }

      e.preventDefault();
    };

    if (element instanceof Element !== true) {
      throw new Error('Tab element invalid or missing');
    }

    this.root = element;
    this.name = this.root.getAttribute('data-name') || '';
    this.remember = this.root.getAttribute('data-remember') !== null;
    this.activeTab = this.root.getAttribute('data-default') || '';

    if (!this.name || !this.activeTab) {
      throw new Error('Required attributes are missing');
    }

    if (this.remember) {
      // Get saved value or keep using the default
      this.activeTab = instance.get(this.name, this.activeTab);
    }

    this.refresh();
  }
  /**
   * Attach event listeners and ensure the current tab is visible.
   * Call after adding a tab dynamically.
   */


  wplf_tabs_createClass(WPLF_Tabs, [{
    key: "refresh",
    value: function refresh() {
      var _this2 = this;

      this.getHandles().forEach(function (handle) {
        // It's not possible to add the same event listener twice. If the handle already has the listener, this is a no-op.
        handle.addEventListener('click', _this2.handleClick, {
          passive: false
        });
      });
      this.switchTab(this.activeTab);
    }
    /**
     * Values are not cached as they are practically free to recompute, but
     * might become a memory leak if stored.
     */

  }, {
    key: "getTabs",
    value: function getTabs() {
      return Array.from(this.root.querySelectorAll(".wplf-tabs__tab[data-name=\"".concat(this.name, "\"]")));
    }
    /**
     * See getTabs()
     */

  }, {
    key: "getHandles",
    value: function getHandles() {
      return Array.from(this.root.querySelectorAll(".wplf-tabs__tabSwitcher[data-name=\"".concat(this.name, "\"]")));
    }
    /**
     * Goes through tabs and handles, hiding those which do not match and showing those which do.
     */

  }, {
    key: "switchTab",
    value: function switchTab(name) {
      var tabs = this.getTabs();
      var allHandles = this.getHandles();
      var open = tabs.filter(function (tab) {
        return tab.getAttribute('data-tab') === name;
      });
      var close = tabs.filter(function (tab) {
        return tab.getAttribute('data-tab') !== name;
      });
      open.forEach(function (tab) {
        var tabName = tab.getAttribute('data-tab');
        var handles = allHandles.filter(function (handle) {
          return handle.getAttribute('data-target') === tabName;
        });
        tab.classList.add('active');
        handles.forEach(function (handle) {
          handle.classList.add('active');
        });
      });
      close.forEach(function (tab) {
        var tabName = tab.getAttribute('data-tab');
        var handles = allHandles.filter(function (handle) {
          return handle.getAttribute('data-target') === tabName;
        });
        tab.classList.remove('active');
        handles.forEach(function (handle) {
          handle.classList.remove('active');
        });
      });

      if (this.remember) {
        instance.set(this.name, name);
      }
    }
  }]);

  return WPLF_Tabs;
}();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WPLF_Form; });
/* harmony import */ var _lib_global_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _lib_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wplf_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _lib_ensure_num__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _wplf_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var delay = function delay() {
  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return new Promise(function (resolve) {
    return setTimeout(resolve, amount);
  });
};

var resetForm = function resetForm(wplfForm, params) {
  var form = wplfForm.form; // Necessary cast
  // Since all type guarantees have been thrown out of the window, it's necessary to check that the element indeed has this method.

  if (form.reset) {
    form.reset();
  }
};

var defaultBeforeSendCallback = function defaultBeforeSendCallback(wplfForm, params) {
  if (Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(wplfForm.form.parentNode)) {
    var parentNode = wplfForm.form.parentNode; // Reset error and success messages, if there were any

    var messages = parentNode.querySelectorAll('.wplf-errorMessage, .wplf-successMessage');
    messages.forEach(function (element) {
      if (Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(element.parentNode)) {
        element.parentNode.removeChild(element);
      }
    });
  }
};

var defaultSuccessCallback = function defaultSuccessCallback(wplfForm, params) {
  console.log(params);
  var data = params.data.data;
  var _data$message = data.message,
      message = _data$message === void 0 ? '' : _data$message;
  var div = document.createElement('div');
  div.classList.add('wplf-successMessage');
  div.insertAdjacentHTML('afterbegin', // message.replace(/\n/g, '<br />') // Replacing newlines with <br> elements works only in theory. Leave the data as is.
  message);
  wplfForm.form.insertAdjacentElement('beforebegin', div);
  wplfForm.form.classList.add('submitted');
};

var defaultErrorCallback = function defaultErrorCallback(wplfForm, params) {
  var error = params.error;
  var div = document.createElement('div');
  div.classList.add('wplf-errorMessage');
  div.insertAdjacentHTML('afterbegin', error.message);
  wplfForm.form.insertAdjacentElement('beforebegin', div);
};
/**
 * Each instance represents one form. Most class methods can be chained:
 * form.removeCallback('default', 'beforeSend').addCallback('mycallback', 'beforeSend', ...)
 */


var WPLF_Form = /*#__PURE__*/function () {
  /**
   * Initialize the form
   */
  function WPLF_Form(element) {
    _classCallCheck(this, WPLF_Form);

    this.submitState = _types__WEBPACK_IMPORTED_MODULE_3__[/* SubmitState */ "b"].Unsubmitted;
    this.submitHandler = null;
    this.callbacks = {
      beforeSend: {
        default: defaultBeforeSendCallback
      },
      success: {
        default: defaultSuccessCallback,
        clearOnSuccess: resetForm
      },
      error: {
        default: defaultErrorCallback
      }
    };
    this.tabs = [];
    this.key = '';

    if (element instanceof HTMLElement !== true) {
      throw new Error('Form element invalid or missing');
    }

    this.form = element;
    this.id = Object(_lib_ensure_num__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(element.dataset.formId || 0);
    this.slug = element.dataset.formSlug || '';
    this.key = '_' + Math.random().toString(36).substr(2, 9);
    this.tabs = Array.from(this.form.querySelectorAll('.wplf-tabs')).map(function (el) {
      return new _wplf_tabs__WEBPACK_IMPORTED_MODULE_2__[/* WPLF_Tabs */ "a"](el);
    });
    this.createSubmitHandler();
    this.attachSubmitHandler();
    var fallbackInput = element.querySelector('[name="_nojs"]'); // Remove input that triggers the fallback so we get a JSON response

    if (fallbackInput && Object(_lib_is_elementish__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(fallbackInput.parentNode)) {
      fallbackInput.parentNode.removeChild(fallbackInput);
    }
  }
  /**
   * Expose the default callbacks for 3rd party usage
   */


  _createClass(WPLF_Form, [{
    key: "getDefaultCallbacks",
    value: function getDefaultCallbacks() {
      return {
        beforeSend: {
          default: defaultBeforeSendCallback
        },
        success: {
          default: defaultSuccessCallback,
          clearOnSuccess: resetForm
        },
        error: {
          default: defaultErrorCallback
        }
      };
    }
    /**
     * Add a callback that runs when certain "events" happen
     */

  }, {
    key: "addCallback",
    value: function addCallback(name, type, callback) {
      var callbacks = this.callbacks;
      var beforeSend = callbacks.beforeSend,
          success = callbacks.success,
          error = callbacks.error;

      switch (type) {
        case 'beforeSend':
          {
            beforeSend[name] = callback;
            break;
          }

        case 'success':
          {
            success[name] = callback;
            break;
          }

        case 'error':
          {
            error[name] = callback;
            break;
          }

        default:
          {
            throw new Error("Unknown callback type ".concat(type));
          }
      }

      return this;
    }
    /**
     * Prevent a callback from running
     */

  }, {
    key: "removeCallback",
    value: function removeCallback(name, type) {
      var callbacks = this.callbacks;
      var beforeSend = callbacks.beforeSend,
          success = callbacks.success,
          error = callbacks.error;

      switch (type) {
        case 'beforeSend':
          {
            delete beforeSend[name];
            break;
          }

        case 'success':
          {
            delete success[name];
            break;
          }

        case 'error':
          {
            delete error[name];
            break;
          }

        default:
          {
            throw new Error("Unknown callback ".concat(name, " ").concat(type));
          }
      }

      return this;
    }
    /**
     * Run a callback, passing any provided params to it.
     *
     * Params can be pretty much anything depending on the context, so typing them is impossible.
     */

  }, {
    key: "runCallback",
    value: function runCallback(type) {
      var _this = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callbacks = this.callbacks;
      var beforeSend = callbacks.beforeSend,
          success = callbacks.success,
          error = callbacks.error;

      switch (type) {
        case 'beforeSend':
          {
            Object.values(beforeSend).forEach(function (callback) {
              callback(_this, params);
            });
            break;
          }

        case 'success':
          {
            Object.values(success).forEach(function (callback) {
              callback(_this, params);
            });
            break;
          }

        case 'error':
          {
            Object.values(error).forEach(function (callback) {
              callback(_this, params);
            });
            break;
          }

        default:
          {
            throw new Error("Unknown callback ".concat(name, " ").concat(type));
          }
      }
    }
    /**
     * Attach previously created submitHandler to the form
     */

  }, {
    key: "attachSubmitHandler",
    value: function attachSubmitHandler() {
      if (this.submitHandler) {
        _lib_log__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].notice('Attaching form submit handler');
        this.form.addEventListener('submit', this.submitHandler, {
          passive: false
        });
      } else {
        _lib_log__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].error('Unable to attach submit handler, as it does not exist');
      }

      return this;
    }
    /**
     * Removes submit handler from the form, but keeps it in memory.
     */

  }, {
    key: "removeSubmitHandler",
    value: function removeSubmitHandler() {
      if (this.submitHandler) {
        _lib_log__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].notice('Removing form submit handler');
        this.form.removeEventListener('submit', this.submitHandler);
      } else {
        _lib_log__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].error('Unable to remove submit handler, as it does not exist');
      }

      return this;
    }
  }, {
    key: "createSubmitHandler",
    value: function createSubmitHandler(handler) {
      var _this2 = this;

      if (handler) {
        this.submitHandler = handler;
        return this;
      }

      this.submitHandler = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var form, formData, x, data, ok;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();

                  if (!(_this2.submitState === _types__WEBPACK_IMPORTED_MODULE_3__[/* SubmitState */ "b"].Submitting)) {
                    _context.next = 4;
                    break;
                  }

                  _lib_log__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].notice('Preventing double doubmission');
                  return _context.abrupt("return");

                case 4:
                  _context.prev = 4;
                  form = _this2.form;
                  formData = new FormData(form); // FormData can't be made from Element

                  _lib_global_data__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].lang && formData.append('lang', _lib_global_data__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].lang);
                  _this2.submitState = _types__WEBPACK_IMPORTED_MODULE_3__[/* SubmitState */ "b"].Submitting;
                  form.classList.add('submitting');

                  _this2.runCallback('beforeSend', {
                    formData,
                    form
                  });

                  _context.next = 13;
                  return delay();

                case 13:
                  // DOM manipulations made in beforeSend are not available instantly.
                  formData = new FormData(form); // Now they are, and the FormData object must be recreated to contain possibly new values.

                  _context.next = 16;
                  return _wplf_api__WEBPACK_IMPORTED_MODULE_6__[/* instance */ "a"].sendSubmission(formData);

                case 16:
                  x = _context.sent;
                  data = x.data, ok = x.ok;
                  form.classList.remove('submitting');

                  if (!('error' in data)) {
                    _context.next = 24;
                    break;
                  }

                  _lib_log__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].error('Invalid submission!', x);
                  throw new Error(data.error);

                case 24:
                  if (ok) {
                    _context.next = 28;
                    break;
                  }

                  throw new Error(_lib_global_data__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].i18n.formSubmissionRequestFailed);

                case 28:
                  _this2.submitState = _types__WEBPACK_IMPORTED_MODULE_3__[/* SubmitState */ "b"].Success;

                  _this2.runCallback('success', {
                    data
                  });

                case 30:
                  _context.next = 36;
                  break;

                case 32:
                  _context.prev = 32;
                  _context.t0 = _context["catch"](4);
                  _this2.submitState = _types__WEBPACK_IMPORTED_MODULE_3__[/* SubmitState */ "b"].Error;

                  _this2.runCallback('error', {
                    error: _context.t0
                  });

                case 36:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[4, 32]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();

      return this;
    }
  }]);

  return WPLF_Form;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*globals self, window */


/*eslint-disable @mysticatea/prettier */
const { AbortController, AbortSignal } =
    typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window :
    /* otherwise */ undefined
/*eslint-enable @mysticatea/prettier */

module.exports = AbortController
module.exports.AbortSignal = AbortSignal
module.exports.default = AbortController


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WPLF_Manager; });
/* harmony import */ var _wplf_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _lib_global_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var WPLF_Manager = /*#__PURE__*/function () {
  function WPLF_Manager() {
    _classCallCheck(this, WPLF_Manager);

    this.forms = {};

    if (_lib_global_data__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].settings.autoinit) {
      this.initialize();
    }
  }
  /**
   * Initialize all forms on the page, attaching them to this class.
   */


  _createClass(WPLF_Manager, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      Array.from(document.querySelectorAll('.wplf-form')).map(function (form) {
        _this.attach(form);
      });
    }
  }, {
    key: "findFormsById",
    value: function findFormsById(id) {
      var _this2 = this;

      return Object.keys(this.forms).reduce(function (acc, key) {
        var wplfForm = _this2.forms[key];

        if (!wplfForm) {
          return acc;
        }

        if (id === wplfForm.id) {
          acc.push(wplfForm);
        }

        return acc;
      }, []);
    }
  }, {
    key: "findFormsBySlug",
    value: function findFormsBySlug(slug) {
      var _this3 = this;

      return Object.keys(this.forms).reduce(function (acc, key) {
        var wplfForm = _this3.forms[key];

        if (!wplfForm) {
          return acc;
        }

        if (!wplfForm) {
          return acc;
        }

        if (slug === wplfForm.slug) {
          acc.push(wplfForm);
        }

        return acc;
      }, []);
    }
  }, {
    key: "attach",
    value: function attach(x) {
      if (x instanceof _wplf_form__WEBPACK_IMPORTED_MODULE_0__[/* WPLF_Form */ "a"]) {
        var _wplfForm = x;
        this.forms[_wplfForm.key] = _wplfForm;
        return _wplfForm;
      }

      var element = x;

      if (element instanceof Element !== true) {
        throw new Error(_lib_global_data__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].i18n.unableToAttachWPLF);
      }

      var wplfForm = new _wplf_form__WEBPACK_IMPORTED_MODULE_0__[/* WPLF_Form */ "a"](element);
      this.forms[wplfForm.key] = wplfForm;
      wplfForm.form.removeAttribute('tabindex');
      wplfForm.form.removeAttribute('style');
      return wplfForm;
    }
  }, {
    key: "detach",
    value: function detach(wplfForm) {
      this.forms[wplfForm.key].removeSubmitHandler();
      delete this.forms[wplfForm.key];
      return true;
    }
  }]);

  return WPLF_Manager;
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(11);
module.exports = __webpack_require__(33);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_wplf_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _classes_wplf_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _classes_wplf_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _classes_wplf_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _styles_wplf_frontend_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34);
/* harmony import */ var _styles_wplf_frontend_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_wplf_frontend_scss__WEBPACK_IMPORTED_MODULE_4__);





/**
 * This file is built into an UMD bundle. The default export will
 * be exposed under window.WPLF, if the resulting file is loaded via
 * <script> tag.
 *
 * If using ES modules (like this file), it can be imported as follows;
 *
 * import WPLF from '@libreform/libreform'
 */

/* harmony default export */ __webpack_exports__["default"] = ((function () {
  return {
    api: _classes_wplf_api__WEBPACK_IMPORTED_MODULE_3__[/* instance */ "a"],
    manager: new _classes_wplf_manager__WEBPACK_IMPORTED_MODULE_0__[/* WPLF_Manager */ "a"](),
    WPLF_Tabs: _classes_wplf_tabs__WEBPACK_IMPORTED_MODULE_1__[/* WPLF_Tabs */ "a"],
    WPLF_Form: _classes_wplf_form__WEBPACK_IMPORTED_MODULE_2__[/* WPLF_Form */ "a"]
  };
})());

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ])["default"];
});