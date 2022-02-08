import React, { useState } from 'react';
import OfferCard from '../offer-card/offer-card';

import type { Offer, Offers } from '../../mocks/offers';

type OfferCardListProps = {
  offers: Offers;
};

type HoveredOffer = null | Offer;

export default function OfferList(props: OfferCardListProps): JSX.Element {
  const { offers } = props;

  const [hoveredOffer, setHoveredOffer] = useState<HoveredOffer>(null);

  const handleOfferMouseEnter = (offer: Offer): void => {
    setHoveredOffer(offer);
  };

  const handleOfferMouseLeave = (): void => {
    setHoveredOffer(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map(
        (offer): JSX.Element => (
          <OfferCard
            key={offer.id}
            offer={offer}
            handleOfferMouseEnter={handleOfferMouseEnter}
            handleOfferMouseLeave={handleOfferMouseLeave}
          />
        ),
      )}
    </div>
  );
}
