import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie/movie.service';
import { Review } from '../../../core/classes/review/review';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getReviews(24428)
  }

  getReviews(id: number){
    this.movieService.getReviews(id).then(
      response => {
        console.log(response as Review[]);
        
      },
      error => console.error(error)
      
    )
  }

}
