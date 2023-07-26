import "../../CSS/imager_settings.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import CommonRow from "../../components/NavBar/common_row";
import EnvData from "../../components/Download_Data/env_data";
import TraitData from "../../components/Download_Data/trait_data";
import Fielddock_Data from "../../components/Download_Data/fielddock_data";
import Mosaicked_Data from "../../components/Download_Data/mosaicked_data";
import Drone_Data from "../../components/Download_Data/drone_data";
import Sensor_Data from "../../components/Download_Data/sensor_data";

function Imager_Settings() {
  return (
    <Container fluid>
      <div>
        <CommonRow />
      </div>
      {/* ------------------------------------------------- row 1 END ----------------------------- */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="sensor-measurement-settings">
            <div className="sensor-measurement-settings-title">
              Download Data
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        {/* ------------------------------------------------- row 2 END ----------------------------- */}
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <EnvData />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <TraitData />
        </Col>
      </Row>
      {/* ------------------------------------------------- row 3 END ----------------------------- */}
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <Fielddock_Data />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <Mosaicked_Data />
        </Col>
      </Row>
      {/* ------------------------------------------------- row 4 END ----------------------------- */}
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <Drone_Data />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <Sensor_Data />
        </Col>
      </Row>
      {/* ------------------------------------------------- row 5 END ----------------------------- */}

      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
          className="centered-content"
        >
          <div className="download-all-box"></div>
        </Col>
      </Row>

      {/* ------------------------------------------------- row 5 END ----------------------------- */}
    </Container>
  );
}

export default Imager_Settings;
