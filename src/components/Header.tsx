import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";

const Header: React.FC = () => {
  const router = useRouter();

  const handleHomeRedirect = () => {
    router.push("/");
  };

  return (
    <Box className="headerBar">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        style={{ marginLeft: "10px" }}
        onClick={handleHomeRedirect}
      >
        <MenuIcon />
      </IconButton>
      <div className="loginButton">
        <Button sx={{ color: "black", fontSize: "20px" }}>Login</Button>
      </div>
    </Box>
  );
};

export default Header;
