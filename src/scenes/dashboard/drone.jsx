import React from "react";
import CommonRow from "../../components/NavBar/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import "../../CSS/drone.css";
import { DroneButton } from "../../components/Tools/Buttons/Drone/droneButton";

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
              alt="Drone"
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
              <p className="flight-text">Last flight completed:</p>
              <p className="date-text">May 7, 2021 1:28pm</p>
            </div>

            <div className="box">
              <p className="status-text">Status:</p>
              <p className="charging-text">Charging</p>
            </div>

            <div className="box">
              <p className="battery-text">Battery Charge:</p>
              <p className="percent-text">38.41%</p>
            </div>
          </Row>
        </Col>
      </Row>
      {/* //! THIS ROW BELOW NEEDS TO BE HIDDEN AT A CERTAIN VIEWING HEIGHT */}
      {/* //! NEEDS RESPONSIVENESS */}
      <Row>
        {/* Content for the fourth row */}
        <Col className="center-content">
          <DroneButton text="Edit Mission" />
          <DroneButton text="Plan Mission" />
          <DroneButton text="Live View" />
        </Col>
      </Row>
    </Container>
  );
}

export default Drone;
