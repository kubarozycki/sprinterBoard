import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from './../model/user';

@Injectable()
export class AccountService {

  private url = environment.url + 'user';
  private loggedIn = false;
  constructor(private http: HttpClient) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  register(user: User): Observable<any> {
    debugger;
    let body = JSON.stringify({ UserName: user.email, Password: user.password });
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post(this.url, user)

  }

}
