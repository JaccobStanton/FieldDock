import React from "react";

function TraitData() {
  function handleHover(e) {
    e.target.style.borderColor = "#e0e0e0";
    e.target.style.color = "orange";
  }

  function handleUnhover(e) {
    e.target.style.borderColor = "orange";
    e.target.style.color = "#e0e0e0";
  }
  return (
    <div className="wireless-modules">
      <div className="wireless-modules-title">Download Trait Scorecard</div>
      <div className="wireless-modules-content">
        <input type="text" placeholder="Start Date" />
        <input type="text" placeholder="End Date" />
        <button onMouseOver={handleHover} onMouseOut={handleUnhover}>
          Download
        </button>
      </div>
    </div>
  );
}

export default TraitData;
