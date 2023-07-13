import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import CommonRow from "../../components/CommonRow";
import "../../CSS/imager_settings.css";
// import DatePickersWithTitle from "../../components/datepicking";

function Imager_Settings() {
  const [environmentalDataStartDate, setEnvironmentalDataStartDate] =
    React.useState(null);
  const [environmentalDataEndDate, setEnvironmentalDataEndDate] =
    React.useState(null);

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
      {/* <div>
        <DatePickersWithTitle
          title="Download Environmental Data"
          startDate={environmentalDataStartDate}
          setStartDate={setEnvironmentalDataStartDate}
          endDate={environmentalDataEndDate}
          setEndDate={setEnvironmentalDataEndDate}
        />
      </div> */}
      {/* ------------------------------------------------ row 1 END ----------------------------- */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="download-data-box">
            <div className="download-data-title">Download Data</div>
          </div>
        </Col>
      </Row>
      {/* ---------------------------------------------- row 2 END ------------------------------- */}
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <div className="environmental-modules">
            <div className="environmental-modules-title">
              Download Environmental Data
            </div>
            <div className="environmental-button-container">
              <input
                type="text"
                placeholder="Start Date"
                className="env-input-start"
              />
              <input
                type="text"
                placeholder="End Date"
                className="env-input-end"
              />
              <button className="env-button">Download</button>
            </div>
          </div>
        </Col>

        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <div className="trait-modules">
            <div className="trait-modules-title">Download Trait Scorecard</div>
            <div className="trait-button-container">
              <input
                type="text"
                placeholder="Start Date"
                className="trait-input-start"
              />
              <input
                type="text"
                placeholder="End Date"
                className="trait-input-end"
              />
              <button className="trait-button">Download</button>
            </div>
          </div>
        </Col>
      </Row>
      {/* ------------------------------------------------- row 3 END ----------------------------- */}
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <div className="images-modules">
            <div className="images-modules-title">
              Download FieldDock Images
            </div>
            <div className="images-button-container">
              <input
                type="text"
                placeholder="Start Date"
                className="images-input-start"
              />
              <input
                type="text"
                placeholder="End Date"
                className="images-input-end"
              />
              <button className="images-button">Download</button>
            </div>
          </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <div className="mosaicked-modules">
            <div className="mosaicked-modules-title">
              Download Mosaicked Drone Images
            </div>
            <div className="mosaicked-button-container">
              <input
                type="text"
                placeholder="Start Date"
                className="mosaicked-input-start"
              />
              <input
                type="text"
                placeholder="End Date"
                className="mosaicked-input-end"
              />
              <button className="mosaicked-button">Download</button>
            </div>
          </div>
        </Col>
      </Row>
      {/* ------------------------------------------------- row 4 END ----------------------------- */}
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <div className="drone-modules">
            <div className="drone-modules-title">Download Drone Data</div>
            <div className="drone-button-container">
              <input
                type="text"
                placeholder="Start Date"
                className="drone-input-start"
              />
              <input
                type="text"
                placeholder="End Date"
                className="drone-input-end"
              />
              <button className="drone-button">Download</button>
            </div>
          </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <div className="wireless-sensor-modules">
            <div className="wireless-sensor-modules-title">
              Download Wireless Sensor Data
            </div>
            <div className="wireless-sensor-button-container">
              <input
                type="text"
                placeholder="Start Date"
                className="wireless-sensor-input-start"
              />
              <input
                type="text"
                placeholder="End Date"
                className="wireless-sensor-input-end"
              />
              <button className="wireless-sensor-button">Download</button>
            </div>
          </div>
        </Col>
      </Row>
      {/* ------------------------------------------------- row 5 END ----------------------------- */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="all-data-modules">
            <div className="all-data-modules-title">Download All Data</div>
            <div className="all-data-button-container">
              <input
                type="text"
                placeholder="Start Date"
                className="all-data-input-start"
              />
              <input
                type="text"
                placeholder="End Date"
                className="all-data-input-end"
              />
              <button className="all-data-button">Download</button>
            </div>
          </div>
        </Col>
      </Row>
      {/* ------------------------------------------------- row 6 END ----------------------------- */}
    </Container>
  );
}
export default Imager_Settings;
