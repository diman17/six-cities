import { faker } from '@faker-js/faker';
import { CITIES, goods, type } from '../constants';

const getRandomBoolean = () => Math.random() < 0.5;

const getRandomIntegerNumber = (min: number, max: number) => Math.floor(min + Math.random() * (max + 1 - min));

const getRandomArrayItem = <T>(array: T[]): T => {
  const randomIndex = getRandomIntegerNumber(0, array.length - 1);
  return array[randomIndex];
};

const getRandomInteriorImage = (index: number) => {
  const number = getRandomIntegerNumber(1, index);
  return `img/interiors/${number}-min.jpg`;
};

const getRandomImageArray = (): string[] => {
  const max = getRandomIntegerNumber(1, 6);
  const uniqRandomNumbers = new Set();

  let i = 1;
  while (i <= max) {
    const randomNumber = getRandomIntegerNumber(1, 43);
    const randomImage = getRandomInteriorImage(randomNumber);

    if (!uniqRandomNumbers.has(randomImage)) {
      uniqRandomNumbers.add(randomImage);
      i++;
    }
  }

  return new Array(max).fill('').map((_, i) => Array.from(uniqRandomNumbers)[i] as string);
};

const getRandomArrayFromArray = <T>(array: T[]): T[] => {
  const max = getRandomIntegerNumber(1, array.length);
  const uniqRandomNumbers = new Set();

  let i = 1;
  while (i <= max) {
    const randomIndex = getRandomIntegerNumber(0, array.length - 1);

    if (!uniqRandomNumbers.has(randomIndex)) {
      uniqRandomNumbers.add(randomIndex);
      i++;
    }
  }

  return new Array(max).fill('').map((_, i) => array[Array.from(uniqRandomNumbers)[i] as number]);
};

const getRandomLocationOfCity = (cityLatitude: number, cityLongitude: number) => {
  const latitude = getRandomIntegerNumber(0, 50);
  const longitude = getRandomIntegerNumber(0, 50);

  const plusOrMinus = getRandomBoolean() ? -1 : 1;
  return {
    latitude: cityLatitude + plusOrMinus * +`0.0${latitude}`,
    longitude: cityLongitude + plusOrMinus * +`0.0${longitude}`,
    zoom: 8,
  };
};

const getRandomOffers = () => {
  const totalOffers = getRandomIntegerNumber(20, 43);

  return new Array(totalOffers).fill('').map(() => {
    const city = getRandomArrayItem(CITIES);

    return {
      bedrooms: getRandomIntegerNumber(1, 4),
      city,
      description: faker.lorem.sentences(),
      goods: getRandomArrayFromArray<string>(goods),
      host: {
        avatar_url: faker.image.avatar(),
        id: Date.now() + Math.random(),
        isPro: getRandomBoolean(),
        name: faker.name.firstName(),
      },
      id: Date.now() + Math.random(),
      images: getRandomImageArray(),
      isFavorite: getRandomBoolean(),
      isPremium: getRandomBoolean(),
      location: getRandomLocationOfCity(city.location.latitude, city.location.longitude),
      maxAdults: getRandomIntegerNumber(1, 4),
      previewImage: getRandomInteriorImage(43),
      price: getRandomIntegerNumber(5, 25) * 10,
      rating: getRandomIntegerNumber(20, 100),
      title: faker.lorem.sentence(),
      type: getRandomArrayItem(type),
    };
  });
};

const offers = getRandomOffers();

export default offers;
