"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var task_details_component_1 = require("./task-details/task-details.component");
var task_list_component_1 = require("./task-list/task-list.component");
var tasks_service_1 = require("./tasks.service");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var TasksModule = (function () {
    function TasksModule() {
    }
    return TasksModule;
}());
TasksModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule
        ],
        declarations: [task_details_component_1.TaskDetailsComponent, task_list_component_1.TaskListComponent],
        providers: [tasks_service_1.TasksService],
    })
], TasksModule);
exports.TasksModule = TasksModule;
//# sourceMappingURL=tasks.module.js.map