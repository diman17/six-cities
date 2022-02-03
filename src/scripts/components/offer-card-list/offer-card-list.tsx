import React from 'react';
import OfferCard from '../offer-card/offer-card';

import type { Offers } from '../../mocks/offers';

type OfferCardListProps = {
  offers: Offers;
};

export default function OfferList(props: OfferCardListProps): JSX.Element {
  const { offers } = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map(
        (offer): JSX.Element => (
          <OfferCard key={offer.id} offer={offer} />
        ),
      )}
    </div>
  );
}
