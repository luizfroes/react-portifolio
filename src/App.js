import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Home } from "./components/Home";
import "./style.css";

export const App = (props) => {
  return (
    <>
      <CssBaseline />
      <Home />
    </>
  );
};

export default App;
