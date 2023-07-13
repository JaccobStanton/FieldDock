import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function DatePickersWithTitle(props) {
  return (
    <div className="environmental-modules">
      <div className="environmental-modules-title">{props.title}</div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Start Date"
          value={props.startDate}
          onChange={(newValue) => {
            props.setStartDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          label="End Date"
          value={props.endDate}
          onChange={(newValue) => {
            props.setEndDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <button className="download-button">Download</button>
    </div>
  );
}
