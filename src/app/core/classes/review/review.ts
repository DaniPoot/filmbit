export class Review{
    author: string;
    avatar_path: string;
    content: string;

    constructor(author: string, avatar: string, content: string){
        this.author = author;
        this.avatar_path = avatar;
        this.content = content;
    }
}