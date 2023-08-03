import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import { useTable, useRowSelect } from "react-table";

const LatLongTable = ({ data, setData }) => {
  // ------------------------------Define the structure of your table----------------------------------- //

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
          <div style={{ width: "200px" }}>
            <select
              id={`row-${row.values.id}`}
              value={row.values.command}
              onChange={(e) =>
                updateMyData(row.index, "command", e.target.value)
              }
              style={{ width: "100%" }}
            >
              <option>WAYPOINT</option>
              <option>No</option>
              <option>Maybe</option>
              <option>So</option>
            </select>
          </div>
        ),
      },

      {
        Header: "P1",
        accessor: "p1",
        Cell: ({ row, updateMyData }) => (
          <div style={{ width: "100%%" }}>
            <input
              value={row.values.p1}
              onChange={(e) => updateMyData(row.index, "p1", e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
        ),
      },
      {
        Header: "P2",
        accessor: "p2",
        Cell: ({ row, updateMyData }) => (
          <div style={{ width: "100%%" }}>
            <input
              value={row.values.p2}
              onChange={(e) => updateMyData(row.index, "p2", e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
        ),
      },
      {
        Header: "P3",
        accessor: "p3",
        Cell: ({ row, updateMyData }) => (
          <div style={{ width: "100%%" }}>
            <input
              value={row.values.p3}
              onChange={(e) => updateMyData(row.index, "p3", e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
        ),
      },
      {
        Header: "P4",
        accessor: "p4",
        Cell: ({ row, updateMyData }) => (
          <div style={{ width: "100%%" }}>
            <input
              value={row.values.p4}
              onChange={(e) => updateMyData(row.index, "p4", e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
        ),
      },
      {
        Header: "Latitude",
        accessor: "latitude",
        Cell: ({ row, updateMyData }) => (
          <div style={{ width: "100%%" }}>
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
          <div style={{ width: "100%%" }}>
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
          <div style={{ width: "100%%" }}>
            <input
              value={row.values.alt}
              onChange={(e) => updateMyData(row.index, "alt", e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
        ),
      },
      {
        Header: "Frame",
        accessor: "frame",
        Cell: ({ row, updateMyData }) => (
          <div style={{ width: "100%%" }}>
            <input
              value={row.values.frame}
              onChange={(e) => updateMyData(row.index, "frame", e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
        ),
      },
      {
        Header: "Grad",
        accessor: "grad",
        Cell: ({ row, updateMyData }) => (
          <div style={{ width: "100%%" }}>
            <input
              value={row.values.grad}
              onChange={(e) => updateMyData(row.index, "grad", e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
        ),
      },
      {
        Header: "Angle",
        accessor: "angle",
        Cell: ({ row, updateMyData }) => (
          <div style={{ width: "100%%" }}>
            <input
              value={row.values.angle}
              onChange={(e) => updateMyData(row.index, "angle", e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
        ),
      },
      {
        Header: "Dist",
        accessor: "dist",
        Cell: ({ row, updateMyData }) => (
          <div style={{ width: "100%%" }}>
            <input
              value={row.values.dist}
              onChange={(e) => updateMyData(row.index, "dist", e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
        ),
      },
      {
        Header: "AZ",
        accessor: "az",
        Cell: ({ row, updateMyData }) => (
          <div style={{ width: "100%" }}>
            <input
              value={row.values.az}
              onChange={(e) => updateMyData(row.index, "az", e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
        ),
      },
    ],
    []
  );

  // ------------------------------Define the structure of your table----------------------------------- //
  //
  //
  //
  //
  // ------------------------------Create a state for your table data----------------------------------- //
  //
  //initializes your data state with a single row, which is empty of values except for the id field.
  //In this line, data is initialized as an array with a single object representing the first row.
  //The id field is set to 1, and the command field is set to an empty string. You can add more fields to this row as per your requirements.

  // ------------------------------Create a function to handle changes in your table-------------------- //
  //
  //The updateMyData function is designed to be reusable for all the columns. It takes three parameters: rowIndex, columnId, and value.
  //The rowIndex and columnId identify the cell to be updated, and value is the new value for that cell.
  //This is a common pattern in table components: a single function is used to update any cell, and it uses parameters to determine which cell to update.
  const updateMyData = (rowIndex, columnId, value) => {
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };
  // ------------------------------Create a function to handle changes in your table-------------------- //
  //
  //
  //
  //

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
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default LatLongTable;
