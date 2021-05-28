import { Review } from "./review";

export class ReviewResponse{
    id: number;
    results: Review[]

    constructor(id: number){
        this.id = id;
        this.results=[];
    }
}