import { Component, OnInit } from '@angular/core';
import {TasksService} from '../tasks.service'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService:TasksService) { }
  tasks:any[];
  ngOnInit() {
    this.getTasksList();
  }

  getTasksList(){
    this.taskService.getTasks()
    .subscribe(
        tasks => {
          this.tasks = tasks;
        }, //Bind to view
         err => {
             // Log errors if any
             console.log(err);
         });
  }

  moveRight(task:any){
    console.log(task);
    task.status++;
    this.taskService.updateTask(task).subscribe(
        task=>{
          this.getTasksList();
        },
        err=>{
          console.log(err);
        }
    );
  }

  moveLeft(task:any){
    console.log(task);
    task.status--;
    this.taskService.updateTask(task).subscribe(
      task=>{
        this.getTasksList();
      },
      err=>{
        console.log(err);
      }
  );
  }

}
