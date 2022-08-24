export enum ActionType {
  ChangeCurrentCity = 'changeCurrentCity',
  ChangeCurrentSortType = 'changeCurrentSortType',
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
