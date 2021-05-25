export class Movie {

    id: number;
    title: string;
    backdrop_path: string;
    poster_path: string;

    constructor(id: number, title: string, backdrop: string, poster: string){
        this.id = id;
        this.title = title;
        this.backdrop_path = backdrop;
        this.poster_path = poster;
    }

}