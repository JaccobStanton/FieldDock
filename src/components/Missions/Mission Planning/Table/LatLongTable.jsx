import React, { useMemo } from "react";
import { useTable, useRowSelect } from "react-table";
import "./LatLongTable.css";

const LatLongTable = ({ data, setData }) => {
  // ------------------------------Define the structure of Header columns for table----------------------------------- //

  const columns = useMemo(
    () => [
      {
        Header: () => <div style={{ width: "100%" }}></div>,
        accessor: "id",
      },

      {
        Header: "Command",
        accessor: "command",
        Cell: ({ row, updateMyData }) => (
          //* this is the physical width of the box
          <div style={{ width: "100px" }}>
            <select
              id={`row-${row.values.id}`}
              value={row.values.command}
              onChange={(e) => {
                updateMyData(row.index, "command", e.target.value);
                if (e.target.value === "Land") {
                  updateMyData(row.index, "alt", "0");
                }
              }}
              style={{ width: "100%" }}
              // * this is how much space the menu takes up of the physical box
            >
              <option value="">Select</option>
              <option>Return to Launch</option>
              <option>Land</option>
              <option>Waypoint</option>
              <option>Take Off</option>
            </select>
          </div>
        ),
      },

      {
        Header: "P1",
        accessor: "p1",
        Cell: ({ row, updateMyData }) => (
          <div style={{ width: "100%" }}>
            <input
              value={row.values.p1}
              onChange={(e) => updateMyData(row.index, "p1", e.target.value)}
              style={{ width: "100%", textAlign: "center" }}
            />
          </div>
        ),
      },
      {
        Header: "P2",
        accessor: "p2",
        Cell: ({ row, updateMyData }) => (
          <div style={{ width: "100%" }}>
            <input
              value={row.values.p2}
              onChange={(e) => updateMyData(row.index, "p2", e.target.value)}
              style={{ width: "100%", textAlign: "center" }}
            />
          </div>
        ),
      },
      {
        Header: "P3",
        accessor: "p3",
        Cell: ({ row, updateMyData }) => (
          <div style={{ width: "100%" }}>
            <input
              value={row.values.p3}
              onChange={(e) => updateMyData(row.index, "p3", e.target.value)}
              style={{ width: "100%", textAlign: "center" }}
            />
          </div>
        ),
      },
      {
        Header: "P4",
        accessor: "p4",
        Cell: ({ row, updateMyData }) => (
          <div style={{ width: "100%" }}>
            <input
              value={row.values.p4}
              onChange={(e) => updateMyData(row.index, "p4", e.target.value)}
              style={{ width: "100%", textAlign: "center" }}
            />
          </div>
        ),
      },
      {
        Header: "Latitude",
        accessor: "latitude",
        Cell: ({ row, updateMyData }) => (
          <div style={{ width: "100%" }}>
            <input
              value={row.values.latitude}
              onChange={(e) =>
                updateMyData(row.index, "latitude", e.target.value)
              }
              style={{ width: "100%" }}
            />
          </div>
        ),
      },
      {
        Header: "Longitude",
        accessor: "longitude",
        Cell: ({ row, updateMyData }) => (
          <div style={{ width: "100%" }}>
            <input
              value={row.values.longitude}
              onChange={(e) =>
                updateMyData(row.index, "longitude", e.target.value)
              }
              style={{ width: "100%" }}
            />
          </div>
        ),
      },
      {
        Header: "Alt",
        accessor: "alt",
        Cell: ({ row, updateMyData }) => (
          <div style={{ width: "100%" }}>
            <input
              value={row.values.alt}
              onChange={(e) => {
                if (row.values.command !== "Land") {
                  // only update if command is not Land
                  updateMyData(row.index, "alt", e.target.value);
                }
              }}
              disabled={row.values.command === "Land"}
              style={{ width: "100%", textAlign: "center" }}
            />
          </div>
        ),
      },
      {
        Header: "Frame",
        accessor: "frame",
        Cell: ({ row, updateMyData }) => (
          //* this is the physical width of the box
          <div style={{ width: "80px" }}>
            <select
              id={`row-${row.values.id}`}
              value={row.values.frame}
              onChange={(e) => updateMyData(row.index, "frame", e.target.value)}
              style={{ width: "100%" }} //* this is how much space the menu takes up of the physical box
            >
              <option value="">Select</option>
              <option>Relative</option>
              <option>Absolute</option>
              <option>Terrain</option>
            </select>
          </div>
        ),
      },
    ],
    []
  );

  // ------------------------------Define the structure of Header columns for table----------------------------------- //
  //
  //
  //
  //

  // ------------------------------Create a function to handle changes in your table--------------------------------- //
  //
  //This code makes it so that basically, you can put input into your cells, and it renders. You have to call it, in your cell portions of your "header" codes above.^^^  Cell: ({row, updateMyData})
  //The updateMyData function is designed to be reusable for all the columns. It takes three parameters: rowIndex, columnId, and value.
  //The rowIndex and columnId identify the cell to be updated, and value is the new value for that cell.
  //This is a common pattern in table components: a single function is used to update any cell, and it uses parameters to determine which cell to update.
  const updateMyData = (rowIndex, columnId, value) => {
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          const newData = {
            ...old[rowIndex],
            [columnId]: value,
          };
          console.log(newData); // logs the new data for the row being updated
          return newData;
        }
        return row;
      })
    );
  };
  // ------------------------------Create a function to handle changes in your table------------------------------ //
  //
  //
  //
  //
  // ---------------------------------------Table Rendering Code------------------------------------------------- //
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useRowSelect
    );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="table-header">
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className="table-data">
                  {cell.render("Cell", { updateMyData: updateMyData })}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
  // ---------------------------------------Table Rendering Code------------------------------------------------- //
};

export default LatLongTable;
