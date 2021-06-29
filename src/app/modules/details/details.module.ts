import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { InformationComponent } from './information/information.component';
import { AuthorAvatarPipe } from './reviews/author-avatar.pipe';
import { SearchModule } from '../search/search.module';
import { ReviewComponent } from './review/review.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent,
    ReviewsComponent,
    InformationComponent,
    AuthorAvatarPipe,
    ReviewComponent,
  ],
  imports: [
    CommonModule,
    SearchModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DetailsModule { }
