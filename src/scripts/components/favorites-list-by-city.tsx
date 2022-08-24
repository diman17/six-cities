import React from 'react';
import { Offers } from '../types/offers';
import FavoritesCard from './favorites-card';

type FavoritesListByCityProps = {
  favoriteOffers: {
    cityName: string;
    offers: Offers;
  };
};

export default function FavoritesListByCity(props: FavoritesListByCityProps) {
  const { favoriteOffers } = props;
  const { cityName, offers } = favoriteOffers;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <FavoritesCard key={offer.id} offer={offer} />
        ))}
      </div>
    </li>
  );
}
