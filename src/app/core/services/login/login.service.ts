import { Injectable, EventEmitter } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {

  isLogged$ = new EventEmitter<Boolean>()

  constructor() { }

  canActivate(): boolean {
    return localStorage.getItem('isLogged') === "true";
  }
}
