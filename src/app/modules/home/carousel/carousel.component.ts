import {Component} from '@angular/core';
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
  constructor(config: NgbCarouselConfig, private movieService: MovieService) {
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
    alert("redirect to "+ movieId+ " details.")
  }


  addFavorites(movieId: number){
    alert("movie "+ movieId+ " added.")
  }

}