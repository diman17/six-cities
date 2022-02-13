import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Offers } from '../../types/types';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import MainPage from '../main-page/main-page';
import PropertyPage from '../property-page/property-page';

type AppProps = {
  offers: Offers;
};

export default function App(props: AppProps): JSX.Element {
  const { offers } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage offers={offers} />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="favorites" element={<FavoritesPage offers={offers} />} />
        <Route path="offer/:id" element={<PropertyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
