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
    this.isLogged = localStorage.getItem('isLogged') == "true";
    this.login.isLogged$.subscribe( (value) => {
      this.isLogged = value;
    })
  }

  loggedOut(){
    this.login.logout()
  }

}
