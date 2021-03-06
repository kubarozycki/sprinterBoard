import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AccountService} from '../account.service';
import { User } from '../../model/user';
@Component({
  moduleId:module.id,
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:User;
  constructor(private accountService:AccountService,private router:Router) {
    this.user=new User();
   }

  ngOnInit() {
  }

  registerUser() {
    console.log(this.user);
    this.accountService.register(this.user).subscribe(
      response => {
        this.router.navigate(['/account/login']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
