import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LoginRoutingModule } from './login.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SearchModule
  ]
})
export class LoginModule { }
