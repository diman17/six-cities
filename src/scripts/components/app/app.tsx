import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Offers } from '../../types/types';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import MainPage from '../main-page/main-page';
import PropertyPage from '../property-page/property-page';

type AppProps = {
  offers: Offers;
};

type RequireAuthProps = {
  authStatus: boolean;
  children: JSX.Element;
};

function RequireAuth(props: RequireAuthProps) {
  const { authStatus, children } = props;

  const location = useLocation();

  if (!authStatus) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

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
            <RequireAuth authStatus={authStatus}>
              <FavoritesPage offers={offers} />
            </RequireAuth>
          }
        />
        <Route path="/offer/:id" element={<PropertyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
