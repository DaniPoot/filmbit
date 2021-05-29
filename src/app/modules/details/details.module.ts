import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DetailsRoutingModule } from './details.routing.module';
import { ReviewsComponent } from './reviews/reviews.component';
import { AuthorAvatarPipe } from './reviews/author-avatar.pipe';

@NgModule({
  declarations: [
    LayoutComponent,
    ReviewsComponent,
    AuthorAvatarPipe
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
