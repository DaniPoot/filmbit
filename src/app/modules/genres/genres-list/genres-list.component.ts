import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router'
import { Movie } from 'src/app/core/classes/movie/movie';
import { MovieService } from 'src/app/core/services/movie/movie.service';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {

  public movies: Array<Movie> = [ ];

  constructor(private activatedRouter : ActivatedRoute, private movieServices : MovieService) { }

  async ngOnInit(): Promise<void> {
    console.log(this.activatedRouter.snapshot.params.id)
    try {
      const movies = await this.movieServices.getByGenre(1,this.activatedRouter.snapshot.params.id, 'popularity.asc')
      this.movies = movies.results as Movie[];
    } catch (error) {
      console.log(error);
    }

  }

}
