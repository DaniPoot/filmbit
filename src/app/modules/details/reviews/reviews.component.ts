import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from 'src/app/core/classes/movie/movie';
import { MovieService } from 'src/app/core/services/movie/movie.service';
import { Review } from '../../../core/classes/review/review';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[];
  constructor(private router: ActivatedRoute, private movieService: MovieService) {
    this.reviews = [];
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe( (params: ParamMap) => { 
      const id = Number(params.get("id"));
      this.getReviews(id);
    });
  }

  getReviews(id: number){
    this.movieService.getReviews(id).then(
      response => {
        this.reviews = response as Review[];
        console.log(response);
      },
      error => console.error(error)
      
    )
  }

}
