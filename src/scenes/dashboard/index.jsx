import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  ListItemIcon,
} from "@mui/material";
import { tokens } from "../../theme";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import { ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
// import Chart from "../../components/Chart";

import axios from "axios";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // a state variable to keep track of the anchor element for the dropdown menu. This variable will be null initially and will be updated when the user clicks on the box
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null); //for misc sensors
  const [anchorEl2, setAnchorEl2] = useState(null); //for soil conditions sensors
  const [selectedSensor, setSelectedSensor] = useState(null);
  const [selectedSensor1, setSelectedSensor1] = useState(null);
  const [selectedSensor2, setSelectedSensor2] = useState(null);
  const [showChart, setShowChart] = useState(false);
  // const [weatherData, setWeatherData] = useState(null);  //for weather data

  //two functions, one to handle the opening of the dropdown menu and another to handle the closing of the dropdown menu.
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (event, sensor) => {
    setSelectedSensor(sensor);
    handleClose();
  };

  //for misc sensors
  const handleOpen1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleSelect1 = (event, sensor) => {
    setSelectedSensor1(sensor);
    handleClose1();
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  //for soil conditions sensors
  const handleOpen2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleSelect2 = (event, sensor) => {
    setSelectedSensor2(sensor);
    handleClose2();
  };

  //handles the text input for the "growing degree days" boxes
  const [startDate, setStartDate] = useState("");
  //handles the text input for the "growing degree days" boxes
  const [endDate, setEndDate] = useState("");
  //handles the text input for the "growing degree days" boxes
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };
  //handles the text input for the "growing degree days" boxes
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  //for live date and time
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
  //-------------------------weather data---------------------------------
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("http://3.145.131.67:8000/weather/data/")
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  //----------------------weather data end------------------------------

  return (
    //parent style for all 3 main columns
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "10px",
        height: "100vh",
        //the height of the parent container will be set to 100vh, which means it will take up the full height of the viewport. The width will adjust automatically based on the size of the screen. Note that this will cause the contents of each container to overflow horizontally if the screen is too narrow.
      }}
    >
      {/* style for column 1 */}
      <div
        style={{
          backgroundColor: "transparent",
          height: "100%",
          display: "flex",
          flexDirection: "column", // this makes it so all the boxes in column 1 are stacked like a column on top of each other
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* box that surrounds fielddock logo */}
        <div
          style={{
            backgroundColor: "transparent",
            height: "100px",
            display: "flex",
            // marginTop: '14rem',
            alignItems: "start",
            justifyContent: "center",
            flexDirection: "column", //this makes it so all the boxes in BOX 1 are stacked like a column  on top of eachother
          }}
        >
          {/* box that CONTAINS fielddock logo */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "500px",
              height: "100px",
              backgroundColor: "transparent",
              borderRadius: "10px",
            }}
          >
            <object
              data="../../assets/FieldDock-Logo.svg"
              type="image/svg+xml"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              width="600px"
              height="200px"
            />
          </div>
        </div>

        <div>
          {/* "Select Fieldodck System....START" */}
          <Box
            sx={{
              border: "1px solid #00e1b4",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between", // set the horizontal spacing between child elements
              alignItems: "center",
              width: "500px",
              marginTop: "1rem",
              height: "30px",
              backgroundColor: "transparent",
              borderRadius: "5px",
              fontSize: "17px",
              marginLeft: "10px",
            }}
            onClick={handleOpen}
          >
            {selectedSensor ? selectedSensor : "Select Fielddock System..."}
            <ListItemIcon>
              <ExpandMore />
            </ListItemIcon>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              autoFocus={false}
              onClick={(event) => handleSelect(event, "FieldDock 0001")}
              sx={{
                color: "#000000",
                backgroundColor: "#BEBEBE !important",
                "&:hover": { backgroundColor: "#EBECF0 !important" },
              }}
            >
              FieldDock 0001
            </MenuItem>
            <MenuItem
              autoFocus={false}
              onClick={(event) => handleSelect(event, "FieldDock 0002")}
              sx={{
                color: "#000000",
                backgroundColor: "#BEBEBE",
                "&:hover": { backgroundColor: "#EBECF0" },
              }}
            >
              FieldDock 0002
            </MenuItem>
            <MenuItem
              autoFocus={false}
              onClick={(event) => handleSelect(event, "FieldDock 0003")}
              sx={{
                color: "#000000",
                backgroundColor: "#BEBEBE",
                "&:hover": { backgroundColor: "#EBECF0" },
              }}
            >
              FieldDock 0003
            </MenuItem>
          </Menu>
          {/* "Select Fielddock system....END" */}
        </div>
        <div>
          {/* Growing Degree Days....START */}
          <Box //main outside box
            style={{
              border: "1px solid #797979", //originally #CCC
              padding: "10px",
              position: "relative",
              marginTop: "2rem",
              width: "500px",
              height: "100px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
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
              Growing Degree Days
            </Box>
            <Box //start date box
              style={{
                border: "1px solid #CCC",
                width: "25%",
                height: "50px",
                display: "inline-block",
                borderRadius: "5px",
                fontSize: "20px",
                marginRight: "10px",
              }}
            >
              <input
                type="text"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  background: "none",
                  color: "#999",
                  fontSize: "20px",
                  textAlign: "center",
                  outline: "none",
                  fontSize: "15px",
                }}
                placeholder="Start Date"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </Box>
            <Box //end date box
              style={{
                border: "1px solid #CCC",
                width: "25%",
                height: "50px",
                display: "inline-block",
                borderRadius: "5px",
                fontSize: "20px",
                marginRight: "10px",
              }}
            >
              <input
                type="text"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  background: "none",
                  color: "#999",
                  fontSize: "15px",
                  textAlign: "center",
                  outline: "none",
                }}
                placeholder="End Date"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </Box>
            <Box //box for Enter button
              style={{
                border: "1px solid #f59331",
                width: "25%",
                height: "50px",
                display: "inline-block",
                borderRadius: "5px",
              }}
            >
              <button
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  background: "none",
                  color: "#ffffff",
                  borderRadius: "10px",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Enter
              </button>
            </Box>
            <Box //box for GDD and 000 measurement
              style={{
                width: "25%",
                height: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
              }}
            >
              <Box
                style={{
                  color: "#FFF",
                  fontSize: "15px",
                }}
              >
                GDD:
              </Box>
              <Box
                style={{
                  color: "#999",
                  fontSize: "15px",
                }}
              >
                000
              </Box>
            </Box>
          </Box>
        </div>
        <div>
          {" "}
          {/*misc box starts here*/}
          <Box
            style={{
              border: "1px solid #797979",
              padding: "10px",
              position: "relative",
              marginTop: "2rem",
              width: "500px",
              height: "300px",
              // marginLeft: "200px",
              borderRadius: "10px",
            }}
          >
            <Box
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
              Misc
            </Box>
            <div>
              {/* "Select misc sensor....START" */}
              <Box
                sx={{
                  border: "1px solid #00e1b4",
                  borderRadius: "4px",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between", // set the horizontal spacing between child elements
                  alignItems: "center",
                  width: "460px",
                  marginTop: "1rem",
                  height: "30px",
                  backgroundColor: "transparent",
                  borderRadius: "5px",
                  fontSize: "17px",
                  marginLeft: "10px",
                }}
                onClick={handleOpen1}
              >
                {selectedSensor1 ? selectedSensor1 : "Select a sensor..."}
                <ListItemIcon>
                  <ExpandMore />
                </ListItemIcon>
              </Box>
              <Menu
                anchorEl={anchorEl1}
                open={Boolean(anchorEl1)}
                onClose={handleClose1}
              >
                <MenuItem
                  onClick={(event) =>
                    handleSelect1(event, "Apogee SQ521 PAR Light")
                  }
                  sx={{
                    color: "#000000",
                    backgroundColor: "#BEBEBE !important",
                    "&:hover": { backgroundColor: "#EBECF0 !important" },
                  }}
                >
                  Apogee SQ521 PAR Light
                </MenuItem>
                {/* <MenuItem
                  onClick={(event) => handleSelect1(event, "FieldDock 0002")}
                  sx={{
                    color: "#000000",
                    backgroundColor: "#BEBEBE",
                    "&:hover": { backgroundColor: "#EBECF0" }
                  }}
                >
                  FieldDock 0002
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleSelect1(event, "FieldDock 0003")}
                  sx={{
                    color: "#000000",
                    backgroundColor: "#BEBEBE",
                    "&:hover": { backgroundColor: "#EBECF0" }
                  }}
                >
                  FieldDock 0003
                </MenuItem> */}
              </Menu>
              {/* "Select misc sensor....END" */}
              <Box
                sx={{
                  marginTop: "1rem",
                  width: "100%",
                  height: "200px",
                  overflow: "auto",
                }}
              >
                <div style={{ height: "200px", overflow: "auto" }}>
                  <table style={{ width: "100%", tableLayout: "fixed" }}>
                    {/* <thead>
                    <tr>
                      <th style={{ color: "#e8e8e8", width: "25%", fontSize: "15px", padding: "10px" }}>Soil Depth:</th>
                      <th style={{ color: "#e8e8e8", width: "25%", fontSize: "15px", padding: "10px" }}>Soil Moisture:</th>
                      <th style={{ color: "#e8e8e8", width: "25%", fontSize: "15px", padding: "10px" }}>Soil Temperature:</th>
                      <th style={{ color: "#e8e8e8", width: "25%", fontSize: "14px", padding: "10px" }}>Electrical Conductivity:</th>
                    </tr>
                  </thead> */}
                    <tbody>
                      <tr>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/*end of table*/}
                </div>
              </Box>
            </div>
          </Box>
        </div>
        {/* Misc END */}
        <div>
          {/* Soil Conditions START */}
          <Box //main outside box
            style={{
              border: "1px solid #797979",
              padding: "10px",
              position: "relative",
              marginTop: "2rem",
              width: "500px",
              height: "250px",
              // marginLeft: "200px",
              borderRadius: "10px",
            }}
          >
            <Box
              onMouseEnter={() => setShowChart(true)}
              onMouseLeave={() => setShowChart(false)}
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
              Soil Conditions
            </Box>
            <div>
              {/* "Select soil sensor....START" */}
              <Box
                sx={{
                  border: "1px solid #00e1b4",
                  borderRadius: "4px",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between", // set the horizontal spacing between child elements
                  alignItems: "center",
                  width: "460px",
                  marginTop: "1rem",
                  height: "30px",
                  backgroundColor: "transparent",
                  borderRadius: "5px",
                  fontSize: "17px",
                  marginLeft: "10px",
                }}
                onClick={handleOpen2}
              >
                {selectedSensor2 ? selectedSensor2 : "Select a sensor..."}
                <ListItemIcon>
                  <ExpandMore />
                </ListItemIcon>
              </Box>
              <Menu
                anchorEl={anchorEl2}
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
              >
                <MenuItem
                  onClick={(event) =>
                    handleSelect2(event, "Campbell Scientific Soil VUE-10")
                  }
                  sx={{
                    color: "#000000",
                    backgroundColor: "#BEBEBE !important",
                    "&:hover": { backgroundColor: "#EBECF0 !important" },
                  }}
                >
                  Campbell Scientific Soil VUE-10
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleSelect2(event, "Meter TEROS 12")}
                  sx={{
                    color: "#000000",
                    backgroundColor: "#BEBEBE",
                    "&:hover": { backgroundColor: "#EBECF0" },
                  }}
                >
                  Meter TEROS 12
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleSelect2(event, "Meter TEROS 21")}
                  sx={{
                    color: "#000000",
                    backgroundColor: "#BEBEBE",
                    "&:hover": { backgroundColor: "#EBECF0" },
                  }}
                >
                  Meter TEROS 21
                </MenuItem>
                <MenuItem
                  onClick={(event) => handleSelect2(event, "Acclima TDR 310h")}
                  sx={{
                    color: "#000000",
                    backgroundColor: "#BEBEBE",
                    "&:hover": { backgroundColor: "#EBECF0" },
                  }}
                >
                  Acclima TDR 310h
                </MenuItem>
              </Menu>
              {/* "Select soil sensor....END" */}
              {/* Table START */}
              <Box
                sx={{
                  marginTop: "1rem",
                  width: "100%",
                  height: "200px",
                  overflow: "auto",
                }}
              >
                <div style={{ height: "170px", overflow: "auto" }}>
                  <table style={{ width: "100%", tableLayout: "fixed" }}>
                    <thead>
                      <tr>
                        <th
                          style={{
                            color: "#e8e8e8",
                            width: "25%",
                            fontSize: "15px",
                            padding: "10px",
                          }}
                        >
                          Soil Depth:
                        </th>
                        <th
                          style={{
                            color: "#e8e8e8",
                            width: "25%",
                            fontSize: "15px",
                            padding: "10px",
                          }}
                        >
                          Soil Moisture:
                        </th>
                        <th
                          style={{
                            color: "#e8e8e8",
                            width: "25%",
                            fontSize: "15px",
                            padding: "10px",
                          }}
                        >
                          Soil Temperature:
                        </th>
                        <th
                          style={{
                            color: "#e8e8e8",
                            width: "25%",
                            fontSize: "14px",
                            padding: "10px",
                          }}
                        >
                          Electrical Conductivity:
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                            color: "#00e1b4",
                          }}
                        >
                          6"
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                            color: "#00e1b4",
                          }}
                        >
                          44.94%
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                            color: "#00e1b4",
                          }}
                        >
                          09.53
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                            color: "#00e1b4",
                          }}
                        >
                          0.73EC
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                        <td
                          style={{
                            borderBottom: "1px solid #d3d3d3",
                            padding: "10px",
                            textAlign: "center",
                            borderBottomWidth: "1px",
                            width: "25%",
                          }}
                        >
                          -
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/*end of table*/}
                </div>
              </Box>
            </div>
          </Box>
        </div>
      </div>{" "}
      {/* END of BOX 1 ENTIRELY" */}
      {/*style for entire surrounding box 2, COLUMN 2*/}
      <div
        style={{
          backgroundColor: "transparent",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/*this is code for box surrounding User and Logout boxes*/}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          {/*this is code for box surrounding User*/}
          <div
            style={{
              marginRight: "10px", //space between user and logout button
              border: "1px solid #797979",
              borderRadius: "5px",
              width: "200px",
              height: "28px",
              textAlign: "center",
              lineHeight: "23px", // vertically center the text
            }}
          >
            User 0000 (------)
          </div>
          {/*this is code for box surrounding Button*/}
          <button
            style={{
              border: "1px solid orange",
              backgroundColor: "transparent",
              color: "#ffffff",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Log Out
          </button>
        </div>
        {/* Last reading taken box below*/}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1px",
          }}
        >
          <div>Last reading taken:</div>
          <div style={{ color: "#00e1b4" }}>{getCurrentDateTimeInCST()}</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <div>GPS:</div>
          <div style={{ color: "#00e1b4" }}>
            <div>38&#176;39'34.7"N 90&#176;19'58.9"W</div>
          </div>
        </div>
        {/* System Status Box starts here */}
        <div>
          <Box //box and border style for "system status box"
            style={{
              border: "1px solid #797979",
              padding: "10px",
              position: "relative",
              width: "400px",
              height: "100px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: "2rem",
              marginTop: "2rem",
            }}
          >
            <Box //box that contains the words "System Status" so that it shows up infront of the border
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
              System Status
            </Box>
            <div
              style={{
                //This creates a box around "drone battery" and "done status"
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <div>
                Drone Battery:{" "}
                <span style={{ color: "#00e1b4", marginLeft: "15px" }}>
                  34.21%
                </span>
              </div>
              <div>
                Drone Status:{" "}
                <span style={{ color: "#00e1b4", marginLeft: "10px" }}>
                  Charging
                </span>
              </div>
            </div>
            <div
              style={{
                //This creates a box around "garage Battery" and "Cellular"
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: "1rem",
              }}
            >
              <div>
                Garage Battery:{" "}
                <span style={{ color: "#00e1b4", marginLeft: "10px" }}>
                  79.38%
                </span>
              </div>
              <div>
                Cellular:{" "}
                <span style={{ color: "#00e1b4", marginLeft: "10px" }}>5G</span>
              </div>
            </div>
          </Box>
        </div>
        <div>
          {/*drone image here*/}
          <Box
            style={{
              backgroundColor: "transparent",
              height: "100px",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "3.8rem",
            }}
          >
            {/* box that CONTAINS drone image */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "200px",
                height: "100px",
                backgroundColor: "transparent",
                borderRadius: "10px",
              }}
            >
              <object
                data="../../assets/Drone-Diagram.svg"
                type="image/svg+xml"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                width="400px"
                height="500px"
              />
            </div>
          </Box>
        </div>
        <div>
          {" "}
          {/*fieldock image here*/}
          <Box
            style={{
              backgroundColor: "transparent",
              height: "425px",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {/* box that CONTAINS fielddock picture */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%", // changed to 100%
                height: "100%", // changed to 100%
                backgroundColor: "transparent",
              }}
            >
              <object
                data="../../assets/FieldDock_Diagram.svg"
                type="image/svg+xml"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
          </Box>
        </div>
        {/* add other content for column 2 here */}
      </div>{" "}
      {/* THIS IS THE END OF COLUMN 2 HERE!!! */}
      {/*style for entire surrounding box 3*/}
      <div
        style={{
          backgroundColor: "transparent",
          height: "100%",
          display: "flex",
          flexDirection: "column", // this makes it so all the boxes in column 1 are stacked like a column on top of each other
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1.8rem",
        }}
      >
        <div style={{ width: "400px", marginTop: "1.6rem", cursor: "pointer" }}>
          {" "}
          {/*this is the div that surrounds the entirety of the 10 boxes "PARENT DIV OF 10 BOXES"*/}
          <div style={{ display: "flex", marginBottom: "10px" }}>
            {" "}
            {/*this is the div that surrounds the entirety of the first FIVE boxes*/}
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
                src="../../assets/real-time-no-line_1.svg"
                style={{ width: "70%", height: "100%", marginLeft: "8px" }}
                onMouseOver={(e) =>
                  (e.currentTarget.src = "../../assets/real-time---active.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "../../assets/real-time-no-line_1.svg")
                }
              />
            </div>
            <div
              style={{
                width: "70px",
                height: "55px",
                marginRight: "12px",
                border: "1px solid #CCC",
                borderRadius: "5px",
              }}
            >
              <Link to="/images">
                <img
                  src="../../assets/imaging-no-line.svg"
                  style={{ width: "80%", height: "100%", marginLeft: "8px" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.src = "../../assets/imaging---active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = "../../assets/imaging-no-line.svg")
                  }
                />
              </Link>
            </div>
            <div
              style={{
                width: "70px",
                height: "55px",
                marginRight: "12px",
                border: "1px solid #CCC",
                borderRadius: "5px",
              }}
            >
              <Link to="/drone">
                <img
                  src="../../assets/Drone-Icon.svg"
                  style={{ width: "100%", height: "100%" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.src = "../../assets/Drone-Icon-Active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = "../../assets/Drone-Icon.svg")
                  }
                />
              </Link>
            </div>
            <div
              style={{
                width: "70px",
                height: "55px",
                marginRight: "12px",
                border: "1px solid #CCC",
                borderRadius: "5px",
              }}
            >
              <Link to="/Plug_Play">
                <img
                  src="../../assets/wireless-no-line.svg"
                  style={{
                    width: "80%",
                    height: "80%",
                    marginLeft: "8px",
                    marginTop: "5px",
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
                    (e.currentTarget.src = "../../assets/settings---active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = "../../assets/settings-no-line.svg")
                  }
                />
              </div>
            </Link>
          </div>
          <div
            style={{ display: "flex", marginTop: "20px", marginBottom: "10px" }}
          >
            {" "}
            {/*this is the div that surrounds the entirety of the LAST FIVE boxes*/}
            <div
              style={{
                width: "70px",
                height: "55px",
                marginRight: "12px",
                border: "1px solid #CCC",
                borderRadius: "5px",
              }}
            >
              <Link to="/RealTime_settings">
                <img
                  src="../../assets/real-time-settings-inactive.svg"
                  style={{ width: "80%", height: "100%", marginLeft: "8px" }}
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
                width: "70px",
                height: "55px",
                marginRight: "12px",
                border: "1px solid #CCC",
                borderRadius: "5px",
              }}
            >
              <img
                src="../../assets/imaging-settings-B-inactive.svg"
                style={{ width: "80%", height: "100%", marginLeft: "8px" }}
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
                width: "70px",
                height: "55px",
                marginRight: "12px",
                border: "1px solid #CCC",
                borderRadius: "5px",
              }}
            >
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
            </div>
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
                src="../../assets/Users-no-line---active.svg"
                style={{ width: "80%", height: "100%", marginLeft: "8px" }}
                onMouseOver={(e) =>
                  (e.currentTarget.src = "../../assets/Users----active.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src =
                    "../../assets/Users-no-line---active.svg")
                }
              />
            </div>
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
            </div>
          </div>
        </div>
        <div>
          {/* Rainfall....START */}
          <Box //main outside box
            style={{
              border: "1px solid #797979",
              padding: "10px",
              position: "relative",
              marginTop: "1rem",
              width: "400px",
              height: "100px",
              // marginLeft: "200px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
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
              Rainfall
            </Box>
            <Box //start date box
              style={{
                border: "1px solid #CCC",
                width: "25%",
                height: "50px",
                display: "inline-block",
                borderRadius: "5px",
                fontSize: "20px",
                marginRight: "10px",
              }}
            >
              <input
                type="text"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  background: "none",
                  color: "#999",
                  fontSize: "15px",
                  textAlign: "center",
                  outline: "none",
                }}
                placeholder="Start Date"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </Box>
            <Box //end date box
              style={{
                border: "1px solid #CCC",
                width: "25%",
                height: "50px",
                display: "inline-block",
                borderRadius: "5px",
                marginRight: "10px",
              }}
            >
              <input
                type="text"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  background: "none",
                  color: "#999",
                  fontSize: "20px",
                  textAlign: "center",
                  outline: "none",
                  fontSize: "15px",
                }}
                placeholder="End Date"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </Box>
            <Box //box for Enter button
              style={{
                border: "1px solid #f59331",
                width: "25%",
                height: "50px",
                display: "inline-block",
                borderRadius: "5px",
              }}
            >
              <button
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  background: "none",
                  color: "#ffffff",
                  borderRadius: "10px",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Enter
              </button>
            </Box>
            <Box //box for GDD and 000 measurement
              style={{
                width: "25%",
                height: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
              }}
            >
              <Box
                style={{
                  color: "#FFF",
                  fontSize: "15px",
                }}
              >
                Rainfall:
              </Box>
              <Box
                style={{
                  color: "#999",
                  fontSize: "20px",
                }}
              >
                0"
              </Box>
            </Box>
          </Box>
        </div>
        <div>
          {/* Environmental Conditions....START */}
          <Box //main outside box
            style={{
              border: "1px solid #797979",
              padding: "10px",
              position: "relative",
              marginTop: "2rem",
              width: "400px",
              height: "300px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "3.8rem",
            }}
          >
            <Box
              style={{
                position: "absolute",
                top: "-15px",
                left: "50%",
                transform: "translateX(-46%)",
                backgroundColor: "#181818",
                padding: "0 5px",
                zIndex: 1,
                fontSize: "17px",
              }}
            >
              Environmental Conditions
            </Box>
            {/* New box with top border and "Wind" text */}
            <Box
              style={{
                borderTop: "1px solid #3898EC",
                width: "80%",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                top: "-60px", // move the box up by 20 pixels
                marginLeft: "27px",
              }}
            >
              <Box
                style={{
                  position: "absolute",
                  top: "-13px",
                  left: "48%",
                  transform: "translateX(-20%)",
                  backgroundColor: "#181818",
                  padding: "0 7px",
                  zIndex: 1,
                  fontSize: "15px",
                }}
              >
                Wind
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "80%",
                }}
              >
                <Box style={{ textAlign: "center" }}>
                  <div
                    style={{
                      color: "#e8e8e8", // Add  color here
                    }}
                  >
                    Direction
                  </div>
                  <div
                    style={{
                      color: "#00e1b4", // Add  color here
                    }}
                  >
                    {weatherData && weatherData.length > 0
                      ? weatherData[weatherData.length - 1].wind_direction
                      : "N/A"}
                    °
                  </div>
                </Box>
                <Box style={{ textAlign: "center" }}>
                  <div
                    style={{
                      color: "#e8e8e8",
                    }}
                  >
                    Wind Speed
                  </div>
                  <div
                    style={{
                      color: "#00e1b4",
                    }}
                  >
                    {weatherData && weatherData.length > 0
                      ? weatherData[weatherData.length - 1].wind_speed
                      : "N/A"}{" "}
                    m/s
                    {/* wind speed code above */}
                  </div>
                </Box>
                <Box style={{ textAlign: "center" }}>
                  <div
                    style={{
                      color: "#e8e8e8", // Add  color here
                    }}
                  >
                    Gust
                  </div>
                  <div
                    style={{
                      color: "#00e1b4", // Add  color here
                    }}
                  >
                    {" "}
                    N/A
                    {/* {weatherData && weatherData.length > 0
                      ? weatherData[weatherData.length - 1].gust
                      : "N/A"} */}
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            style={{
              borderTop: "1px solid #f59331",
              width: "80%",
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              top: "-225px", // move the box up by 20 pixels
              marginLeft: "40px",
            }}
          >
            <Box
              style={{
                position: "absolute",
                top: "-13px",
                left: "48%",
                transform: "translateX(-46%)",
                backgroundColor: "#181818",
                padding: "0 7px",
                zIndex: 1,
                fontSize: "15px",
              }}
            >
              Module
            </Box>
            <Box style={{ textAlign: "center", flex: 1 }}>
              <div style={{ color: "#e8e8e8" }}>Temperature</div>
              <div style={{ color: "#00e1b4" }}>
                {weatherData && weatherData.length > 0
                  ? weatherData[weatherData.length - 1].temperature
                  : "N/A"}
                °F
              </div>
              <div style={{ color: "#ff0000" }}>00.00°C</div>
              <div style={{ color: "#e8e8e8" }}>Visibility</div>
              <div style={{ color: "#00e1b4" }}>
                {weatherData && weatherData.length > 0
                  ? weatherData[weatherData.length - 1].visibility
                  : "N/A"}{" "}
                m
              </div>
            </Box>
            <Box style={{ textAlign: "center", flex: 1 }}>
              <div style={{ color: "#e8e8e8" }}>Humidity</div>
              <div style={{ color: "#00e1b4" }}>
                {weatherData && weatherData.length > 0
                  ? weatherData[weatherData.length - 1].humidity
                  : "N/A"}
                %
              </div>
              <div style={{ color: "#ff0000" }}>-</div>
              <div style={{ color: "#e8e8e8" }}>UV Index</div>
              <div style={{ color: "#ff0000" }}>
                {weatherData && weatherData.length > 0
                  ? weatherData[weatherData.length - 1].uv_index
                  : "N/A"}
              </div>
            </Box>
            <Box style={{ textAlign: "center", flex: 1 }}>
              <div style={{ color: "#e8e8e8" }}>Air Pressure</div>
              <div style={{ color: "#00e1b4" }}>
                {weatherData && weatherData.length > 0
                  ? weatherData[weatherData.length - 1].pressure
                  : "N/A"}{" "}
                kPa
              </div>
              <div style={{ color: "#ff0000" }}>00.00"</div>
              <div style={{ color: "#e8e8e8" }}>Conditions</div>
              <div style={{ color: "#00e1b4" }}>
                {weatherData && weatherData.length > 0
                  ? weatherData[weatherData.length - 1].weather_condition
                  : "N/A"}
              </div>
            </Box>
          </Box>
        </div>
        {/* Environmental Conditions....End */}
        <div>
          {/* NEW BOX....START */}
          <Box //main outside box
            style={{
              border: "transparent",
              padding: "10px",
              position: "relative",
              marginTop: "2rem",
              width: "400px",
              height: "100px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                position: "absolute",
                top: "-15px",
                left: "50%",
                transform: "translateX(-46%)",
                backgroundColor: "#181818",
                padding: "0 5px",
                zIndex: 1,
                fontSize: "17px",
              }}
            >
              {/*text here*/}
            </Box>
          </Box>
        </div>
        {/*NEWBOX....End */}
      </div>
    </div> //THIS IS THE PARENT DIV OF ALL THE ELEMENTS!!!
  );
};

export default Dashboard;
