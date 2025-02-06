// import { Button } from "@mui/material";

// export default function Header() {
//   return (
//     <header className="header_container">
//       <div className="loginButton">
//         <Button sx={{ color: "black", fontSize: "20px" }}>Login</Button>
//       </div>
//     </header>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        height: "60px", // Set the height of the header
        background: "linear-gradient(to right, #808080, #ffffff)", // Gray to white gradient
        display: "flex",
        alignItems: "center",
        padding: "0 16px", // Horizontal padding
      }}
    >
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <div className="loginButton" style={{ marginLeft: "auto" }}>
        <Button sx={{ color: "black", fontSize: "20px" }}>Login</Button>
      </div>
    </Box>
  );
}
