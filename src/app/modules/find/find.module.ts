import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindRoutingModule } from './find.routing.module';
import { MoviesFoundComponent } from './movies-found/movies-found.component';


@NgModule({
  declarations: [
    MoviesFoundComponent
  ],
  imports: [
    CommonModule,
    FindRoutingModule
  ]
})
export class FindModule { }
