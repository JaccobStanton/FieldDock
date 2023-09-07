import React, { useState, useEffect } from "react";
import mqtt from "mqtt";

const MQTTComponent = () => {
  const [mqttMessage, setMqttMessage] = useState("");

  // MQTT connection settings
  const brokerUrl = "mqtt://3.145.131.67:9001";
  const topic = "drone/status";

  const client = mqtt.connect(brokerUrl);

  useEffect(() => {
    client.on("connect", () => {
      console.log("Connected to MQTT broker");
      client.subscribe(topic);
    });

    client.on("message", (topic, message) => {
      console.log(`Received message on topic ${topic}: ${message.toString()}`);
      setMqttMessage(message.toString()); // Update the state with the received message
    });

    // Cleanup the MQTT client when the component unmounts
    return () => {
      client.end();
    };
  }, []); // Empty dependency array to run this effect once on mount //*! needing to include 'client' in brackets?

  return (
    <div>
      {/* Display the MQTT message */}
      <p>{mqttMessage}</p>
    </div>
  );
};

export default MQTTComponent;
