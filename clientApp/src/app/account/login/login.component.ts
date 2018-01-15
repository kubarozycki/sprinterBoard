import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Credentials } from '../../model/credentials';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: Credentials;
  //loginForm: NgForm;
  constructor
  (
    private authService: AuthService,
    private router:Router
  )
  {
    this.credentials = new Credentials();
    
  }

  ngOnInit() {
  }

  login(form:NgForm):void {
    if (form.valid) {
      this.authService.login(form.value).subscribe(
        result => {
          if (result) {
            this.router.navigate(['/tasks']);
          }
        },
        error => console.log("login err"));

    }
  }

}
