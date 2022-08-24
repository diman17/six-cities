export const CITIES = [
  {
    location: {
      latitude: 48.8566,
      longitude: 2.3322,
      zoom: 12,
    },
    name: 'Paris',
  },
  {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 12,
    },
    name: 'Cologne',
  },
  {
    location: {
      latitude: 50.850346,
      longitude: 4.351721,
      zoom: 12,
    },
    name: 'Brussels',
  },
  {
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 12,
    },
    name: 'Amsterdam',
  },
  {
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 12,
    },
    name: 'Hamburg',
  },
  {
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 12,
    },
    name: 'Dusseldorf',
  },
];

export const goods = [
  'Heating',
  'Kitchen',
  'Cable TV',
  'Washing machine',
  'Coffee machine',
  'Dishwasher',
  'Wi-Fi',
  'Balcony',
];

export const type = ['Apartment', 'Private room', 'House', 'Hotel'];

export const sortType: {
  [key: string]: string;
} = {
  popular: 'Popular',
  lowToHigh: 'Price: low to high',
  highToLow: 'Price: high to low',
  topRated: 'Top rated first',
};
