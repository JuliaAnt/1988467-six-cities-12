import { Review } from '../types/review';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const reviews: Review[] = [
  {
    id: 1,
    picture: `${AVATAR_URL}?rnd=${Math.random()}`,
    userName: 'John',
    rating: 4,
    reviewDate: '2022-05-15T06:40:56.845Z',
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
  },
  {
    id: 2,
    picture: `${AVATAR_URL}?rnd=${Math.random()}`,
    userName: 'Jim',
    rating: 4.5,
    reviewDate: '2022-06-25T06:40:56.845Z',
    comment: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
  },
  {
    id: 3,
    picture: `${AVATAR_URL}?rnd=${Math.random()}`,
    userName: 'Jack',
    rating: 3.3,
    reviewDate: '2022-09-11T06:40:56.845Z',
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
  },
];

