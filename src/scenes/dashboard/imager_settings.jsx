import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { Box, ListItemIcon, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandMore } from "@mui/icons-material";

import "/Users/jstanton/Coding/FieldDock/FieldDockMain/src/scenes/imager_settings.css";
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
              width: "100%", // set the width to 75% of the column
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
            <div //box surrounding "select hanger system"
            // style={{ width: "100%" }}
            >
              <div //box for menu
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "40px",
                  width: "94%",
                  backgroundColor: "transparent",
                  border: "1px solid #00e1b4",
                  padding: "0px 0px 0px 0.8em",
                  justifyContent: "space-between",
                  marginTop: "2rem",
                  borderRadius: "4px",
                  fontSize: "0.8rem", // dynamic font size based on viewport width
                  cursor: "pointer",
                  whiteSpace: "nowrap", // prevent text wrapping
                }}
                onClick={handleHangerOpen}
              >
                {selectedHangerSystem
                  ? selectedHangerSystem
                  : "Select Hanger System..."}
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
          </div>
        </Col>
        {/* ---------------------------------------------FieldDock logo column END --------------------------------- */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* --------------------------------------------------USER next column START-------------------------------- */}
        <Col xs={6} sm={6} md={4} lg={4} xl={4} xxl={4}>
          <div // box containing user box
            style={{ backgroundColor: "transparent" }}
          >
            <div //user box style
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                marginBottom: "5px",
                marginLeft: "25px",
                width: "90%", // set the width to 75% of the column
                // marginTop: "0.7rem",
              }}
            >
              <div //User text style
                style={{
                  marginRight: "10px", //space between box and log out button
                  border: "1px solid #797979",
                  borderRadius: "4px",
                  height: "3.5em",
                  textAlign: "center",
                  fontSize: "0.8em", // dynamic font size based on viewport width
                  width: "65%",
                  marginLeft: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                User 0000 (------)
              </div>

              <button //logout button style
                style={{
                  border: "1px solid orange",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  height: "3.5em",
                  color: "#ffffff",
                  padding: "0px 0.3em",
                  borderRadius: "4px",
                  cursor: "pointer",
                  width: "30%", // Set button width to 25% of the parent
                  fontSize: "0.8em", // dynamic font size based on viewport width
                  transition: "border-color 0.2s, color 0.2s",
                  whiteSpace: "nowrap", // prevent text wrapping
                }}
                onMouseOver={(e) => {
                  e.target.style.borderColor = "#fff";
                  e.target.style.color = "orange";
                }}
                onMouseOut={(e) => {
                  e.target.style.borderColor = "orange";
                  e.target.style.color = "#fff";
                }}
              >
                Log Out
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1px",
                marginLeft: "40px",
              }}
            >
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
                marginLeft: "40px",
              }}
            >
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
          </div>
          {/* end of box 2 in ROW 2 */}
        </Col>
        {/* --------------------------------------------------USER next column END-------------------------------- */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* -------------------------------------------------DIRECTORY next column START--------------------------- */}
        <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
          <div
            className="d-flex flex-wrap"
            style={{
              justifyContent: "space-between",
              marginBottom: "40px",
              marginTop: "10px",
              marginLeft: "10px",
            }}
          >
            {/* Box 1 */}
            <div
              style={{
                flexBasis: "15%",
                border: "1px solid #797979",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "border-color 0.0s", // Added transition for smooth effect
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#00e1b4"; // Change border color on mouse over
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#797979"; // Reset border color on mouse out
              }}
            >
              <Link to="/">
                <img
                  src="../../assets/real-time-no-line_1.svg"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    padding: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.src =
                      "../../assets/real-time---active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src =
                      "../../assets/real-time-no-line_1.svg")
                  }
                />
              </Link>
            </div>
            {/* Box 2 */}
            <div
              style={{
                flexBasis: "15%",
                border: "1px solid #797979",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "border-color 0.0s", // Added transition for smooth effect
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#00e1b4"; // Change border color on mouse over
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#797979"; // Reset border color on mouse out
              }}
            >
              <Link to="/images">
                <img
                  src="../../assets/imaging-no-line.svg"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    padding: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.src = "../../assets/imaging---active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = "../../assets/imaging-no-line.svg")
                  }
                />
              </Link>
            </div>
            {/* Box 3 */}
            <div
              style={{
                flexBasis: "15%",
                border: "1px solid #797979",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "border-color 0.0s", // Added transition for smooth effect
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#00e1b4"; // Change border color on mouse over
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#797979"; // Reset border color on mouse out
              }}
            >
              <Link to="/drone">
                <img
                  src="../../assets/Drone-Icon.svg"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    padding: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.src = "../../assets/Drone-Icon-Active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = "../../assets/Drone-Icon.svg")
                  }
                />
              </Link>
            </div>
            {/* Box 4 */}
            <div
              style={{
                flexBasis: "15%",
                border: "1px solid #797979",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "border-color 0.0s", // Added transition for smooth effect
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#00e1b4"; // Change border color on mouse over
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#797979"; // Reset border color on mouse out
              }}
            >
              <Link to="/Plug_Play">
                <img
                  src="../../assets/wireless-no-line.svg"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    padding: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.src =
                      "../../assets/wireless-no-line---active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = "../../assets/wireless-no-line.svg")
                  }
                />
              </Link>
            </div>
            {/* Box 5 */}
            <div
              style={{
                flexBasis: "15%",
                border: "1px solid #797979",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "border-color 0.0s", // Added transition for smooth effect
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#00e1b4"; // Change border color on mouse over
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#797979"; // Reset border color on mouse out
              }}
            >
              <Link to="/settings">
                <img
                  src="../../assets/settings-no-line.svg"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    padding: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.src = "../../assets/settings---active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = "../../assets/settings-no-line.svg")
                  }
                />
              </Link>
            </div>
          </div>
          <div
            className="d-flex flex-wrap"
            style={{
              justifyContent: "space-between",
              marginLeft: "10px",
            }}
          >
            {/* Box 6 */}
            <div
              style={{
                flexBasis: "15%",
                border: "1px solid #797979",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "border-color 0.0s", // Added transition for smooth effect
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#00e1b4"; // Change border color on mouse over
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#797979"; // Reset border color on mouse out
              }}
            >
              <Link to="/RealTime_Settings">
                <img
                  src="../../assets/real-time-settings-inactive.svg"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    padding: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.src =
                      "../../assets/real-time-settings---active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src =
                      "../../assets/real-time-settings-inactive.svg")
                  }
                />
              </Link>
            </div>
            {/* Box 7 */}
            <div
              style={{
                flexBasis: "15%",
                border: "1px solid #797979",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "border-color 0.0s", // Added transition for smooth effect
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#00e1b4"; // Change border color on mouse over
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#797979"; // Reset border color on mouse out
              }}
            >
              <Link to="/imager_settings">
                <img
                  src="../../assets/imaging-settings-B-inactive.svg"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    padding: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.src =
                      "../../assets/imaging-settings---active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src =
                      "../../assets/imaging-settings-B-inactive.svg")
                  }
                />
              </Link>
            </div>
            {/* Box 8 */}
            <div
              style={{
                flexBasis: "15%",
                border: "1px solid #797979",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "border-color 0.0s", // Added transition for smooth effect
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#00e1b4"; // Change border color on mouse over
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#797979"; // Reset border color on mouse out
              }}
            >
              <Link to="/diagnostics">
                <img
                  src="../../assets/Diagnostics-icon---no-line.svg"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    padding: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.src =
                      "../../assets/Diagnostics---active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src =
                      "../../assets/Diagnostics-icon---no-line.svg")
                  }
                />
              </Link>
            </div>
            {/* Box 9 */}
            <div
              style={{
                flexBasis: "15%",
                border: "1px solid #797979",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "border-color 0.0s", // Added transition for smooth effect
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#00e1b4"; // Change border color on mouse over
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#797979"; // Reset border color on mouse out
              }}
            >
              <Link to="/users">
                <img
                  src="../../assets/Users-no-line---active.svg"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    padding: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.src = "../../assets/Users----active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src =
                      "../../assets/Users-no-line---active.svg")
                  }
                />
              </Link>
            </div>
            {/* Box 10 */}
            <div
              style={{
                flexBasis: "%",
                border: "1px solid #797979",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "border-color 0.0s", // Added transition for smooth effect
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#00e1b4"; // Change border color on mouse over
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#797979"; // Reset border color on mouse out
              }}
            >
              <Link to="/download_data">
                <img
                  src="../../assets/Download-Icon.svg"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    padding: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.src =
                      "../../assets/Download-Icon---active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = "../../assets/Download-Icon.svg")
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
    </Container>
  );
}

export default Imager_Settings;
