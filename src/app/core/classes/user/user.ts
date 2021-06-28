import { Movie } from '../movie/movie';
export class User {
	
	private _username: string;
	private _image: string;
	private _favoriteList: Movie[];
	private _id: number;
	

	constructor(
		id: number,
		username: string,
		image: string,
		favoriteList: Movie[]
	){
		this._id=id;
		this._username=username;
		this._image=image;
		this._favoriteList=favoriteList;
	}

	get id(){
		return this._id;
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

}