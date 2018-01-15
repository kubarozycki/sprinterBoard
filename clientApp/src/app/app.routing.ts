import { ModuleWithProviders,NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';


const appRoutes: Routes = [
  { path: "", redirectTo: "/tasks", pathMatch: "full" },
  {
    path: 'tasks', canActivate: [AuthGuard], children: [
      { path: '', component: TaskListComponent },
      { path: 'taskdetails', component: TaskDetailsComponent },
      { path: 'taskdetails/:id', component: TaskDetailsComponent },
      { path: 'taskslist', component: TaskListComponent }
    ]
  },
  {
    path: 'account', children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,AuthService
  ]
})

export class AppRoutingModule { }
