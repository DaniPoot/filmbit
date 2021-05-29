import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
import { LayoutComponent } from './layout/layout.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenresListComponent } from './genres-list/genres-list.component';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [
    LayoutComponent,
    CarouselComponent,
    GenresListComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    HomeRoutingModule,
    SearchModule
  ],
})
export class HomeModule { }
