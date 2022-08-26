import { Offers } from '../types/offers';
import { getOffersByCity, getSortedOffers } from '../utils/common';

export enum ActionType {
  ChangeCurrentCity = 'changeCurrentCity',
  ChangeCurrentSortType = 'changeCurrentSortType',
  ChangeOffersByCurrentCity = 'changeOffersByCurrentCity',
}

export const changeCurrentCity = (city: string) =>
  ({
    type: ActionType.ChangeCurrentCity,
    payload: city,
  } as const);

export const changeCurrentSortType = (sortType: string) =>
  ({
    type: ActionType.ChangeCurrentSortType,
    payload: sortType,
  } as const);

export const changeOffersByCurrentCity = (currentCity: string, offers: Offers, sort: string) =>
  ({
    type: ActionType.ChangeOffersByCurrentCity,
    payload: getOffersByCity(currentCity, getSortedOffers(offers, sort)),
  } as const);
