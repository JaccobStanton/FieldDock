const express = require("express");
const mqtt = require("mqtt");
const cors = require("cors"); // Import the CORS library

const app = express();
const port = 3001;

const client = mqtt.connect("mqtt://3.145.131.67:9001");

let latestMessage = ""; // Store the latest message from MQTT

// Use the cors middleware
app.use(cors());

client.on("connect", function () {
  console.log("Connected to MQTT broker");
  client.subscribe("drone/status");
});

client.on("message", (topic, message) => {
  console.log(`Received message from ${topic}: ${message.toString()}`);
  latestMessage = message.toString();
});

app.get("/latest", (req, res) => {
  res.json({ message: latestMessage });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

client.on("error", (error) => {
  console.error("MQTT Client Error:", error);
});
