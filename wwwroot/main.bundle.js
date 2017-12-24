webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/tasks/tasks.module": [
		"../../../../../src/app/tasks/tasks.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* The Overlay (background) */\r\n.overlay {\r\n    /* Height & width depends on how you want to reveal the overlay (see JS below) */    \r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    background-color: rgb(0,0,0); /* Black fallback color */\r\n    background-color: rgba(0,0,0, 0.9); /* Black w/opacity */\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */\r\n}\r\n\r\n/* Position the content inside the overlay */\r\n.overlay-content {\r\n    position: relative;\r\n    top: 25%; /* 25% from the top */\r\n    width: 100%; /* 100% width */\r\n    text-align: center; /* Centered text/links */\r\n    margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */\r\n}\r\n\r\n/* The navigation links inside the overlay */\r\n.overlay a {\r\n    padding: 8px;\r\n    text-decoration: none;\r\n    font-size: 36px;\r\n    color: #818181;\r\n    display: block; /* Display block instead of inline */\r\n    transition: 0.3s; /* Transition effects on hover (color) */\r\n}\r\n\r\n/* When you mouse over the navigation links, change their color */\r\n.overlay a:hover, .overlay a:focus {\r\n    color: #f1f1f1;\r\n}\r\n\r\n/* Position the close button (top right corner) */\r\n.overlay .closebtn {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 45px;\r\n    font-size: 60px;\r\n}\r\n\r\n/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */\r\n@media screen and (max-height: 450px) {\r\n    .overlay a {font-size: 20px}\r\n    .overlay .closebtn {\r\n        font-size: 40px;\r\n        top: 15px;\r\n        right: 35px;\r\n    }\r\n}\r\n\r\n.bar1, .bar2, .bar3 {\r\n    width: 35px;\r\n    height: 5px;\r\n    background-color: #333;\r\n    margin: 6px 0;\r\n    transition: 0.4s;\r\n}\r\n\r\n.change .bar1 {\r\n    -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;\r\n    transform: rotate(-45deg) translate(-9px, 6px) ;\r\n}\r\n\r\n.change .bar2 {opacity: 0;}\r\n\r\n.change .bar3 {\r\n    -webkit-transform: rotate(45deg) translate(-8px, -8px) ;\r\n    transform: rotate(45deg) translate(-8px, -8px) ;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n            <div class=\"container\" style=\"background:darkgoldenrod;width:100%;height:100%;\">\r\n                <div class=\"pull-left\">\r\n\r\n                    <div id=\"showMenuBtn\" class=\"container\" style=\"display: inline-block;\r\n                        cursor: pointer;\" (click)=\"toogle()\">\r\n                        <div class=\"bar1\"></div>\r\n                        <div class=\"bar2\"></div>\r\n                        <div class=\"bar3\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </nav>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div id=\"myNav\" class=\"overlay\">\r\n\r\n\r\n\r\n            <!-- Overlay content -->\r\n            <div class=\"overlay-content\">\r\n                <a routerLink=\"/tasks\" (click)=\"closeNav()\">Board</a>\r\n                <a routerLink=\"/taskdetails\" (click)=\"closeNav()\">Add task</a>\r\n                <a href=\"#\">App settings</a>\r\n                \r\n                <a href=\"#\">Logout</a>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        \r\n\r\n        <div style=\"margin-top:50px;\" class=\"container\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tasks_tasks_module__ = __webpack_require__("../../../../../src/app/tasks/tasks.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import {TaskListComponent} from './task-list/task-list.component';


// import {TaskService} from './task-list/task.service';


// import { TaskDetailsComponent } from './task-details/task-details.component';


// const appRoutes: Routes = [
//   {path:'taskdetails/:id',component:TasksModule.TaskDetailsComponent},
//   {path:'tasks',component:TaskListComponent},
//   {path:'', component:TaskListComponent}
// ];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            // ,TaskListComponent, TaskDetailsComponent
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdCardModule */],
            // RouterModule.forRoot(appRoutes),
            // RouterModule.forRoot(
            //   appRoutes,
            //   { enableTracing: true } // <-- debugging purposes only
            // ),
            __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__tasks_tasks_module__["TasksModule"]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdGridListModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdCardModule */]],
        // providers: [TaskService],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");

