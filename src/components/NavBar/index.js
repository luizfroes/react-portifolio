import React from "react";
import { useState } from "react";
import "../../style.css";
import MobilRightMenuSlider from "@mui/material/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  sliderClasses,
} from "@mui/material";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  Computer,
} from "@mui/icons-material";
import portrait from "../../Portrait1.png";
import { color, height } from "@mui/system";
import { hover } from "@testing-library/user-event/dist/hover";

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "About",
  },
  {
    listIcon: <Computer />,
    listText: "Tech Specs",
  },
  {
    listIcon: <Apps />,
    listText: "Portifolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
  },
];

export const NavBar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const sideList = (slider) => (
    <Box
      sx={{
        width: 250,
        background: "#33415cff",
        // border: "10px #7d8597ff",
        height: "100%",
      }}
      component="div"
      onClick={toggleSlider("right", false)}
    >
      <Avatar
        sx={{
          display: "block",
          margin: "0.5rem auto",
        }}
        src={portrait}
        alt="Luiz Froes portrait"
      />
      <Divider />
      <List>
        {menuItems.map((listItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon style={{ color: "#ffffff" }}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText
              style={{ color: "#ffffff" }}
              primary={listItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#33415cff" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "#ffffff" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "#ffffff" }}>
              Portifolio
            </Typography>
            <MobilRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("left")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
