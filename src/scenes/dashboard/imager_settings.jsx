import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { Box, ListItemIcon } from "@mui/material";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandMore } from "@mui/icons-material";
import CommonRow from "../../components/CommonRow";
import "../../CSS/imager_settings.css";
// import { ReactComponent as DroneDiagram } from "../../assets/Drone-Diagram.svg";

function Imager_Settings() {
  return (
    <Container fluid>
      <div>
        <CommonRow />
      </div>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="mainDiv">
            <div className="buttonContainer">
              <div className="toggleType">Toggle Image Type</div>
              <button className="button buttonFielddock">
                FieldDock Imager
              </button>
              <button className="button buttonMosaicked">
                Mosaicked Drone Images
              </button>
            </div>
          </div>
        </Col>
        {/* -------------------------------------------------PARENT column row 2 END ----------------------------- */}
      </Row>
    </Container>
  );
}

export default Imager_Settings;
