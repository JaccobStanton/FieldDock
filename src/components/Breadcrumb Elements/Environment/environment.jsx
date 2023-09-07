import React from "react";
import { Box } from "@mui/material";

const Environment = () => {
  return (
    <>
      <Box
        style={{
          borderTop: "1px solid #f59331",
          width: "80%",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <Box
          style={{
            position: "absolute",
            transform: "translate(0%, -140%)", // This will center both horizontally and vertically
            backgroundColor: "#181818", // This is the background color of your parent box, adjust if it's different
            padding: "0 7px",
            zIndex: 1,
            fontSize: "25px",
          }}
        >
          Wind
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Direction</div>
          <div style={{ color: "#00e1b4" }}>NW</div>
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Windspeed</div>
          <div style={{ color: "#00e1b4" }}>12.34mph</div>
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Gust</div>
          <div style={{ color: "#00e1b4" }}>18.05mph</div>
        </Box>
      </Box>
      <Box
        style={{
          borderTop: "1px solid #3898EC",
          width: "80%",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            position: "absolute",
            transform: "translate(0%, -270%)", // This will center both horizontally and vertically
            backgroundColor: "#181818", // This is the background color of your parent box, adjust if it's different
            padding: "0 7px",
            zIndex: 1,
            fontSize: "25px",
          }}
        >
          Outdoor
        </Box>

        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Temperature</div>
          <div style={{ color: "#00e1b4" }}>65°F</div>
          <div style={{ color: "#ff0000" }}>00.00°C</div>
          <div style={{ color: "#e8e8e8" }}>Visibility</div>
          <div style={{ color: "#00e1b4" }}>Low</div>
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Humidity</div>
          <div style={{ color: "#00e1b4" }}>10%</div>
          <div style={{ color: "#ff0000" }}>-</div>
          <div style={{ color: "#e8e8e8" }}>UV Index</div>
          <div style={{ color: "#ff0000" }}>9</div>
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Air Pressure</div>
          <div style={{ color: "#00e1b4" }}>kPa</div>
          <div style={{ color: "#ff0000" }}>00.00"</div>
          <div style={{ color: "#e8e8e8" }}>Conditions</div>
          <div style={{ color: "#00e1b4" }}>Cloudy</div>
        </Box>
      </Box>
      <Box
        style={{
          borderTop: "1px solid #3898EC",
          width: "80%",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            position: "absolute",
            transform: "translate(0%, -270%)", // This will center both horizontally and vertically
            backgroundColor: "#181818", // This is the background color of your parent box, adjust if it's different
            padding: "0 7px",
            zIndex: 1,
            fontSize: "25px",
          }}
        >
          Forecast
        </Box>

        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Rainfall</div>
          <div style={{ color: "#00e1b4" }}>0.75 in.</div>
          <div style={{ color: "#ff0000" }}>100 cm</div>
          <div style={{ color: "#e8e8e8" }}>Precipitation</div>
          <div style={{ color: "#00e1b4" }}>Low</div>
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Thunderstorms</div>
          <div style={{ color: "#00e1b4" }}>None</div>
          <div style={{ color: "#ff0000" }}>-</div>
          <div style={{ color: "#e8e8e8" }}>Lightning</div>
          <div style={{ color: "#00e1b4" }}>None</div>
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Dew Point</div>
          <div style={{ color: "#00e1b4" }}>65°F</div>
          <div style={{ color: "#ff0000" }}>65°C</div>
          <div style={{ color: "#e8e8e8" }}>Tomorrow</div>
          <div style={{ color: "#00e1b4" }}>Sunny</div>
        </Box>
      </Box>
    </>
  );
};

export default Environment;
