import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/core/classes/genre/genre';
import { Movie } from '../../../core/classes/movie/movie';
import { FindMovieService } from '../../../core/services/findMovie/find-movie.service';
import { GenresService } from '../../../core/services/genres/genres.service';

@Component({
  selector: 'app-movies-found',
  templateUrl: './movies-found.component.html',
  styleUrls: ['./movies-found.component.css']
})

export class MoviesFoundComponent implements OnInit {
  movies: Array<Movie> = [ ];
  query: string="";
  genres: Array<Genre> = [ ];
  constructor(private findMovieService: FindMovieService, private genresService: GenresService ) {

  }

  ngOnInit(): void {
    this.genresService.getGenres().then(
      response => {
        this.genres = response.genres as Genre[]
      }, error => console.error(error)
      
    )
  
  }

  onKeyupEvent(e: Event){
    if(this.query.length >= 3){
      this.findMovieService.findMovie(this.query).then(
        response => { this.movies = response.results as Movie[]
        }, error => console.error(error)
      )
    }else{
      this.movies=[];
    }
  }
}
