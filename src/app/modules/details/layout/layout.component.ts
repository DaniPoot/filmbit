import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Movie } from 'src/app/core/classes/movie/movie';
import { Review } from 'src/app/core/classes/review/review';
import { MovieService } from 'src/app/core/services/movie/movie.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  movie: Movie;
  
  constructor(private router: ActivatedRoute, private movieService: MovieService) { 
    this.movie = new Movie(0,  "" , "", "");
  }

  ngOnInit(): void {

    this.router.paramMap.subscribe( (params: ParamMap) => { 
      const id = Number(params.get("id"));
      this.getMovie(id);
    });
  }

  getMovie(id: number){
    this.movieService.getDetails(id).then(
      response => {
        this.movie = response as Movie
        console.log(this.movie);
        
      },error=>console.error(error) 
    )
  }
}
