import "../../CSS/imager_settings.css";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import CommonRow from "../../components/NavBar/NavBar";
import MissionBreadcrumbs from "../../components/Tools/Breadcrumbs/missionBreadCrumbs";

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
              FieldDock Mission Planner
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
              {/* <MapComponent
                onMapClick={onMapClick}
                markerPositions={markerPositions}
                setHomeLat={setHomeLat}
                setHomeLng={setHomeLng}
              /> */}
            </div>
          </Col>
          <Col /*</div>xs={12} sm={6} md={6} lg={4} xl={4} xxl={4}> */>
            <div
              style={{
                height: "700px",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "15px",
                border: "1px solid #797979",
                backgroundColor: "transparent",
                overflow: "auto", // This will add a scrollbar if the table exceeds the div's size
              }}
            >
              <div
                style={{
                  display: "flex", // Set the display to flex
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically
                  borderBottom: "1px solid #797979",
                }}
              >
                <MissionBreadcrumbs />
              </div>
            </div>
          </Col>
        </div>
      </Row>
      {/* ------------------------------------------------- row 3 END ----------------------------- */}
    </Container>
  );
}

export default Imager_Settings;
