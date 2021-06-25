import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged$ = new EventEmitter<Boolean>()

  constructor() { }
}
