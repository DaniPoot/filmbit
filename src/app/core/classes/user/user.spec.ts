import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User(username:string, image:string,favoriteList: Movie[])).toBeTruthy();
  });
});
