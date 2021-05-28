import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Movie } from '../../../core/classes/movie/movie';
import { MovieService } from '../../../core/services/movie/movie.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls:['./carousel.component.css'],
  providers: [NgbCarouselConfig] 
})
export class CarouselComponent {
  movies: Array<Movie>
  constructor(config: NgbCarouselConfig, private movieService: MovieService, private router: Router) {
    this.movies= [];
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
    this.getNewestMovies();
  }

  getNewestMovies(){
    this.movieService.getNewest().then(
      response => {
        this.movies= response.results.slice(0,5) as Movie[]
    }, error => {
      console.error(error);
      alert("Error: " + error.statusText);
    })
  }

  seeDetails(movieId: number){
    this.router.navigate(['/details/'+ movieId]);
  }


  addFavorites(movieId: number){
    alert("movie "+ movieId+ " added.")
  }

}