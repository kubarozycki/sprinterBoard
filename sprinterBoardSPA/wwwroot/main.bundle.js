webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/account/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_registration_component__ = __webpack_require__("../../../../../src/app/account/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_service__ = __webpack_require__("../../../../../src/app/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/account/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AccountModule = (function () {
    function AccountModule() {
    }
    return AccountModule;
}());
AccountModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__registration_registration_component__["a" /* RegistrationComponent */], __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__account_service__["a" /* AccountService */]]
    })
], AccountModule);

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ "../../../../../src/app/account/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + 'account';
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    AccountService.prototype.register = function (user) {
        var body = JSON.stringify({ UserName: user.email, Password: user.password });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url, body, options)
            .map(function (res) { return true; })
            .catch((function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw("server error"); }));
    };
    return AccountService;
}());
AccountService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AccountService);

var _a;
//# sourceMappingURL=account.service.js.map

/***/ }),

/***/ "../../../../../src/app/account/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-block\">\r\n        <h4>Login</h4>\r\n\r\n        <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input id=\"email\" type=\"email\" required name=\"email\" [ngModel]=\"credentials.email\" class=\"form-control\"\r\n                   placeholder=\"Email\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input id=\"password\" name=\"password\" type=\"password\" required class=\"form-control\" placeholder=\"Password\" [ngModel]=\"credentials.password\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Login</button>\r\n            <button routerLink=\"/account/registration\" class=\"btn btn-primary\">Register</button>\r\n          </div>\r\n        </form>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/account/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_credentials__ = __webpack_require__("../../../../../src/app/model/credentials.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.credentials = new __WEBPACK_IMPORTED_MODULE_3__model_credentials__["a" /* Credentials */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        if (form.valid) {
            this.authService.login(form.value).subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/tasks']);
                }
            }, function (error) { return console.log("login err"); });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/account/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-md-6\">\r\n\r\n\t\t<div class=\"card\">\r\n\r\n\t\t\t<div class=\"card-header bg-white\">\r\n\t\t\t\t<h4 class=\"card-title\">Create your account</h4>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"card-block\">\r\n\r\n\t\t\t\t<form #registerForm=\"ngForm\" (ngSubmit)=\"registerUser()\">\r\n\r\n          <div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"email\">Email</label>\r\n\t\t\t\t\t\t<input id=\"email\" type=\"text\" required name=\"email\"  class=\"form-control\" placeholder=\"Email\"   [(ngModel)]=\"user.email\">\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"password\">Password</label>\r\n\t\t\t\t\t\t<input id=\"password\" type=\"password\" required name=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"user.password\">\r\n\t\t\t\t\t</div>\r\n         \r\n          \r\n  \r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"user.invalid\">Sign Up</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/account/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_service__ = __webpack_require__("../../../../../src/app/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationComponent = (function () {
    function RegistrationComponent(accountService) {
        this.accountService = accountService;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__model_user__["a" /* User */]();
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.registerUser = function () {
        console.log(this.user);
        this.accountService.register(this.user).subscribe(function (response) {
            console.log("registered");
        }, function (error) {
            console.log(error);
        });
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/account/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/registration/registration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */]) === "function" && _a || Object])
], RegistrationComponent);

