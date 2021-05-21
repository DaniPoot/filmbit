import { Component, OnInit } from '@angular/core';
import { Movie } from '../../home/Movie';

@Component({
  selector: 'app-movies-found',
  templateUrl: './movies-found.component.html',
  styleUrls: ['./movies-found.component.css']
})
export class MoviesFoundComponent implements OnInit {
  movies: Array<Movie> = [ ];

  constructor() { }

  ngOnInit(): void {
    
    window.setTimeout(()=>{
      this.movies=[ {title:"Mortal Kombat", id: 1, backdrop: "/6ELCZlTA5lGUops70hKdB83WJxH.jpg", poster: "/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg"},
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
  ];
    }, 2000);
  }

}
