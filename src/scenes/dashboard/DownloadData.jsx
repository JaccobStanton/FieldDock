import "../../CSS/download_data.css";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import CommonRow from "../../components/NavBar/NavBar";
import EnvData from "../../components/Download Data/env_data";
import TraitData from "../../components/Download Data/trait_data";
import Fielddock_Data from "../../components/Download Data/fielddock_data";
import Mosaicked_Data from "../../components/Download Data/mosaicked_data";
import Drone_Data from "../../components/Download Data/drone_data";
import Sensor_Data from "../../components/Download Data/sensor_data";
import Download_All from "../../components/Download Data/download_all";

function Download_data() {
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
        <EnvData />
        <TraitData />
      </Row>
      {/* ------------------------------------------------- row 3 END ----------------------------- */}
      <Row>
        <Fielddock_Data />
        <Mosaicked_Data />
      </Row>
      {/* ------------------------------------------------- row 4 END ----------------------------- */}
      <Row>
        <Drone_Data />
        <Sensor_Data />
      </Row>
      {/* ------------------------------------------------- row 5 END ----------------------------- */}
      <Row>
        <Download_All />
      </Row>
      {/* ------------------------------------------------- row 5 END ----------------------------- */}
    </Container>
  );
}

export default Download_data;
