import { Component, OnInit } from '@angular/core';
import { Genre } from '../../../core/classes/genre/genre';
import { Movie } from '../../../core/classes/movie/movie';
import { GenresService } from '../../../core/services/genres/genres.service';
import { MovieService } from 'src/app/core/services/movie/movie.service';
@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})

export class GenresListComponent implements OnInit {
 
  genres: Genre[]=[];
  currentGenres: Genre[]=[];
  listedGenres: Genre[]=[];

  pages: Map<number, Genre>=new Map();
  currentPage: number=-1;

  constructor(private genreService: GenresService, 
              private movieService: MovieService) { 

  }

  ngOnInit(): void { 
    this.updateGenres();
  }

  updateGenres(){
    this.genreService.getGenres().then(
      response => {
        this.genres = response.genres as Genre[];
        this.getGenres(1)
        
      }, error => {
        console.error(error);
    })
  }
  
  /** pageNavigation values: 1 (nextPage), -1(pastPage) */
  getGenres(pageNavigation: number){
    this.currentPage+=pageNavigation;
    window.scrollTo(0, 0);
    this.currentGenres = this.listedGenres.slice(this.currentPage*3, (this.currentPage*3)+3);
    
    if(this.currentGenres.length==0){
      for(let i=0; i<3 && this.listedGenres.length!==this.genres.length; i++ ){
        let newGenre = this.genres[(Math.floor(Math.random() * this.genres.length))];
        while(this.listedGenres.some(genre => genre.id === newGenre.id)){
          newGenre= this.genres[(Math.floor(Math.random() * this.genres.length))];
        }
        this.listedGenres.push(newGenre);
        this.currentGenres.push(newGenre);
        this.getMoviesByGenre(newGenre);
      }
    }
  }

  getMoviesByGenre(genre: Genre){
    if( genre.page === undefined ) genre.page = 1;
    this.movieService.getByGenre(genre.page, genre.id, "popularity.desc").then(
      response =>{
        genre.movies=(response.results as Movie[]).splice(0,12);
      },
      error => console.error(error)
    )
  }

  changeGenrePage(pageGenreNavigation: number, genre: Genre){
    genre.page+= pageGenreNavigation;
    this.getMoviesByGenre(genre);
  }

}
