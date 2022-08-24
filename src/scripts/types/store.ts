import { changeCurrentCity, changeCurrentSortType } from '../store/actions';

export type State = {
  currentCity: string;
  currentSortType: string;
};

export type Actions = ReturnType<typeof changeCurrentCity> | ReturnType<typeof changeCurrentSortType>;
