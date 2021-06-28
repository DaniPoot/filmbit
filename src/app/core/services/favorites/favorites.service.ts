import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorite } from '../../classes/favorite/favorite';
import { User } from '../../classes/user/user';



@Injectable({
  providedIn: 'root'
})

export class FavoritesService {
  private URL = 'http://localhost:3000/favorites';
  private token = localStorage.getItem('token');
  private user = JSON.parse(localStorage.getItem('user')||"{}") as User;

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getFavorites(){
    return new Promise<Favorite[]>((resolve, reject) => {
      this.http.get(this.URL + '/' + this.user.id, 
        { headers:{'Authorization': 'Bearer '+ this.token} 
      })
      .toPromise()
      .then( (response) => {
        resolve(response as Favorite[])
      }, (error) => {
        reject(error);
      })
    })
  }

  isFavorite(id_movie: number){
    return new Promise<Boolean>((resolve, reject) => {
      this.http.get(this.URL + '/' + this.user.id + "/"+ id_movie, 
        { headers:{'Authorization': 'Bearer '+ this.token} 
      })
      .toPromise()
      .then( (response) => {
        resolve(response? true: false)
      }, (error) => {
        reject(error);
      })
    })
  }

  addFavorite(id_movie: number){
    return new Promise((resolve, reject) => {
      this.http.post(this.URL, {'id_user': this.user.id , id_movie},
        { headers:{'Authorization': 'Bearer '+ this.token} 
      })
      .toPromise()
      .then( (response) => {
        resolve(response)
      }, (error) => {
        reject(error);
      })
    })
  }

  removeFavorite(id_movie: number){
    return new Promise((resolve, reject) => {
      this.http.delete(this.URL +'/'+ this.user.id +'/'+ id_movie,
        { headers:{'Authorization': 'Bearer '+ this.token} 
      })
      .toPromise()
      .then( (response) => {
        resolve(response)
      }, (error) => {
        reject(error);
      })
    })
  }
}
