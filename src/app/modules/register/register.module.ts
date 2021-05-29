import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RegisterRoutingModule } from './register.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchModule } from '../search/search.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    SearchModule
   
  ]
})
export class RegisterModule { }
