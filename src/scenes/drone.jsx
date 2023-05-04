import React from "react";
import { Link } from "react-router-dom";
import { Box, ListItemIcon, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandMore } from "@mui/icons-material";
import axios from "axios";

function Drone() {
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
  //---------------------------select hanger system logic END-----------------------

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

  //----------------------------logic for drone statuses----------------------------------------
  const [droneData, setDroneData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://3.145.131.67:8000/hanger/drone-charging/")
        .then((response) => {
          setDroneData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  //----------------------------logic for drone statuses END ------------------------------------

  return (
    <div //parent div style of ALL ROWS ON THIS PAGE
      style={{
        display: "grid",
        gridTemplateRows: "repeat(3, minmax(100px, auto))",
        gridGap: "10px",
        margin: "0 auto",
        maxWidth: "90%",
      }}
    >
      <div // Parent div for ROW 1 start here
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr", // add this property to create 3 evenly spaced boxes
          gridGap: "10px",
          height: "200px",
          justifyContent: "space-between", // add this property to space the boxes evenly
          marginTop: "1rem",
        }}
      >
        <div //div for whole of box 1
          style={{
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div //box surrounding object "field dock logo"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "85%",
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
            style={{ width: "85%" }}
          >
            <div //box for menu
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "40px",
                backgroundColor: "transparent",
                border: "1px solid #00e1b4",
                padding: "10px",
                justifyContent: "space-between",
                marginTop: "3rem",
                borderRadius: "5px",
                fontSize: "1vw", // dynamic font size based on viewport width
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
                    "&:hover": { backgroundColor: "#EBECF0 !important" },
                  }}
                >
                  {system.name} - {system.location}
                </MenuItem>
              ))}
            </Menu>
          </div>{" "}
          {/* end of SELECT FIELDDOCK */}
        </div>
        {/* end of box 1 that is inside of row 1 */}

        {/* starts of box 2 that is inside of row 1 */}
        <div // box containing user box
          style={{ backgroundColor: "#181818" }}
        >
          <div //user box style
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              marginBottom: "10px",
              width: "85%", // set the width to 75% of the column
              marginTop: "0.7rem",
            }}
          >
            <div //User text style
              style={{
                marginRight: "10px", //space between box and log out button
                border: "1px solid #797979",
                borderRadius: "5px",
                height: "35px",
                textAlign: "center",
                fontSize: "1vw", // dynamic font size based on viewport width
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
                backgroundColor: "transparent",
                color: "#ffffff",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
                width: "25%", // Set button width to 25% of the parent
                fontSize: "1vw", // dynamic font size based on viewport width
              }}
            >
              Log Out
            </button>
          </div>
          <div // Last reading taken box below
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1px",
            }}
          >
            <div style={{ fontSize: "0.8vw" }}>Last reading taken:</div>
            <div style={{ color: "#00e1b4", fontSize: "1vw" }}>
              {getCurrentDateTimeInCST()}
            </div>
          </div>
          <div //coordinate and GPS reading
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            <div style={{ fontSize: "0.8vw" }}>GPS:</div>
            <div style={{ color: "#00e1b4", fontSize: "1vw" }}>
              <div>38&#176;39'34.7"N 90&#176;19'58.9"W</div>
            </div>
          </div>{" "}
          {/* end of User and Log out box */}
        </div>
        {/* end of box 2 in ROW 2 */}

        <div
          style={{
            backgroundColor: "transparent",
            height: "100%",
            display: "flex",
            flexDirection: "column", // this makes it so all the boxes in column 1 are stacked like a column on top of each other
            alignItems: "center",
            justifyContent: "center",
            flex: "1", // Give equal width to each box
            minWidth: "calc(33.333% - 10px)", // Calculate the width for each box, considering the space between them
            margin: "0 5px", // Set horizontal margin to 5px for equal spacing
          }}
        >
          <div
            style={{
              width: "85%",
              cursor: "pointer",
              marginBottom: "-1rem",
            }}
          >
            {" "}
            {/*above is the div that surrounds the entirety of the 10 boxes "PARENT DIV OF 10 BOXES"*/}{" "}
            <div style={{ display: "flex", height: "30%" }}>
              {/*above is the div that surrounds the entirety of the first FIVE boxes*/}{" "}
              <div
                style={{
                  width: "17%",
                  height: "80%",
                  marginRight: "20px",
                  border: "1px solid #CCC",
                  borderRadius: "5px",
                }}
              >
                <Link to="/">
                  <img
                    src="../../assets/real-time-no-line_1.svg"
                    style={{ width: "100%", height: "100%" }} //sizing of the actual image inside the box
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
              <div
                style={{
                  width: "17%",
                  height: "80%",
                  marginRight: "20px",
                  border: "1px solid #CCC",
                  borderRadius: "5px",
                }}
              >
                <Link to="/images">
                  <img
                    src="../../assets/imaging-no-line.svg"
                    style={{ width: "80%", height: "100%", marginLeft: "8px" }}
                    onMouseOver={(e) =>
                      (e.currentTarget.src =
                        "../../assets/imaging---active.svg")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.src = "../../assets/imaging-no-line.svg")
                    }
                  />
                </Link>
              </div>
              <div
                style={{
                  width: "17%",
                  height: "80%",
                  marginRight: "20px",
                  border: "1px solid #CCC",
                  borderRadius: "5px",
                }}
              >
                <Link to="/drone">
                  <img
                    src="../../assets/Drone-Icon.svg"
                    style={{ width: "100%", height: "100%" }} //sizing of the actual image inside the box
                    onMouseOver={(e) =>
                      (e.currentTarget.src =
                        "../../assets/Drone-Icon-Active.svg")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.src = "../../assets/Drone-Icon.svg")
                    }
                  />
                </Link>
              </div>
              <div
                style={{
                  width: "17%",
                  height: "80%",
                  marginRight: "20px",
                  border: "1px solid #CCC",
                  borderRadius: "5px",
                }}
              >
                <Link to="/Plug_Play">
                  <img
                    src="../../assets/wireless-no-line.svg"
                    style={{ width: "100%", height: "100%" }} //sizing of the actual image inside the box
                    onMouseOver={(e) =>
                      (e.currentTarget.src =
                        "../../assets/wireless-no-line---active.svg")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.src =
                        "../../assets/wireless-no-line.svg")
                    }
                  />
                </Link>
              </div>
              <Link to="/settings">
                <div
                  style={{
                    width: "70px",
                    height: "55px",
                    marginRight: "12px",
                    border: "1px solid #CCC",
                    borderRadius: "5px",
                  }}
                >
                  <img
                    src="../../assets/settings-no-line.svg"
                    style={{ width: "70%", height: "100%", marginLeft: "11px" }}
                    onMouseOver={(e) =>
                      (e.currentTarget.src =
                        "../../assets/settings---active.svg")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.src =
                        "../../assets/settings-no-line.svg")
                    }
                  />
                </div>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                height: "30%",
                marginTop: "20px",
              }}
            >
              {" "}
              {/*above is the div that surrounds the entirety of the LAST FIVE boxes*/}
              <div
                style={{
                  width: "17%",
                  height: "80%",
                  marginRight: "20px",
                  border: "1px solid #CCC",
                  borderRadius: "5px",
                }}
              >
                <Link to="/RealTime_Settings">
                  <img
                    src="../../assets/real-time-settings-inactive.svg"
                    style={{ width: "100%", height: "90%" }} //sizing of the actual image inside the box
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
              <div
                style={{
                  width: "17%",
                  height: "80%",
                  marginRight: "20px",
                  border: "1px solid #CCC",
                  borderRadius: "5px",
                }}
              >
                <img
                  src="../../assets/imaging-settings-B-inactive.svg"
                  style={{ width: "100%", height: "90%" }} //sizing of the actual image inside the box
                  onMouseOver={(e) =>
                    (e.currentTarget.src =
                      "../../assets/imaging-settings---active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src =
                      "../../assets/imaging-settings-B-inactive.svg")
                  }
                />
              </div>
              <div
                style={{
                  width: "17%",
                  height: "80%",
                  marginRight: "20px",
                  border: "1px solid #CCC",
                  borderRadius: "5px",
                }}
              >
                <Link to="/diagnostics">
                  <img
                    src="../../assets/Diagnostics-icon---no-line.svg"
                    style={{ width: "80%", height: "100%", marginLeft: "8px" }}
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
              <div
                style={{
                  width: "17%",
                  height: "80%",
                  marginRight: "20px",
                  border: "1px solid #CCC",
                  borderRadius: "5px",
                }}
              >
                <Link to="/users">
                  <img
                    src="../../assets/Users-no-line---active.svg"
                    style={{ width: "100%", height: "90%" }} //sizing of the actual image inside the box
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
              <div
                style={{
                  width: "17%",
                  height: "80%",
                  marginRight: "20px",
                  border: "1px solid #CCC",
                  borderRadius: "5px",
                }}
              >
                <Link to="/download_data">
                  <img
                    src="../../assets/Download-Icon.svg"
                    style={{ width: "80%", height: "100%", marginLeft: "8px" }}
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
            {/* above is the div that surrounds the 10 boxes */}
          </div>
        </div>
      </div>
      {/* parent div END for ENTIRE ROW 1 above */}

      {/* ////////////////////////////row 2 start/////////////////////////////////////////////// */}

      <div //parent div style for row 2
        style={{
          backgroundColor: "#181818",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div //box surrounding both "drone" box and image of drone box
          style={{
            backgroundColor: "#181818",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div //box surround "drone"
            style={{
              backgroundColor: "#181818",
              width: "50px",
              height: "20px",
              lineHeight: "20px",
              borderRadius: "5px",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Drone
          </div>
          <img src="../../assets/drone_diagram_large.svg" alt="Drone Image" />
        </div>
      </div>
      {/* parent style for row 2 ends above */}

      {/* /////////////////////////////row 3 start////////////////////////////////////////////// */}

      <div //parent style for ROW 3
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "10px",
          backgroundColor: "#181818",
          height: "200px",
        }}
      >
        <div //main outside for box 1
          style={{
            backgroundColor: "#181818",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div //box around text
            style={{
              backgroundColor: "transparent",
              width: "150px",
              height: "80px",
              borderRadius: "5px",
              position: "relative",
            }}
          >
            <div //styling the text
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div style={{ color: "#e8e8e8" }}>Last charge completed:</div>
              <div style={{ color: "#00e1b4" }}>
                {droneData && droneData.length > 0
                  ? droneData[droneData.length - 1].end_time
                  : "N/A"}{" "}
              </div>
            </div>
          </div>
        </div>
        <div //main outside for box 2
          style={{
            backgroundColor: "#181818",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div //box around text
            style={{
              backgroundColor: "transparent",
              width: "150px",
              height: "80px",
              borderRadius: "5px",
              position: "relative",
            }}
          >
            <div //styling the text
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div style={{ color: "#e8e8e8" }}>Status:</div>
              <div
                style={{
                  color:
                    droneData &&
                    droneData.length > 0 &&
                    !droneData[droneData.length - 1].status
                      ? "#ff0000"
                      : "#00e1b4",
                }}
              >
                {droneData && droneData.length > 0
                  ? !droneData[droneData.length - 1].status
                    ? "Not Charging"
                    : "Charging"
                  : "N/A"}
              </div>
            </div>
          </div>
        </div>
        <div //main outside box for box 3
          style={{
            backgroundColor: "#181818",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div //box around text
            style={{
              backgroundColor: "transparent",
              width: "150px",
              height: "80px",
              borderRadius: "5px",
              position: "relative",
            }}
          >
            <div //styling the text
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div style={{ color: "#e8e8e8" }}>Battery Charged:</div>
              <div style={{ color: "#00e1b4" }}>
                {droneData && droneData.length > 0
                  ? droneData[droneData.length - 1].percent_charged
                  : "N/A"}
                %
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* parent ends for row 3 above */}

      {/* ////////////////////////////////end of page//////////////////////// */}
    </div>
    // END OF PARENT DIV OF ALL ROWS ABOVE
  );
}

export default Drone;
