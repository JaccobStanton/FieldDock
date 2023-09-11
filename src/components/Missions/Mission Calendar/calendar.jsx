import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./calendar.css";
import CommonRow from "../../NavBar/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import { CalendarButton } from "../../Tools/Buttons/CalendarButtons/calendarButton";

function Calendar() {
  return (
    <Container fluid>
      <div>
        <CommonRow />
      </div>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="sensor-measurement-settings">
            <div className="sensor-measurement-settings-title">
              Mission Planning Calendar
            </div>
          </div>
        </Col>
      </Row>
      <div
        style={{
          width: "94%",
          marginLeft: "auto",
          marginRight: "auto",
          border: "1px solid #797979",
        }}
      >
        <Fullcalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "today prev,next", // will normally be on the left. if RTL, will be on the right
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
          }}
          height={"90vh"}
        />
      </div>
      <Row>
        {/* Content for the fourth row */}
        <Col className="center-content">
          <CalendarButton text="Back" />
          <CalendarButton text="Save" />
          <CalendarButton text="Next" />
        </Col>
      </Row>
    </Container>
  );
}

export default Calendar;
