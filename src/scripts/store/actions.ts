export enum ActionType {
  ChangeCurrentCity = 'changeCurrentCity',
}

export const changeCurrentCity = (city: string) =>
  ({
    type: ActionType.ChangeCurrentCity,
    payload: city,
  } as const);
