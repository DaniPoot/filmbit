import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DetailsRoutingModule } from './details.routing.module';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
