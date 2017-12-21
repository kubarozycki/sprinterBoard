import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task-list/task.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  model = new Object();
  constructor(private taskService:TaskService,private router:Router,private route:ActivatedRoute) { 
    this.model=new Object();
    console.log("constructor")
  }

  ngOnInit() {
    console.log("ngoininit");
    this.route.params.subscribe(params => {
      this.taskService.getTask(params["id"]).subscribe(
      (response) => {
        this.model=response;
        console.log(this.model);
      }, 
       err => {
           // Log errors if any
           console.log(err);
       });
   });
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
