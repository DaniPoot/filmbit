import { Injectable, EventEmitter } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {

  isLogged$ = new EventEmitter<Boolean>()

  constructor(private router: Router) { }

  canActivate(): boolean {
    if(localStorage.getItem('isLogged') === "true") return true
    this.router.navigate(['login']);
    return  false;
  }
}
