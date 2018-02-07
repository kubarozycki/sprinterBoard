import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { MatGridListModule, MatCardModule} from '@angular/material';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {TasksModule} from './tasks/tasks.module';
import { AccountModule } from './account/account.module';
import { AppRoutingModule } from './app.routing';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppMode,AppState } from '../app/app.mode';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatGridListModule,
    MatCardModule,
    AppRoutingModule,
    BrowserModule,
    AlertModule.forRoot(),
    HttpModule,
    JsonpModule,
    TasksModule,
    AccountModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: true }),
    FormsModule,
    AppMode
  ],
  exports: [MatGridListModule, MatCardModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
