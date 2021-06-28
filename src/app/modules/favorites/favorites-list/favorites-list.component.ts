import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/core/classes/movie/movie';
import { FavoritesService } from 'src/app/core/services/favorites/favorites.service';
import { MovieService } from 'src/app/core/services/movie/movie.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {
  public favoritesList: Array<Object> = [] 
  public favoritesMoviesList: Array<Movie> = []

  constructor(private router : Router, private moviesService: MovieService, private favoriteService: FavoritesService) { }

  ngOnInit(): void {
    this.favoriteService.getFavorites().then(
      response=>{ response.forEach(
        item=> this.moviesService.getDetails(item.id_movie).then(
          response=> {this.favoritesMoviesList.push(response)},
          error => console.error(error)
        ))
      },
      error => console.error(error)
      
    )
  }

  seeDetails(movieId: number){
    this.router.navigate(['/details/'+ movieId]);
  }

}
