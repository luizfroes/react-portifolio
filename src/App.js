import "./style.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Portifolio from "./Pages/Portifolio";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";

export const App = (props) => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route exact={true} path="/skills" element={<Skills />}></Route>
        <Route exact={true} path="/contact" element={<Contact />}></Route>
        <Route exact={true} path="/portifolio" element={<Portifolio />}></Route>
        <Route exact={true} path="/react-portifolio" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default App;
