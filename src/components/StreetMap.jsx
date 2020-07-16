import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";

const StreetMap = () => {
  return (
    <Map center={[53.508985, -2.215854]} zoom={16} id="map">
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[53.508985, -2.215854]}></Marker>
    </Map>
  );
};

export default StreetMap;
