import { Component } from '@angular/core';
import { TaskListComponent } from '../app/tasks/task-list/task-list.component';
import { FormsModule } from '@angular/forms';
import {AppMode,AppState} from '../app/app.mode';
@Component({  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOnTasksComponent: boolean = false;
  private onlineMode: boolean = false;
  
  set OnlineMode(val: boolean) {
    AppMode.AppState = val ? AppState.Online : AppState.Offline;
  }
  get OnlineMode():boolean{
    return AppState.Online?true:false;
  }

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
