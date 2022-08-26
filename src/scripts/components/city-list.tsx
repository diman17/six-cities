import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { changeCurrentCity, changeOffersByCurrentCity } from '../store/actions';
import { City, Offers } from '../types/offers';
import { Actions, State } from '../types/store';

const mapState = (state: State) => ({
  currentSortType: state.currentSortType,
  currentCity: state.currentCity,
});

const mapDispatch = (dispatch: Dispatch<Actions>) => ({
  setCurrentCity(city: string) {
    dispatch(changeCurrentCity(city));
  },
  changeOffersByCurrentCity(currentCity: string, offers: Offers, sort: string) {
    dispatch(changeOffersByCurrentCity(currentCity, offers, sort));
  },
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type CityListProps = {
  cities: City[];
  offers: Offers;
} & PropsFromRedux;

function CityList(props: CityListProps) {
  const { cities, offers, currentSortType, currentCity, setCurrentCity, changeOffersByCurrentCity } = props;

  const handleClick = (city: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    setCurrentCity(city);
    changeOffersByCurrentCity(city, offers, currentSortType);
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
