import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresListComponent } from './genres-list/genres-list.component';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [
    GenresListComponent
  ],
  imports: [
    CommonModule,
    SearchModule
  ],
  exports: [
    GenresListComponent
  ]
})
export class HomeModule { }

