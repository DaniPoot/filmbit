import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router'
import { Movie } from 'src/app/core/classes/movie/movie';
import { MovieService } from 'src/app/core/services/movie/movie.service';
import { SearchMoviesService } from 'src/app/core/services/shearchMovies/search-movies.service';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {

  public movies: Array<Movie> = [ ];
  public userIsSearch: boolean = false

  constructor(private activatedRouter : ActivatedRoute, private router : Router,
    private movieServices : MovieService, private search: SearchMoviesService) { }

  async ngOnInit(): Promise<void> {
    
    this.search.isSearching$.subscribe((value) => {
      this.userIsSearch = value
    })

    try {
      const movies = await this.movieServices.getByGenre(1,this.activatedRouter.snapshot.params.id, 'revenue.desc')
      this.movies = movies.results as Movie[];
    } catch (error) {
      console.error(error);
    }

  }

  seeDetails(movieId: number){
    this.router.navigate(['/details/'+ movieId]);
  }

}
