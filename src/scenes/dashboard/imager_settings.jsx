import "../../CSS/imager_settings.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import CommonRow from "../../components/NavBar/common_row";
import Diagnostics_Table from "../../components/Diagnostics Log/diagnostics_table";

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
            <div className="sensor-measurement-settings-title">Diagnostics</div>
          </div>
        </Col>
      </Row>
      <Row>
        {/* ------------------------------------------------- row 2 END ----------------------------- */}
      </Row>
      {/* ------------------------------------------------- row 3 END ----------------------------- */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="diagnostics-log-parent">
            <div className="diagnostics-log-box">
              <h2 // "Diagnostics Log" table title
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                FieldDock Diagnostics Log
              </h2>
              <Diagnostics_Table />
            </div>
          </div>
        </Col>
      </Row>
      {/* ------------------------------------------------- row 4 END ----------------------------- */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="account-selection-main-container">
            <div className="account-selection-containment-box">
              <div className="account-box">
                <div className="title">
                  <h4>Select Customer Account</h4>
                </div>
                <div style={{ margin: "10px 0" }}>
                  <input
                    type="text"
                    placeholder="Search for customer account"
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ margin: "10px 0" }}>
                  <select style={{ width: "100%" }}>
                    <option value="">Select an account...</option>
                    {/* Other <option> elements go here for the other accounts */}
                  </select>
                </div>
                <div style={{ margin: "10px 0" }}>
                  <input
                    type="checkbox"
                    id="diagnostics"
                    name="diagnostics"
                    value="diagnostics"
                  />
                  <label htmlFor="diagnostics">
                    Show all diagnostics for this account
                  </label>
                </div>
              </div>
              {/* box 1 end */}
              <div className="account-box">
                <div style={{ margin: "10px 0" }}>
                  <h4>Select PheNode Group</h4>
                </div>
                <div style={{ margin: "10px 0" }}>
                  <input
                    type="text"
                    placeholder="Search for FieldDock Group"
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ margin: "10px 0" }}>
                  <select style={{ width: "100%" }}>
                    <option value="">Select a Group</option>
                    {/* Other <option> elements go here for the other accounts */}
                  </select>
                </div>
                <div style={{ margin: "10px 0" }}>
                  <input
                    type="checkbox"
                    id="diagnostics"
                    name="diagnostics"
                    value="diagnostics"
                  />
                  <label htmlFor="diagnostics">
                    Show all diagnostics for this account
                  </label>
                </div>
              </div>
              {/* box 2 end */}
              <div className="account-box">
                <div style={{ margin: "10px 0" }}>
                  <h4>Select a Phenode</h4>
                </div>
                <div style={{ margin: "10px 0" }}>
                  <input
                    type="text"
                    placeholder="Search for FieldDock System"
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ margin: "10px 0" }}>
                  <select style={{ width: "100%" }}>
                    <option value="">Select a FieldDock System</option>
                    {/* Other <option> elements go here for the other accounts */}
                  </select>
                </div>
                <div style={{ margin: "10px 0" }}>
                  <input
                    type="checkbox"
                    id="diagnostics"
                    name="diagnostics"
                    value="diagnostics"
                  />
                  <label htmlFor="diagnostics">
                    Show all diagnostics for this account
                  </label>
                </div>
              </div>
              {/* box 3 end */}
              <div className="account-box">
                <div style={{ margin: "10px 0" }}>
                  <h4>Select Date </h4>
                </div>
                <div style={{ margin: "10px 0" }}>
                  <input
                    type="text"
                    placeholder="Search dates (ex. --/--/----)"
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ margin: "10px 0" }}>
                  <select style={{ width: "100%" }}>
                    <option value="">Search dates (ex. --/--/----)</option>
                    {/* Other <option> elements go here for the other accounts */}
                  </select>
                </div>
                <div style={{ margin: "10px 0" }}>
                  <input
                    type="checkbox"
                    id="diagnostics"
                    name="diagnostics"
                    value="diagnostics"
                  />
                  <label htmlFor="diagnostics">
                    Show all diagnostics for this account
                  </label>
                </div>
              </div>
              {/* box 4 end */}
            </div>
          </div>
        </Col>
      </Row>
      {/* ------------------------------------------------- row 5 END ----------------------------- */}
    </Container>
  );
}

export default Imager_Settings;
