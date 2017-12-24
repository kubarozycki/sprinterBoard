import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';
// import {TaskListComponent} from './task-list/task-list.component';
import {MdGridListModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
// import {TaskService} from './task-list/task.service';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
// import { TaskDetailsComponent } from './task-details/task-details.component';
import {TasksModule} from './tasks/tasks.module';
import {routing} from './app.routing';


// const appRoutes: Routes = [
//   {path:'taskdetails/:id',component:TasksModule.TaskDetailsComponent},
//   {path:'tasks',component:TaskListComponent},
//   {path:'', component:TaskListComponent}
  
// ];

@NgModule({
  declarations: [
    AppComponent
    // ,TaskListComponent, TaskDetailsComponent
  ],
  imports: [
    MdGridListModule,
    MdCardModule,
    // RouterModule.forRoot(appRoutes),
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // ),
    routing,
    BrowserModule,
    AlertModule.forRoot(),
    HttpModule,
    JsonpModule,
    FormsModule,
    TasksModule
  ],
  exports:[RouterModule,MdGridListModule,MdCardModule],
  // providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
