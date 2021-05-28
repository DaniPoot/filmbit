import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchRoutingModule } from './search.routing.module'
import { MoviesFoundComponent } from './movies-found/movies-found.component';
import { GenresListComponent } from '../genres/genres-list/genres-list.component';

@NgModule({
  declarations: [
    MoviesFoundComponent,
    GenresListComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule
  ],
  exports: [
    MoviesFoundComponent
  ]
})
export class SearchModule { }
