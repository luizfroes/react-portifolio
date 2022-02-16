import React from "react";
import Typed from "react-typed";
import { createTheme } from "@mui/material/styles";
import { Typography, Avatar, Grid, Box } from "@mui/material";
import avatar from "../../Portrait1-removebg.png";

const theme = createTheme();

export const Header = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "20%",
        left: "10%",
        transform: "translate (50%, -50%)",
        textAlign: "center",
        zIndex: 1,
      }}
    >
      <Grid container justifyContent="center">
        <Avatar
          sx={{
            width: theme.spacing(20),
            height: theme.spacing(20),
            margin: theme.spacing(1),
          }}
          src={avatar}
          alt="Luiz Carlos Portrait"
        />
      </Grid>
      <Typography
        sx={{
          marginTop: "3rem",
        }}
        variant="h4"
      >
        <Typed
          style={{ color: "#0466c8ff" }}
          strings={["Hi, I am Luiz Froes"]}
          typeSpeed={40}
        />
      </Typography>
      <Typography
        sx={{
          margin: "1rem 0rem",
        }}
        variant="h5"
      >
        <Typed
          style={{ color: "#ffffff" }}
          strings={["I am a Software Engineer", "And a Full Stack Developer"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};
