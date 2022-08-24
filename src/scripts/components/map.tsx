import React, { useEffect, useRef } from 'react';
import { Icon, LatLngExpression, Marker } from 'leaflet';
import { HoveredOffer, Offers } from '../types/offers';
import useMap from '../hooks/useMap';

type MapProps = {
  offersByCity: Offers;
  hoveredOffer: HoveredOffer;
};

export default function Map(props: MapProps): JSX.Element {
  const { offersByCity, hoveredOffer } = props;
  const [offer] = offersByCity;
  const { latitude: cityLatitude, longitude: cityLongitude, zoom: cityZoom } = offer.city.location;

  const mapRef = useRef(null);

  const map = useMap(mapRef, [cityLatitude, cityLongitude], cityZoom);

  useEffect(() => {
    map?.flyTo([cityLatitude, cityLongitude], cityZoom);

    if (map) {
      const defaultIcon = new Icon({
        iconUrl: '../../img/pin.svg',
        iconSize: [30, 30],
      });

      const activeIcon = new Icon({
        iconUrl: '../../img/pin-active.svg',
        iconSize: [30, 30],
      });

      offersByCity.forEach((offer) => {
        if (hoveredOffer?.id === offer.id)
          new Marker([offer.location.latitude, offer.location.longitude] as LatLngExpression, {
            icon: activeIcon,
          }).addTo(map);
        else
          new Marker([offer.location.latitude, offer.location.longitude] as LatLngExpression, {
            icon: defaultIcon,
          }).addTo(map);
      });
    }
  }, [map, hoveredOffer, cityLatitude, cityLongitude]);

  return <div ref={mapRef} style={{ height: '100%' }} />;
}
