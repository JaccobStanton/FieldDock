import "../../CSS/mission_planner.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import CommonRow from "../../components/NavBar/NavBar";
import LatLongTable from "../../components/Mission Planner/latLongTable";
import MapComponent from "../../components/Mission Planner/map";
import { createMission } from "../../components/Mission Planner/launch.js";
import axios from "axios";

function Mission_Planner() {
  //-------------------------------------------------------------------------------------------------
  // for button colors
  function handleHover(e) {
    e.target.style.borderColor = "#00e1b4";
    e.target.style.color = "orange";
  }

  function handleUnhover(e) {
    e.target.style.borderColor = "orange";
    e.target.style.color = "#e0e0e0";
  }

  function handleHover1(e) {
    e.target.style.borderColor = "#e0e0e0";
    e.target.style.color = "orange";
  }

  function handleUnhover1(e) {
    e.target.style.borderColor = "orange";
    e.target.style.color = "#e0e0e0";
  }
  //
  //-------------------------------------------------------------------------------------------------
  //
  //
  //
  //-------------------------------------------------------------------------------------------------
  // this is the logic for the table and marker placement.  The table is initiliazed to start how it looks below
  // from there, the rest of the logic shown below is for when the user clicks on the map, a marker is displayed, and the coordinates
  // that correspond to these markers, are updated into the table.
  const [data, setData] = useState([
    {
      id: 1,
      command: "",
      p1: "0",
      p2: "0",
      p3: "0",
      p4: "0",
      latitude: "",
      longitude: "",
      alt: "",
      frame: "",
      grad: "",
      angle: "",
      dist: "",
      az: "",
    },
  ]);

  const [markerPositions, setMarkerPositions] = useState([]);

  const onMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    setData((oldData) => {
      const newData = [...oldData];
      const firstRow = newData[0];

      // If the first row is empty, populate it with the coordinates of the marker
      if (firstRow.latitude === "" && firstRow.longitude === "") {
        firstRow.latitude = lat;
        firstRow.longitude = lng;
      }
      // If the first row is not empty, create a new row
      else {
        newData.push({
          id: newData.length + 1,
          command: "",
          p1: "0",
          p2: "0",
          p3: "0",
          p4: "0",
          latitude: lat,
          longitude: lng,
          alt: "",
          frame: "",
        });
      }

      return newData;
    });

    setMarkerPositions((oldMarkerPositions) => [
      ...oldMarkerPositions,
      { lat, lng },
    ]);
  };
  //-------------------------------------------------------------------------------------------------
  //
  //
  //
  //-------------------------------------------------------------------------------------------------
  // Defining two pieces of state to be stored when the user types in a home location, so it can be displayed in the "Home Location" box
  // You'll need to manage the state of these two fields and update them when the home location changes.
  // You'll need to update these state variables when the home location changes by
  // passing these two function calls as props in the handleLocationSubmit function in map.jsx component
  const [homeLat, setHomeLat] = useState("");
  const [homeLng, setHomeLng] = useState("");
  //-------------------------------------------------------------------------------------------------

  return (
    <Container fluid>
      <div>
        <CommonRow />
      </div>
      <div></div>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="sensor-measurement-settings">
            <div className="sensor-measurement-settings-title">
              FieldDock Mission Planner
            </div>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "94%",
            marginBottom: "30px",
          }}
        >
          <Col xs={12} sm={6} md={6} lg={8} xl={8} xxl={8}>
            <div
              style={{
                height: "815px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "15px",
                border: "1px solid #797979",
                backgroundColor: "transparent",
              }}
            >
              {/* <MapComponent
                onMapClick={onMapClick}
                markerPositions={markerPositions}
                setHomeLat={setHomeLat}
                setHomeLng={setHomeLng}
              /> */}
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4}>
            <div
              style={{
                height: "700px",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "15px",
                border: "1px solid #797979",
                backgroundColor: "transparent",
                overflow: "auto", // This will add a scrollbar if the table exceeds the div's size
              }}
            >
              <LatLongTable data={data} setData={setData} />
            </div>
            <div //container for both home location and buttons box
              style={{
                display: "flex",
                justifyContent: "space-between",
                height: "100px",
                marginLeft: "15px",
                marginTop: "15px",
                backgroundColor: "transparent",
              }}
            >
              <div
                style={{
                  width: "33%",
                  border: "1px solid #797979",
                  padding: "8px",
                  backgroundColor: "transparent",
                }}
              >
                <h4
                  style={{
                    textDecoration: "underline",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  Home Location
                </h4>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    backgroundColor: "transparent",
                  }}
                >
                  <label style={{ marginRight: "10px", fontSize: "10px" }}>
                    Latitude:
                  </label>
                  <input
                    value={homeLat}
                    style={{
                      borderBottom: "1px solid #797979",
                      borderLeft: "none",
                      borderTop: "none",
                      borderRight: "none",
                      width: "70%",
                      backgroundColor: "transparent",
                      color: "#e0e0e0",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <label style={{ marginRight: "10px", fontSize: "10px" }}>
                    Longitude:
                  </label>
                  <input
                    value={homeLng}
                    style={{
                      borderBottom: "1px solid #797979",
                      borderLeft: "none",
                      borderTop: "none",
                      borderRight: "none",
                      width: "70%",
                      backgroundColor: "transparent",
                      color: "#e0e0e0",
                    }}
                  />
                </div>
              </div>

              <div //buttons box
                style={{
                  width: "65%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #797979",
                  backgroundColor: "transparent",
                }}
              >
                <button
                  style={{
                    border: "1px solid orange",
                    color: "#e0e0e0",
                    width: "27%",
                    marginRight: "10px",
                    backgroundColor: "transparent",
                    borderRadius: "5px",
                    height: "45px",
                  }}
                  onMouseOver={handleHover1}
                  onMouseOut={handleUnhover1}
                >
                  Save
                </button>

                <button
                  style={{
                    border: "1px solid orange",
                    color: "#e0e0e0",
                    width: "27%",
                    marginRight: "10px",
                    backgroundColor: "transparent",
                    borderRadius: "5px",
                    height: "45px",
                  }}
                  onMouseOver={handleHover1}
                  onMouseOut={handleUnhover1}
                >
                  Load
                </button>

                <button
                  style={{
                    border: "1px solid orange",
                    color: "#e0e0e0",
                    width: "27%",
                    backgroundColor: "transparent",
                    borderRadius: "5px",
                    height: "45px",
                    fontWeight: "bold",
                  }}
                  onMouseOver={handleHover}
                  onMouseOut={handleUnhover}
                  // onClick={() => { //this is just saving file to local computer
                  //   const missionString = createMission(data);
                  //   const element = document.createElement("a");
                  //   const file = new Blob([missionString], {
                  //     type: "text/plain",
                  //   });
                  //   element.href = URL.createObjectURL(file);
                  //   element.download = "myFile.waypoints";
                  //   document.body.appendChild(element); // Required for this to work in FireFox
                  //   element.click();
                  // }}
                  //   onClick={async () => {
                  //     const missionString = createMission(data);
                  //     const file = new Blob([missionString], {
                  //       type: "text/plain",
                  //     });

                  onClick={async () => {
                    const missionString = createMission(data);

                    // Logic for uploading the file
                    const file = new Blob([missionString], {
                      type: "text/plain",
                    });

                    // Create a FormData instance
                    const formData = new FormData();
                    formData.append("file", file, "myFile.waypoints");

                    try {
                      // Upload the file to the new API endpoint
                      const response = await axios.post(
                        "http://10.9.0.210:8000/upload", //http://3.145.131.67:8000/api/missiontest/
                        formData,
                        {
                          headers: {
                            "Content-Type": "multipart/form-data",
                          },
                        }
                      );

                      // Handle the response if necessary
                      // console.log(response.data);
                    } catch (error) {
                      // Handle the error if necessary
                      console.error("Error uploading the file:", error);
                    }
                  }}
                  //     // Create a FormData instance
                  //     const formData = new FormData();
                  //     formData.append("file", file, "myFile.waypoints");

                  //     try {
                  //       // Upload the file to your API
                  //       const response = await axios.post(
                  //         "http://10.9.0.210:8000/upload",
                  //         formData,
                  //         {
                  //           headers: {
                  //             "Content-Type": "multipart/form-data",
                  //           },
                  //         }
                  //       );

                  //       // Handle the response as needed
                  //       console.log(response.data);
                  //     } catch (error) {
                  //       // Handle the error as needed
                  //       console.error("Error uploading the file:", error);
                  //     }
                  //   }}
                  //   onClick={async () => {
                  //     const missionString = createMission(data);

                  //     try {
                  //       // Send the mission string to your API
                  //       const response = await axios.post(
                  //         "http://10.9.0.210:8000/upload",
                  //         missionString,
                  //         {
                  //           headers: {
                  //             "Content-Type": "text/plain",
                  //           },
                  //         }
                  //       );

                  //       // Handle the response as needed
                  //       console.log(response.data);
                  //     } catch (error) {
                  //       // Handle the error as needed
                  //       console.error("Error uploading the mission:", error);
                  //     }
                  //   }}
                >
                  Launch
                </button>
              </div>
            </div>
          </Col>
        </div>
      </Row>

      {/* ------------------------------------------------- row 1 END ----------------------------- */}
    </Container>
  );
}

export default Mission_Planner;
