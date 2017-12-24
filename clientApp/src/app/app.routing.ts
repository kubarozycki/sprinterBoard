import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes = [
  { path: '', loadChildren: 'app/tasks/tasks.module#TasksModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);