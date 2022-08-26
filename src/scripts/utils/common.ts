import { sortType } from '../constants';
import { FavoriteOffersByCity, Offers } from '../types/offers';

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

export const getOffersByCity = (city: string, offers: Offers): Offers =>
  offers.filter((offer) => offer.city.name === city);

export const getSortedOffers = (offers: Offers, type = sortType.popular) => {
  const sortedOffers = [...offers];
  switch (type) {
    case sortType.popular:
      return offers;
    case sortType.lowToHigh:
      return sortedOffers.sort((a, b) => a.price - b.price);
    case sortType.highToLow:
      return sortedOffers.sort((a, b) => b.price - a.price);
    case sortType.topRated:
      return sortedOffers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};
