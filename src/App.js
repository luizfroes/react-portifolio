import React from "react";
import { Home } from "./components/Home";
import "./style.css";
import { About } from "./components/About";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Portifolio from "./components/Portifolio";

export const App = (props) => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact={true} path="/about" element={<About />}></Route>
        <Route exact={true} path="/portifolio" element={<Portifolio />}></Route>
        <Route exact={true} path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
