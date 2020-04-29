function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " \n  <router-outlet></router-outlet>\n                                                                                                                                                                                                                                                                                                                                                                                                                                                        \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <p>dashboard works!</p>\n<h1>Angular 5 HttpClient Demo App</h1>\n  <h2>Foods</h2>\n  <ul>\n    <li *ngFor=\"let food of foods\">{{food.name}}</li>\n  </ul>\n  <input type=\"button\" value=\"show data\" (click)=\"showfood()\"> -->\n  \n  <head>\n  </head>\n  <body>   \n  <div class=\"body\">\n    <div class=\"navbar\">\n    \n        \n        <button class=\"bt\" type=\"button\" ><a href=\"https:localhost:5001/user/login\">Profile</a></button>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n          <button  class=\"bt\" type=\"button\" ><a  href=\"https:localhost:5001/user/register\" >Profile</a></button>\n          \n        \n    <marquee behavior=\"\" direction=\"rtl\">\n      <h3 style=\"color: antiquewhite; float: centre;\">\n        <span class=\"glyphicon glyphicon-car\"></span>\n        <i class=\"fa fa-car\" aria-hidden=\"true\"></i>\n\n        vehicle status tracking and accident detection\n      </h3></marquee> \n       \n   \n        \n    </div>\n        <div class=\"sidebar\">\n          <br><br>\n          <div   class=\"alert1 \"  >\n            <label for=\"vibration\">vibration</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <input type=\"text\" name=\"vib\" id=\"vib\"  value=\"{{foods[0].name}}\" onload=\"showfood()\"><br><br>\n            <label for=\"Temperature\">Temperature</label>&nbsp;\n            <input type=\"text\" name=\"temp\" value=\"{{foods[1].name}}\" id=\"temp\"><br><br>\n        </div>\n        \n          </div>\n         \n        <div class=\"track\" (onload)=\"showfood()\">\n          \n            <button type=\"button\" > get location</button>\n            <!-- <input type=\"hidden\" id=\"custId\" name=\"custId\" value=\"location\"> -->\n            <p>lattiude:{{foods[2].lat}} longitude:{{foods[2].long}}</p>\n            </div>\n       <div class=\"stats\">\n        <h1>Stats for this month</h1>\n        <p>Total trips</p>\n        <div class=\"container\">\n          <div class=\"skills trips\">90%</div>\n          \n        </div>\n        \n        <p>Total distance travelled </p>\n        <div class=\"container\">\n          <div class=\"skills travelled\">80%</div>\n        </div>       \n        <p>Monthly average trips</p>\n        <div class=\"container\">\n          <div class=\"skills average\">60%</div>\n        </div>\n        </div>\n        \n        \n  </div>\n</body>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfound.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfound.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagenotfoundPagenotfoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>pagenotfound works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pagenotfound/pagenotfound.component */
    "./src/app/pagenotfound/pagenotfound.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var appRoutes = [{
      path: '',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
    }, {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__["PagenotfoundComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__["PagenotfoundComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes, {
        enableTracing: true
      } // <-- debugging purposes only
      )],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".body{\n    display: grid;\n      margin: 0;\n      padding: 0;\n      background: #fff;\n      color:rgb(90, 134, 136);\n      font-family: Arial;\n      background-color: black;\n    font-size: 12px;\n    grid-template-columns: 6;\n    grid-auto-rows: 30px;\n  }\n  .navbar {\n    grid-column-start: 1; \n    grid-column-end: 6;\n    grid-row-start: 1;\n    grid-row-end: 5;\n    overflow: hidden;\n    background-color:rgb(30, 70, 97);\n    font-family: Arial, Helvetica, sans-serif;\n   \n   \n  }\n  .scroll {\n    grid-column-start: 1;\n    grid-column-end: 6;\n    grid-row-start: 4;\n    grid-row-end: 6;\n    \n    color: blanchedalmond;\n    font-family: Arial, Helvetica, sans-serif;\n   \n   \n  }\n  .navbar a:hover, .dropdown1:hover .dropbtn1, .dropbtn1:focus {\n    background-color: white;\n  }\n  .navbar a:hover, .dropdown:hover .dropbtn, .dropbtn:focus {\n    background-color: white;\n  }\n  .dropdown1\n  {padding-left: 87%;\n  padding-bottom: 200px;\n  }\n  .dropdown\n  {\n    padding-bottom: 200px;\n  }\n  .show {\n    display: block;\n  }\n  .sidebar{\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 5;\n    grid-row-end: 28;\n    font-size: 16px;\n    color:white;\n    background-color: rgb(11, 35, 51);\n   \n  }\n  .track{\n  \n    grid-column-start: 2;\n    grid-column-end: 6;\n    grid-row-start: 5;\n    grid-row-end: 15;\n    /* text-align: center; */\n    line-height: 75px;\n    font-size: 16px;\n    background-color:rgb(11, 33, 48);\n    color: white;\n  \n  }\n  button\n  {\n    border-radius: 40px 40px 40px 40px ;\n    float:right;\n    background-color: rgb(18, 194, 62);\n    color: black;\n  }\n  .bt \n  {\n    border-radius: 50px ;\n    background-color: rgb(18, 194, 62);\n    border: none;\n    padding: 15px;\n    float: right;\n    color:white;\n   \n  }\n  button a:hover\n  {\n    background-color: rgb(20, 224, 20);\n    border-radius: 90px  ;\n    padding: 15px ;\n    \n  }\n  .stats{\n    grid-column-start: 2;\n    grid-column-end: 6;\n    grid-row-start: 15;\n    grid-row-end: 28;\n    text-align: center;\n    color:white;\n    font-size: 20px;\n    background-color:rgb(12, 38, 56);\n  }\n  /* Container for skill bars */\n  .container {\n    width: 100%; /* Full width */\n    background-color: #ddd; /* Grey background */\n  }\n  .skills {\n    text-align: right; /* Right-align text */\n    padding-top: 10px; /* Add top padding */\n    padding-bottom: 10px; /* Add bottom padding */\n    color: white; /* White text color */\n  }\n  .trips {width: 90%; background-color: #4CAF50;}\n  /* Green */\n  .travelled {width: 80%; background-color: red;}\n  /* Red */\n  .average {width: 60%; background-color: rgb(248, 163, 4);}\n  /* Dark yellow */\n  /* Dropdown Content (Hidden by Default) */\n  /* Links inside the dropdown */\n  /* Change color of dropdown links on hover */\n  .dropdown-content\n  {\n    display:none;\n    position:absolute;\n    z-index: 9000;\n    font-size: 16px;\n  }\n  /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */\n  .show {display:block;}\n  #loader {\n      -webkit-transition: all 0.3s ease-in-out;\n      transition: all 0.3s ease-in-out;\n      opacity: 1;\n      visibility: visible;\n      position: absolute;\n      height: 100vh;\n      width: 100%;\n      background: #fff;\n      z-index:-1;\n    }\n  #loader.fadeOut {\n      opacity: 0;\n      visibility: hidden;\n    }\n  .alert1{\n      border-color:white;\n      border-radius: 25px;\n      background-color: rgb(19, 15, 71);\n      opacity: 100%;\n      margin:45px;\n      color: white;\n      padding-top: 25px;\n      padding-left: 50px;\n    }\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtNQUNYLFNBQVM7TUFDVCxVQUFVO01BQ1YsZ0JBQWdCO01BQ2hCLHVCQUF1QjtNQUN2QixrQkFBa0I7TUFDbEIsdUJBQXVCO0lBQ3pCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyx5Q0FBeUM7OztFQUczQztFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTs7SUFFZixxQkFBcUI7SUFDckIseUNBQXlDOzs7RUFHM0M7RUFFQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7R0FDQyxpQkFBaUI7RUFDbEIscUJBQXFCO0VBQ3JCO0VBQ0E7O0lBRUUscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQ0FBaUM7O0VBRW5DO0VBQ0E7O0lBRUUsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxZQUFZOztFQUVkO0VBQ0E7O0lBRUUsbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsWUFBWTtFQUNkO0VBQ0E7O0lBRUUsb0JBQW9CO0lBQ3BCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXOztFQUViO0VBQ0E7O0lBRUUsa0NBQWtDO0lBQ2xDLHFCQUFxQjtJQUNyQixjQUFjOztFQUVoQjtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdDQUFnQztFQUNsQztFQUNBLDZCQUE2QjtFQUMvQjtJQUNJLFdBQVcsRUFBRSxlQUFlO0lBQzVCLHNCQUFzQixFQUFFLG9CQUFvQjtFQUM5QztFQUVBO0lBQ0UsaUJBQWlCLEVBQUUscUJBQXFCO0lBQ3hDLGlCQUFpQixFQUFFLG9CQUFvQjtJQUN2QyxvQkFBb0IsRUFBRSx1QkFBdUI7SUFDN0MsWUFBWSxFQUFFLHFCQUFxQjtFQUNyQztFQUVBLFFBQVEsVUFBVSxFQUFFLHlCQUF5QixDQUFDO0VBQUUsVUFBVTtFQUMxRCxZQUFZLFVBQVUsRUFBRSxxQkFBcUIsQ0FBQztFQUFFLFFBQVE7RUFDeEQsVUFBVSxVQUFVLEVBQUUsa0NBQWtDLENBQUM7RUFBRSxnQkFBZ0I7RUFLM0UseUNBQXlDO0VBR3pDLDhCQUE4QjtFQUc5Qiw0Q0FBNEM7RUFFNUM7O0lBRUUsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZUFBZTtFQUNqQjtFQUNBLHFJQUFxSTtFQUNySSxPQUFPLGFBQWEsQ0FBQztFQUNyQjtNQUNJLHdDQUFnQztNQUFoQyxnQ0FBZ0M7TUFDaEMsVUFBVTtNQUNWLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsVUFBVTtJQUNaO0VBRUE7TUFDRSxVQUFVO01BQ1Ysa0JBQWtCO0lBQ3BCO0VBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGlDQUFpQztNQUNqQyxhQUFhO01BQ2IsV0FBVztNQUNYLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsa0JBQWtCO0lBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgY29sb3I6cmdiKDkwLCAxMzQsIDEzNik7XG4gICAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2O1xuICAgIGdyaWQtYXV0by1yb3dzOiAzMHB4O1xuICB9XG4gIC5uYXZiYXIge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxOyBcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDY7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgZ3JpZC1yb3ctZW5kOiA1O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMzAsIDcwLCA5Nyk7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICBcbiAgIFxuICB9XG4gIC5zY3JvbGwge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogNjtcbiAgICBncmlkLXJvdy1zdGFydDogNDtcbiAgICBncmlkLXJvdy1lbmQ6IDY7XG4gICAgXG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgXG4gICBcbiAgfVxuICBcbiAgLm5hdmJhciBhOmhvdmVyLCAuZHJvcGRvd24xOmhvdmVyIC5kcm9wYnRuMSwgLmRyb3BidG4xOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICAubmF2YmFyIGE6aG92ZXIsIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biwgLmRyb3BidG46Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIC5kcm9wZG93bjFcbiAge3BhZGRpbmctbGVmdDogODclO1xuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG4gIH1cbiAgLmRyb3Bkb3duXG4gIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG4gIH1cbiAgLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5zaWRlYmFye1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICBncmlkLXJvdy1zdGFydDogNTtcbiAgICBncmlkLXJvdy1lbmQ6IDI4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsIDM1LCA1MSk7XG4gICBcbiAgfVxuICAudHJhY2t7XG4gIFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtY29sdW1uLWVuZDogNjtcbiAgICBncmlkLXJvdy1zdGFydDogNTtcbiAgICBncmlkLXJvdy1lbmQ6IDE1O1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICBsaW5lLWhlaWdodDogNzVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTEsIDMzLCA0OCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICBcbiAgfVxuICBidXR0b25cbiAge1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHggNDBweCA0MHB4IDQwcHggO1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTk0LCA2Mik7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIC5idCBcbiAge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTk0LCA2Mik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOndoaXRlO1xuICAgXG4gIH1cbiAgYnV0dG9uIGE6aG92ZXJcbiAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMjI0LCAyMCk7XG4gICAgYm9yZGVyLXJhZGl1czogOTBweCAgO1xuICAgIHBhZGRpbmc6IDE1cHggO1xuICAgIFxuICB9XG4gIC5zdGF0c3tcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDY7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE1O1xuICAgIGdyaWQtcm93LWVuZDogMjg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMiwgMzgsIDU2KTtcbiAgfVxuICAvKiBDb250YWluZXIgZm9yIHNraWxsIGJhcnMgKi9cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDsgLyogR3JleSBiYWNrZ3JvdW5kICovXG4gIH1cbiAgXG4gIC5za2lsbHMge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0OyAvKiBSaWdodC1hbGlnbiB0ZXh0ICovXG4gICAgcGFkZGluZy10b3A6IDEwcHg7IC8qIEFkZCB0b3AgcGFkZGluZyAqL1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4OyAvKiBBZGQgYm90dG9tIHBhZGRpbmcgKi9cbiAgICBjb2xvcjogd2hpdGU7IC8qIFdoaXRlIHRleHQgY29sb3IgKi9cbiAgfVxuICBcbiAgLnRyaXBzIHt3aWR0aDogOTAlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO30gLyogR3JlZW4gKi9cbiAgLnRyYXZlbGxlZCB7d2lkdGg6IDgwJTsgYmFja2dyb3VuZC1jb2xvcjogcmVkO30gLyogUmVkICovXG4gIC5hdmVyYWdlIHt3aWR0aDogNjAlOyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxNjMsIDQpO30gLyogRGFyayB5ZWxsb3cgKi9cbiAgXG4gXG4gIFxuICBcbiAgLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXG4gIFxuICBcbiAgLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuICBcbiAgXG4gIC8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnRcbiAge1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5MDAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAvKiBTaG93IHRoZSBkcm9wZG93biBtZW51ICh1c2UgSlMgdG8gYWRkIHRoaXMgY2xhc3MgdG8gdGhlIC5kcm9wZG93bi1jb250ZW50IGNvbnRhaW5lciB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgZHJvcGRvd24gYnV0dG9uKSAqL1xuICAuc2hvdyB7ZGlzcGxheTpibG9jazt9XG4gICNsb2FkZXIge1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICB6LWluZGV4Oi0xO1xuICAgIH1cbiAgXG4gICAgI2xvYWRlci5mYWRlT3V0IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICAgIC5hbGVydDF7XG4gICAgICBib3JkZXItY29sb3I6d2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5LCAxNSwgNzEpO1xuICAgICAgb3BhY2l0eTogMTAwJTtcbiAgICAgIG1hcmdpbjo0NXB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgfVxuICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _enrollment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../enrollment.service */
    "./src/app/enrollment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); //declare var $:any;


    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(_enrollmentService, router) {
        _classCallCheck(this, DashboardComponent);

        this._enrollmentService = _enrollmentService;
        this.router = router;
        this.errorMsg = '';
      }

      _createClass(DashboardComponent, [{
        key: "showfood",
        value: function showfood() {
          var _this = this;

          this._enrollmentService.getFoods().subscribe(function (data) {
            _this.foods = data;
          }, function (err) {
            return console.error(err);
          }, function () {
            return console.log('done loading foods');
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showfood();
          this.alertfun();
        }
      }, {
        key: "alertfun",
        value: function alertfun() {//$("#myDropdown").css({"display": "block","color":"blue"});
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.router.navigate(['profile']); //where it shpuld go after register
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _enrollment_service__WEBPACK_IMPORTED_MODULE_2__["EnrollmentService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/enrollment.service.ts":
  /*!***************************************!*\
    !*** ./src/app/enrollment.service.ts ***!
    \***************************************/

  /*! exports provided: EnrollmentService */

  /***/
  function srcAppEnrollmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnrollmentService", function () {
      return EnrollmentService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var EnrollmentService =
    /*#__PURE__*/
    function () {
      // _url2='http://localhost:5001';
      function EnrollmentService(_http) {
        _classCallCheck(this, EnrollmentService);

        this._http = _http;
        this._url = 'http://localhost:3000/';
      }

      _createClass(EnrollmentService, [{
        key: "enroll",
        value: function enroll(user) {
          return this._http.post(this._url + 'enroll', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        }
      }, {
        key: "login",
        value: function login(luser) {
          return this._http.post(this._url + 'login', luser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
        }
      }, {
        key: "getFoods",
        value: function getFoods() {
          return this._http.get(this._url + 'dashboard'); //console.log('ok');
          // return this._http.get(this._url2)
        }
      }, {
        key: "getloc",
        value: function getloc() {
          return this._http.get(this._url + 'dashboard'); //console.log('ok');
        }
      }, {
        key: "errorHandler",
        value: function errorHandler(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        }
      }]);

      return EnrollmentService;
    }();

    EnrollmentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    EnrollmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EnrollmentService);
    /***/
  },

  /***/
  "./src/app/pagenotfound/pagenotfound.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagenotfoundPagenotfoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pagenotfound/pagenotfound.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
    \********************************************************/

  /*! exports provided: PagenotfoundComponent */

  /***/
  function srcAppPagenotfoundPagenotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function () {
      return PagenotfoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PagenotfoundComponent =
    /*#__PURE__*/
    function () {
      function PagenotfoundComponent() {
        _classCallCheck(this, PagenotfoundComponent);
      }

      _createClass(PagenotfoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PagenotfoundComponent;
    }();

    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pagenotfound',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pagenotfound.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfound.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pagenotfound.component.css */
      "./src/app/pagenotfound/pagenotfound.component.css")).default]
    })], PagenotfoundComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/devendra/Videos/node_passport_login-master/client/vehicle/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map