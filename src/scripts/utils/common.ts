import { Offers } from '../types/types';

export type FavoriteOffersByCity = {
  [key: string]: {
    cityName: string;
    offers: Offers;
  };
};

export const getFavoriteOffersByCity = (offers: Offers): FavoriteOffersByCity => {
  const cities = new Set<string>();
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  favoriteOffers.forEach((offer) => cities.add(offer.city.name));

  const result: FavoriteOffersByCity = Array.from(cities).reduce((accumulator: FavoriteOffersByCity, currentValue) => {
    const previousValue = accumulator;

    previousValue[currentValue] = {
      cityName: currentValue,
      offers: [],
    };

    return previousValue;
  }, {});

  favoriteOffers.forEach((offer) => {
    result[offer.city.name].offers.push(offer);
  });

  return result;
};

export const getOffersCity = (city: string, offers: Offers): Offers =>
  offers.filter((offer) => offer.city.name === city);
