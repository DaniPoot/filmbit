import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieResponse } from '../../classes/movie/movie-response';
import { Movie } from '../../classes/movie/movie';
import { Cast } from '../../classes/cast/cast';
import { CastResponse } from '../../classes/cast/cast-response';
import { Review } from '../../classes/review/review';
import { ReviewResponse } from '../../classes/review/review-response';

const enum endpoint{
  now_playing = '/movie/now_playing',
  by_genre ='/discover/movie',
  movie = '/movie/',
  similar = '/similar/',
  reviews = '/reviews',
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

  getSimilar(id: number){
    return this.getMovies(this.URL + endpoint.movie + id 
                          + endpoint.similar + this.api_key + endpoint.language)
  }

  getDetails(id: number){
    return new Promise<Movie>((resolve, reject) => {
      this.http.get(this.URL + endpoint.movie + id
                    + this.api_key + endpoint.language)
      .toPromise()
      .then( (response) => {
        resolve(response as Movie)
      }, (error) => {
        reject(error);
      })
    })
  }

  getCast(id: number){
    return new Promise<Cast[]>((resolve, reject) => {
      this.http.get(this.URL+ endpoint.movie + id + this.api_key + endpoint.language)
      .toPromise()
      .then( (response) => {
        resolve((response as CastResponse).cast as Cast[])
      }, (error) => {
        reject(error);
      })
    })
  }

  getReviews(id: number){
    return new Promise<Review[]>((resolve, reject) => {
      this.http.get(this.URL+ endpoint.movie + id + endpoint.reviews + 
                    this.api_key+endpoint.language)
      .toPromise()
      .then( (response) => {
        resolve((response as ReviewResponse).results as Review[])
      }, (error) => {
        reject(error);
      })
    })
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