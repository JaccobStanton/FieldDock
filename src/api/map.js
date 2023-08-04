import axios from "axios";

export const geocode = async (address) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json`,
    {
      params: {
        address,
        key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      },
    }
  );
  return response.data;
};
