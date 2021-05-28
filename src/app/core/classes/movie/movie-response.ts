import  { Movie } from './movie';

export class MovieResponse {
    page: number;
    results: Movie[]

    constructor(){
        this.page=0;
        this.results=[];
    }

}