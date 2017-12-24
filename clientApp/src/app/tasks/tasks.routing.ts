import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import {TaskDetailsComponent} from './task-details/task-details.component';
import {TaskListComponent} from './task-list/task-list.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    {path:'taskdetails/:id',component:TaskDetailsComponent},
    {path:'tasks',component:TaskListComponent},
    {path:'', component:TaskListComponent}
]);

