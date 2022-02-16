import React from "react";
import { createTheme } from "@mui/material/styles";
import "../../style.css";
import { Header } from "../Header";
import { NavBar } from "../NavBar";

const theme = createTheme();

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
    </div>
  );
};
