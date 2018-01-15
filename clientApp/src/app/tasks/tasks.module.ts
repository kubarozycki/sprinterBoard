import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskDetailsComponent} from './task-details/task-details.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TasksService} from './tasks.service'

import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
//import { AuthService } from '../auth/auth.service';
//import { AuthGuard } from '../auth/auth.guard';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [TaskDetailsComponent,TaskListComponent],
  providers:[TasksService]
  
})
export class TasksModule { }
