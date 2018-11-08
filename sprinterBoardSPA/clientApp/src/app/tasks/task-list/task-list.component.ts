import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppMode,AppState } from '../../app.mode';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService: TasksService, private router: Router) { }
  tasks: any;
  ngOnInit() {
    this.getTasksList();
  }

  getTasksList() {
    this.taskService.getTasks()
      .subscribe(
      tasks => {
        this.tasks = tasks;
        localStorage.setItem("tasks", JSON.stringify(tasks));
      },
      (err:HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigateByUrl('/account/login'); 
        }
      });
  }

  moveRight(task: any) {
    console.log(task);
    task.status++;
    this.taskService.updateTask(task).subscribe(
      task => {
        let temp= localStorage.getItem("tasks");
        this.getTasksList();
      },
      (err:HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigateByUrl('/account/login');
        }
      }
    );
  }

  moveLeft(task: any) {
    console.log(task);
    task.status--;
    this.taskService.updateTask(task).subscribe(
      task => {
        this.getTasksList();
      },
      (err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigateByUrl('/account/login');
        }
      }
    );
  }

}
