import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
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
    SearchModule,
  ]
})
export class DetailsModule { }
