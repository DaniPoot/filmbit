import { AuthorDetails } from "./author-details";

export class Review{
    author: string;
    author_details: AuthorDetails;
    content: string;


    constructor(author: string, content: string, details: AuthorDetails){
        this.author = author;
        this.author_details = details;
        this.content = content;
    }
}

export class ReviewFilmbit{
    id_user: number
    id_movie: number
    body: string

    constructor(){
        this.id_user=0
        this.id_movie=0
        this.body= ""
    }
}