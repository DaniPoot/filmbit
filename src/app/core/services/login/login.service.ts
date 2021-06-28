import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ResponseAPI } from '../../classes/user-api/response-api';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {
  private URL="http://localhost:3000/login/";
  private http: HttpClient
  isLogged$ = new EventEmitter<Boolean>()

  constructor(private router: Router, private httpc: HttpClient) {
    this.http = httpc

  }

  canActivate(): boolean {
    if(localStorage.getItem('isLogged') === "true") return true
    this.router.navigate(['login']);
    return  false;
  }

  login (email: string, password: string) {
    const url = this.URL;
    const body = { email, password }

    return new Promise( (resolve, reject) => {
      this.http.post(url, body)
      .toPromise().then(response => {
        resolve(response)
      }, (error) => {
        reject(error)
      })
    })

  }

  logout () {
    localStorage.setItem('isLogged', String(false));
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
    this.isLogged$.emit(false)
  }

  createUser (name: string, email: string, password: string) { 
    const url = this.URL + 'register/';
    const body = { email, password , name}
    return new Promise( (resolve, reject) => {
      this.http.post(url, body)
      .toPromise().then(response => {
        resolve(response)
      }, (error) => {
        reject(error)
      })
    })

  }
}
