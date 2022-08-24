import { CITIES } from '../constants';
import { Actions, State } from '../types/store';
import { ActionType } from './actions';

const initialState: State = {
  currentCity: CITIES[0].name,
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCurrentCity:
      return { ...state, currentCity: action.payload };
    default:
      return state;
  }
};

export default reducer;
