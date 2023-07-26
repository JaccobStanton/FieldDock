import React from "react";

import { Col } from "react-bootstrap";

function Drone_Data() {
  function handleHover(e) {
    e.target.style.borderColor = "#e0e0e0";
    e.target.style.color = "orange";
  }

  function handleUnhover(e) {
    e.target.style.borderColor = "orange";
    e.target.style.color = "#e0e0e0";
  }
  return (
    <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
      <div className="sensor-modules">
        <div className="sensor-modules-title">Download Drone Data</div>
        <div className="sensor-modules-content">
          <input type="text" placeholder="Start Date" />
          <input type="text" placeholder="End Date" />
          <button onMouseOver={handleHover} onMouseOut={handleUnhover}>
            Download
          </button>
        </div>
      </div>
    </Col>
  );
}

export default Drone_Data;
