import { Component } from '@angular/core';
import { TaskListComponent } from '../app/tasks/task-list/task-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOnTasksComponent: boolean = false;
  title = 'app';
  openNav():void{
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("showMenuBtn").classList.toggle("change");
  }



  closeNav():void{
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("showMenuBtn").classList.toggle("change");
  }
  onActivateComponent(event: any): void {
    if (event.constructor == TaskListComponent) {
      this.isOnTasksComponent = true;
    }
    else {
      this.isOnTasksComponent = false;
    }
  }

  toogle():void{
    var width=document.getElementById("myNav").style.width;
    console.log(width);
    if(width=='100%'){
      this.closeNav();
    }
    else{
      this.openNav();
    }
    
  }
}
