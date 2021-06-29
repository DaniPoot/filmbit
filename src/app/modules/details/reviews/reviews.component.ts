import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie/movie.service';
import { ReviewsService } from 'src/app/core/services/reviews/reviews.service';
import { Review } from '../../../core/classes/review/review';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthorDetails } from 'src/app/core/classes/review/author-details';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[];
  reviewForm!: FormGroup;
  idMovie: number =  0;
  submitted = false;

  constructor(private router: ActivatedRoute, private movieService: MovieService,
    private reviewsService: ReviewsService, private formBuilder: FormBuilder) {
    this.reviews = [];
  }

  ngOnInit(): void {
    this.reviewForm = this.formBuilder.group({
      body: ['', [Validators.required]],
  });

    this.router.paramMap.subscribe( (params: ParamMap) => { 
      this.idMovie = Number(params.get("id"));
      this.getReviews();
    });
  }

  getReviews(){
    this.reviewsService.getReviews(this.idMovie).then(
      response => {   
        this.reviews =[];
        response.forEach(review => {
          this.reviews.push(new Review("Anónimo", review.body, new AuthorDetails("")))    
        })
        this.movieService.getReviews(this.idMovie).then(
          response => {
            this.reviews = [...this.reviews, ...response]
          },
          error => console.error(error)
        )  

      }, error => console.error(error)
    )
     }

  get f() { return this.reviewForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.reviewForm.invalid) {
      return;
    }
    const { body } = this.reviewForm.value
    this.reviewsService.addReview(this.idMovie, body).then(
      response=> {this.getReviews()},
      error=> console.error(error)
    )

    this.submitted = false;
    this.reviewForm.reset('')

  }


  exportToPDF(){
    this.reviewsService.getPDF().then(
      resolve => {
        console.log(resolve);
      }, error => console.error(error)
    )
  }

  exportToCSV(){
    this.reviewsService.getCSV().then(
      resolve => {
        console.log(resolve);
      }, error => console.error(error)
    )
  }

}
