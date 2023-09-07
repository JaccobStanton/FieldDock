import React from "react";
import { Box } from "@mui/material";

const Metrics = () => {
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
          marginBottom: "10px",
          marginTop: "40px",
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
          Location
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Latitude</div>
          <div style={{ color: "#00e1b4" }}>38°39'34.7"N</div>
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Altitude</div>
          <div style={{ color: "#00e1b4" }}>50m</div>
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Longitude</div>
          <div style={{ color: "#00e1b4" }}>90°19'58.9"W</div>
        </Box>
      </Box>
      <Box
        style={{
          borderTop: "1px solid #3898EC",
          width: "80%",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
          marginTop: "10px",
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
          Battery Information
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Battery Life</div>
          <div style={{ color: "#00e1b4" }}>60%</div>
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Battery Temp.</div>
          <div style={{ color: "#00e1b4" }}>50m</div>
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Flight Time</div>
          <div style={{ color: "#00e1b4" }}>1 hour</div>
        </Box>
      </Box>
      <Box
        style={{
          borderTop: "1px solid #3898EC",
          width: "80%",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
          marginTop: "10px",
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
          Flight Status
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Flight Mode</div>
          <div style={{ color: "#00e1b4" }}>Take off</div>
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Arming Status</div>
          <div style={{ color: "#00e1b4" }}>Armed</div>
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Heading</div>
          <div style={{ color: "#00e1b4" }}>North</div>
        </Box>
      </Box>
      <Box
        style={{
          borderTop: "1px solid #3898EC",
          width: "80%",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
          marginTop: "10px",
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
          Telemetry Data
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Pitch</div>
          <div style={{ color: "#00e1b4" }}>38°</div>
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Roll</div>
          <div style={{ color: "#00e1b4" }}>30°</div>
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Yaw</div>
          <div style={{ color: "#00e1b4" }}>90°</div>
        </Box>
      </Box>
      <Box
        style={{
          borderTop: "1px solid #3898EC",
          width: "80%",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
          marginTop: "10px",
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
          Safety Alerts
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Proximity</div>
          <div style={{ color: "#00e1b4" }}>None</div>
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Geo-fencing</div>
          <div style={{ color: "#00e1b4" }}>None</div>
        </Box>
        <Box style={{ textAlign: "center", flex: 1, fontSize: "20px" }}>
          <div style={{ color: "#e8e8e8" }}>Altitude Limit</div>
          <div style={{ color: "#00e1b4" }}>Not reached</div>
        </Box>
      </Box>
    </>
  );
};

export default Metrics;
