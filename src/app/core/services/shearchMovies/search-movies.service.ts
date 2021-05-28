import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {

  query$ = new EventEmitter<string>()
  isSearching$ = new EventEmitter<boolean>()

  constructor() { }
}