var _a;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* The Overlay (background) */\r\n.overlay {\r\n    /* Height & width depends on how you want to reveal the overlay (see JS below) */    \r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    background-color: rgb(0,0,0); /* Black fallback color */\r\n    background-color: rgba(0,0,0, 0.9); /* Black w/opacity */\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */\r\n}\r\n\r\n/* Position the content inside the overlay */\r\n.overlay-content {\r\n    position: relative;\r\n    top: 25%; /* 25% from the top */\r\n    width: 100%; /* 100% width */\r\n    text-align: center; /* Centered text/links */\r\n    margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */\r\n}\r\n\r\n/* The navigation links inside the overlay */\r\n.overlay a {\r\n    padding: 8px;\r\n    text-decoration: none;\r\n    font-size: 36px;\r\n    color: #818181;\r\n    display: block; /* Display block instead of inline */\r\n    transition: 0.3s; /* Transition effects on hover (color) */\r\n}\r\n\r\n/* When you mouse over the navigation links, change their color */\r\n.overlay a:hover, .overlay a:focus {\r\n    color: #f1f1f1;\r\n}\r\n\r\n/* Position the close button (top right corner) */\r\n.overlay .closebtn {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 45px;\r\n    font-size: 60px;\r\n}\r\n\r\n/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */\r\n@media screen and (max-height: 450px) {\r\n    .overlay a {font-size: 20px}\r\n    .overlay .closebtn {\r\n        font-size: 40px;\r\n        top: 15px;\r\n        right: 35px;\r\n    }\r\n}\r\n\r\n.bar1, .bar2, .bar3 {\r\n    width: 100%;\r\n    height: 5px;\r\n    background-color: #333;\r\n    margin: 6px 0;\r\n    transition: 0.4s;\r\n}\r\n\r\n.change .bar1 {\r\n    /*-webkit-transform: rotate(-45deg) translate(-9px, 6px) ;\r\n    transform: rotate(-45deg) translate(-9px, 6px) ;*/\r\n}\r\n\r\n.change .bar2 {\r\n  /*opacity: 0;*/\r\n\r\n}\r\n\r\n.change .bar3 {\r\n    /*-webkit-transform: rotate(45deg) translate(-8px, -8px) ;*/\r\n    /*transform: rotate(45deg) translate(-8px, -8px) ;*/\r\n}\r\n\r\n.borderless td, .borderless th {\r\n  border: none;\r\n}\r\n\r\n.taskheader{\r\n  color:ghostwhite;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <nav id=\"tasksHeader\" class=\"navbar navbar-inverse navbar-fixed-top\" *ngIf=\"isOnTasksComponent\" style=\"height:5%;\">\r\n      <div class=\"container\" style=\"width:100%;height:100%;\">\r\n        <table class=\"table borderless\">\r\n          <colgroup>\r\n            <col style=\"width:33%;\">\r\n            <col style=\"width:33%;\">\r\n            <col style=\"width:33%;\">\r\n          </colgroup>\r\n          <thead>\r\n            <tr>\r\n              <th style=\"text-align:center;\">\r\n                <h4 class=\"taskheader\">To do</h4>\r\n              </th>\r\n              <th style=\"text-align:center;\">\r\n                <h4 class=\"taskheader\">In progress</h4>\r\n              </th>\r\n              <th style=\"text-align:center;\">\r\n                <h4 class=\"taskheader\">Done</h4>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n        </table>\r\n      </div>\r\n    </nav>\r\n    <nav class=\"navbar navbar-inverse navbar-fixed-bottom\">\r\n      <div class=\"container\" style=\"width:100%;height:100%;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\"></div>\r\n          <div id=\"showMenuBtn\" class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\" style=\"display: inline-block;\r\n                        cursor: pointer;\" (click)=\"toogle()\">\r\n            <div class=\"bar1\"></div>\r\n            <div class=\"bar2\"></div>\r\n            <div class=\"bar3\"></div>\r\n          </div>\r\n          <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\"></div>\r\n        </div>\r\n      </div>\r\n\r\n    </nav>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div id=\"myNav\" class=\"overlay\">\r\n\r\n\r\n\r\n      <!-- Overlay content -->\r\n      <div class=\"overlay-content\">\r\n        <a routerLink=\"/tasks/taskslist\" (click)=\"closeNav()\">Board</a>\r\n        <a routerLink=\"/tasks/taskdetails\" (click)=\"closeNav()\">Add task</a>\r\n        <a routerLink=\"/account/login\" (click)=\"closeNav()\">Login</a>\r\n        <a routerLink=\"/account/registration\" (click)=\"closeNav()\">Register</a>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div style=\"margin-top:50px;\" class=\"container\">\r\n      <router-outlet (activate)='onActivateComponent($event)'></router-outlet>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_tasks_task_list_task_list_component__ = __webpack_require__("../../../../../src/app/tasks/task-list/task-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.isOnTasksComponent = false;
        this.title = 'app';
    }
    AppComponent.prototype.openNav = function () {
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("showMenuBtn").classList.toggle("change");
    };
    AppComponent.prototype.closeNav = function () {
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("showMenuBtn").classList.toggle("change");
    };
    AppComponent.prototype.onActivateComponent = function (event) {
        if (event.constructor == __WEBPACK_IMPORTED_MODULE_1__app_tasks_task_list_task_list_component__["a" /* TaskListComponent */]) {
            this.isOnTasksComponent = true;
        }
        else {
            this.isOnTasksComponent = false;
        }
    };
    AppComponent.prototype.toogle = function () {
        var width = document.getElementById("myNav").style.width;
        console.log(width);
        if (width == '100%') {
            this.closeNav();
        }
        else {
            this.openNav();
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tasks_tasks_module__ = __webpack_require__("../../../../../src/app/tasks/tasks.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_account_module__ = __webpack_require__("../../../../../src/app/account/account.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import {AuthGuard} from './auth/auth.guard';

//import { AuthService } from './auth/auth.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_6__tasks_tasks_module__["a" /* TasksModule */],
            __WEBPACK_IMPORTED_MODULE_7__account_account_module__["a" /* AccountModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdGridListModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdCardModule */]],
        //providers:[AuthGuard,AuthService],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_task_details_task_details_component__ = __webpack_require__("../../../../../src/app/tasks/task-details/task-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_task_list_task_list_component__ = __webpack_require__("../../../../../src/app/tasks/task-list/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_registration_registration_component__ = __webpack_require__("../../../../../src/app/account/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_login_login_component__ = __webpack_require__("../../../../../src/app/account/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: "", redirectTo: "/tasks", pathMatch: "full" },
    {
        path: 'tasks', canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard__["a" /* AuthGuard */]], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__tasks_task_list_task_list_component__["a" /* TaskListComponent */] },
            { path: 'taskdetails', component: __WEBPACK_IMPORTED_MODULE_2__tasks_task_details_task_details_component__["a" /* TaskDetailsComponent */] },
            { path: 'taskdetails/:id', component: __WEBPACK_IMPORTED_MODULE_2__tasks_task_details_task_details_component__["a" /* TaskDetailsComponent */] },
            { path: 'taskslist', component: __WEBPACK_IMPORTED_MODULE_3__tasks_task_list_task_list_component__["a" /* TaskListComponent */] }
        ]
    },
    {
        path: 'account', children: [
            { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_4__account_registration_registration_component__["a" /* RegistrationComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__account_login_login_component__["a" /* LoginComponent */] }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__["a" /* AuthService */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.checkLogin(state.url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.loggedIn) {
            return true;
        }
        else if (localStorage.getItem('auth_token')) {
            return true;
        }
        this.authService.RedirectUrl = url;
        this.router.navigate(['/account/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].url + "auth";
        this.isLoggedIn = false;
    }
    Object.defineProperty(AuthService.prototype, "loggedIn", {
        get: function () {
            return this.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (user) {
        var _this = this;
        var body = JSON.stringify({ UserName: user.email, Password: user.password });
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url, body, options)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            localStorage.setItem('auth_token', res.token);
            _this.isLoggedIn = true;
            return true;
        })
            .catch((function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("error"); }));
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/model/credentials.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Credentials; });
var Credentials = (function () {
    function Credentials() {
    }
    return Credentials;
}());

//# sourceMappingURL=credentials.js.map

/***/ }),

