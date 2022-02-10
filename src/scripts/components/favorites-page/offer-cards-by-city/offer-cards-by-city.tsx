import React from 'react';
import OfferCard from '../offer-card/offer-card';

import type { Offers } from '../../../mocks/offers';

type OfferCardsByCityProps = {
  favoriteOffers: {
    cityName: string;
    offers: Offers;
  };
};

export default function OfferCardsByCity(props: OfferCardsByCityProps) {
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
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </li>
  );
}
