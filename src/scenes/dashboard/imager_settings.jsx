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
import Download_All from "../../components/Download_Data/download_all";

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
      </Row>
      {/* ------------------------------------------------- row 3 END ----------------------------- */}
      <Row></Row>
      {/* ------------------------------------------------- row 4 END ----------------------------- */}
      <Row></Row>
      {/* ------------------------------------------------- row 5 END ----------------------------- */}
      <Row></Row>
      {/* ------------------------------------------------- row 5 END ----------------------------- */}
    </Container>
  );
}

export default Imager_Settings;
