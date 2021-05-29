import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DetailsRoutingModule } from './details.routing.module';
import { ReviewsComponent } from './reviews/reviews.component';
import { InformationComponent } from './information/information.component';
import { AuthorAvatarPipe } from './reviews/author-avatar.pipe';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [
    LayoutComponent,
    ReviewsComponent,
    InformationComponent,
    AuthorAvatarPipe
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SearchModule,
  ]
})
export class DetailsModule { }
