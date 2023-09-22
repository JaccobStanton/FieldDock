import "./LivePage.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import CommonRow from "../../NavBar/NavBar";
import MissionBreadcrumbs from "../../Tools/Breadcrumbs/missionBreadCrumbs";
import Metrics from "./Breadcrumb Elements/Metrics/metrics";
import Environment from "./Breadcrumb Elements/Environment/environment";
import FlightLogs from "./Breadcrumb Elements/Flight Logs/flightLogs";
import Status from "./Breadcrumb Elements/Status/status";

function LiveStats() {
  const [selectedBreadcrumb, setSelectedBreadcrumb] = useState("");

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
              System Stats
            </div>
          </div>
        </Col>
      </Row>
      {/* ------------------------------------------------- row 2 END ----------------------------- */}
      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "94%",
            marginBottom: "30px",
          }}
        >
          <Col xs={12} sm={6} md={6} lg={8} xl={8} xxl={8}>
            <div
              style={{
                height: "815px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "15px",
                border: "1px solid #797979",
                backgroundColor: "transparent",
              }}
            >
              {/* <MapComponent /> */}
            </div>
          </Col>
          <Col /*<div>xs={12} sm={6} md={6} lg={4} xl={4} xxl={4}> */>
            <div
              style={{
                display: "flex", // Set the display to flex
                flexDirection: "column", // Children are stacked vertically
                height: "700px",
                alignItems: "center", // Center children horizontally
                marginLeft: "15px",
                border: "1px solid #797979",
                backgroundColor: "transparent",
                overflow: "auto",
              }}
            >
              <div //?DIV BOX FOR THE BREAD CRUMBS
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottom: "1px solid #797979",
                  // marginTop: "10px",
                  alignSelf: "stretch", // Make this div stretch to fill its parent's width
                }}
              >
                <MissionBreadcrumbs
                  onBreadcrumbClick={setSelectedBreadcrumb}
                  selected={selectedBreadcrumb}
                />
              </div>
              <div //?DIV BOX FOR STATUS, METRICS, ENV, & FLIGHT LOGS TO BE RENDERED
                style={{
                  height: "86%",
                  border: "1px solid #797979",
                  marginTop: "20px",
                  width: "90%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "auto",
                }}
              >
                {selectedBreadcrumb === "Metrics" && <Metrics />}
                {selectedBreadcrumb === "Environment" && <Environment />}
                {selectedBreadcrumb === "Flight Logs" && <FlightLogs />}
                {selectedBreadcrumb === "Status" && <Status />}
              </div>
            </div>
          </Col>
        </div>
      </Row>
      {/* ------------------------------------------------- row 3 END ----------------------------- */}
    </Container>
  );
}

export default LiveStats;
