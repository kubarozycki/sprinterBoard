import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';
import { Console } from '@angular/core/src/console';
import {User} from './../model/user';
@Injectable()
export class AccountService {

  private url = environment.url + 'account';
  private loggedIn=false;
  constructor(private http:Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  register(user:User):Observable<any>{
    let body = JSON.stringify({ UserName:user.email, Password:user.password});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.url , body, options)
    .map(res => true)
    .catch(
      ((err:any)=>Observable.throw("server error")));
  }

}
