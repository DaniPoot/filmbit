import { Injectable } from '@angular/core';
import { GenreResponse } from '../../classes/genre/genre-response';
import {HttpClient} from '@angular/common/http';
const enum endpoint{
  genres_by_movie= "/genre/movie/list",
  language ="&language=es",
  page = "&page=",
}

@Injectable({
  providedIn: 'root'
})

export class GenresService {

  private URL="https://api.themoviedb.org/3";
  private api_key ="?api_key=776fed7aeb25d8885168ca470dc19a9f";

  constructor(private http: HttpClient) {
    this.http = http;
  }
  
  getGenres(){
    return new Promise<GenreResponse>((resolve, reject) => {
      this.http.get(this.URL + endpoint.genres_by_movie + this.api_key + endpoint.language)
      .toPromise()
      .then( (response) => {
        resolve(response as GenreResponse)
      }, (error) => {
        reject(error);
      })
    })
  }
}
