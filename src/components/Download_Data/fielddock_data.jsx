import React from "react";

function Fielddock_Data() {
  function handleHover(e) {
    e.target.style.borderColor = "#e0e0e0";
    e.target.style.color = "orange";
  }

  function handleUnhover(e) {
    e.target.style.borderColor = "orange";
    e.target.style.color = "#e0e0e0";
  }
  return (
    <div className="sensor-modules">
      <div className="sensor-modules-title">Download FieldDock Images</div>
      <div className="sensor-modules-content">
        <input type="text" placeholder="Start Date" />
        <input type="text" placeholder="End Date" />
        <button onMouseOver={handleHover} onMouseOut={handleUnhover}>
          Download
        </button>
      </div>
    </div>
  );
}

export default Fielddock_Data;
