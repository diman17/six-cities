import React, { FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';

type CustomState = {
  from: { pathname: string };
};

type LoginPageProps = {
  setAuthStatus: (status: boolean) => void;
};

export default function LoginPage(props: LoginPageProps): JSX.Element {
  const { setAuthStatus } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as CustomState;
  const from = state?.from?.pathname || '/';

  const [emailValue, handleEmailChange] = useInput();
  const [passwordValue, handlePasswordChange] = useInput();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setAuthStatus(true);

    navigate(from, { replace: true });
  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={emailValue}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={passwordValue}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
