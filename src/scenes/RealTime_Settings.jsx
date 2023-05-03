import React from "react";
import { Link } from "react-router-dom";
import { Box, ListItemIcon, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandMore } from "@mui/icons-material";
import axios from "axios";

function RealTime_Settings() {
  //
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
  //------------------------logic for time interval button for SENSOR Modules START------------------
  const [selectedInterval, setSelectedInterval] = useState(
    "Select time interval..."
  );

  const handleSelect = (e) => {
    setSelectedInterval(e.target.value);
  };
  //------------------------logic for time interval button for SENSOR Modules END------------------
  //
  //
  //
  //------------------------logic for time interval button for WIRELESS Sensor START------------------
  const [selectedInterval1, setSelectedInterval1] = useState(
    "Select time interval..."
  );

  const handleSelect1 = (e) => {
    setSelectedInterval1(e.target.value);
  };
  //------------------------logic for time interval button for WIRELESS Sensor END------------------
  //
  //
  //
  //------------------------logic for time interval button for WIND Sensor START------------------
  const [selectedInterval2, setSelectedInterval2] = useState(
    "Select time interval..."
  );

  const handleSelect2 = (e) => {
    setSelectedInterval2(e.target.value);
  };
  //------------------------logic for time interval button for WIND Sensor END------------------
  //
  //
  //
  //------------------------logic for time interval button for SOIL Sensor START------------------
  const [selectedInterval3, setSelectedInterval3] = useState(
    "Select time interval..."
  );

  const handleSelect3 = (e) => {
    setSelectedInterval3(e.target.value);
  };
  //------------------------logic for time interval button for SOIL Sensor END------------------
  //
  //
  //
  //------------------------logic for time interval button for PAR Sensor START------------------
  const [selectedInterval4, setSelectedInterval4] = useState(
    "Select time interval..."
  );

  const handleSelect4 = (e) => {
    setSelectedInterval4(e.target.value);
  };
  //------------------------logic for time interval button for PAR Sensor END------------------
  //
  //
  //
  //------------------------logic for time interval button for SOIL Sensor START------------------
  const [selectedInterval5, setSelectedInterval5] = useState(
    "Select time interval..."
  );

  const handleSelect5 = (e) => {
    setSelectedInterval5(e.target.value);
  };
  //------------------------logic for time interval button for SOIL Sensor END------------------
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
                    height: "80%",
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
                <img
                  src="../../assets/Diagnostics-icon---no-line.svg"
                  style={{ width: "100%", height: "90%" }} //sizing of the actual image inside the box
                  onMouseOver={(e) =>
                    (e.currentTarget.src =
                      "../../assets/Diagnostics---active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src =
                      "../../assets/Diagnostics-icon---no-line.svg")
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
                <img
                  src="../../assets/Download-Icon.svg"
                  style={{ width: "100%", height: "90%" }} //sizing of the actual image inside the box
                  onMouseOver={(e) =>
                    (e.currentTarget.src =
                      "../../assets/Download-Icon---active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = "../../assets/Download-Icon.svg")
                  }
                />
              </div>
            </div>
            {/* above is the div that surrounds the 10 boxes */}
          </div>
        </div>
      </div>
      {/* parent div END for ENTIRE ROW 1 above */}
      {/* /////////////////////////////row 1 END///////////////////////////////////////////////// */}

      {/* ////////////////////////////row 2 start/////////////////////////////////////////////// */}
      {/*  */}
      {/*  */}
      {/*  */}
      <div //parent style of row 2 start
        style={{
          position: "relative",
          backgroundColor: "transparent",
          height: "200px",
          display: "grid",
          alignItems: "center",
          justifyContent: "flex-start",
          gridTemplateColumns: "40% 40%", // 2 columns, each taking 40% of the width
          gridTemplateRows: "33.33% 33.33% 33.33%", // 3 rows, each taking 1/3 of the height
          gap: "10%",
          rowGap: "40%",
          marginBottom: "8rem",
        }}
      >
        <div //box for sensor measurement heading
          style={{
            position: "absolute", // Added position absolute
            top: "10px", // Adjust the top value to position the box
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "transparent",
            padding: "5px",
            borderRadius: "5px",
            color: "white",
            fontSize: "22px",
          }}
        >
          Sensor Measurement Settings
        </div>
        {/* end of box for sensor measurement settigns above */}
        <div //STYLING FOR THE FIRST DIV IN ROW 2
          style={{
            border: "1px solid #797979",
            padding: "10px",
            position: "relative",
            width: "120%",
            height: "150%",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            // marginBottom: "2rem",
            marginTop: "10rem",
            marginLeft: "2rem",
          }}
        >
          <div //div 1 styling
            style={{
              position: "absolute",
              top: "-15px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#181818",
              padding: "0 5px",
              zIndex: 1,
              fontSize: "20px",
            }}
          >
            Sensor Modules
          </div>
          <p
            style={{
              color: " #00e1b4",
              marginLeft: "1rem",
            }}
          >
            Select time interval for: temperature, humidity, air pressure, lux,
            air quality (if integrated)
          </p>
          <div>
            <select
              value={selectedInterval}
              onChange={handleSelect}
              style={{
                backgroundColor: "transparent",
                fontSize: "15px",
                borderRadius: "5px",
                border: "1px solid #797979",
                color: "white",
                padding: "10px", // Optional: add some padding for better appearance
                marginRight: "2rem",
              }}
            >
              <option value="Select time interval..." disabled>
                Select time interval...
              </option>
              <option value="5 minutes">5 minutes</option>
              <option value="10 minutes">10 minutes</option>
              <option value="15 minutes">15 minutes</option>
              <option value="20 minutes">20 minutes</option>
              <option value="45 minutes">45 minutes</option>
              <option value="1 hour">1 hour</option>
            </select>
          </div>
        </div>
        {/* end of style for DIV 1 */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        <div //STYLING FOR THE SECOND DIVS IN ROW 2
          style={{
            border: "1px solid #797979",
            padding: "10px",
            position: "relative",
            width: "120%",
            height: "150%",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            // marginBottom: "2rem",
            marginTop: "10rem",
            marginLeft: "2rem",
          }}
        >
          <div //div 2 styling
            style={{
              position: "absolute",
              top: "-15px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#181818",
              padding: "0 5px",
              zIndex: 1,
              fontSize: "20px",
            }}
          >
            Wireless Sensors
          </div>
          <p
            style={{
              color: " #00e1b4",
              marginLeft: "1rem",
            }}
          >
            Select time interval for: temperature, humidity, air pressure, lux,
            air quality, add-on sensor
          </p>
          <div>
            <select
              value={selectedInterval1}
              onChange={handleSelect1}
              style={{
                backgroundColor: "transparent",
                fontSize: "15px",
                borderRadius: "5px",
                border: "1px solid #797979",
                color: "white",
                padding: "10px", // Optional: add some padding for better appearance
                marginRight: "2rem",
              }}
            >
              <option value="Select time interval..." disabled>
                Select time interval...
              </option>
              <option value="5 minutes">5 minutes</option>
              <option value="10 minutes">10 minutes</option>
              <option value="15 minutes">15 minutes</option>
              <option value="20 minutes">20 minutes</option>
              <option value="45 minutes">45 minutes</option>
              <option value="1 hour">1 hour</option>
            </select>
          </div>
        </div>
        {/* end of style for DIV 2 */}
        <div //STYLING FOR THE THIRD DIVS IN ROW 2
          style={{
            border: "1px solid #797979",
            padding: "10px",
            position: "relative",
            width: "120%",
            height: "150%",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            // marginBottom: "2rem",
            marginTop: "10rem",
            marginLeft: "2rem",
          }}
        >
          <div //div 3 styling
            style={{
              position: "absolute",
              top: "-15px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#181818",
              padding: "0 5px",
              zIndex: 1,
              fontSize: "20px",
            }}
          >
            Wind Sensors
          </div>
          <p
            style={{
              color: " #00e1b4",
              marginLeft: "1rem",
            }}
          >
            Select time interval for windspeed, wind direction, gust (for
            digital wind sensors)
          </p>
          <div>
            <select
              value={selectedInterval2}
              onChange={handleSelect2}
              style={{
                backgroundColor: "transparent",
                fontSize: "15px",
                borderRadius: "5px",
                border: "1px solid #797979",
                color: "white",
                padding: "10px", // Optional: add some padding for better appearance
                marginRight: "2rem",
              }}
            >
              <option value="Select time interval..." disabled>
                Select time interval...
              </option>
              <option value="5 minutes">5 minutes</option>
              <option value="10 minutes">10 minutes</option>
              <option value="15 minutes">15 minutes</option>
              <option value="20 minutes">20 minutes</option>
              <option value="45 minutes">45 minutes</option>
              <option value="1 hour">1 hour</option>
            </select>
          </div>
        </div>
        {/* end of style for DIV 3 */}
        <div //STYLING FOR THE FORUTH DIVS IN ROW 2
          style={{
            border: "1px solid #797979",
            padding: "10px",
            position: "relative",
            width: "120%",
            height: "150%",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            // marginBottom: "2rem",
            marginTop: "10rem",
            marginLeft: "2rem",
          }}
        >
          <div //div 3 styling
            style={{
              position: "absolute",
              top: "-15px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#181818",
              padding: "0 5px",
              zIndex: 1,
              fontSize: "20px",
            }}
          >
            Soil Sensors
          </div>
          <p
            style={{
              color: " #00e1b4",
              marginLeft: "1rem",
            }}
          >
            Select time interval for: soil temperature, moisture, electrical
            conductivity (if integrated)
          </p>
          <div>
            <select
              value={selectedInterval3}
              onChange={handleSelect3}
              style={{
                backgroundColor: "transparent",
                fontSize: "15px",
                borderRadius: "5px",
                border: "1px solid #797979",
                color: "white",
                padding: "10px", // Optional: add some padding for better appearance
                marginRight: "2rem",
              }}
            >
              <option value="Select time interval..." disabled>
                Select time interval...
              </option>
              <option value="5 minutes">5 minutes</option>
              <option value="10 minutes">10 minutes</option>
              <option value="15 minutes">15 minutes</option>
              <option value="20 minutes">20 minutes</option>
              <option value="45 minutes">45 minutes</option>
              <option value="1 hour">1 hour</option>
            </select>
          </div>
        </div>
        {/* end of style for DIV 4 */}
        <div //STYLING FOR THE FIFTH DIVS IN ROW 2
          style={{
            border: "1px solid #797979",
            padding: "10px",
            position: "relative",
            width: "120%",
            height: "150%",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            // marginBottom: "2rem",
            marginTop: "10rem",
            marginLeft: "2rem",
          }}
        >
          <div //div 3 styling
            style={{
              position: "absolute",
              top: "-15px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#181818",
              padding: "0 5px",
              zIndex: 1,
              fontSize: "20px",
            }}
          >
            PAR Sensors
          </div>
          <p
            style={{
              color: " #00e1b4",
              marginLeft: "1rem",
            }}
          >
            Select time interval for PAR Sensor measurements
          </p>
          <div>
            <select
              value={selectedInterval4}
              onChange={handleSelect4}
              style={{
                backgroundColor: "transparent",
                fontSize: "15px",
                borderRadius: "5px",
                border: "1px solid #797979",
                color: "white",
                padding: "10px", // Optional: add some padding for better appearance
                marginRight: "2rem",
              }}
            >
              <option value="Select time interval..." disabled>
                Select time interval...
              </option>
              <option value="5 minutes">5 minutes</option>
              <option value="10 minutes">10 minutes</option>
              <option value="15 minutes">15 minutes</option>
              <option value="20 minutes">20 minutes</option>
              <option value="45 minutes">45 minutes</option>
              <option value="1 hour">1 hour</option>
            </select>
          </div>
        </div>
        {/* end of style for DIV 5 */}
        <div //STYLING FOR THE SIXTH DIVS IN ROW 2
          style={{
            border: "1px solid #797979",
            padding: "10px",
            position: "relative",
            width: "120%",
            height: "150%",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            // marginBottom: "2rem",
            marginTop: "10rem",
            marginLeft: "2rem",
          }}
        >
          <div //div 3 styling
            style={{
              position: "absolute",
              top: "-15px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#181818",
              padding: "0 5px",
              zIndex: 1,
              fontSize: "20px",
            }}
          >
            Air Quality Transmitter Sensors
          </div>
          <p
            style={{
              color: " #00e1b4",
              marginLeft: "1rem",
            }}
          >
            Select time interval for Air Quality Transmitter Sensor measurements
          </p>
          <div>
            <select
              value={selectedInterval5}
              onChange={handleSelect5}
              style={{
                backgroundColor: "transparent",
                fontSize: "15px",
                borderRadius: "5px",
                border: "1px solid #797979",
                color: "white",
                padding: "10px", // Optional: add some padding for better appearance
                marginRight: "2rem",
              }}
            >
              <option value="Select time interval..." disabled>
                Select time interval...
              </option>
              <option value="5 minutes">5 minutes</option>
              <option value="10 minutes">10 minutes</option>
              <option value="15 minutes">15 minutes</option>
              <option value="20 minutes">20 minutes</option>
              <option value="45 minutes">45 minutes</option>
              <option value="1 hour">1 hour</option>
            </select>
          </div>
        </div>
        {/* end of style for DIV 6 */}
      </div>
      {/* parent style of row 2 end above */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* ////////////////////////////row 2 end/////////////////////////////////////////////// */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* ////////////////////////////row 3 START/////////////////////////////////////////////// */}
      {/*  */}
      {/*  */}
      {/*  */}
      <div //parent styling for all row 3
        style={{
          backgroundColor: "transparent",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10rem",
        }}
      >
        <div //styling for box surround checkboxs and button
          style={{
            width: "95%",
            height: "60%",
            border: "1px solid #797979",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            marginLeft: "2rem",
          }}
        >
          <div //styling for text next to checkmark boxes
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#00e1b4",
            }}
          >
            <label>
              <input type="checkbox" />
              Apply the above imaging settings to all FieldDock systems in this
              group
            </label>
            <label>
              <input type="checkbox" />
              Apply the above imaging settings to all FieldDock systems in this
              account
            </label>
          </div>
          <button //styling for Save all Imaging Preferences button
            style={{
              border: "1px solid orange",
              borderRadius: "5px",
              padding: "10px",
              backgroundColor: "transparent",
              cursor: "pointer",
              color: "white",
              fontWeight: "bold",
              transition: "border-color 0.2s, color 0.2s",
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
            Save all imaging preferences
          </button>
        </div>
      </div>

      {/* ////////////////////////////row 3 END/////////////////////////////////////////////// */}
    </div>
    //--------------------------------------- end of code -------------------------------------
  );
}

export default RealTime_Settings;
