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
var router_1 = require("@angular/router");
var TaskDetailsComponent = (function () {
    function TaskDetailsComponent(taskService, router, route) {
        this.taskService = taskService;
        this.router = router;
        this.route = route;
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
    core_1.Component({
        selector: 'app-task-details',
        templateUrl: './task-details.component.html',
        styleUrls: ['./task-details.component.css']
    }),
    __metadata("design:paramtypes", [tasks_service_1.TasksService, router_1.Router, router_1.ActivatedRoute])
], TaskDetailsComponent);
exports.TaskDetailsComponent = TaskDetailsComponent;
//# sourceMappingURL=task-details.component.js.map