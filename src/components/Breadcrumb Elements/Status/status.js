import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";

const Status = () => {
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
            transform: "translate(-1%, -60%)", // This will center both horizontally and vertically
            backgroundColor: "#181818", // This is the background color of your parent box, adjust if it's different
            padding: "0 7px",
            zIndex: 1,
            fontSize: "25px",
          }}
        >
          System Controller
        </Box>
      </Box>
    </>
  );
};

export default Status;
