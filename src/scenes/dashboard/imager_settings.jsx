import "../../CSS/imager_settings.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import CommonRow from "../../components/NavBar/common_row";
import LatLongTable from "../../components/Mission Planner/latLongTable";
import MapComponent from "../../components/Mission Planner/map";
import "../../components/Mission Planner/latLongTable.css";

function Imager_Settings() {
  const [data, setData] = useState([
    {
      id: 1,
      command: "",
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      latitude: "",
      longitude: "",
      alt: "",
      frame: "",
      grad: "",
      angle: "",
      dist: "",
      az: "",
    },
  ]);

  const onMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    setData((oldData) => {
      const newData = [...oldData];
      const lastRow = newData[newData.length - 1];
      lastRow.latitude = lat;
      lastRow.longitude = lng;
      return newData;
    });
  };
  return (
    <Container fluid>
      <div>
        <CommonRow />
      </div>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="sensor-measurement-settings">
            <div className="sensor-measurement-settings-title">
              FieldDock Mission Planner
            </div>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div style={{ display: "flex", width: "94%" }}>
          <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
            <div
              style={{
                height: "700px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "15px",
                border: "1px solid #797979",
                backgroundColor: "transparent",
              }}
            >
              <MapComponent onMapClick={onMapClick} />
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
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
              <LatLongTable data={data} setData={setData} />
            </div>
          </Col>
        </div>
      </Row>
      {/* ------------------------------------------------- row 1 END ----------------------------- */}
    </Container>
  );
}

export default Imager_Settings;
