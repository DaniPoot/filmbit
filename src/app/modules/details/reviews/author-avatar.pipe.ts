import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorAvatar'
})
export class AuthorAvatarPipe implements PipeTransform {
  
  transform(avatar_path: string){
    if(avatar_path){
      if(!avatar_path.includes('http')){
        avatar_path = 'https://image.tmdb.org/t/p/original'+ avatar_path;
      }else{
        avatar_path = avatar_path.substring(1,avatar_path.length);
      }
    }else{
      avatar_path = "https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png";
    }

    return avatar_path;
  }

}
