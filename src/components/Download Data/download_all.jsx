import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Download_All() {
  function handleHover(e) {
    e.target.style.borderColor = "#e0e0e0";
    e.target.style.color = "orange";
  }

  function handleUnhover(e) {
    e.target.style.borderColor = "orange";
    e.target.style.color = "#e0e0e0";
  }
  return (
    <Col
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      xxl={12}
      className="centered-content"
    >
      <div className="download-all-modules">
        <div className="download-all-modules-title">Download All Data</div>
        <div className="download-all-modules-content">
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

export default Download_All;
