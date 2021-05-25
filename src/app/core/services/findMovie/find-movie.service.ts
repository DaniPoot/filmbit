import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MovieResponse } from '../../classes/movie/movie-response';


const enum endpoint{
  language ='&language=la',
  movie = '/search/movie',
  query = '&query=',
  page = '&page=1',
  adultContent ='&include_adult=false'
}

@Injectable({
  providedIn: 'root'
})
export class FindMovieService {
  private URL = 'https://api.themoviedb.org/3';
  private api_key = '?api_key=776fed7aeb25d8885168ca470dc19a9f';

  constructor(private http: HttpClient) {
    this.http = http;
  }

  findMovie(query: string){
    return new Promise<MovieResponse>((resolve, reject) => {
      this.http.get(this.URL + endpoint.movie + this.api_key + endpoint.language 
                    + endpoint.query + query + endpoint.page + endpoint.adultContent)
      .toPromise()
      .then( (response) => {
        resolve(response as MovieResponse)
        
      }, (error) => {
        reject(error);
      })
    })
  }

}
