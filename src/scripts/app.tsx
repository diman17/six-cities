import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FavoritesPage from './pages/favorites-page';
import LoginPage from './pages/login-page';
import MainPage from './pages/main-page';
import PropertyPage from './pages/property-page';
import WithRequireAuth from './hocs/with-require-auth';
import offers from './mocks/offers';

export default function App(): JSX.Element {
  const [authStatus, setAuthStatus] = useState(true);

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
