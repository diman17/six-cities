import React, { useEffect, useRef } from 'react';
import { Icon, LatLngExpression, Marker } from 'leaflet';
import { HoveredOffer, Offers } from '../types/types';
import useMap from '../hooks/useMap';

type MapProps = {
  offers: Offers;
  city: {
    name: string;
    location: number[];
  };
  hoveredOffer: HoveredOffer;
};

export default function Map(props: MapProps): JSX.Element {
  const { offers, city, hoveredOffer } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city.location);

  useEffect(() => {
    if (map) {
      const defaultIcon = new Icon({
        iconUrl: '../../img/pin.svg',
        iconSize: [30, 30],
      });

      const activeIcon = new Icon({
        iconUrl: '../../img/pin-active.svg',
        iconSize: [30, 30],
      });

      offers.forEach((offer) => {
        if (hoveredOffer?.id === offer.id)
          new Marker(offer.location as LatLngExpression, { icon: activeIcon }).addTo(map);
        else new Marker(offer.location as LatLngExpression, { icon: defaultIcon }).addTo(map);
      });
    }
  }, [map, hoveredOffer]);

  return <div ref={mapRef} style={{ height: '100%' }} />;
}
