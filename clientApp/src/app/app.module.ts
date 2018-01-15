import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { MdGridListModule, MdCardModule} from '@angular/material';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {TasksModule} from './tasks/tasks.module';
import {AccountModule} from './account/account.module';
//import {AuthGuard} from './auth/auth.guard';
import { AppRoutingModule } from './app.routing';
//import { AuthService } from './auth/auth.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MdGridListModule,
    MdCardModule,
    AppRoutingModule,
    BrowserModule,
    AlertModule.forRoot(),
    HttpModule,
    JsonpModule,
    TasksModule,
    AccountModule
  ],
  exports: [MdGridListModule, MdCardModule],
  //providers:[AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
