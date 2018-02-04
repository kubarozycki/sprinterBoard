import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse  } from '@angular/common/http';
import {TasksService} from '../tasks.service';
import {Router,ActivatedRoute } from '@angular/router';
import { Task } from '../../model/task';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  model: Task;
  
  constructor(private taskService:TasksService,private router:Router,private route:ActivatedRoute) { 
    this.model = new Task();
    console.log("constructor")
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.taskService.getTask(params["id"]).subscribe(
      (response) => {
        this.model = new Task(response["id"], response["name"],response["description"]);
      }, 
       (err:HttpErrorResponse) => {
         if (err.status === 401) {
           this.router.navigateByUrl('/account/login'); 
         }
       });
   });
  }

  

  save():void{
    
    if(this.model.Id==null)
    {
      this.taskService.addTask(this.model).subscribe(
        (response) => { 
          this.router.navigateByUrl('/tasks');       
        }, 
         err => {
             console.log(err);
         });
    }
    else{
      this.taskService.updateTask(this.model).subscribe(
        (response) => {
          
          this.router.navigateByUrl('/tasks');       
        }, 
         err => {
             console.log(err);
         });
    }
    
  }

  remove(): void {
    this.taskService.removeTask(this.model).subscribe(
      (response) => {
        this.router.navigateByUrl('/tasks');
      },
      err => {
        console.log(err);
      });
  }

  cancel():void{
    this.router.navigateByUrl('/tasks');
  }

}
