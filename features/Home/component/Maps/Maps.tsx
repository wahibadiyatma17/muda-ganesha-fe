import styled from '@emotion/styled';
import { FC } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const icon = L.icon({ iconUrl: '/icon-marker.png', iconSize: [34, 36] });

interface MapsV2Props {
  longitude: number;
  latitude: number;
}

const MapsV2: FC<MapsV2Props> = (props) => {
  const { longitude, latitude } = props;
  const dataMaps = {
    lat: latitude,
    long: longitude,
  };

  return (
    <StyledMapContainer>
      <MapContainer
        center={[dataMaps.lat, dataMaps?.long]}
        zoom={13}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[dataMaps.lat, dataMaps?.long]} icon={icon} />
      </MapContainer>
    </StyledMapContainer>
  );
};

export default MapsV2;

const StyledMapContainer = styled.div`
  display: flex;
  position: relative;

  .map {
    height: 10rem !important;
    width: 100%;
    border-radius: 0.75rem;
    z-index: 10;
  }

  .map-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    background: #696969;
    height: 48px;
    border-radius: 0.75rem;
    padding: 0rem 1rem;
    position: absolute;
    bottom: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 99;
    width: 97%;

    :hover {
      transform: scale(1.01);
    }

    span {
      font-family: 'DM Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.3125rem;
      color: #f5f5f5;
    }
  }
`;
