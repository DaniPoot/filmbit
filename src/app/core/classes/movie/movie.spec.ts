import { Movie } from './movie';

describe('Movie', () => {
  it('should create an instance', () => {
    expect(new Movie(id, title, backdrop,poster)).toBeTruthy();
  });
});
