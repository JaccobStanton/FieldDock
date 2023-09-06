import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CloudIcon from "@mui/icons-material/Cloud";
import DescriptionIcon from "@mui/icons-material/Description";

export default function MissionBreadcrumbs() {
  const [selected, setSelected] = React.useState(""); // 1. Use useState

  function handleClick(event, breadcrumbName) {
    // 2. Update handleClick
    event.preventDefault();
    console.info("You clicked a breadcrumb: " + breadcrumbName);
    setSelected(breadcrumbName);
  }

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {["Status", "Metrics", "Environment", "Flight Logs"].map(
          (breadcrumb, index) => (
            <Link
              key={breadcrumb}
              underline="hover"
              sx={{
                display: "flex",
                alignItems: "center",
                color: selected === breadcrumb ? "#00e1b4" : "#797979", // 3. Conditionally apply color
                fontSize: "20px",
                "&:hover": {
                  color: "#00e1b4",
                },
              }}
              href="/"
              onClick={(e) => handleClick(e, breadcrumb)} // attach click event to each breadcrumb
            >
              {index === 0 && <TaskAltIcon sx={{ mr: 0.5 }} />}
              {index === 1 && <QueryStatsIcon sx={{ mr: 0.5 }} />}
              {index === 2 && <CloudIcon sx={{ mr: 0.5 }} />}
              {index === 3 && <DescriptionIcon sx={{ mr: 0.5 }} />}
              {breadcrumb}
            </Link>
          )
        )}
      </Breadcrumbs>
    </div>
  );
}
