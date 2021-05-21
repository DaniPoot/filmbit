import { Component, OnInit } from '@angular/core';
import { Genre } from '../Genre';
import { Movie } from '../Movie';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})

export class GenresListComponent implements OnInit {

  pages: Map<number, Genre>=new Map();
  currentPage: number=0;
  genres: Array<Genre>=[];
  allGenres: Array<Genre>=[{"id":28,"name":"Acción"},{"id":12,"name":"Aventura"},{"id":16,"name":"Animación"},{"id":35,"name":"Comedia"},{"id":80,"name":"Crimen"},{"id":99,"name":"Documental"},{"id":18,"name":"Drama"},{"id":10751,"name":"Familia"},{"id":14,"name":"Fantasía"},{"id":36,"name":"Historia"},{"id":27,"name":"Terror"},{"id":10402,"name":"Música"},{"id":9648,"name":"Misterio"},{"id":10749,"name":"Romance"},{"id":878,"name":"Ciencia ficción"},{"id":10770,"name":"Película de TV"},{"id":53,"name":"Suspense"},{"id":10752,"name":"Bélica"},{"id":37,"name":"Western"}];
  movies: Array<Movie> = [
    {title:"Mortal Kombat", id: 1, backdrop: "/6ELCZlTA5lGUops70hKdB83WJxH.jpg", poster: "/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg"},
    {title:"Vanquish", id: 2, backdrop: "/mYM8x2Atv4MaLulaV0KVJWI1Djv.jpg", poster: "/AoWY1gkcNzabh229Icboa1Ff0BM.jpg"},
    {title:"Godzilla vs. Kong", id: 3, backdrop: "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg", poster: "/yJTk4eqQd9Yo5REpFbTSOMkbSgn.jpg"},
    {title:"Nadie", id: 4, backdrop: "/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg", poster: "/ddO5a3tMPpQutSDQO1bESgLWadB.jpg"},
    {title:"Ruega por nosotros", id: 5, backdrop: "/lkInRiMtLgl9u9xE0By5hqf66K8.jpg", poster: "/hPoOn553ARmSQl0ChKTlGDvYq9x.jpg"},
    {title:"Mortal Kombat", id: 1, backdrop: "/6ELCZlTA5lGUops70hKdB83WJxH.jpg", poster: "/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg"},
    {title:"Vanquish", id: 2, backdrop: "/mYM8x2Atv4MaLulaV0KVJWI1Djv.jpg", poster: "/AoWY1gkcNzabh229Icboa1Ff0BM.jpg"},
    {title:"Godzilla vs. Kong", id: 3, backdrop: "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg", poster: "/yJTk4eqQd9Yo5REpFbTSOMkbSgn.jpg"},
    {title:"Nadie", id: 4, backdrop: "/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg", poster: "/ddO5a3tMPpQutSDQO1bESgLWadB.jpg"},
    {title:"Ruega por nosotros", id: 5, backdrop: "/lkInRiMtLgl9u9xE0By5hqf66K8.jpg", poster: "/hPoOn553ARmSQl0ChKTlGDvYq9x.jpg"},
    {title:"Nadie", id: 4, backdrop: "/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg", poster: "/ddO5a3tMPpQutSDQO1bESgLWadB.jpg"},
    {title:"Ruega por nosotros", id: 5, backdrop: "/lkInRiMtLgl9u9xE0By5hqf66K8.jpg", poster: "/hPoOn553ARmSQl0ChKTlGDvYq9x.jpg"},
  ]

  constructor() { }

  ngOnInit(): void {
    this.changePage(1);
  }

  /** pageNavigation values: 1 (nextPage), -1(pastPage) */
  changePage(pageNavigation: number){
    this.currentPage+= pageNavigation;
    if(this.currentPage>0 && this.currentPage< this.allGenres.length/3){
      this.genres = this.allGenres.filter(
        (genre, index)=> (index >= (this.currentPage*3)-2)&&(index <= (this.currentPage*3)) 
      );
      window.scrollTo(0, 0);
    }
  }

  changeGenrePage(pageGenreNavigation: number, genreId: number){
    alert(pageGenreNavigation+" genre: "+ genreId);
  }

}
