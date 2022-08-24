import { CITIES, sortType } from '../constants';
import { Actions, State } from '../types/store';
import { ActionType } from './actions';

const initialState: State = {
  currentCity: CITIES[0].name,
  currentSortType: sortType.popular,
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCurrentCity:
      return { ...state, currentCity: action.payload };
    case ActionType.ChangeCurrentSortType:
      return { ...state, currentSortType: action.payload };
    default:
      return state;
  }
};

export default reducer;
