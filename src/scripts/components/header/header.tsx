import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link className="header__nav-link" to="/login">
                  <span className="header__signout">Sign in</span>
                </Link>
              </li>
              {/* <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                  <div className="header__avatar-wrapper user__avatar-wrapper" />
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </Link>
              </li> */}
              {/* <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  <span className="header__signout">Sign out</span>
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
