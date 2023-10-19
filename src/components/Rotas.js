import React from "react";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const Rotas = () => {
  const customIcon = new Icon({
    iconUrl: require("../assets/pino-loc.png"),
    iconSize: [38, 38],
  });
  return (
    <div className="rotas">
      <h2>Local</h2>
      <MapContainer
        center={[-12.134911007773022, -44.96799503360853]}
        zoom={16}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[-12.134911007773022, -44.96799503360853]}
          icon={customIcon}
        >
          <Popup>Academia Estação Fitness</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Rotas;
