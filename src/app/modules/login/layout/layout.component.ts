import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ResponseAPI} from 'src/app/core/classes/user-api/response-api';
import {LoginService} from 'src/app/core/services/login/login.service';
import { SearchMoviesService } from 'src/app/core/services/shearchMovies/search-movies.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  public userIsSearch: boolean = false;
  private loginService: LoginService;

  constructor(private formBuilder: FormBuilder, private router: Router, private search: SearchMoviesService, private login: LoginService) {
    this.loginService = login;
  }
  ngOnInit() {
    this.search.isSearching$.subscribe((value) => {
      this.userIsSearch = value
    })

    this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    const { email, password } = this.registerForm.value
    const response = this.loginService.login(email, password)
    response.then(value => {
      const user = value as ResponseAPI
      localStorage.setItem('isLogged', "true");
      localStorage.setItem('token', user.token);
      localStorage.setItem('user', JSON.stringify(user.user));
      this.login.isLogged$.emit(true)
      this.router.navigate(['/']);
    })
    
  }
}