var appRoutes = [
    { path: '', loadChildren: 'app/tasks/tasks.module#TasksModule' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

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

module.exports = "<div class = \"container\">\r\n  <h1>Add task</h1>\r\n  <form>\r\n     <div class = \"form-group\">\r\n        <label for = \"name\">Name</label>\r\n        <input type = \"text\" class = \"form-control\" id = \"name\" required\r\n           [(ngModel)] = \"model.name\" name = \"name\">\r\n     </div>\r\n     \r\n     <div class = \"form-group\">\r\n        <label for = \"description\">Description</label>\r\n        <input type = \"text\" class = \"form-control\" id = \"description\"\r\n           [(ngModel)] = \"model.description\" name = \"description\">\r\n     </div>\r\n     <div class=\"form-group\">\r\n        <button (click)=\"save()\" type=\"button\" class=\"btn btn-primary\">\r\n            Save\r\n        </button>\r\n        <button (click)=\"cancel()\" type=\"button\" class=\"btn btn-primary\">\r\n            Cancel\r\n        </button>\r\n     </div>\r\n  </form>\r\n  \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/tasks/task-details/task-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailsComponent; });
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



// import { ActivatedRoute } from '@angular/router';
var TaskDetailsComponent = (function () {
    function TaskDetailsComponent(taskService, router, route) {
        this.taskService = taskService;
        this.router = router;
        this.route = route;
        this.model = new Object();
        this.model = new Object();
        console.log("constructor");
    }
    TaskDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngoininit");
        this.route.params.subscribe(function (params) {
            _this.taskService.getTask(params["id"]).subscribe(function (response) {
                _this.model = response;
                console.log(_this.model);
            }, function (err) {
                // Log errors if any
                console.log(err);
            });
        });
    };
    TaskDetailsComponent.prototype.save = function () {
        var _this = this;
        if (this.model.hasOwnProperty('id') === false) {
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
        // zrutowac do taskslist
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

module.exports = "<table class=\"table\">\r\n    <colgroup>\r\n      <col style=\"width:33%;\">\r\n      <col style=\"width:33%;\">\r\n      <col style=\"width:33%;\">\r\n    </colgroup>\r\n    <thead>\r\n      <tr>\r\n        <th style=\"text-align:center;\">Do zrobienia</th>\r\n        <th style=\"text-align:center;\">W trakcie</th>\r\n        <th style=\"text-align:center;\">Zrobione</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let task of tasks\">\r\n        <td>\r\n          <div *ngIf=\"task.toDo\"  class=\"panel panel-info\" style=\"height:100%;width:100%;\">\r\n            <div class=\"panel-heading\">{{task.toDo.name}}</div>\r\n            <div class=\"panel-body\">\r\n                  <img [routerLink]=\"['/taskdetails', task.toDo.id]\" \r\n                  class=\"img-responsive center-block\" \r\n                  src=\"../assets/images/Menu.ico\" style=\"width:32px;height:32px;\">\r\n            </div>\r\n            <div class=\"panel-footer\">\r\n              <div class=\"row\">\r\n                <div class=\"pull-right\">\r\n                  <a (click)=\"moveRight(task.toDo)\" href=\"#\" class=\"next round\">&#8250;</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      <td >\r\n        <div *ngIf=\"task.inProgress\" class=\"panel panel-warning\" style=\"height:100%;width:100%;\">\r\n          <div class=\"panel-heading\">{{task.inProgress.name}}</div>\r\n          <div class=\"panel-body\">\r\n              <img class=\"img-responsive center-block\" src=\"../assets/images/Menu.ico\" style=\"width:32px;height:32px;\">\r\n          </div>\r\n          <div class=\"panel-footer\">\r\n            <div class=\"row\">\r\n              <div class=\"pull-left\">\r\n                <a (click)=\"moveLeft(task.inProgress)\" href=\"#\" class=\"next round\">&#8249;</a>\r\n              </div>\r\n              <div class=\"pull-right\" >\r\n                <a (click)=\"moveRight(task.inProgress)\" href=\"#\" class=\"next round\">&#8250;</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </td>\r\n    <td >\r\n      <div *ngIf=\"task.done\" class=\"panel panel-success\" style=\"height:100%;width:100%;\">\r\n        <div class=\"panel-heading\">{{task.done.name}}</div>\r\n        <div class=\"panel-body\">\r\n            <img class=\"img-responsive center-block\" src=\"../assets/images/Menu.ico\" style=\"width:32px;height:32px;\">\r\n        </div>\r\n        <div class=\"panel-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"pull-left\">\r\n              <a (click)=\"moveLeft(task.done)\" href=\"#\" class=\"next round\">&#8249;</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </td>\r\n        \r\n      </tr>\r\n      \r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "../../../../../src/app/tasks/task-list/task-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasks_service__ = __webpack_require__("../../../../../src/app/tasks/tasks.service.ts");
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
    function TaskListComponent(taskService) {
        this.taskService = taskService;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        this.getTasksList();
    };
    TaskListComponent.prototype.getTasksList = function () {
        var _this = this;
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    TaskListComponent.prototype.moveRight = function (task) {
        var _this = this;
        console.log(task);
        task.status++;
        this.taskService.updateTask(task).subscribe(function (task) {
            _this.getTasksList();
        }, function (err) {
            console.log(err);
        });
    };
    TaskListComponent.prototype.moveLeft = function (task) {
        var _this = this;
        console.log(task);
        task.status--;
        this.taskService.updateTask(task).subscribe(function (task) {
            _this.getTasksList();
        }, function (err) {
            console.log(err);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tasks_service__["a" /* TasksService */]) === "function" && _a || Object])
], TaskListComponent);

var _a;
//# sourceMappingURL=task-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksModule", function() { return TasksModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_details_task_details_component__ = __webpack_require__("../../../../../src/app/tasks/task-details/task-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_list_task_list_component__ = __webpack_require__("../../../../../src/app/tasks/task-list/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tasks_service__ = __webpack_require__("../../../../../src/app/tasks/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tasks_routing__ = __webpack_require__("../../../../../src/app/tasks/tasks.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TasksModule = (function () {
    function TasksModule() {
    }
    return TasksModule;
}());
TasksModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__tasks_routing__["a" /* routing */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__task_details_task_details_component__["a" /* TaskDetailsComponent */], __WEBPACK_IMPORTED_MODULE_3__task_list_task_list_component__["a" /* TaskListComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__tasks_service__["a" /* TasksService */]]
    })
], TasksModule);

//# sourceMappingURL=tasks.module.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_details_task_details_component__ = __webpack_require__("../../../../../src/app/tasks/task-details/task-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_list_task_list_component__ = __webpack_require__("../../../../../src/app/tasks/task-list/task-list.component.ts");



var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild([
    { path: 'taskdetails/:id', component: __WEBPACK_IMPORTED_MODULE_1__task_details_task_details_component__["a" /* TaskDetailsComponent */] },
    { path: 'tasks', component: __WEBPACK_IMPORTED_MODULE_2__task_list_task_list_component__["a" /* TaskListComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__task_list_task_list_component__["a" /* TaskListComponent */] }
]);
//# sourceMappingURL=tasks.routing.js.map

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
        // ...using get request
        return this.http.get(this.tasksUrl + "/GetAll/")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    TasksService.prototype.getTask = function (id) {
        return this.http.get(this.tasksUrl + "/GetDetails/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(err); // observable needs to be returned or exception raised
        });
    };
    TasksService.prototype.addTask = function (task) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.tasksUrl, task, options)
            .map(function (response) { return response; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    TasksService.prototype.updateTask = function (task) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.tasksUrl, task, options)
            .map(function (response) { return response; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
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