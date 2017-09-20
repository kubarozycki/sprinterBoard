import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task-list/task.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  model = new Object();
  constructor(private taskService:TaskService,private router:Router) { }

  ngOnInit() {
  }

  save():void{
    console.log(this.model);
    this.taskService.addTask(this.model).subscribe(
      (response) => {
        console.log('success');
        this.router.navigateByUrl('/tasks');       
      }, //Bind to view
       err => {
           // Log errors if any
           console.log(err);
       });
  }

  cancel():void{
    // zrutowac do taskslist
  }

}
