import React from "react";

function Diagnostics_Table() {
  return (
    <table // Table with bullet points and underlines
      style={{
        width: "95%",
        borderCollapse: "collapse",
        textAlign: "left",
        fontSize: "16px",
        lineHeight: "1.5",
      }}
    >
      <tbody>
        <tr>
          <td style={{ borderBottom: "1px solid #797979" }}>
            • 02/20/2021 / 13:45 / 0002:customer_1 / 0006: error_808.1
          </td>
        </tr>
        <tr>
          <td style={{ borderBottom: "1px solid #797979" }}>
            • 02/20/2021 / 14:45 / 0002:customer_1 / 0006: error_808.1
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Diagnostics_Table;
