(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../src/$$_lazy_route_resource lazy recursive":
/*!***********************************************************!*\
  !*** ../src/$$_lazy_route_resource lazy namespace object ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../src/app/app.component.css":
/*!************************************!*\
  !*** ../src/app/app.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      /* TODO color when changing selection */\r\n      .custom-control-input-female:checked~.custom-control-label::before {\r\n        color: #fff;\r\n        border-color: pink;\r\n        background-color: pink;\r\n    }\r\n      .custom-control-input-male:checked~.custom-control-label::before {\r\n          /* TODO color when changing selection */\r\n          color: #fff;\r\n        border-color: lightblue;\r\n        background-color: lightblue;\r\n    }\r\n      .hidden-xs {\r\n      display: none;\r\n    }\r\n      @media (min-width: 576px) {\r\n      .hidden-xs {\r\n        display: block;\r\n      }\r\n     }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik1BQU0sdUNBQXVDO01BQ3ZDO1FBQ0UsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixzQkFBc0I7SUFDMUI7TUFFQTtVQUNNLHVDQUF1QztVQUN2QyxXQUFXO1FBQ2IsdUJBQXVCO1FBQ3ZCLDJCQUEyQjtJQUMvQjtNQUVBO01BQ0UsYUFBYTtJQUNmO01BRUE7TUFDRTtRQUNFLGNBQWM7TUFDaEI7S0FDRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgICAgLyogVE9ETyBjb2xvciB3aGVuIGNoYW5naW5nIHNlbGVjdGlvbiAqL1xyXG4gICAgICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQtZmVtYWxlOmNoZWNrZWR+LmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcGluaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXN0b20tY29udHJvbC1pbnB1dC1tYWxlOmNoZWNrZWR+LmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gICAgICAgICAgLyogVE9ETyBjb2xvciB3aGVuIGNoYW5naW5nIHNlbGVjdGlvbiAqL1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC5oaWRkZW4teHMge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAuaGlkZGVuLXhzIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgIH1cclxuIl19 */"

/***/ }),

/***/ "../src/app/app.component.html":
/*!*************************************!*\
  !*** ../src/app/app.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <main class=\"mb-4\">\n        <div class=\"container\">\n            <!-- disappear after several seconds -->\n            <div class=\"jumbotron hidden-xs\">\n                <h1 class=\"display-4 display-xs-2\">nowname</h1>\n                <p class=\"lead\">An application to help you choose a firstname for your baby.</p>\n              </div>\n\n            <div class=\"row mb-3 mt-3\">\n                <div class=\"col\">\n                    <form>\n                        <div class=\"form-row\">\n                          <div class=\"col\">\n                              <div class=\"input-group mb-3\">\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter firstname\" aria-label=\"Firstname\" aria-describedby=\"button-addon2\">\n                                  <div class=\"input-group-append\">\n                                    <button class=\"btn btn-outline-primary\" type=\"submit\" id=\"button-addon2\"><i class=\"fa fa-search\"></i>&nbsp;Search</button>\n                                  </div>\n                                </div>\n                          </div>\n                        </div>\n                        <div class=\"form-row\">\n                            <div class=\"col-xs-4\">\n                                <div class=\"custom-control custom-switch\">\n                                <input type=\"checkbox\" class=\"custom-control-input custom-control-input-female\" id=\"customSwitch1\">\n                                <label class=\"custom-control-label\" for=\"customSwitch1\"><i class=\"fa fa-female\" style=\"color: pink\"></i>&nbsp;Female</label>\n                              </div>\n                            </div>\n                            <div class=\"col-xs-4\">\n                                <div class=\"custom-control custom-switch\">\n                                <input type=\"checkbox\" class=\"custom-control-input custom-control-input-male\" id=\"customSwitch2\">\n                                <label class=\"custom-control-label\" for=\"customSwitch2\"><i class=\"fa fa-male\" style=\"color: lightblue\"></i>&nbsp;Male</label>\n                              </div>\n                            </div>\n                            <div class=\"col-xs-4\">\n                                <div class=\"custom-control custom-switch\">\n                                <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch3\">\n                                <label class=\"custom-control-label\" for=\"customSwitch3\"><i class=\"fa fa-star\"></i>&nbsp;Star</label>\n                              </div>\n                            </div>\n                        </div>\n                      </form>\n                </div>\n            </div>\n\n            <!-- displayed after a searched -->\n            <div class=\"row\">\n                <div class=\"col\">\n                    <small id=\"searchCount\" class=\"form-text text-muted\">123 firstnames found</small>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div>\n                        <ul class=\"list-group\">\n                            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                                Cras justo odio\n                                <i class=\"fa fa-star\" style=\"cursor: pointer\"></i>\n                              </li>\n                              <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                                  Cras justo odio\n                                  <i class=\"fa fa-star-o\"></i>\n                                </li>\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                                    Cras justo odio\n                                    <i class=\"fa fa-star-o\"></i>\n                                  </li>\n                                  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                                      Cras justo odio\n                                      <i class=\"fa fa-star-o\"></i>\n                                    </li>\n                              <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                                  Cras justo odio\n                                  <i class=\"fa fa-star-o\"></i>\n                                </li>\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                                    Cras justo odio\n                                    <i class=\"fa fa-star-o\"></i>\n                                  </li>\n                              <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                                  Cras justo odio\n                                  <i class=\"fa fa-star-o\"></i>\n                                </li>\n                                <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                                    Cras justo odio\n                                    <i class=\"fa fa-star-o\"></i>\n                                  </li>\n                                  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                                      Cras justo odio\n                                      <i class=\"fa fa-star-o\"></i>\n                                    </li>\n                                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                                        Cras justo odio\n                                        <i class=\"fa fa-star-o\"></i>\n                                      </li>\n                                                        </ul>\n\n                                                        <nav aria-label=\"Page navigation example\" class=\"mt-3\">\n                                                            <ul class=\"pagination justify-content-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- TODO dynamic display previous, next, disabled -->\n                                                              <li class=\"page-item disabled\">\n                                                                <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Previous</a>\n                                                              </li>\n                                                              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                                                              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                                                              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                                                              <li class=\"page-item\">\n                                                                <a class=\"page-link\" href=\"#\">Next</a>\n                                                              </li>\n                                                            </ul>\n                                                          </nav>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </main>\n\n      <footer>\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-auto mr-auto\">\n\t\t\t\t  <i class=\"fa fa-language\"></i>&nbsp;\n                      <a href=\"/fr\" title=\"Français\">fr&nbsp;</a>\n                      <a href=\"/de\" title=\"Deutsch\">de&nbsp;</a>\n                      <a href=\"/it\" title=\"Italiano\">it&nbsp;</a>\n                      <a href=\"/en\" title=\"English\">en</a>\n                      </div>\n                  <div class=\"col-auto\">\n                      <a href=\"https://github.com/morarupasukaru/nowname\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i>&nbsp;GitHub</a>\n\t\t\t\t  </div>\n              </div>\n          </div>\n      </footer>\n"

/***/ }),

/***/ "../src/app/app.component.ts":
/*!***********************************!*\
  !*** ../src/app/app.component.ts ***!
  \***********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'nowname-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "../src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../src/app/app.module.ts":
/*!********************************!*\
  !*** ../src/app/app.module.ts ***!
  \********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "../src/app/app.component.ts");




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../src/environments/environment.ts":
/*!******************************************!*\
  !*** ../src/environments/environment.ts ***!
  \******************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "../src/main.ts":
/*!**********************!*\
  !*** ../src/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "../src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "../src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ../src/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\data\current-projects\github\nowname\src\main.ts */"../src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map