import { Injectable } from '@angular/core';
import { Genre } from '../../class-genre/genre';
import {HttpClient, HttpRequest} from '@angular/common/http';
import { map } from 'rxjs/operators';
const enum endpoint{
  genres_by_movie= "/genre/movie/list",
  language ="&language=es",
  page = "&page=",
  callback= "&callback=JSONP_CALLBACK"
}

@Injectable({
  providedIn: 'root'
})

export class GenresService {

  private URL="https://api.themoviedb.org/3";
  private api_key ="?api_key=776fed7aeb25d8885168ca470dc19a9f";
  private genres: Genre[]= [];
  private genres_listed: Genre[]=[];


  constructor(private http: HttpClient) {
    this.http = http;
    this.updateGenres();
  }
  
  updateGenres(){
    //Actualizamos los géneros
    const url = this.URL+endpoint.genres_by_movie+this.api_key+endpoint.language+endpoint.callback;
    let result = this.http.jsonp(url, "");
    let save :any;
    let resultpipe = result.pipe(map((data: any) => data));
    resultpipe.subscribe(data => console.log(data));
    console.log(save);
  }

  get Genres():Genre[]{
    return this.genres;
  }

  getRandomGenre(){
    
  }
}
