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