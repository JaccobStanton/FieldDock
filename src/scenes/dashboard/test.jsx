// import React, {
//     useState,
//     useMemo,
//     useRef,
//     useEffect,
//     useLayoutEffect,
//   } from "react";
//   import { useTable, useRowSelect } from "react-table";

//   const LatLongTable = () => {
// ------------------------------Define the structure of your table----------------------------------- //

// const columns = useMemo(
//   () => [
//     {
//       Header: () => <div style={{ width: "100%" }}></div>,
//       accessor: "id",
//     },

//     {
//       Header: "Command",
//       accessor: "command",
//       Cell: ({ row, updateMyData }) => (
//         <div style={{ width: "200px" }}>
//           <select
//             id={`row-${row.values.id}`}
//             value={row.values.command}
//             onChange={(e) =>
//               updateMyData(row.index, "command", e.target.value)
//             }
//             style={{ width: "100%" }}
//           >
//             <option>WAYPOINT</option>
//             <option>No</option>
//             <option>Maybe</option>
//             <option>So</option>
//           </select>
//         </div>
//       ),
//     },

//     {
//       Header: "P1",
//       accessor: "P1",
//       Cell: ({ row, updateMyData }) => (
//         <div style={{ width: "100%%" }}>
//           <input
//             value={row.values.P1}
//             onChange={(e) => updateMyData(row.index, "P1", e.target.value)}
//             style={{ width: "100%" }}
//           />
//         </div>
//       ),
//     },
//     {
//       Header: "P2",
//       accessor: "P2",
//       Cell: ({ row, updateMyData }) => (
//         <div style={{ width: "100%%" }}>
//           <input
//             value={row.values.P2}
//             onChange={(e) => updateMyData(row.index, "P2", e.target.value)}
//             style={{ width: "100%" }}
//           />
//         </div>
//       ),
//     },
//     {
//       Header: "P3",
//       accessor: "P3",
//       Cell: ({ row, updateMyData }) => (
//         <div style={{ width: "100%%" }}>
//           <input
//             value={row.values.P3}
//             onChange={(e) => updateMyData(row.index, "P3", e.target.value)}
//             style={{ width: "100%" }}
//           />
//         </div>
//       ),
//     },
//     {
//       Header: "P4",
//       accessor: "P4",
//       Cell: ({ row, updateMyData }) => (
//         <div style={{ width: "100%%" }}>
//           <input
//             value={row.values.P4}
//             onChange={(e) => updateMyData(row.index, "P4", e.target.value)}
//             style={{ width: "100%" }}
//           />
//         </div>
//       ),
//     },
//     {
//       Header: "Latitude",
//       accessor: "Latitude",
//       Cell: ({ row, updateMyData }) => (
//         <div style={{ width: "100%%" }}>
//           <input
//             value={row.values.Latitude}
//             onChange={(e) =>
//               updateMyData(row.index, "Latitude", e.target.value)
//             }
//             style={{ width: "100%" }}
//           />
//         </div>
//       ),
//     },
//     {
//       Header: "Longitude",
//       accessor: "Longitude",
//       Cell: ({ row, updateMyData }) => (
//         <div style={{ width: "100%%" }}>
//           <input
//             value={row.values.Longitude}
//             onChange={(e) =>
//               updateMyData(row.index, "Longitude", e.target.value)
//             }
//             style={{ width: "100%" }}
//           />
//         </div>
//       ),
//     },
//     {
//       Header: "Alt",
//       accessor: "Alt",
//       Cell: ({ row, updateMyData }) => (
//         <div style={{ width: "100%%" }}>
//           <input
//             value={row.values.Alt}
//             onChange={(e) => updateMyData(row.index, "Alt", e.target.value)}
//             style={{ width: "100%" }}
//           />
//         </div>
//       ),
//     },
//     {
//       Header: "Frame",
//       accessor: "Frame",
//       Cell: ({ row, updateMyData }) => (
//         <div style={{ width: "100%%" }}>
//           <input
//             value={row.values.Frame}
//             onChange={(e) => updateMyData(row.index, "Frame", e.target.value)}
//             style={{ width: "100%" }}
//           />
//         </div>
//       ),
//     },
//     {
//       Header: "Grad",
//       accessor: "Grad",
//       Cell: ({ row, updateMyData }) => (
//         <div style={{ width: "100%%" }}>
//           <input
//             value={row.values.Grad}
//             onChange={(e) => updateMyData(row.index, "Grad", e.target.value)}
//             style={{ width: "100%" }}
//           />
//         </div>
//       ),
//     },
//     {
//       Header: "Angle",
//       accessor: "Angle",
//       Cell: ({ row, updateMyData }) => (
//         <div style={{ width: "100%%" }}>
//           <input
//             value={row.values.Angle}
//             onChange={(e) => updateMyData(row.index, "Angle", e.target.value)}
//             style={{ width: "100%" }}
//           />
//         </div>
//       ),
//     },
//     {
//       Header: "Dist",
//       accessor: "Dist",
//       Cell: ({ row, updateMyData }) => (
//         <div style={{ width: "100%%" }}>
//           <input
//             value={row.values.Dist}
//             onChange={(e) => updateMyData(row.index, "Dist", e.target.value)}
//             style={{ width: "100%" }}
//           />
//         </div>
//       ),
//     },
//     // ...
//     // ...
//     // ...
//     {
//       Header: "AZ",
//       accessor: "AZ",
//       Cell: ({ row, updateMyData }) => (
//         <div style={{ width: "100%%" }}>
//           <input
//             value={row.values.Dist}
//             onChange={(e) => updateMyData(row.index, "Dist", e.target.value)}
//             style={{ width: "100%" }}
//           />
//         </div>
//       ),
//     },
//   ],
//   []
// );

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
// const [data, setData] = useState([
//   {
//     id: 1,
//     command: "",
//     p1: "",
//     p2: "",
//     p3: "",
//     p4: "",
//     latitude: "",
//     longitude: "",
//     alt: "",
//     frame: "",
//     grad: "",
//     angle: "",
//     dist: "",
//     az: "",
//   },
// ]);

// ------------------------------Create a function to handle changes in your table-------------------- //
//
//The updateMyData function is designed to be reusable for all the columns. It takes three parameters: rowIndex, columnId, and value.
//The rowIndex and columnId identify the cell to be updated, and value is the new value for that cell.
//This is a common pattern in table components: a single function is used to update any cell, and it uses parameters to determine which cell to update.
// const updateMyData = (rowIndex, columnId, value) => {
//   setData((old) =>
//     old.map((row, index) => {
//       if (index === rowIndex) {
//         return {
//           ...old[rowIndex],
//           [columnId]: value,
//         };
//       }
//       return row;
//     })
//   );
// };
// ------------------------------Create a function to handle changes in your table-------------------- //
//
//
//
//

//     const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//       useTable(
//         {
//           columns,
//           data,
//         },
//         useRowSelect
//       );

//     return (
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()} className="table-header">
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => (
//                   <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     );
//   };
// ------------------------------Check if the last row is complete, and if so, add a new row---------- //

//   export default LatLongTable;
