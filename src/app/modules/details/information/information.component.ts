import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cast } from 'src/app/core/classes/cast/cast';
import { Movie } from 'src/app/core/classes/movie/movie';
import { ProductionCompany } from 'src/app/core/classes/production-company/production-company';
import { MovieService } from 'src/app/core/services/movie/movie.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit, OnChanges {

  @Input() id: number;
  @Input() productionCompanies : ProductionCompany[]; 
  cast : Cast[];
  similarMovies: Movie[];

  constructor(private movieService: MovieService, private router: Router) {
    this.cast=[];
    this.id= 0;
    this.productionCompanies = [];
    this.similarMovies = [];
  }

  ngOnInit(): void {
    this.getCast();
    this.getSimilarMovies();
  }

  ngOnChanges(): void {
    this.getCast();
    this.getSimilarMovies();
  }

  getCast(){
    this.movieService.getCast(this.id).then(
      response => {
        this.cast = response.slice(0, 20);
        
      }, 
      error => console.error(error)
    )
  }

  getSimilarMovies(){
    this.movieService.getSimilar(this.id).then(
      response => {
        this.similarMovies= response.results as Movie[]
      },
      error => console.error(error)
      
    )
  }

  seeDetails(movieId: number){
    window.scrollTo(0, 0);
    this.router.navigate(['/details/'+ movieId]);
  }


}
