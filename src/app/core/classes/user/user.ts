import { Movie } from '../movie/movie';
export class User {
	
	private _username: string;
	private _image: string;
	private _favoriteList: Movie[];

	constructor(
		username: string,
		image: string,
		favoriteList: Movie[]
	){
		this._username=username;
		this._image=image;
		this._favoriteList=favoriteList;
	}
	
	get username(){
        return this._username;
    }

	get image(){
        return this._image;
    }

	get favoriteList(){
        return this._favoriteList;
    }


	addFavorite(movie: Movie): void {

	}

}