import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../model/user';

@Injectable()
export class AuthService {


  private isLoggedIn: boolean;
  private url: string = environment.url + "auth";
  public RedirectUrl: string;
  constructor(
    private http: HttpClient,
  ) {
    this.isLoggedIn = false;
  }

  get loggedIn(): boolean {
    return this.isLoggedIn;
  }


  login(user: User): Observable<boolean> {
    let body = JSON.stringify({ Email: user.email, Password: user.password });
    let headers={
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  }
    return this.http.post(this.url, body, headers).pipe(
      map((res) => {
        let t: any = res;
        localStorage.setItem('auth_token', t.token);
        this.isLoggedIn = true;
        return true;
      })
    )
  }

}
