import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskDetailsComponent} from './task-details/task-details.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TasksService} from './tasks.service'
import {routing} from './tasks.routing';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    routing
  ],
  declarations: [TaskDetailsComponent,TaskListComponent],
  providers:[TasksService]
})
export class TasksModule { }
