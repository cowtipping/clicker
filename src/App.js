//TODO: Add local session storage

import "./App.css";
import { useState } from "react";
import Messages from "./Components/Messages";
import Waste from "./Components/Waste";
import Sidebar from "./Components/Sidebar";
import Wastebux from "./Components/Wastebux";

const initialState = {
  1: {
    id: 1,
    cps: 1,
    cost: 20,
    name: "Auto-Clicker",
    owned: 0,
    isVisible: false,
  },
  2: {
    id: 2,
    cps: 5,
    cost: 50,
    name: "Shrimp",
    owned: 0,
    isVisible: false,
  },
  3: {
    id: 3,
    cps: 20,
    cost: 150,
    name: "Rat",
    owned: 0,
    isVisible: false,
  },
  4: {
    id: 4,
    cps: 175,
    cost: 1000,
    name: "Gary",
    owned: 0,
    isVisible: false,
  },
  5: {
    id: 5,
    cps: 2999,
    cost: 10000,
    name: "Fresh Italian Cheese Mozzarella Treccia",
    owned: 0,
    isVisible: false,
  },
};

function App() {
  const [wastebux, setWastebux] = useState(0);
  const [cps, setCps] = useState(0);
  const [allUpgrades, setAllUpgrades] = useState(initialState);
  return (
    <div className="container">
      <header>
        <h1>click the nuclear waste</h1>
        <p className="top-links">
          by adie nunn <sup>(sorry)</sup>
        </p>
        <div className="top-links">
          <a href="https://www.linkedin.com/in/adienunn/">linkedin</a>
          <a href="https://github.com/cowtipping">github</a>
          <a href="http://cowtipping.co.uk">folio</a>
        </div>
      </header>
      <Wastebux wastebux={wastebux} cps={cps} setWastebux={setWastebux} />
      <Waste wastebux={wastebux} setWastebux={setWastebux} />
      <Sidebar
        wastebux={wastebux}
        setWastebux={setWastebux}
        cps={cps}
        setCps={setCps}
        allUpgrades={allUpgrades}
        setAllUpgrades={setAllUpgrades}
      />
      <Messages />
      <footer>
        <p className="bottom-links">
          by adie nunn <sup>(sorry)</sup>
        </p>
        <div className="bottom-links">
          <a href="https://www.linkedin.com/in/adienunn/">linkedin</a>
          <a href="https://github.com/cowtipping">github</a>
          <a href="http://cowtipping.co.uk">folio</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
