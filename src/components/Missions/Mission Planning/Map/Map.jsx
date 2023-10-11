import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";

//-------------------------------------------------------------------------------------------------
// styling for the maps container, the initial centering, and the search box that displays on the map
const containerStyle = {
  position: "relative",
  width: "100%",
  height: "815px",
  border: "1px solid #797979",
};

const initialCenter = {
  lat: 38.6742,
  lng: -122.4194,
};

const searchBoxStyles = {
  position: "absolute",
  top: "10px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "white",
  border: "1px solid black",
  padding: 10,
};
//-------------------------------------------------------------------------------------------------
//
//
//-------------------------------------------------------------------------------------------------
// Logic for map where it passes the allowing of clicking on the map, markers appearing from this onClick action
// and tracking the coordinates of what the user types in as their home location, so it can be displayed in the lat/long boxes
const MapComponent = ({
  onMapClick,
  markerPositions,
  setHomeLat,
  setHomeLng,
}) => {
  const [address, setAddress] = useState("");
  const [center, setCenter] = useState(initialCenter); // Add this line

  const geocode = async (address) => {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        params: {
          address: address,
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        },
      }
    );

    return response.data.results[0].geometry.location;
  };
  //-------------------------------------------------------------------------------------------------
  //
  //
  //
  //-------------------------------------------------------------------------------------------------
  // Updates these state variables when the home location changes.
  // Modify the handleLocationSubmit function in the MapComponent component to look like this:
  const handleLocationSubmit = async (event) => {
    event.preventDefault();

    const coordinates = await geocode(address);

    setCenter(coordinates); // This will only update the map center

    // Pass these two function calls as props
    setHomeLat(coordinates.lat);
    setHomeLng(coordinates.lng);
  };
  //-------------------------------------------------------------------------------------------------
  return (
    <div style={containerStyle}>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={onMapClick}
        >
          {markerPositions.map((position, index) => (
            <Marker key={index} position={position} label={`${index + 1}`} />
          ))}
        </GoogleMap>
      </LoadScript>
      <form onSubmit={handleLocationSubmit} style={searchBoxStyles}>
        <input
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          placeholder="Enter a location"
        />
        <button type="submit" style={{ display: "none" }}>
          Go
        </button>
      </form>
    </div>
  );
};

export default MapComponent;
