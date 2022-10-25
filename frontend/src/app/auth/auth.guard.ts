import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const url: string = state.url;
    return this.checkLogin(url);
  }
  
  constructor (private authService: AuthService, private router: Router) { }

  checkLogin(url: string): any {
    let val: any = localStorage.getItem('isUserLoggedIn');

    if(val == 'true') {
      if(url == "/login") {
        this.router.parseUrl('/home');
      } else {
        return true;
      }
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
