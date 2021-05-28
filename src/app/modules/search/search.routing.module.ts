import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenresListComponent } from '../genres/genres-list/genres-list.component';
 
const routes: Routes = [
  {   
    path: 'genres/:id',   component: GenresListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class SearchRoutingModule { }
