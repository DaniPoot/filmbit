import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Movie } from '../../classes/movie/movie';

const enum endpoint{
  callback = '&callback=JSONP_CALLBACK',
  language ='&language=es',
  movie = '/search/movie',
  query = '&query=',
  page = '&page='
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

  findMovie(page: number, query: string){
    const url = this.URL + endpoint.movie + this.api_key + endpoint.language + endpoint.query + query + endpoint.page + page.toString() + endpoint.callback;
    let movie = this.http.jsonp(url, "");
    return movie.pipe(map((data: any) => data.results));

    /*
    let promise = new Promise<Array<Movie>>((resolve, reject) => {
      datos.toPromise()
       .then( (response) => {
          resolve(response as Array<Movie>)
       }, (error) => {
           reject(error);
       })
    }
    );
    return promise; */
  }
}