/***/ "../../../../../src/app/model/task.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task(id, name, description) {
        if (id === void 0) { id = null; }
        if (name === void 0) { name = ""; }
        if (description === void 0) { description = ""; }
        this.Id = id;
        this.Name = name;
        this.Description = description;
    }
    return Task;
}());

//# sourceMappingURL=task.js.map

/***/ }),

/***/ "../../../../../src/app/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(email, password) {
        if (email === void 0) { email = ""; }
        if (password === void 0) { password = ""; }
        this.email = email;
        this.password = password;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/task-details/task-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/task-details/task-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\r\n  <form #detailsForm=\"ngForm\" (submit)=\"save()\" >\r\n     <div class = \"form-group\">\r\n        <label for = \"name\">Name</label>\r\n        <input type = \"text\" maxlength=\"\" class = \"form-control\" id = \"name\" required\r\n           [(ngModel)] = \"model.Name\" name = \"name\">\r\n     </div>\r\n     \r\n     <div class = \"form-group\">\r\n        <label for = \"description\">Description</label>\r\n        <textarea rows=\"3\" maxlength=\"200\" type = \"text\" class = \"form-control\" id = \"description\"\r\n           [(ngModel)] = \"model.Description\" name = \"description\">\r\n        </textarea>\r\n     </div>\r\n     <div class=\"form-group\">\r\n        <button  type=\"submit\" class=\"btn btn-primary\">\r\n            Save\r\n        </button>\r\n        <a (click)=\"cancel()\"  class=\"btn btn-primary\" [routerLink]=\"['/tasks/']\" >\r\n            Cancel\r\n        </a>\r\n     </div>\r\n  </form>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/tasks/task-details/task-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasks_service__ = __webpack_require__("../../../../../src/app/tasks/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_task__ = __webpack_require__("../../../../../src/app/model/task.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskDetailsComponent = (function () {
    function TaskDetailsComponent(taskService, router, route) {
        this.taskService = taskService;
        this.router = router;
        this.route = route;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__model_task__["a" /* Task */]();
        console.log("constructor");
    }
    TaskDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.taskService.getTask(params["id"]).subscribe(function (response) {
                _this.model = new __WEBPACK_IMPORTED_MODULE_3__model_task__["a" /* Task */](response["id"], response["name"], response["description"]);
            }, function (err) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('/account/login');
                }
            });
        });
    };
    TaskDetailsComponent.prototype.save = function () {
        var _this = this;
        if (this.model.Id == null) {
            this.taskService.addTask(this.model).subscribe(function (response) {
                _this.router.navigateByUrl('/tasks');
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.taskService.updateTask(this.model).subscribe(function (response) {
                _this.router.navigateByUrl('/tasks');
            }, function (err) {
                console.log(err);
            });
        }
    };
    TaskDetailsComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/tasks');
    };
    return TaskDetailsComponent;
}());
TaskDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-task-details',
        template: __webpack_require__("../../../../../src/app/tasks/task-details/task-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tasks/task-details/task-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tasks_service__["a" /* TasksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], TaskDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=task-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/task-list/task-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".previous {\r\n    background-color: #f1f1f1;\r\n    color: black;\r\n}\r\n\r\n.next {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n}\r\n\r\n.round {\r\n    border-radius: 50%;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    padding: 8px 16px;\r\n}\r\n\r\na:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/task-list/task-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table borderless\">\r\n    <colgroup>\r\n      <col style=\"width:33%;\">\r\n      <col style=\"width:33%;\">\r\n      <col style=\"width:33%;\">\r\n    </colgroup>\r\n    <tbody>\r\n      <tr *ngFor=\"let task of tasks\">\r\n        <td>\r\n          <div *ngIf=\"task.toDo\"  class=\"panel panel-info\" style=\"height:100%;width:100%;\">\r\n            <div class=\"panel-heading\">{{task.toDo.name}}</div>\r\n            <div class=\"panel-body\">\r\n                  <img [routerLink]=\"['/tasks/taskdetails', task.toDo.id]\" \r\n                  class=\"img-responsive center-block\" \r\n                  src=\"../assets/images/Menu.ico\" style=\"width:32px;height:32px;\">\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n              <div class=\"row\">\r\n                <div class=\"pull-right\">\r\n                  <a (click)=\"moveRight(task.toDo)\"  class=\"next round\">&#8250;</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      <td >\r\n        <div *ngIf=\"task.inProgress\" class=\"panel panel-warning\" style=\"height:100%;width:100%;\">\r\n          <div class=\"panel-heading\">{{task.inProgress.name}}</div>\r\n          <div class=\"panel-body\">\r\n              <img [routerLink]=\"['/tasks/taskdetails', task.inProgress.id]\"\r\n              class=\"img-responsive center-block\" src=\"../assets/images/Menu.ico\" style=\"width:32px;height:32px;\">\r\n          </div>\r\n          <div class=\"panel-footer\">\r\n            <div class=\"row\">\r\n              <div class=\"pull-left\">\r\n                <a (click)=\"moveLeft(task.inProgress)\"  class=\"next round\">&#8249;</a>\r\n              </div>\r\n              <div class=\"pull-right\" >\r\n                <a (click)=\"moveRight(task.inProgress)\"  class=\"next round\">&#8250;</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </td>\r\n      <td>\r\n        <!--TODO wywalic te hrefy!!!-->\r\n        <div *ngIf=\"task.done\" class=\"panel panel-success\" style=\"height:100%;width:100%;\">\r\n          <div class=\"panel-heading\">{{task.done.name}}</div>\r\n          <div class=\"panel-body\">\r\n            <img [routerLink]=\"['/tasks/taskdetails', task.done.id]\"\r\n                 class=\"img-responsive center-block\"\r\n                 src=\"../assets/images/Menu.ico\"\r\n                 style=\"width:32px;height:32px;\">\r\n          </div>\r\n          <div class=\"panel-footer\">\r\n            <div class=\"row\">\r\n              <div class=\"pull-left\">\r\n                <a (click)=\"moveLeft(task.done)\" class=\"next round\">&#8249;</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </td>\r\n        \r\n      </tr>\r\n      \r\n    </tbody>\r\n  </table>\r\n"

/***/ }),

