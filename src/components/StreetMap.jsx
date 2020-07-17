import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";

const StreetMap = () => {
  return (
    <Map center={[53.508985, -2.215854]} zoom={15} id="map">
      <Marker position={[53.508985, -2.215854]}></Marker>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
};

export default StreetMap;
