import { Movie } from '../movie/movie';

export class Genre {

    id: number;
    name: string;
    page: number= 1;
    movies: Movie[];
 
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
        this.movies = [];
    }
    
}
