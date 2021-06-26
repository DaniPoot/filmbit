import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/core/classes/movie/movie';
import { MovieService } from 'src/app/core/services/movie/movie.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {
  public favoritesList: Array<Object> = [] 
  public favoritesMoviesList: Array<Movie> = []

  constructor(private router : Router, private moviesService: MovieService) { }

  ngOnInit(): void {

  }

  seeDetails(movieId: number){
    this.router.navigate(['/details/'+ movieId]);
  }

}
