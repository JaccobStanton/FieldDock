import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Imager_Settings() {
  return (
    <Container>
      <Row>
        <Col
          style={{
            backgroundColor: "#ccc",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Box 1
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            backgroundColor: "#ccc",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Box 2
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            backgroundColor: "#ccc",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Box 3
        </Col>
      </Row>
    </Container>
  );
}

export default Imager_Settings;
