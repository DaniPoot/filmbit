import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReviewFilmbit } from '../../classes/review/review';
import { User } from '../../classes/user/user';



@Injectable({
  providedIn: 'root'
})

export class ReviewsService {
  private URL = 'http://localhost:3000/reviews';
  private token = localStorage.getItem('token');
  private user = JSON.parse(localStorage.getItem('user')||"{}") as User;

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getPDF(){
    return new Promise((resolve, reject)=>{
      this.http.get(this.URL + '/PDF', 
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

  getCSV(){
    return new Promise((resolve, reject)=>{
      this.http.get(this.URL + '/CSV', 
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

  addReview(id_movie: number, body: string){
    return new Promise((resolve, reject) => {
      this.http.post(this.URL, {'id_user': this.user.id , id_movie, body},
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

  getReviews(id_movie: number){
    return new Promise<ReviewFilmbit[]>((resolve, reject)=>{
      this.http.get(this.URL + '/'+ id_movie, 
        { headers:{'Authorization': 'Bearer '+ this.token} 
      })
      .toPromise()
      .then( (response) => {
        resolve(response as ReviewFilmbit[])
      }, (error) => {
        reject(error);
      })
    })
  }
}
