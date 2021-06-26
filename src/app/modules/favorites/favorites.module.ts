import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component'

@NgModule({
  declarations: [
    LayoutComponent,
    FavoritesListComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
  ],
})
export class FavoritesModule { }
