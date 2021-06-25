import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {LoginService} from 'src/app/core/services/login/login.service';
import {SearchMoviesService} from 'src/app/core/services/shearchMovies/search-movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchMobile') searchMobile?: ElementRef;
  @ViewChild('input') input?: ElementRef;
  @ViewChild('profileMenu') menu?: ElementRef;
  private isSearchEnable: Boolean = false;
  private isMenuEnable: Boolean = false;
  isLogged: Boolean = false;


  constructor(private render: Renderer2, public search: SearchMoviesService, public login: LoginService) { }

  ngOnInit(): void {
    this.isLogged = localStorage.getItem('isLogged')=="true";

    this.login.isLogged$.subscribe( (value) => {
      this.isLogged = value;
    })
  }

  activeBar(): void{
    const input = this.input?.nativeElement;
    const search = this.searchMobile?.nativeElement;

    if(this.isSearchEnable){
      this.render.addClass(search, 'disabled')
    }else{
      this.render.removeClass(search, 'disabled')
      input.focus()
    }
    this.isSearchEnable = !this.isSearchEnable
  }

  activeMenu(): void{
    const menu = this.menu?.nativeElement
    
    if(this.isMenuEnable){
      this.render.addClass(menu, 'profile__menu--visible')
    }else{
      this.render.removeClass(menu, 'profile__menu--visible')
    }
    this.isMenuEnable = !this.isMenuEnable

  }

  onUserType(){
    const input = this.input?.nativeElement;
    this.search.query$.emit(input.value)
    if(input.value != ''){
      this.render.addClass(input, 'search-bar__input--active')
    }else{
      this.render.removeClass(input, 'search-bar__input--active')
    }
  }

  onUserSearching(event : any){
    this.search.isSearching$.emit(true)
  }

  loggedOut(){
    localStorage.setItem('isLogged', String(false));
    this.login.isLogged$.emit(false)
  }

}
