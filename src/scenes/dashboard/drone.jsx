import React from "react";
import { Link } from "react-router-dom";
import { Box, ListItemIcon, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import CommonRow from "../../components/CommonRow";
import { Container, Row, Col } from "react-bootstrap";
import "../../CSS/drone.css";

function Drone() {
  return (
    <Container fluid>
      <div>
        <CommonRow />
      </div>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="drone-header-title-box">
            <div className="drone-header-title">Drone</div>
          </div>
        </Col>
      </Row>
      <Row>
        {/* Content for the third row */}
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="drone-svg-container">
            <img
              src={process.env.PUBLIC_URL + "/assets/drone_diagram_large.svg"}
              alt="Drone Image"
              className="drone-large-svg"
            />
          </div>
        </Col>
      </Row>
      <Row>
        {/* Content for the third row */}
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Row className="center-row">
            <div className="box">
              <p className="title-text">Last flight completed:</p>
              <p className="title-text">May 7, 2021 1:28pm</p>
            </div>

            <div className="box">
              <p className="title-text">Status:</p>
              <p className="title-text">Charging</p>
            </div>

            <div className="box">
              <p className="title-text">Battery Charge:</p>
              <p className="title-text">38.41%</p>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Drone;
