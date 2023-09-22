// StyledButton.js
// import React, { useState } from "react";

// function StyledButton({ label, onClick, hoverStyles, ...props }) {
//   const [isHovered, setIsHovered] = useState(false);

//   const defaultStyle = {
//     border: "1px solid orange",
//     color: "#e0e0e0",
//     width: "27%",
//     marginRight: "10px",
//     backgroundColor: "transparent",
//     borderRadius: "5px",
//     height: "45px",
//     fontWeight: "bold",
//   };

//   const finalStyle = isHovered
//     ? { ...defaultStyle, ...hoverStyles }
//     : defaultStyle;

//   return (
//     <button
//       style={finalStyle}
//       onMouseOver={() => setIsHovered(true)}
//       onMouseOut={() => setIsHovered(false)}
//       onClick={onClick}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// }

// export default StyledButton;
