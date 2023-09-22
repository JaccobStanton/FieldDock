import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

const Status = () => {
  const [latestMessage, setLatestMessage] = useState("");

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const message = await fetchLatestMessage();
      setLatestMessage(message);
    }, 1000); // Fetch every 1 second

    return () => {
      clearInterval(intervalId); // Cleanup
    };
  }, []);

  const fetchLatestMessage = async () => {
    const response = await fetch("http://localhost:3001/");
    const data = await response.json();
    return data.message;
  };

  return (
    <>
      <Box
        style={{
          borderTop: "1px solid #f59331",
          width: "80%",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          marginBottom: "15px",
        }}
      >
        <Box
          style={{
            position: "absolute",
            transform: "translate(-1%, -60%)",
            backgroundColor: "#181818",
            padding: "0 7px",
            zIndex: 1,
            fontSize: "25px",
          }}
        >
          System Controller
        </Box>
        <div
          style={{
            // marginTop: "40px",
            // color: "white",
            marginTop: "50px",
            backgroundColor: "#ccc",
            padding: "10px",
            borderRadius: "5px",
            width: "90%",
            height: "auto",
          }}
        >
          {/* <strong>Latest MQTT Message:</strong> {latestMessage} */}
        </div>
      </Box>
    </>
  );
};

export default Status;
