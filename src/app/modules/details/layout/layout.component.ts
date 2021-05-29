import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Movie } from 'src/app/core/classes/movie/movie';
import { MovieService } from 'src/app/core/services/movie/movie.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  movie: Movie;
  id: number;

  constructor(private router: ActivatedRoute, private movieService: MovieService) { 
    this.movie = new Movie(0,  "" , "", "");
    this.id=0;
  }

  ngOnInit(): void {

    this.router.paramMap.subscribe( (params: ParamMap) => { 
      this.id = Number(params.get("id"));
      this.getMovie();
    });
  }

  getMovie(){
    this.movieService.getDetails(this.id).then(
      response => {
        this.movie = response as Movie
        
      },error=>console.error(error) 
    )
  }

  changeTab(show: string, fade: string){
    const tabShow = document.querySelector("#tab"+show);
    const contentShow = document.querySelector("#tabContent"+show);
    const tabFade = document.querySelector("#tab"+fade);
    const contentFade = document.querySelector("#tabContent"+fade);
    
    if(tabShow) tabShow.className="tab selected"
    if(contentShow) contentShow.className="tab-content tab-showed"
    
    if(tabFade) tabFade.className="tab"
    if(contentFade) contentFade.className="tab-content"
  
  }
}
