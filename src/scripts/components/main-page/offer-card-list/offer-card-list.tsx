import React from 'react';
import OfferCard from '../offer-card/offer-card';
import { HoveredOffer, Offer, Offers } from '../../../types/types';

type OfferCardListProps = {
  offers: Offers;
  setHoveredOffer: (hoveredOffer: HoveredOffer) => void;
};

export default function OfferList(props: OfferCardListProps): JSX.Element {
  const { offers, setHoveredOffer } = props;

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
