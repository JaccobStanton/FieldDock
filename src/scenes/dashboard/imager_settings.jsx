import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import CommonRow from "../../components/CommonRow";
import "../../CSS/imager_settings.css";

function Imager_Settings() {
  const [selectedInterval, setSelectedInterval] = useState(
    "Select time interval..."
  );

  const handleSelect = (event) => {
    setSelectedInterval(event.target.value);
  };

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
              Sensor Measurement Settings
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <div className="sensor-modules">
            <div className="sensor-modules-title">Sensor Modules</div>
            <div className="sensor-modules-content">
              <p className="sensor-modules-description">
                Select time interval for: temperature, humidity, air pressure,
                lux, air quality (if integrated)
              </p>
              <select
                className="sensor-modules-select"
                value={selectedInterval}
                onChange={handleSelect}
              >
                <option value="Select time interval..." disabled>
                  Select time interval...
                </option>
                <option value="5 minutes">5 minutes</option>
                <option value="10 minutes">10 minutes</option>
                <option value="15 minutes">15 minutes</option>
                <option value="20 minutes">20 minutes</option>
                <option value="45 minutes">45 minutes</option>
                <option value="1 hour">1 hour</option>
              </select>
            </div>
          </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <div className="wireless-modules">
            <div className="wireless-modules-title">Wireless Sensors</div>
            <div className="wireless-modules-content">
              <p className="wireless-modules-description">
                Select time interval for: temperature, humidity, air pressure,
                lux, air quality, add-on sensor
              </p>
              <select
                className="wireless-modules-select"
                value={selectedInterval}
                onChange={handleSelect}
              >
                <option value="Select time interval..." disabled>
                  Select time interval...
                </option>
                <option value="5 minutes">5 minutes</option>
                <option value="10 minutes">10 minutes</option>
                <option value="15 minutes">15 minutes</option>
                <option value="20 minutes">20 minutes</option>
                <option value="45 minutes">45 minutes</option>
                <option value="1 hour">1 hour</option>
              </select>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Imager_Settings;
