"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var task_list_component_1 = require("./task-list/task-list.component");
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var task_service_1 = require("./task-list/task.service");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var task_details_component_1 = require("./task-details/task-details.component");
var appRoutes = [
    { path: 'taskdetails', component: task_details_component_1.TaskDetailsComponent },
    { path: 'tasks', component: task_list_component_1.TaskListComponent },
    { path: '', component: task_list_component_1.TaskListComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            task_list_component_1.TaskListComponent, task_details_component_1.TaskDetailsComponent
        ],
        imports: [
            material_1.MdGridListModule,
            material_2.MdCardModule,
            router_1.RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            platform_browser_1.BrowserModule,
            ngx_bootstrap_1.AlertModule.forRoot(),
            http_1.HttpModule,
            http_1.JsonpModule,
            forms_1.FormsModule
        ],
        exports: [router_1.RouterModule, material_1.MdGridListModule, material_2.MdCardModule],
        providers: [task_service_1.TaskService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map