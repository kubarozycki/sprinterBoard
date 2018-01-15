"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task_details_component_1 = require("./tasks/task-details/task-details.component");
var task_list_component_1 = require("./tasks/task-list/task-list.component");
var registration_component_1 = require("./account/registration/registration.component");
var login_component_1 = require("./account/login/login.component");
exports.appRoutes = [
    { path: '', redirectTo: '/tasks' },
    ,
    { path: 'tasks', children: [
            { path: 'taskdetails', component: task_details_component_1.TaskDetailsComponent },
            { path: 'taskdetails/:id', component: task_details_component_1.TaskDetailsComponent },
            { path: 'tasks', component: task_list_component_1.TaskListComponent }
        ] },
    { path: 'account', children: [
            { path: '', component: task_list_component_1.TaskListComponent },
            { path: 'registration', component: registration_component_1.RegistrationComponent },
            { path: 'login', component: login_component_1.LoginComponent }
        ] }
];
//# sourceMappingURL=app.routing.js.map