/***/ "../../../../../src/app/tasks/task-list/task-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasks_service__ = __webpack_require__("../../../../../src/app/tasks/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskListComponent = (function () {
    function TaskListComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.getTasksList();
    };
    TaskListComponent.prototype.getTasksList = function () {
        var _this = this;
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        }, function (err) {
            if (err.status === 401) {
                _this.router.navigateByUrl('/account/login');
            }
        });
    };
    TaskListComponent.prototype.moveRight = function (task) {
        var _this = this;
        console.log(task);
        task.status++;
        this.taskService.updateTask(task).subscribe(function (task) {
            _this.getTasksList();
        }, function (err) {
            if (err.status === 401) {
                _this.router.navigateByUrl('/account/login');
            }
        });
    };
    TaskListComponent.prototype.moveLeft = function (task) {
        var _this = this;
        console.log(task);
        task.status--;
        this.taskService.updateTask(task).subscribe(function (task) {
            _this.getTasksList();
        }, function (err) {
            if (err.status === 401) {
                _this.router.navigateByUrl('/account/login');
            }
        });
    };
    return TaskListComponent;
}());
TaskListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-task-list',
        template: __webpack_require__("../../../../../src/app/tasks/task-list/task-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tasks/task-list/task-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tasks_service__["a" /* TasksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], TaskListComponent);

var _a, _b;
//# sourceMappingURL=task-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_details_task_details_component__ = __webpack_require__("../../../../../src/app/tasks/task-details/task-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_list_task_list_component__ = __webpack_require__("../../../../../src/app/tasks/task-list/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tasks_service__ = __webpack_require__("../../../../../src/app/tasks/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { AuthService } from '../auth/auth.service';
//import { AuthGuard } from '../auth/auth.guard';
var TasksModule = (function () {
    function TasksModule() {
    }
    return TasksModule;
}());
TasksModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__task_details_task_details_component__["a" /* TaskDetailsComponent */], __WEBPACK_IMPORTED_MODULE_3__task_list_task_list_component__["a" /* TaskListComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__tasks_service__["a" /* TasksService */]]
    })
], TasksModule);

//# sourceMappingURL=tasks.module.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TasksService = (function () {
    function TasksService(http) {
        this.http = http;
        this.tasksUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].url + 'tasks';
    }
    TasksService.prototype.getTasks = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get(this.tasksUrl + "/GetAll/", { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error); });
    };
    TasksService.prototype.getTask = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get(this.tasksUrl + "/GetDetails/" + id, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(err);
        });
    };
    TasksService.prototype.addTask = function (task) {
        delete task.Id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.tasksUrl, task, options)
            .map(function (response) { return response; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error); });
    };
    TasksService.prototype.updateTask = function (task) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.tasksUrl, task, options)
            .map(function (response) { return response; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error); });
    };
    return TasksService;
}());
TasksService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TasksService);

var _a;
//# sourceMappingURL=tasks.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    url: 'http://localhost:5000/api/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map