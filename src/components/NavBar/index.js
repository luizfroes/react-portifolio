import React from "react";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";
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
  Link,
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

const theme = createTheme();

const menuItems = [
  {
    id: "1",
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    id: "2",
    listIcon: <AssignmentInd />,
    listText: "About",
    listPath: "/about",
  },
  {
    id: "3",
    listIcon: <Computer />,
    listText: "Skills",
    listPath: "/skills",
  },
  {
    id: "4",
    listIcon: <Apps />,
    listText: "Portifolio",
    listPath: "/portifolio",
  },
  {
    id: "5",
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contact",
  },
];

export const NavBar = () => {
  const [sliderState, setSliderState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setSliderState({ ...sliderState, [slider]: open });
  };
  const sideList = (sliderState) => (
    <Box
      sx={{
        width: 250,
        background: "#001219",
        minHeight: "100vh",
        overflow: "auto",
      }}
      component="div"
      onClick={toggleSlider("right", false)}
    >
      <Avatar
        sx={{
          display: "block",
          margin: "2rem auto",
          width: theme.spacing(25),
          height: theme.spacing(25),
        }}
        src={portrait}
        alt="Luiz Froes portrait"
      />
      <Divider />
      <List sx={{ margin: "2rem 0rem" }}>
        {menuItems.map((listItem, key) => (
          <ListItem
            button
            key={listItem.id}
            component={Link}
            href={listItem.listPath}
            sx={{
              "&:hover": {
                backgroundColor: "#0466c8ff",
                border: "1px solid #979dac",
              },
              padding: "0.8rem 1.5rem",
            }}
          >
            <ListItemIcon
              sx={{
                color: "#979dac",
              }}
            >
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText
              disableTypography="true"
              sx={{
                color: "#979dac",
                fontFamily: "Bebas Neue, cursive",
              }}
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
        <AppBar position="fixed" style={{ background: "#001219" }}>
          <Toolbar>
            <IconButton
              onClick={toggleSlider("right", true)}
              sx={{
                "&:hover": {
                  color: "#0466c8ff",
                },
                color: "#979dac",
              }}
            >
              <ArrowBack />
            </IconButton>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Bebas Neue, cursive",
                color: "#979dac",
              }}
            >
              Portifolio
            </Typography>
            <MobilRightMenuSlider
              anchor="right"
              open={sliderState.right}
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

export default NavBar;
