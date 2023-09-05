import "./droneButton.css";
import React from "react";

export function DroneButton({ text }) {
  return (
    <button
      className="drone-button"
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
    >
      {text}
    </button>
  );
}

function handleHover(e) {
  e.target.style.borderColor = "#e0e0e0";
  e.target.style.color = "orange";
}

function handleUnhover(e) {
  e.target.style.borderColor = "orange";
  e.target.style.color = "#e0e0e0";
}

// Similarly, you can define the button that uses handleHover1 and handleUnhover1
