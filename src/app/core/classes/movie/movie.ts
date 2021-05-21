export class Movie {

    private id: number;
    private title: string;
    private backdrop_path: string;
    private poster_path: string;

    constructor(id: number, title: string, backdrop: string, poster: string){
        this.id = id;
        this.title = title;
        this.backdrop_path = backdrop;
        this.poster_path = poster;
    }

    set setId(id: number){
        this.id = id;
    }

    get getId(): number{
        return this.id;
    }

    set setTitle(title: string){
        this.title = title;
    }

    get getTitle(): string{
        return this.title;
    }

    set backdrop(backdrop: string){
        this.backdrop_path = backdrop;
    }

    get backdrop(): string{
        return this.backdrop_path;
    }

    set poster(poster: string){
        this.poster_path = poster;
    }

    get poster(): string{
        return this.poster_path;
    }

}