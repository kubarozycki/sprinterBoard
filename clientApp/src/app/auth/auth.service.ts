import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { User } from '../model/user';

@Injectable()
export class AuthService {
  

  private isLoggedIn: boolean;
  private url: string = environment.url + "auth";
  public RedirectUrl: string;
  constructor(
    private http:Http,
  )
  {
    this.isLoggedIn = false;
  }
  
  get loggedIn(): boolean {
    return this.isLoggedIn;
  }


  login(user:User): Observable<boolean> {
    let body = JSON.stringify({ UserName: user.email, Password: user.password });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.url, body, options)
      .map(res => res.json())
      .map(res => {
        localStorage.setItem('auth_token', res.token);
        this.isLoggedIn = true;
        return true;
      })
      .catch(
      ((err: any) => Observable.throw("error")));
  }

}
