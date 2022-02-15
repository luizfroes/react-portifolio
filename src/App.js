import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import { SwitchBtn } from "./components/Switch-btn";
import "./style.css";

export const App = (props) => {
  return (
    <div className="app-container">
      <SwitchBtn />
      <NavBar />
      <Banner />
    </div>
  );
};

export default App;
