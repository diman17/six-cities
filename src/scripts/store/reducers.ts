import { CITIES, sortType } from '../constants';
import offers from '../mocks/offers';
import { Actions, State } from '../types/store';
import { getOffersByCity } from '../utils/common';
import { ActionType } from './actions';

const initialState: State = {
  currentCity: CITIES[0].name,
  currentSortType: sortType.popular,
  offersByCurrentCity: getOffersByCity(CITIES[0].name, offers),
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCurrentCity:
      return { ...state, currentCity: action.payload };
    case ActionType.ChangeCurrentSortType:
      return { ...state, currentSortType: action.payload };
    case ActionType.ChangeOffersByCurrentCity:
      return { ...state, offersByCurrentCity: action.payload };
    default:
      return state;
  }
};

export default reducer;
