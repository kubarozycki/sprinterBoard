import { Component, OnInit } from '@angular/core';
import {TaskService} from './task.service'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService:TaskService) { }
  tasks:any[];
  ngOnInit() {
    this.taskService.getTasks()
    .subscribe(
        task => {this.tasks = task;
        console.log(this.tasks);}, //Bind to view
         err => {
             // Log errors if any
             console.log(err);
         });
  }

}
