import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresListComponent } from './genres-list/genres-list.component';

@NgModule({
  declarations: [
    GenresListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GenresListComponent
  ]
})
export class HomeModule { }

