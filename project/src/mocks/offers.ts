import { Offer } from '../types/offer';
import { reviews } from './reviews';

const OFFER_IMG_URL = 'https://loremflickr.com/248/152?random=';
const AVATAR_URL = 'https://i.pravatar.cc/128';

// const picture: Picture = `${OFFER_IMG_URL}${Math.random()}`;

export const offers: Offer[] = [
  {
    id: 1,
    pictures: [
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
    ],
    title: 'Beautiful & luxurious studio at great location',
    mark: 'Premium',
    apartmentType: 'Apartment',
    bedrooms: '3 Bedrooms',
    adults: 'Max 4 adults',
    rating: 5,
    price: '120',
    insideList: [
      'Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV',
    ],
    hostUser: {
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      hostUserName: 'Angelina',
      hostUserStatus: 'Pro',
    },
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    review: reviews[0],
    isFavorite: true,
  },
  {
    id: 2,
    pictures: [
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
    ],
    title: 'Nice, cozy, warm big bed apartment',
    mark: 'Premium',
    apartmentType: 'Apartment',
    bedrooms: '3 Bedrooms',
    adults: 'Max 6 adults',
    rating: 4.2,
    price: '200',
    insideList: [
      'Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV',
    ],
    hostUser: {
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      hostUserName: 'Anna',
      hostUserStatus: 'Pro',
    },
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    review: reviews[1],
    isFavorite: false,
  },
  {
    id: 3,
    pictures: [
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
    ],
    title: 'Wood and stone place',
    mark: 'Premium',
    apartmentType: 'Hotel',
    bedrooms: '1 Bedroom',
    adults: 'Max 2 adults',
    rating: 3,
    price: '100',
    insideList: [
      'Wi-Fi', 'Heating', 'Fridge', 'Coffee machine', 'Towels', 'Bathrobes', 'Cabel TV', 'Hair dryer',
    ],
    hostUser: {
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      hostUserName: 'Antonio',
      hostUserStatus: 'Pro',
    },
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    review: reviews[2],
    isFavorite: false,
  },
  {
    id: 4,
    pictures: [
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
      `${OFFER_IMG_URL}${Math.random()}`,
    ],
    title: 'Beautiful & luxurious hotel room',
    mark: 'Premium',
    apartmentType: 'Hotel',
    bedrooms: '2 Bedrooms',
    adults: 'Max 4 adults',
    rating: 4.5,
    price: '150',
    insideList: [
      'Wi-Fi', 'Heating', 'Fridge', 'Coffee machine', 'Towels', 'Bathrobes', 'Cabel TV', 'Hair dryer', 'Two toilets',
    ],
    hostUser: {
      avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      hostUserName: 'Amelia',
      hostUserStatus: 'Pro',
    },
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    review: reviews[3],
    isFavorite: true,
  },
];
