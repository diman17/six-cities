import React, { useState } from 'react';
import Header from '../components/header';
import { Offer, Offers } from '../types/types';
import Map from '../components/map';
import { getOffersByCity } from '../utils/common';
import Card from '../components/card';
import CityList from '../components/city-list';
import { CITIES } from '../constants';
import useHover from '../hooks/useHover';

type MainPageProps = {
  offers: Offers;
};

export default function MainPage(props: MainPageProps): JSX.Element {
  const { offers } = props;
  const [hoveredOffer, handleOfferMouseEnter, handleOfferMouseLeave] = useHover<Offer>();

  const [currentCity, setCurrentCity] = useState<string>(CITIES[3].name);
  const offersByCity = getOffersByCity(currentCity, offers);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList cities={CITIES} currentCity={currentCity} setCurrentCity={setCurrentCity} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersByCity.length} places to stay in {currentCity}
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {offersByCity.map(
                  (offer): JSX.Element => (
                    <Card
                      key={offer.id}
                      offer={offer}
                      handleOfferMouseEnter={handleOfferMouseEnter}
                      handleOfferMouseLeave={handleOfferMouseLeave}
                    />
                  ),
                )}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offersByCity={offersByCity} hoveredOffer={hoveredOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
