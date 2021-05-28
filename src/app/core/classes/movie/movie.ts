import { Genre } from "../genre/genre";
import { ProductionCompany } from "../production-company/production-company";

export class Movie {

    id: number;
    title: string;
    backdrop_path: string;
    poster_path: string;
    genres: Genre[];
    overview: string;
    production_companies: ProductionCompany[];
    release_date: string;
    vote_average: number; 


    constructor(id: number, title: string, backdrop: string, poster: string){
        this.id = id;
        this.title = title;
        this.backdrop_path = backdrop;
        this.poster_path = poster;
        this.genres=[];
        this. overview="";
        this.production_companies = [];
        this.release_date="";
        this.vote_average = 0;
    }

}