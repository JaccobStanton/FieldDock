import "../../CSS/imager_settings.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import CommonRow from "../../components/NavBar/common_row";

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
              <h2 // Diagnostics Log title
                style={{
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                FieldDock Diagnostics Log
              </h2>

              <table // Table with bullet points and underlines
                style={{
                  width: "95%",
                  borderCollapse: "collapse",
                  textAlign: "left",
                  fontSize: "16px",
                  lineHeight: "1.5",
                }}
              >
                <tbody>
                  <tr>
                    <td style={{ borderBottom: "1px solid #797979" }}>
                      • 02/20/2021 / 13:45 / 0002:customer_1 / 0006: error_808.1
                    </td>
                  </tr>
                  <tr>
                    <td style={{ borderBottom: "1px solid #797979" }}>
                      • 02/20/2021 / 14:45 / 0002:customer_1 / 0006: error_808.1
                    </td>
                  </tr>
                  {/* <tr>
                <td style={{ borderBottom: "1px solid #00e1b4" }}>• Item 3</td>
              </tr>
              <tr>
                <td style={{ borderBottom: "1px solid #00e1b4" }}>• Item 3</td>
              </tr>
              <tr>
                <td style={{ borderBottom: "1px solid #00e1b4" }}>• Item 3</td>
              </tr>
              <tr>
                <td style={{ borderBottom: "1px solid #00e1b4" }}>• Item 3</td>
              </tr>
              <tr>
                <td style={{ borderBottom: "1px solid #00e1b4" }}>• Item 3</td>
              </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </Col>
      </Row>
      {/* ------------------------------------------------- row 4 END ----------------------------- */}
      <Row></Row>
      {/* ------------------------------------------------- row 5 END ----------------------------- */}
      <Row></Row>
      {/* ------------------------------------------------- row 5 END ----------------------------- */}
    </Container>
  );
}

export default Imager_Settings;
