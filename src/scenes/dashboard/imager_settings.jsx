import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { Box, ListItemIcon, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandMore } from "@mui/icons-material";
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
    <Container>
      <Row>
        <Col>
          <Row>
            {/* row 1 */}
            <Col xs={12} sm={6} md={4} lg={4} xl={4} xxl={4}>
              <div // Parent div for ROW 1 start here
              >
                <div //div for whole of box 1
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  <div //box surrounding object "field dock logo"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100px",
                      backgroundColor: "transparent",
                    }}
                  >
                    <object
                      data="../../assets/FieldDock-Logo.svg"
                      type="image/svg+xml"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
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
                        backgroundColor: "transparent",
                        border: "1px solid #00e1b4",
                        padding: "0px 0px 0px 0.8em",
                        justifyContent: "space-between",
                        marginTop: "3rem",
                        borderRadius: "4px",
                        fontSize: "0.8rem", // dynamic font size based on viewport width
                        cursor: "pointer",
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
              </div>
            </Col>

            {/* next column */}
            <Col
              md={4}
              lg={4}
              style={{
                backgroundColor: "#ccc",
                border: "1px solid green",
              }}
            >
              Box hasflkjs;dlfjkasd2
            </Col>

            {/* next column */}
            <Col
              md={4}
              lg={4}
              style={{
                backgroundColor: "#ccc",
                border: "1px solid green",
              }}
            >
              Box hasflkjs;dlfjkasd2
            </Col>
          </Row>
          {/* end of row 1 */}
        </Col>
      </Row>
    </Container>
  );
}

export default Imager_Settings;
