import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import CommonRow from "../../components/CommonRow";
import "../../CSS/imager_settings.css";

function handleHover(e) {
  e.target.style.borderColor = "#fff";
  e.target.style.color = "orange";
}

function handleUnhover(e) {
  e.target.style.borderColor = "orange";
  e.target.style.color = "#fff";
}

function Imager_Settings() {
  return (
    <Container fluid>
      <div>
        <CommonRow />
      </div>
      {/* -------------------------------------------------PARENT column row 1 END ----------------------------- */}

      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="main">
            <div className="content">
              <div className="software-box">
                <div className="software-title">Software Update</div>
                <div className="pending-message">
                  You have a pending software update
                </div>
                <div className="software-options">
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
        {/* -------------------------------------------------PARENT column row 2 END ----------------------------- */}
      </Row>
    </Container>
  );
}

export default Imager_Settings;
