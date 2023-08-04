import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { geocode } from "../../api/map";

const containerStyle = {
  width: "100%",
  height: "815px",
};

const center = {
  lat: 38.6742,
  lng: -122.4194,
};

const MapComponent = ({ onMapClick, markerPositions }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={onMapClick}
      >
        {markerPositions.map((position, index) => (
          <Marker key={index} position={position} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
