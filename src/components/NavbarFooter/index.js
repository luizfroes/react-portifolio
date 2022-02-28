import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHub from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";

export const NavbarFooter = () => {
  return (
    <BottomNavigation
      width="auto"
      sx={{ minWidth: "0", maxWidth: 250, Height: "0.5rem" }}
    >
      <BottomNavigationAction sx={{ padding: "0" }} icon={<Instagram />} />
      <BottomNavigationAction sx={{ padding: "0" }} icon={<LinkedIn />} />
      <BottomNavigationAction sx={{ padding: "0" }} icon={<GitHub />} />
    </BottomNavigation>
  );
};

export default NavbarFooter;
