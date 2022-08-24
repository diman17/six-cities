import { changeCurrentCity } from '../store/actions';

export type State = {
  currentCity: string;
};

export type Actions = ReturnType<typeof changeCurrentCity>;
