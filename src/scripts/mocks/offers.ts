export type Offer = {
  id: number;
  city: {
    name: string;
    location: number[];
  };
  isPremium: boolean;
  image: string;
  price: number;
  isFavorite: boolean;
  rating: number;
  name: string;
  type: string;
  location: number[];
};

export type Offers = Offer[];

export const offers: Offers = [
  {
    id: Date.now() + Math.random(),
    city: {
      name: 'Amsterdam',
      location: [52.38333, 4.9],
    },
    isPremium: true,
    image: 'img/apartment-01.jpg',
    price: 120,
    isFavorite: true,
    rating: 80,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    location: [52.37835606367097, 4.886918883572101],
  },
  {
    id: Date.now() + Math.random(),
    city: {
      name: 'Cologne',
      location: [1, 1],
    },
    isPremium: false,
    image: 'img/room.jpg',
    price: 135,
    isFavorite: false,
    rating: 65,
    name: 'Nice room',
    type: 'Private room',
    location: [1, 1],
  },
  {
    id: Date.now() + Math.random(),
    city: {
      name: 'Amsterdam',
      location: [52.38333, 4.9],
    },
    isPremium: false,
    image: 'img/room.jpg',
    price: 80,
    isFavorite: false,
    rating: 80,
    name: 'Wood and stone place',
    type: 'Private room',
    location: [52.355763082725225, 4.93029513756341],
  },
  {
    id: Date.now() + Math.random(),
    city: {
      name: 'Amsterdam',
      location: [52.38333, 4.9],
    },
    isPremium: false,
    image: 'img/apartment-02.jpg',
    price: 132,
    isFavorite: false,
    rating: 80,
    name: 'Canal View Prinsengrach',
    type: 'Apartment',
    location: [52.37737543514637, 4.826915570441372],
  },
  {
    id: Date.now() + Math.random(),
    city: {
      name: 'Amsterdam',
      location: [52.38333, 4.9],
    },
    isPremium: true,
    image: 'img/apartment-03.jpg',
    price: 180,
    isFavorite: true,
    rating: 100,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    location: [52.387136306818746, 4.926609943924752],
  },
];
