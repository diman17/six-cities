import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Header from '../components/header';
import { Offer, Offers } from '../types/offers';
import Map from '../components/map';
import Card from '../components/card';
import CityList from '../components/city-list';
import { CITIES } from '../constants';
import useHover from '../hooks/useHover';
import { State } from '../types/store';
import Sorting from '../components/sorting';

const mapState = (state: State) => ({
  currentCity: state.currentCity,
  offersByCurrentCity: state.offersByCurrentCity,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

type MainPageProps = {
  offers: Offers;
} & PropsFromRedux;

function MainPage(props: MainPageProps): JSX.Element {
  const { offers, currentCity, offersByCurrentCity } = props;
  const [hoveredOffer, handleOfferMouseEnter, handleOfferMouseLeave] = useHover<Offer>();

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList cities={CITIES} offers={offers} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersByCurrentCity.length} places to stay in {currentCity}
              </b>
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                {offersByCurrentCity.map(
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
                <Map hoveredOffer={hoveredOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default connector(MainPage);
