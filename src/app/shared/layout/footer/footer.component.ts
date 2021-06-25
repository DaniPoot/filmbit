import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isLogged: Boolean = false;

  constructor(public login: LoginService) { }

  ngOnInit(): void {
    this.isLogged = Boolean(localStorage.getItem('isLogged'));
    this.login.isLogged$.subscribe( (value) => {
      this.isLogged = value;
    })
  }

  loggedOut(){
    localStorage.setItem('isLogged', String(false));
    this.login.isLogged$.emit(false)
  }

}
