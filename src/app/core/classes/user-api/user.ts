export class User {
	private _email: string;
	private _name: string;
	private _id: number;

	constructor(
		email: string,
		name: string,
		id: number
	){
		this._email = email;
		this._name = name;
		this._id = id;
	}
	
	get email(){
        return this._email;
    }

	get id(){
        return this._id;
    }

	get name(){
        return this._name;
    }

}
