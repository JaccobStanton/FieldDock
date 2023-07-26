import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import CommonRow from "../../components/NavBar/common_row";
import "../../CSS/realtime_settings.css";

function Realtime_Settings() {
  const [selectedInterval, setSelectedInterval] = useState(
    "Select time interval..."
  );

  const handleSelect = (event) => {
    setSelectedInterval(event.target.value);
  };

  function handleHover(e) {
    e.target.style.borderColor = "#00e1b4";
    e.target.style.color = "orange";
  }

  function handleUnhover(e) {
    e.target.style.borderColor = "orange";
    e.target.style.color = "#e0e0e0";
  }

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
        {/* ------------------------------------------------- row 2 END ----------------------------- */}
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
      {/* ------------------------------------------------- row 3 END ----------------------------- */}
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <div className="sensor-modules">
            <div className="sensor-modules-title">Wind Sensors</div>
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
            <div className="wireless-modules-title">Soil Sensors</div>
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
      {/* ------------------------------------------------- row 4 END ----------------------------- */}
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <div className="sensor-modules">
            <div className="sensor-modules-title">PAR Modules</div>
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
            <div className="wireless-modules-title">Air Sensors</div>
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
      {/* ------------------------------------------------- row 5 END ----------------------------- */}

      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="image-preference-box">
            <div className="checkboxes">
              <label>
                <input class="group-checkbox" type="checkbox" />
                <span>
                  Apply the above imaging settings to all FieldDock systems in
                  this group
                </span>
              </label>
              <label>
                <input class="all-checkbox" type="checkbox" />
                <span>
                  Apply the above imaging settings to all FieldDock systems in
                  this account
                </span>
              </label>
            </div>
            <div
              className="image-preferences-button"
              onMouseOver={handleHover}
              onMouseOut={handleUnhover}
            >
              <button>Save all imaging preferences</button>
            </div>
          </div>
        </Col>
      </Row>

      {/* ------------------------------------------------- row 5 END ----------------------------- */}
    </Container>
  );
}

export default Realtime_Settings;
