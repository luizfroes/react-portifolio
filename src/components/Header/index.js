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
      <Typography
        sx={{
          marginTop: "3rem",
        }}
        variant="h4"
      >
        <Typed
          style={{ color: "#ffffff" }}
          strings={["Hi, I am"]}
          typeSpeed={100}
        />
      </Typography>
      <Typography
        sx={{
          marginTop: "1rem",
        }}
        variant="h2"
      >
        <Typed
          style={{ color: "#0466c8ff" }}
          strings={["Luiz Froes"]}
          typeSpeed={100}
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
          strings={["A Software Engineer", "And a Full Stack Developer"]}
          typeSpeed={100}
          backSpeed={100}
          loop
        />
      </Typography>
    </Box>
  );
};
