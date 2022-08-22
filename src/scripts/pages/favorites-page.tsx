import React from 'react';
import Header from '../components/header';
import FavoritesListByCity from '../components/favorites-list-by-city';
import { getFavoriteOffersByCity } from '../utils/common';
import { Offers } from '../types/types';

type FavoritesPageProps = {
  offers: Offers;
};

export default function FavoritesPage(props: FavoritesPageProps): JSX.Element {
  const { offers } = props;
  const favoriteOffersByCity = getFavoriteOffersByCity(offers);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(favoriteOffersByCity).map((city) => (
                <FavoritesListByCity key={Date.now() + Math.random()} favoriteOffers={favoriteOffersByCity[city]} />
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}
