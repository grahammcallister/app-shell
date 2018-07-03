(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-bar {\r\n  -webkit-app-region: drag;\r\n  -webkit-user-select: none;\r\n  height: 36px;\r\n  background-color: cornflowerblue;\r\n  padding: none;\r\n  margin: 0px;\r\n}\r\n\r\n.title {\r\n  top: 5px;\r\n  color: white;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size: 10pt;\r\n}\r\n\r\n.title-bar-btns {\r\n\r\n}\r\n\r\n.title-bar-btn {\r\n  -webkit-app-region: no-drag;\r\n  -webkit-user-select: none;\r\n  width: 25px;\r\n  margin: 1px;\r\n}\r\n\r\n.toolbar {\r\n  background-color: lightblue;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title-bar\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"title col-lg-10\">{{ title }}</div>\r\n\r\n      <div class=\"title-bar-btns col-lg-2 p-1 text-right\">\r\n        <button class=\"btn-small title-bar-btn\" (click)=\"openDevTools();\" title=\"Toggle developer tools\">D</button>\r\n        <button class=\"btn-small title-bar-btn\" (click)=\"reload();\" title=\"Reload window\">R</button>\r\n        <button class=\"btn-small title-bar-btn\" (click)=\"minimiseWindow();\" title=\"Minimise window\">-</button>\r\n        <button class=\"btn-small title-bar-btn\" (click)=\"maximiseWindow();\" title=\"Maximise window\">+</button>\r\n        <button class=\"btn-small title-bar-btn\" (click)=\"closeWindow();\" title=\"Close window\">x</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row toolbar\">\r\n            <app-toolbar></app-toolbar>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_electronService) {
        this._electronService = _electronService;
        this.title = this.getAppTitle();
    }
    AppComponent.prototype.getAppTitle = function () {
        if (this._electronService.isElectronApp) {
            return this._electronService.remote.app.getName() + " " + this._electronService.remote.app.getVersion();
        }
        return 'app';
    };
    AppComponent.prototype.closeWindow = function () {
        if (this._electronService.isElectronApp) {
            this._electronService.ipcRenderer.send('close_window');
            this._electronService.remote.getCurrentWindow().close();
        }
    };
    AppComponent.prototype.maximiseWindow = function () {
        var win = this._electronService.remote.getCurrentWindow();
        if (!win.isMaximized() && win.isMaximizable()) {
            win.maximize();
        }
        else {
            win.unmaximize();
        }
    };
    AppComponent.prototype.minimiseWindow = function () {
        this._electronService.remote.getCurrentWindow().minimize();
    };
    AppComponent.prototype.openDevTools = function () {
        this._electronService.remote.getCurrentWindow().webContents.toggleDevTools();
    };
    AppComponent.prototype.reload = function () {
        this._electronService.remote.getCurrentWindow().webContents.reload();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_electron__WEBPACK_IMPORTED_MODULE_1__["ElectronService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _session_session_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session/session.module */ "./src/app/session/session.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                ngx_electron__WEBPACK_IMPORTED_MODULE_3__["NgxElectronModule"],
                _session_session_module__WEBPACK_IMPORTED_MODULE_5__["SessionModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/session/session.module.ts":
/*!*******************************************!*\
  !*** ./src/app/session/session.module.ts ***!
  \*******************************************/
/*! exports provided: SessionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionModule", function() { return SessionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/session/toolbar/toolbar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SessionModule = /** @class */ (function () {
    function SessionModule() {
    }
    SessionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_electron__WEBPACK_IMPORTED_MODULE_4__["NgxElectronModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ],
            declarations: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]],
            exports: [
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"]
            ]
        })
    ], SessionModule);
    return SessionModule;
}());



/***/ }),

/***/ "./src/app/session/toolbar/toolbar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/session/toolbar/toolbar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/session/toolbar/toolbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/session/toolbar/toolbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-1\">\n  <div class=\"row\">\n    <div class=\"col-lg-3\">\n      <button class=\"btn btn-sm\" (click)=\"newWindowClick()\">New</button>\n    </div>\n    <div class=\"col-lg-4\">\n      <small>Windows: {{ windowCount }}</small>\n    </div>\n    <div class=\"col-lg-5\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/session/toolbar/toolbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/session/toolbar/toolbar.component.ts ***!
  \******************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(_electronService, _cdr) {
        this._electronService = _electronService;
        this._cdr = _cdr;
        this.windowCount = this.getWindowCount();
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit Toolbar');
        if (this._electronService.isElectronApp) {
            this._electronService.ipcRenderer.on('window_count', function (sender, args) {
                console.log("Renderer heard window_count " + args);
                _this.setWindowCount(args);
            });
            this._electronService.ipcRenderer.send('window_count');
        }
    };
    ToolbarComponent.prototype.setWindowCount = function (count) {
        this.windowCount = count;
        this._cdr.detectChanges();
    };
    ToolbarComponent.prototype.getWindowCount = function () {
        if (!this.windowCount) {
            return '1';
        }
        this._cdr.detectChanges();
        return this.windowCount;
    };
    ToolbarComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this._electronService.isElectronApp) {
            this._electronService.ipcRenderer.removeListener('window_count', function (count) { return _this.setWindowCount(count); });
        }
    };
    ToolbarComponent.prototype.newWindowClick = function () {
        console.log('New window click');
        if (this._electronService.isElectronApp) {
            this._electronService.ipcRenderer.send('NEW_WINDOW');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", String)
    ], ToolbarComponent.prototype, "windowCount", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/session/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/session/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_electron__WEBPACK_IMPORTED_MODULE_1__["ElectronService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\GitHub\app-shell\angular-shell\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map