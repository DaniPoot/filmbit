import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/core/classes/genre/genre';
import { SearchMoviesService } from 'src/app/core/services/shearchMovies/search-movies.service';
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
  constructor(private findMovieService: FindMovieService, private genresService: GenresService, private search: SearchMoviesService) {

  }

  ngOnInit(): void {
    this.genresService.getGenres().then(
      response => {
        this.genres = response.genres as Genre[]
      }, error => console.error(error)
      
    )

    this.search.query$.subscribe( (value) => this.onKeyupEvent(value))
  
  }

  onKeyupEvent(value: string){
    if(value.length >= 3){
      this.findMovieService.findMovie(value).then(
        response => { this.movies = response.results as Movie[]
        }, error => console.error(error)
      )
    }else{
      this.movies=[];
    }
  }
}
