import React, { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { changeCurrentCity } from '../store/actions';
import { City } from '../types/offers';
import { Actions } from '../types/store';

const mapDispatch = (dispatch: Dispatch<Actions>) => ({
  setCurrentCity(city: string) {
    dispatch(changeCurrentCity(city));
  },
});

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type CityListProps = {
  cities: City[];
  currentCity: string;
} & PropsFromRedux;

function CityList(props: CityListProps) {
  const { cities, currentCity, setCurrentCity } = props;

  const handleClick = (city: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    setCurrentCity(city);
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => {
        if (city.name === currentCity) {
          return (
            <li key={city.name} className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active">
                <span>{city.name}</span>
              </a>
            </li>
          );
        }
        return (
          <li key={city.name} className="locations__item">
            <a onClick={handleClick(city.name)} className="locations__item-link tabs__item">
              <span>{city.name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default connector(CityList);
