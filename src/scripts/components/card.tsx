import React from 'react';
import { Offer } from '../types/offers';

type CardProps = {
  offer: Offer;
  handleOfferMouseEnter: (offer: Offer) => void;
  handleOfferMouseLeave: () => void;
};

export default function Card(props: CardProps): JSX.Element {
  const { offer, handleOfferMouseEnter, handleOfferMouseLeave } = props;
  const { isPremium, previewImage, price, isFavorite, rating, title, type } = offer;

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => handleOfferMouseEnter(offer)}
      onMouseLeave={() => handleOfferMouseLeave()}
    >
      {isPremium || (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {isFavorite ? (
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          ) : (
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          )}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
