import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MovieResponse } from '../../classes/movie/movie-response';

const enum endpoint{
  callback = '&callback=JSONP_CALLBACK',
  now_playing = '/movie/now_playing',
  by_genre ='/discover/movie',
  with_genre = '&with_genres=',
  language ='&language=es',
  sort_by = '&sort_by=',
  page = '&page='
}

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private URL = 'https://api.themoviedb.org/3';
  private api_key = '?api_key=776fed7aeb25d8885168ca470dc19a9f';

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getNewest(){
      return this.getMovies(this.URL + endpoint.now_playing + this.api_key 
                            + endpoint.language);
  }

  getByGenre(page: number, genre: number, sortBy: string){
    return this.getMovies(this.URL + endpoint.by_genre + this.api_key 
                          + endpoint.language + endpoint.sort_by+ sortBy 
                          + endpoint.page + page.toString() 
                          + endpoint.with_genre + genre.toString())
  }

  private getMovies(url: string){
    return new Promise<MovieResponse>((resolve, reject) => {
      this.http.get(url)
      .toPromise()
      .then( (response) => {
        resolve(response as MovieResponse)
      }, (error) => {
        reject(error);
      })
    })
  }
}