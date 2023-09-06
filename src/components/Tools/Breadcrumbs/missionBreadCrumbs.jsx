import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import ChecklistIcon from "@mui/icons-material/Checklist";
import CloudIcon from "@mui/icons-material/Cloud";
import DescriptionIcon from "@mui/icons-material/Description";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function MissionBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#797979",
            fontSize: "20px",
          }}
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} />
          Status
        </Link>
        <Link
          underline="hover"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#797979",
            fontSize: "20px",
          }}
          href="/"
        >
          <ChecklistIcon sx={{ mr: 0.5 }} />
          Metrics
        </Link>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#797979",
            fontSize: "20px",
          }}
        >
          <CloudIcon sx={{ mr: 0.5 }} />
          Environment
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#797979",
            fontSize: "20px",
          }}
        >
          <DescriptionIcon sx={{ mr: 0.5 }} />
          Flight Logs
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
