import React from "react";
import { Box, ListItemIcon, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import { ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Chart from "../components/Chart";
import axios from "axios";

const Plug_Play = () => {
  //
  //
  //
  //---------------------------------------selecting FieldDock------------------------------------
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
  //----------------------------------selecting FieldDock END-------------------------------------
  //
  //
  //
  //--------------------------------------weather data-----------------------------------------------
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
  //-------------------------------------weather data end--------------------------------------
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedSensor, setSelectedSensor] = useState(null);

  const [showChart, setShowChart] = useState(false);

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

  //--------------------------------------------------for live date and time------------------------------
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
  //-----------------------------------------------------live date and time END---------------------------

  const fetchData = async () => {
    const response = await fetch("http://3.145.131.67:8000/syssen/data/");
    const data = await response.json();
    return data;
  };

  const [data, setData] = useState([]);
  const [sensors, setSensors] = useState([]);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [selectedSensor2, setSelectedSensor2] = useState("");

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
        // Get the unique sensor keys from the fetched data
        const uniqueSensors = [
          ...new Set(fetchedData.map((item) => item.sensor)),
        ];
        setSensors(uniqueSensors);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAndSetState(); // Fetch data initially
    const intervalId = setInterval(fetchDataAndSetState, 20000); // Fetch data every 20 seconds

    return () => {
      clearInterval(intervalId); // Clear interval when the component is unmounted
    };
  }, []);

  const handleOpen2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleSelect2 = (event, sensor) => {
    setSelectedSensor2(sensor);
    setAnchorEl2(null);
  };

  const filteredData = () => {
    if (!selectedSensor2) {
      return data;
    }
    const selectedSensorNumber = parseInt(selectedSensor2.split(" ")[1]);
    return data.filter((item) => item.sensor === selectedSensorNumber);
  };

  return (
    <div //parent div for ALL COLUMNS
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100vh",
        flexWrap: "wrap", // Allow the boxes to wrap if the screen size is too small
      }}
    >
      {/* STYLE FOR COLUMN ONE */}
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
          marginBottom: "10px", // Set vertical margin between wrapped boxes
        }}
      >
        {/* box that surrounds fielddock logo */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "85%", // Set width to 100% of the parent
            height: "100px",
            backgroundColor: "transparent",
          }}
        >
          <object
            data="../../assets/FieldDock-Logo.svg"
            type="image/svg+xml"
            style={{ maxWidth: "100%", maxHeight: "100%" }} // Apply maxWidth and maxHeight directly to the object
            // Remove fixed width and height values
          />
        </div>
        <div style={{ width: "85%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
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
        <div style={{ width: "85%" }}>
          {" "}
          {/* beginning of WIRELESS SENSOR */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
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
            onClick={handleOpen}
          >
            {selectedSensor ? selectedSensor : "Select Wireless Sensor..."}
            <ListItemIcon>
              <ExpandMore />
            </ListItemIcon>
          </div>
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
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Plug and Play Sensor START */}
          <Box
            // onClick={() => setShowChart(true)}
            // onBlur={() => setShowChart(false)}
            style={{
              border: "1px solid #797979",
              padding: "10px",
              position: "relative",
              marginTop: "4rem",
              width: "85%", // Changed to 75% of column
              height: "490px",
              borderRadius: "5px",
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
                fontSize: "1vw", // dynamic font size based on viewport width
              }}
            >
              Plug and Play Sensor
              {showChart && (
                <div
                  style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(200%, -50%)",
                    zIndex: 999,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Chart />
                </div>
              )}
            </Box>
            <div>
              {/* "Select sensor....START" */}
              <Box
                sx={{
                  //styling for the "Select a sensor box"
                  border: "1px solid #00e1b4",
                  borderRadius: "4px",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  maxWidth: "100%", // Changed to 100% to shrink proportionally
                  maxHeight: "100%", // Changed to 100% to shrink proportionally
                  marginTop: "1rem",
                  height: "30px",
                  backgroundColor: "transparent",
                  borderRadius: "5px",
                  fontSize: "1vw", // dynamic font size based on viewport width
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
                {sensors.length > 0 ? (
                  sensors.map((sensor) => (
                    <MenuItem
                      key={sensor}
                      onClick={(event) =>
                        handleSelect2(event, `Sensor ${sensor}`)
                      }
                      sx={{
                        color: "#000000",
                        backgroundColor: "#BEBEBE !important",
                        "&:hover": { backgroundColor: "#EBECF0 !important" },
                      }}
                    >
                      Sensor {sensor}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem
                    disabled
                    sx={{
                      color: "#000000",
                      backgroundColor: "#BEBEBE !important",
                      "&:hover": { backgroundColor: "#EBECF0 !important" },
                    }}
                  >
                    No sensors available
                  </MenuItem>
                )}
              </Menu>
              {/* "Select soil sensor....END" */}
              {/* Table START */}
              <Box
                sx={{
                  marginTop: "1rem",
                  width: "100%",
                  overflow: "auto",
                }}
              >
                <div
                  style={{
                    height: "400px",
                    overflow: "auto",
                    fontSize: "0.8vw",
                  }}
                >
                  <table style={{ width: "100%", tableLayout: "fixed" }}>
                    <thead>
                      <tr>
                        <th
                          style={{
                            color: "#e8e8e8",
                            width: "25%",
                            padding: "10px",
                          }}
                        >
                          ID:
                        </th>
                        <th
                          style={{
                            color: "#e8e8e8",
                            width: "25%",
                            padding: "10px",
                          }}
                        >
                          Value:
                        </th>
                        <th
                          style={{
                            color: "#e8e8e8",
                            width: "25%",
                            padding: "10px",
                          }}
                        >
                          Timestamp:
                        </th>
                        <th
                          style={{
                            color: "#e8e8e8",
                            width: "25%",
                            padding: "10px",
                          }}
                        >
                          Sensor:
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData().map((item) => (
                        <tr key={item.id}>
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
                            {item.id}
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
                            {item.value}
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
                            {item.timestamp}
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
                            {`Device ${item.sensor}`}
                          </td>
                        </tr>
                      ))}
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
      </div>{" "}
      {/* end of column 1 */}
      <div //COLUMN TWO STARTS HERE
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
          marginBottom: "10px", // Set vertical margin between wrapped boxes
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            marginBottom: "10px",
            width: "85%", // set the width to 75% of the column
            marginTop: "0.7rem",
          }}
        >
          <div
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

          <button
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
          <div style={{ fontSize: "0.8vw" }}>Last reading taken:</div>
          <div style={{ color: "#00e1b4", fontSize: "1vw" }}>
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
          }}
        >
          <div style={{ fontSize: "0.8vw" }}>GPS:</div>
          <div style={{ color: "#00e1b4", fontSize: "1vw" }}>
            <div>38&#176;39'34.7"N 90&#176;19'58.9"W</div>
          </div>
        </div>{" "}
        {/* end of User and Log out box */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            width: "95%", // Set the width of the container to 95% of the parent element
            maxWidth: "800px", // Add a maximum width of 800px to prevent the container from becoming too wide
            margin: "0 auto", // Center the container horizontally
          }}
        >
          <Box
            style={{
              border: "1px solid #797979",
              padding: "10px",
              position: "relative",
              marginTop: "2rem",
              width: "100%", // Set the width of the box to 100% of the container
              height: "100px",
              borderRadius: "5px",
              display: "flex", // Set display to flex
              flexDirection: "column", // Column direction for the child boxes
              justifyContent: "center", // Vertical spacing between child boxes
              alignItems: "center", // Center align child boxes horizontally
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
                fontSize: "1vw", // dynamic font size based on viewport width
              }}
            >
              Wireless Sensor Network
            </Box>

            {/* First child box */}
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "70%", // Set the width of the box to 70% of the parent box
                marginTop: "1rem",
                fontSize: "0.9vw", // dynamic font size based on viewport width
              }}
            >
              <span>Connected Sensors:</span>
              <span
                style={{
                  color: "#00e1b4",
                  fontSize: "0.9vw",
                  marginRight: "2rem",
                }}
              >
                {sensors.length === 1
                  ? `${sensors.length} sensor`
                  : `${sensors.length} sensors`}
              </span>
            </Box>

            {/* Second child box */}
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "70%",
                marginBottom: "1rem",
              }}
            >
              <span style={{ fontSize: "0.9vw" }}>Network Status:</span>
              <span
                style={{
                  fontSize: "0.9vw",
                  marginRight: "2rem",
                  color: sensors && sensors.length >= 1 ? "#00e1b4" : "red",
                }}
              >
                {sensors && sensors.length >= 1 ? (
                  "All Operational"
                ) : (
                  <span style={{ color: "red" }}>None Detected</span>
                )}
                {/* above checks if the sensorName is truthy, if the sensors array has a length of at least one, and if the sensorName and sensors array are not null or undefined. If all conditions are true, it displays "All Operational". If any of the conditions are false, it displays "None Detected" in red. */}
              </span>
            </Box>
          </Box>
        </div>
        <Box //beginning of SENSOR SATUS BOX
          style={{
            border: "1px solid #797979",
            padding: "10px",
            position: "relative",
            marginTop: "4rem",
            width: "85%", // Changed to 75% of column
            height: "80px",
            borderRadius: "5px",
            display: "flex", // Set display to flex
            flexDirection: "column", // Column direction for the child boxes
            justifyContent: "space-between", // Vertical spacing between child boxes
            alignItems: "center", // Center align child boxes horizontally
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
              fontSize: "1vw", // dynamic font size based on viewport width
            }}
          >
            Sensor Status
          </Box>

          {/* First child box */}
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
              marginTop: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "0.9vw", marginLeft: "-2rem" }}>
                Battery:
              </span>
              <span
                style={{
                  color: "#00e1b4",
                  fontSize: "0.9vw",
                  marginLeft: "0.5rem",
                  marginRight: "4.5rem",
                }}
              >
                00.00%
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "0.9vw", marginLeft: "2rem" }}>
                LoRaNN:
              </span>
              <span
                style={{
                  color: "#00e1b4",
                  fontSize: "0.9vw",
                  marginLeft: "0.5rem",
                }}
              >
                0000
              </span>
            </div>
          </Box>
        </Box>{" "}
        {/* end of SENSOR STATUS| BOX */}
        <div //box that surrounds sensor image
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "85%",
            height: "410px",
            backgroundColor: "transparent",
            marginTop: "2rem",
            backgroundSize: "35% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url("../../assets/WIreless-Sensor-Diagram.png")`,
          }}
        ></div>
      </div>
      <div //COLUMN 3 STARTS HERE
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
            marginTop: "3.4rem",
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
        <div>
          {/* Growing Degree Days....START */}
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
                fontSize: "17px",
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
                GDD:
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
      </div>
      {/* Environmental Conditions....End */}
    </div> //the last div of the entire workpage
  );
};

export default Plug_Play;
