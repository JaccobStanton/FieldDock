import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import CommonRow from "../../components/NavBar/common_row";
import "../../CSS/settings.css";
import useWindowWidth from "../../components/Software Update/useWindowWidth";

function handleHover(e) {
  e.target.style.borderColor = "#e0e0e0";
  e.target.style.color = "orange";
}

function handleUnhover(e) {
  e.target.style.borderColor = "orange";
  e.target.style.color = "#e0e0e0";
}

function handleHover1(e) {
  e.target.style.borderColor = "#e0e0e0";
  e.target.style.color = "#3898ec";
}

function handleUnhover1(e) {
  e.target.style.borderColor = "#3898ec";
  e.target.style.color = "#e0e0e0";
}

function Settings() {
  const windowWidth = useWindowWidth();
  return (
    <Container fluid>
      <div>
        <CommonRow />
      </div>
      {/* ------------------------------------------------- row 1 END ----------------------------- */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="sensor-settings">
            <div className="sensor-settings-title"> Settings</div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={6} sm={6} md={4} lg={4} xl={4} xxl={4}>
          <div className="main">
            <div className="content">
              <div className="software-update-box">
                <div className="software-update-title">Software Update</div>
                <div className="pending-message">
                  {windowWidth <= 767
                    ? "Pending Software Update"
                    : "You have a pending software update"}
                </div>
                <div className="software-update-options">
                  <label>
                    <input className="begin-checkbox" type="checkbox" />
                    <span>
                      <span className="checkbox-text">Begin update now</span>
                    </span>
                  </label>
                  <label>
                    <input className="update-checkbox" type="checkbox" />
                    <span>
                      <span className="checkbox-text">Update after 11:59</span>
                    </span>
                  </label>
                </div>
                <button
                  className="set-button"
                  onMouseOver={handleHover}
                  onMouseOut={handleUnhover}
                >
                  Set
                </button>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={6} sm={6} md={4} lg={4} xl={4} xxl={4}>
          <div className="main">
            <div className="content">
              <div className="rename-box">
                <div className="rename-title">Rename FieldDock System</div>
                <div className="fielddock-name">0001:</div>
                <input type="text" className="rename-here" placeholder="" />
                <button
                  className="rename-button"
                  onMouseOver={handleHover}
                  onMouseOut={handleUnhover}
                >
                  Rename
                </button>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
          <div className="main">
            <div className="content">
              <div className="wifi-box">
                <div className="wifi-title">Connect to Wifi</div>
                <div className="available-networks">Available Networks:</div>
                <div className="network-selection">
                  <button
                    className="network-button"
                    onMouseOver={handleHover1}
                    onMouseOut={handleUnhover1}
                  >
                    Search for Networks
                  </button>
                  <select className="network-dropdown">
                    <option>Select a network...</option>
                    {/* Insert more <option> elements here as needed */}
                  </select>
                </div>
                <div className="network-connection">
                  <div className="password-input">
                    <div className="password-instruction">
                      Enter password for selected network:
                    </div>
                    <input type="text" className="password-box" />
                  </div>
                  <button
                    className="connect-button"
                    onMouseOver={handleHover}
                    onMouseOut={handleUnhover}
                  >
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* ------------------------------------------------- row 2 END ----------------------------- */}

      <Row className="center-row">
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="center-box">
            <button
              className="admin-button"
              onMouseOver={handleHover}
              onMouseOut={handleUnhover}
            >
              Super Admin
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Settings;
