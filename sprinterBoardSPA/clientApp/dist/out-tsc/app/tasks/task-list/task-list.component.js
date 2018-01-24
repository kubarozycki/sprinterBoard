"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tasks_service_1 = require("../tasks.service");
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
    core_1.Component({
        selector: 'app-task-list',
        templateUrl: './task-list.component.html',
        styleUrls: ['./task-list.component.css']
    }),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TaskListComponent);
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.component.js.map