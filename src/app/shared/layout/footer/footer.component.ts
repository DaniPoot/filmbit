import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isLogged: Boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isLogged = Boolean(localStorage.getItem('isLogged'));
  }

  loggedOut(){
    localStorage.setItem('isLogged', String(false));
  }

}
