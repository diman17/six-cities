import React, { useEffect } from 'react';
import Leaflet, { LatLngExpression } from 'leaflet';

import type { Offers } from '../../../mocks/offers';

type MapProps = {
  offers: Offers;
  city: {
    name: string;
    location: number[];
  };
};

export default function Map(props: MapProps): JSX.Element {
  const { offers, city } = props;

  const cityLocation = city.location as LatLngExpression;

  useEffect(() => {
    const map = Leaflet.map('map').setView(cityLocation, 12);

    const defaultIcon = Leaflet.icon({
      iconUrl: '../../img/pin.svg',
      iconSize: [30, 30],
    });

    Leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }).addTo(map);

    offers.forEach((offer) => {
      Leaflet.marker(offer.location as LatLngExpression, { icon: defaultIcon }).addTo(map);
    });
  });

  return <div id="map" style={{ height: '100%' }} />;
}
