import React from "react";
import "./droneButton.css";
import { Link } from "react-router-dom";

export function DroneButton({ text }) {
  function handleHover(e) {
    e.target.style.borderColor = "#e0e0e0";
    e.target.style.color = "orange";
  }

  function handleUnhover(e) {
    e.target.style.borderColor = "orange";
    e.target.style.color = "#e0e0e0";
  }

  if (text === "Plan Mission") {
    return (
      <Link to="/date-mission">
        <button
          className="drone-button"
          onMouseEnter={handleHover}
          onMouseLeave={handleUnhover}
        >
          {text}
        </button>
      </Link>
    );
  } else {
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
}

// handleHover and handleUnhover functions remain the same
