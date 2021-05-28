import { Component, OnInit } from '@angular/core';
import { SearchMoviesService } from 'src/app/core/services/shearchMovies/search-movies.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public userIsSearch: boolean = false

  constructor(private search: SearchMoviesService) { }

  ngOnInit(): void {
    this.search.isSearching$.subscribe((value) => {
      this.userIsSearch = value
    })
  }

}
