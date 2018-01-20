import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationComponent} from './registration/registration.component'
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {AccountService} from './account.service';
import { LoginComponent } from './login/login.component';
@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  declarations:[RegistrationComponent, LoginComponent],
  providers:[AccountService]
})
export class AccountModule { }
