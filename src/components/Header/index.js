import React from "react";
import Typed from "react-typed";
import { createTheme } from "@mui/material/styles";
import {
  Typography,
  Avatar,
  Grid,
  Box,
  autocompleteClasses,
} from "@mui/material";
import { height } from "@mui/system";

const theme = createTheme();

export const Header = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "30%",
        left: "12%",
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
          typeSpeed={150}
        />
      </Typography>
      <Typography
        sx={{
          marginTop: "1rem",
        }}
        variant="h2"
      >
        <Typed
          style={{ color: "#0466c8ff", padding: "1rem" }}
          strings={["Luiz Froes"]}
          typeSpeed={150}
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
          typeSpeed={150}
          backSpeed={80}
          loop
        />
      </Typography>
    </Box>
  );
};
