import { Cast } from './cast';

export class CastResponse{
    id: number;
    cast: Cast[];

    constructor(id: number){
        this.id= id;
        this.cast=[];
    }
}