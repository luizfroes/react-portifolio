import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import "../../style.css";
import MobilRightMenuSlider from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import ArrowBack from "@mui/icons-material/ArrowBack";
import AssignmentInd from "@mui/icons-material/AssignmentInd";
import Home from "@mui/icons-material/Home";
import Apps from "@mui/icons-material/Apps";
import ContactMail from "@mui/icons-material/ContactMail";
import Computer from "@mui/icons-material/Computer";
import portrait from "../../assets/img/Portrait1.png";
import { NavbarFooter } from "../NavbarFooter";

const theme = createTheme();

const menuItems = [
  {
    id: "1",
    listIcon: <Home />,
    listText: "Home",
    listPath: "/react-portifolio/",
  },
  {
    id: "2",
    listIcon: <AssignmentInd />,
    listText: "About",
    listPath: "/react-portifolio/about",
  },
  {
    id: "3",
    listIcon: <Computer />,
    listText: "Skills",
    listPath: "/react-portifolio",
  },
  {
    id: "4",
    listIcon: <Apps />,
    listText: "Portifolio",
    listPath: "/react-portifolio/portifolio",
  },
  {
    id: "5",
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/react-portifolio/contact",
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
    <Stack
      justifyContent="space-between"
      sx={{
        width: 250,
        background: "#001219",
        minHeight: "95vh",
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
      <Divider sx={{ color: "#979dac", margin: "1rem 0 2rem" }} />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          margin: "2rem 0rem",
        }}
      >
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
              disableTypography={true}
              sx={{
                color: "#979dac",
                fontFamily: "Bebas Neue, cursive",
              }}
              primary={listItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
  return (
    <>
      <Box component="nav">
        <AppBar
          position="fixed"
          sx={{ maxWidth: "100%", background: "#001219" }}
        >
          <Toolbar sx={{ padding: "0", maxWidth: "max-content" }}>
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
              <NavbarFooter />
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
