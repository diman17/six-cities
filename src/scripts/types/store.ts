import { changeCurrentCity, changeCurrentSortType, changeOffersByCurrentCity } from '../store/actions';
import { Offers } from './offers';

export type State = {
  currentCity: string;
  currentSortType: string;
  offersByCurrentCity: Offers;
};

export type Actions =
  | ReturnType<typeof changeCurrentCity>
  | ReturnType<typeof changeCurrentSortType>
  | ReturnType<typeof changeOffersByCurrentCity>;
