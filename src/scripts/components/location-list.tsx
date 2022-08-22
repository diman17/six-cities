import React from 'react';

type CityListProps = {
  cities: string[];
  currentCity: string;
  setCurrentCity: (city: string) => void;
};

export default function CityList(props: CityListProps) {
  const { cities, currentCity, setCurrentCity } = props;

  const handleClick = (city: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    setCurrentCity(city);
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => {
        if (city === currentCity) {
          return (
            <li key={city} className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active">
                <span>{city}</span>
              </a>
            </li>
          );
        }
        return (
          <li key={city} className="locations__item">
            <a onClick={handleClick(city)} className="locations__item-link tabs__item">
              <span>{city}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
