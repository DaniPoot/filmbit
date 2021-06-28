import {User} from "../user/user";

export class ResponseAPI {
	private _token: string;
	private _user: User;

	constructor(
		token: string,
		user: User,
	){
		this._token = token;
		this._user = user;
	}
	
	get token(){
    return this._token;
  }

	get user(){
		return this._user;
	}

}
