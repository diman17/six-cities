import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Offers } from './types/types';
import FavoritesPage from './pages/favorites-page';
import LoginPage from './pages/login-page';
import MainPage from './pages/main-page';
import PropertyPage from './pages/property-page';
import WithRequireAuth from './hocs/with-require-auth';

type AppProps = {
  offers: Offers;
};

export default function App(props: AppProps): JSX.Element {
  const { offers } = props;

  const [authStatus, setAuthStatus] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage offers={offers} />} />
        <Route path="/login" element={<LoginPage setAuthStatus={setAuthStatus} />} />
        <Route
          path="/favorites"
          element={
            <WithRequireAuth authStatus={authStatus}>
              <FavoritesPage offers={offers} />
            </WithRequireAuth>
          }
        />
        <Route path="/offer/:id" element={<PropertyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
