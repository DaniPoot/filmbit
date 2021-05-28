import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesFoundComponent } from './movies-found/movies-found.component';
 
const routes: Routes = [
  {   path: 'search',   component: MoviesFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class SearchRoutingModule { }
