import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CommonRow from "../../components/NavBar/CommonRow";
import "../../CSS/images.css";
// import { ReactComponent as DroneDiagram } from "../../assets/Drone-Diagram.svg";

function Images() {
  return (
    <Container fluid>
      <div>
        <CommonRow />
      </div>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="mainDiv">
            <div className="buttonContainer">
              <div className="toggleType">Toggle Image Type</div>
              <button className="button buttonFielddock">
                FieldDock Imager
              </button>
              <button className="button buttonMosaicked">
                Mosaicked Drone Images
              </button>
            </div>
          </div>
        </Col>
        {/* -------------------------------------------------PARENT column row 2 END ----------------------------- */}
      </Row>

      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="largeBox">
            <div className="dropdown-textbox-container">
              <ArrowBackIosIcon className="arrowIcon" />
              <input type="text" className="textbox" placeholder="00/00/23" />
              <select className="dropdown" defaultValue="00:00PM">
                <option disabled>00:00PM</option>
                <option>1:00PM</option>
                <option>2:00PM</option>
                <option>3:00PM</option>
                <option>4:00PM</option>
                <option>5:00PM</option>
              </select>
              <button className="enterButton">Enter</button>
              <ArrowForwardIosIcon className="arrowIcon" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Images;
