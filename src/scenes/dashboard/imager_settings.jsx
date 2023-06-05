import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { Box, ListItemIcon, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandMore } from "@mui/icons-material";

import "/Users/jstanton/Coding/FieldDock/FieldDockMain/src/CSS/imager_settings.css";
import axios from "axios";

function Imager_Settings() {
  //
  //
  //---------------------------select hanger system logic-----------------------
  const [anchorEl, setAnchorEl] = useState(null);
  const [hangerAnchorEl, setHangerAnchorEl] = useState(null);
  const [selectedHangerSystem, setSelectedHangerSystem] = useState(null);
  const [hangerSystems, setHangerSystems] = useState([]);

  useEffect(() => {
    //logic for selecting which Fieldock system you want, would be the selection of the main system
    fetch("http://3.145.131.67:8000/hanger/hanger-system/")
      .then((response) => response.json())
      .then((data) => setHangerSystems(data))
      .catch((error) => console.log(error));
  }, []);
  const handleHangerOpen = (event) => {
    setHangerAnchorEl(event.currentTarget);
  };

  const handleHangerClose = () => {
    setHangerAnchorEl(null);
  };

  const handleHangerSelect = (event, selected) => {
    setSelectedHangerSystem(selected);
    handleHangerClose();
  };
  //---------------------------select hanger system logic END----------------------------------
  //
  //
  //
  //
  //---------------------------hovering over 10 boxes START------------------------------------
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);
  const [isHovered10, setIsHovered10] = useState(false);
  //---------------------------hovering over 10 boxes END------------------------------------
  //
  //
  //---------------------------logic for live date and time START------------------------------
  function getCurrentDateTimeInCST() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date().toLocaleDateString("en-US", {
      timeZone: "America/Chicago",
    });
    const dayOfWeek = daysOfWeek[new Date().getDay()];
    const time = new Date().toLocaleTimeString("en-US", {
      timeZone: "America/Chicago",
    });
    return `${dayOfWeek} | ${date} | ${time} CST`;
  }
  //---------------------------logic for live date and time END------------------------------
  //
  //
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };
  const buttonClassName = hovered ? "logout-button-hovered" : "logout-button";
  //
  //
  return (
    <Container
      fluid
      style={{ paddingTop: "20px", paddingLeft: "40px", paddingRight: "40px" }}
    >
      <Row>
        {/* row 1 */}
        <Col xs={6} sm={6} md={4} lg={4} xl={4} xxl={4}>
          <div //div for whole of box 1
            style={{
              backgroundColor: "transparent",
              padding: "10px",
              width: "100%",
            }}
          >
            <div //box surrounding object "field dock logo"
              style={{
                display: "flex",
                backgroundColor: "transparent",
              }}
            >
              <object
                data="../../assets/FieldDock-Logo.svg"
                type="image/svg+xml"
                style={{ width: "94%", height: "100%", marginBottom: "20px" }}
              />
            </div>

            <div className="select-fielddock-menu" onClick={handleHangerOpen}>
              {selectedHangerSystem
                ? selectedHangerSystem
                : "Select FieldDock System..."}
              <ListItemIcon>
                <ExpandMore />
              </ListItemIcon>
            </div>

            <Menu
              anchorEl={hangerAnchorEl}
              open={Boolean(hangerAnchorEl)}
              onClose={handleHangerClose}
            >
              {hangerSystems.map((system) => (
                <MenuItem
                  key={system.id}
                  autoFocus={false}
                  onClick={(event) =>
                    handleHangerSelect(
                      event,
                      `${system.name} - ${system.location}`
                    )
                  }
                  sx={{
                    color: "#000000",
                    backgroundColor: "#BEBEBE !important",
                    "&:hover": {
                      backgroundColor: "#EBECF0 !important",
                    },
                  }}
                >
                  {system.name} - {system.location}
                </MenuItem>
              ))}
            </Menu>
          </div>
          {/* end of SELECT FIELDDOCK */}
        </Col>
        {/* ---------------------------------------------FieldDock logo column END --------------------------------- */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* --------------------------------------------------USER next column START-------------------------------- */}
        <Col xs={6} sm={6} md={4} lg={4} xl={4} xxl={4}>
          <div className="user-logout-box">
            <div className="user-box">User 0000 (------)</div>
            <button
              className={buttonClassName}
              onMouseEnter={handleMouseEnter}
              onMouseOut={handleMouseOut}
            >
              Log Out
            </button>
          </div>
          <div className="last-reading-taken">
            <div className="responsive-text">Last reading taken:</div>
            <div
              style={{
                color: "#00e1b4",
                whiteSpace: "nowrap",
              }}
              className="responsive-text"
            >
              {getCurrentDateTimeInCST()}
            </div>
          </div>
          <div className="gps">
            <div className="responsive-text">GPS:</div>
            <div
              style={{
                color: "#00e1b4",
                whiteSpace: "nowrap",
              }}
              className="responsive-text"
            >
              <div>38&#176;39'34.7"N 90&#176;19'58.9"W</div>
            </div>
          </div>
          {/* end of User and Log out box */}
          {/* end of box 2 in ROW 2 */}
        </Col>
        {/* --------------------------------------------------USER next column END-------------------------------- */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* -------------------------------------------------DIRECTORY next column START--------------------------- */}
        <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
          <div className="first-five-boxes">
            {/* Box 1 */}
            <div
              className={isHovered1 ? "page-box-hover" : "page-box"}
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <Link to="/">
                <img
                  className="box-icon"
                  src={
                    isHovered1
                      ? "../../assets/real-time---active.svg"
                      : "../../assets/real-time-no-line_1.svg"
                  }
                />
              </Link>
            </div>
            {/* Box 2 */}
            <div
              className={isHovered2 ? "page-box-hover" : "page-box"}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <Link to="/images">
                <img
                  className="box-icon"
                  src={
                    isHovered2
                      ? "../../assets/imaging---active.svg"
                      : "../../assets/imaging-no-line.svg"
                  }
                />
              </Link>
            </div>
            {/* Box 3 */}
            <div
              className={isHovered3 ? "page-box-hover" : "page-box"}
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <Link to="/drone">
                <img
                  className="box-icon"
                  src={
                    isHovered3
                      ? "../../assets/Drone-Icon-Active.svg"
                      : "../../assets/Drone-Icon.svg"
                  }
                />
              </Link>
            </div>
            {/* Box 4 */}
            <div
              className={isHovered4 ? "page-box-hover" : "page-box"}
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
            >
              <Link to="/Plug_Play">
                <img
                  className="box-icon"
                  src={
                    isHovered4
                      ? "../../assets/wireless-no-line---active.svg"
                      : "../../assets/wireless-no-line.svg"
                  }
                />
              </Link>
            </div>
            {/* Box 5 */}
            <div
              className={isHovered5 ? "page-box-hover" : "page-box"}
              onMouseEnter={() => setIsHovered5(true)}
              onMouseLeave={() => setIsHovered5(false)}
            >
              <Link to="/settings">
                <img
                  className="box-icon"
                  src={
                    isHovered5
                      ? "../../assets/settings---active.svg"
                      : "../../assets/settings-no-line.svg"
                  }
                />
              </Link>
            </div>
          </div>
          {/* second row starts */}
          <div className="second-five-boxes">
            {/* Box 6 */}
            <div
              className={isHovered6 ? "page-box-hover" : "page-box"}
              onMouseEnter={() => setIsHovered6(true)}
              onMouseLeave={() => setIsHovered6(false)}
            >
              <Link to="/RealTime_Settings">
                <img
                  className="box-icon"
                  src={
                    isHovered6
                      ? "../../assets/real-time-settings---active.svg"
                      : "../../assets/real-time-settings-inactive.svg"
                  }
                />
              </Link>
            </div>
            {/* Box 7 */}
            <div
              className={isHovered7 ? "page-box-hover" : "page-box"}
              onMouseEnter={() => setIsHovered7(true)}
              onMouseLeave={() => setIsHovered7(false)}
            >
              <Link to="/imager_settings">
                <img
                  className="box-icon"
                  src={
                    isHovered7
                      ? "../../assets/imaging-settings---active.svg"
                      : "../../assets/imaging-settings-B-inactive.svg"
                  }
                />
              </Link>
            </div>
            {/* Box 8 */}
            <div
              className={isHovered8 ? "page-box-hover" : "page-box"}
              onMouseEnter={() => setIsHovered8(true)}
              onMouseLeave={() => setIsHovered8(false)}
            >
              <Link to="/diagnostics">
                <img
                  className="box-icon"
                  src={
                    isHovered8
                      ? "../../assets/Diagnostics---active.svg"
                      : "../../assets/Diagnostics-icon---no-line.svg"
                  }
                />
              </Link>
            </div>
            {/* Box 9 */}
            <div
              className={isHovered9 ? "page-box-hover" : "page-box"}
              onMouseEnter={() => setIsHovered9(true)}
              onMouseLeave={() => setIsHovered9(false)}
            >
              <Link to="/users">
                <img
                  className="box-icon"
                  src={
                    isHovered9
                      ? "../../assets/Users----active.svg"
                      : "../../assets/Users-no-line---active.svg"
                  }
                />
              </Link>
            </div>
            {/* Box 10 */}
            <div
              className={isHovered10 ? "page-box-hover" : "page-box"}
              onMouseEnter={() => setIsHovered10(true)}
              onMouseLeave={() => setIsHovered10(false)}
            >
              <Link to="/download_data">
                <img
                  className="box-icon"
                  src={
                    isHovered10
                      ? "../../assets/Download-Icon---active.svg"
                      : "../../assets/Download-Icon.svg"
                  }
                />
              </Link>
            </div>
          </div>
        </Col>
        {/* -------------------------------------------------DIRECTORY next column START----------------------------- */}
      </Row>
      {/* end of row 1 */}
      {/* -------------------------------------------------PARENT column row 1 END ----------------------------- */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* -------------------------------------------------PARENT column row 2 START ----------------------------- */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="entire-second-row">
            <div className="button-row">
              <button
                className="create-user-button"
                onMouseOver={(e) => {
                  e.target.style.borderColor = "#fff";
                  e.target.style.color = "orange";
                }}
                onMouseOut={(e) => {
                  e.target.style.borderColor = "orange";
                  e.target.style.color = "#fff";
                }}
              >
                Create a new user
              </button>
              <button
                className="edit-existing-user"
                onMouseOver={(e) => {
                  e.target.style.borderColor = "#fff";
                  e.target.style.color = "orange";
                }}
                onMouseOut={(e) => {
                  e.target.style.borderColor = "orange";
                  e.target.style.color = "#fff";
                }}
              >
                Edit existing user
              </button>
              {/* <div
                style={{
                  position: "absolute",
                  top: "-100%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#fff",
                  fontSize: "20px",
                }}
              >
                Users
              </div> */}
            </div>
          </div>
        </Col>
        {/* -------------------------------------------------PARENT column row 2 END ----------------------------- */}
      </Row>
    </Container>
  );
}

export default Imager_Settings;
