export class Movie {

    private _id: number;
    private _title: string;
    private _backdrop: string;
    private _poster: string;

    constructor(id: number, title: string, backdrop: string, poster: string){
        this._id = id;
        this._title = title;
        this._backdrop = backdrop;
        this._poster= poster;
    }

    set id(id: number){
        this._id = id;
    }

    get id(): number{
        return this._id;
    }

    set title(title: string){
        this._title = title;
    }

    get title(): string{
        return this._title;
    }

    set backdrop(backdrop: string){
        this._backdrop = backdrop;
    }

    get backdrop(): string{
        return this._backdrop
    }

    set poster(poster: string){
        this._poster = poster;
    }

    get poster(): string{
        return this._poster
    }

}