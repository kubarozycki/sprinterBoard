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
var Rx_1 = require("rxjs/Rx");
var http_1 = require("@angular/http");
var environment_1 = require("../../environments/environment");
var TasksService = (function () {
    function TasksService(http) {
        this.http = http;
        this.tasksUrl = environment_1.environment.url + 'tasks';
    }
    TasksService.prototype.getTasks = function () {
        // ...using get request
        return this.http.get(this.tasksUrl + "/GetAll/")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    TasksService.prototype.getTask = function (id) {
        return this.http.get(this.tasksUrl + "/GetDetails/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            return Rx_1.Observable.throw(err); // observable needs to be returned or exception raised
        });
    };
    TasksService.prototype.addTask = function (task) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.tasksUrl, task, options)
            .map(function (response) { return response; })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    TasksService.prototype.updateTask = function (task) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.tasksUrl, task, options)
            .map(function (response) { return response; })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    return TasksService;
}());
TasksService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map