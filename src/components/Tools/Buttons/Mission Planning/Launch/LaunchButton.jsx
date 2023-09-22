// import React from "react";
// import StyledButton from "../ButtonStyle";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { createMission } from "../../../../Missions/Mission Planning/Waypoint Configuration/Launch";

// function LaunchButton(data, ...props) {
//   const navigate = useNavigate(); // Navigation hook from react-router-dom

//   const handleLaunch = async () => {
//     const missionString = createMission(data); // Assuming this function creates the mission data

//     try {
//       const response = await axios.post("http://localhost:3001/launch", {
//         missionData: missionString,
//       });

//       // Check the HTTP status code for potential server errors
//       if (response.status !== 200) {
//         console.error("Server returned an error:", response.data.message);
//         return; // Exit the function early since an error occurred
//       }

//       // Check the "success" flag within the response data
//       if (response.data.success) {
//         console.log(response.data.message); // Display the server's success message
//         navigate("/live_stats"); // Navigate only if publish was successful
//       } else {
//         console.error("Failed to publish the mission:", response.data.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       console.error("Error sending the mission to the server:", error);
//     }
//   };

//   const hoverStyles = {
//     borderColor: "#00e1b4",
//     color: "orange",
//   };

//   return (
//     <StyledButton
//       label="Launch"
//       onClick={handleLaunch}
//       hoverStyles={hoverStyles}
//       {...props}
//     />
//   );
// }

// export default LaunchButton;
