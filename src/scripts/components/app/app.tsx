import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import MainPage from '../main-page/main-page';
import PropertyPage from '../property-page/property-page';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/offer/:id" element={<PropertyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
