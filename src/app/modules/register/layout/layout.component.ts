import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from 'src/app/core/services/login/login.service';
import { SearchMoviesService } from 'src/app/core/services/shearchMovies/search-movies.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent{
  registerForm!: FormGroup;
  submitted = false;
  public userIsSearch: boolean = false
  private loginService: LoginService;

  constructor(private formBuilder: FormBuilder, private router: Router, private search: SearchMoviesService, private login : LoginService) {
    this.loginService = login
  }

  ngOnInit() {
    this.search.isSearching$.subscribe((value) => {
      this.userIsSearch = value
    })

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmedPassword: ['', [Validators.required]]
    },
    {validator: this.checkPasswords}
    );
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
      }

      const { firstName: name, email, password } = this.registerForm.value

      const response = this.loginService.createUser(name, email, password)
      response.then(value => {
        this.router.navigate(['/login']);
      })

  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmedPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }

}
