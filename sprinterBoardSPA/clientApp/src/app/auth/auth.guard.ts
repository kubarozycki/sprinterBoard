import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";                
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router 
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin(state.url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.loggedIn) {
      return true;
    }
    else if (localStorage.getItem('auth_token')){
      return true;
    }
    

    this.authService.RedirectUrl = url;
    this.router.navigate(['/account/login']);
    return false;
    
  }
}
