const express = require("express");
const mqtt = require("mqtt");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(express.json()); // Middleware for parsing JSON bodies from POST requests

let latestMessage = ""; // Store the latest message from MQTT

// Use CORS middleware
app.use(cors());

// New endpoint to serve the latest message
app.get("/", (req, res) => {
  res.json({ message: latestMessage });
});

// ------------------------------------------------New endpoint to publish mission launch----------------------------
app.post("/launch", (req, res) => {
  const missionData = req.body.missionData; // Assume mission data is sent in the request body
  const missionBuffer = Buffer.from(missionData);

  client.publish("drone/mission", missionBuffer, function (err) {
    if (err) {
      console.error("Failed to publish the mission:", err);
      res.json({ success: false, message: "Failed to publish the mission" });
    } else {
      console.log("Mission published successfully");
      res.json({ success: true, message: "Mission published successfully" });
    }
  });
});
// ------------------------------------------------New endpoint to publish mission launch------------------------------

// Callback function when a message is received from the broker
function onMessage(topic, message) {
  console.log(`Received message '${message.toString()}' on topic '${topic}'`);
  latestMessage = message.toString();
}

// Create a MQTT client instance
const client = mqtt.connect("mqtt://3.145.131.67:1883");

// Set up the callback function for message reception
client.on("message", onMessage);

// When connected to the MQTT broker
client.on("connect", function () {
  console.log("Connected to MQTT broker");

  // ----------------------------------------------Subscribe to the "drone/status" topic------------------------------
  const status_topic = "drone/status";
  client.subscribe(status_topic, function (err) {
    if (err) {
      console.error("Failed to subscribe:", err);
    }
  });
});
// ----------------------------------------------Subscribe to the "drone/status" topic--------------------------------

// Handle any errors
client.on("error", function (error) {
  console.error("MQTT Client Error:", error);
  client.end();
});

// Move app.listen() to the bottom
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
