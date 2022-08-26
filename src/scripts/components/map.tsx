import React, { useEffect, useRef } from 'react';
import { Icon, LatLngExpression, Marker } from 'leaflet';
import { connect, ConnectedProps } from 'react-redux';
import { HoveredOffer } from '../types/offers';
import useMap from '../hooks/useMap';
import { State } from '../types/store';

const mapState = (state: State) => ({
  offersByCurrentCity: state.offersByCurrentCity,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

type MapProps = {
  hoveredOffer: HoveredOffer;
} & PropsFromRedux;

function Map(props: MapProps): JSX.Element {
  const { offersByCurrentCity, hoveredOffer } = props;
  const [offer] = offersByCurrentCity;
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

      offersByCurrentCity.forEach((offer) => {
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

export default connector(Map);
