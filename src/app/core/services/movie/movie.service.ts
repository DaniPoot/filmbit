import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const enum endpoint{
  callback = '&callback=JSONP_CALLBACK',
  now_playing = '/movie/now_playing',
  by_genre ='/discover/movie',
  with_genre = '&with_genres=',
  language ='&language=es',
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
    const url = this.URL + endpoint.now_playing + this.api_key + endpoint.language + endpoint.callback;
    let movies = this.http.jsonp(url, "");
    return movies.pipe(map((data: any) => data.results));
  }

  getByGenre(page: number, genre: number){
    const url = this.URL + endpoint.by_genre + this.api_key + endpoint.language + endpoint.page + page.toString() + endpoint.with_genre + genre.toString() + endpoint.callback;
    let movies = this.http.jsonp(url, "");
    return movies.pipe(map((data: any) => data.results));
  }
}