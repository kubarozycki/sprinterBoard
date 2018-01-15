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
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var http_1 = require("@angular/http");
var tasks_module_1 = require("./tasks/tasks.module");
var account_module_1 = require("./account/account.module");
var app_routing_1 = require("./app.routing");
var auth_guard_1 = require("./auth.guard");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            material_1.MdGridListModule,
            material_2.MdCardModule,
            router_1.RouterModule.forRoot(app_routing_1.appRoutes),
            platform_browser_1.BrowserModule,
            ngx_bootstrap_1.AlertModule.forRoot(),
            http_1.HttpModule,
            http_1.JsonpModule,
            tasks_module_1.TasksModule,
            account_module_1.AccountModule
        ],
        exports: [router_1.RouterModule, material_1.MdGridListModule, material_2.MdCardModule],
        providers: [auth_guard_1.AuthGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map