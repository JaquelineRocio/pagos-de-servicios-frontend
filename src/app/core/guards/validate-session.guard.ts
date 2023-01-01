import { Injectable } from '@angular/core';
import {CanActivate, Router,UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateSessionGuard implements CanActivate {
  item: string | null = localStorage.getItem('access_token')
  constructor(private router: Router){

  }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLocalStorage();
  }
  private checkLocalStorage(): boolean{

    if (!this.item)
    {
      this.router.navigate(['/'])
      return false;
    }
      return true;
  }
}
