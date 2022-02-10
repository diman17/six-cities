export type Offer = {
  id: number;
  city: string;
  isPremium: boolean;
  image: string;
  price: number;
  isFavorite: boolean;
  rating: number;
  name: string;
  type: string;
};

export type Offers = Offer[];

export const offers: Offers = [
  {
    id: Date.now() + Math.random(),
    city: 'Amsterdam',
    isPremium: true,
    image: 'img/apartment-01.jpg',
    price: 120,
    isFavorite: true,
    rating: 80,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
  },
  // {
  //   id: Date.now() + Math.random(),
  //   city: 'Cologne',
  //   isPremium: false,
  //   image: 'img/room.jpg',
  //   price: 135,
  //   isFavorite: true,
  //   rating: 65,
  //   name: 'Nice room',
  //   type: 'Private room',
  // },
  {
    id: Date.now() + Math.random(),
    city: 'Amsterdam',
    isPremium: false,
    image: 'img/room.jpg',
    price: 80,
    isFavorite: true,
    rating: 80,
    name: 'Wood and stone place',
    type: 'Private room',
  },
  {
    id: Date.now() + Math.random(),
    city: 'Amsterdam',
    isPremium: false,
    image: 'img/apartment-02.jpg',
    price: 132,
    isFavorite: false,
    rating: 80,
    name: 'Canal View Prinsengrach',
    type: 'Apartment',
  },
  {
    id: Date.now() + Math.random(),
    city: 'Amsterdam',
    isPremium: true,
    image: 'img/apartment-03.jpg',
    price: 180,
    isFavorite: false,
    rating: 100,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },
];
