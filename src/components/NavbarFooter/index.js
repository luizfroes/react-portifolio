import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHub from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";

export const NavbarFooter = () => {
  return (
    <BottomNavigation
      width="auto"
      sx={{
        backgroundColor: "#001219",
        minWidth: "0",
        maxWidth: 250,
        Height: "0.5rem",
      }}
    >
      <BottomNavigationAction
        component={Link}
        target="_blank"
        href="https://www.instagram.com/luizfroesgeo/"
        sx={{
          color: "#979dac",
          "&:hover": {
            color: "#0466c8ff",
          },
          padding: "0",
        }}
        icon={<Instagram />}
      />
      <BottomNavigationAction
        component={Link}
        target="_blank"
        href="https://www.linkedin.com/in/luiz-froes"
        sx={{
          color: "#979dac",
          "&:hover": {
            color: "#0466c8ff",
          },
          padding: "0",
        }}
        icon={<LinkedIn />}
      />
      <BottomNavigationAction
        component={Link}
        target="_blank"
        href="https://github.com/luizfroes"
        sx={{
          color: "#979dac",
          "&:hover": {
            color: "#0466c8ff",
          },
          padding: "0",
        }}
        icon={<GitHub />}
      />
    </BottomNavigation>
  );
};

export default NavbarFooter;
