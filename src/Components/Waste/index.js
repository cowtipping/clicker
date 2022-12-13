import { useState } from "react";
import waste from "./waste.webp";

const Waste = ({ wastebux, setWastebux }) => {
  const [wasteStyle, setWasteStyle] = useState("waste");

  function clickWaste() {
    setWastebux(wastebux + 1);
    setWasteStyle("waste-click");
    const intervalId = setTimeout(() => {
      setWasteStyle("waste");
    }, 500);
    return () => clearInterval(intervalId);

    // maybe more stuff here if i get round to passive 'skills' but prolly not tbh
  }

  return (
    <div className={wasteStyle}>
      <img src={waste} alt="a container of nuclear waste" onClick={clickWaste} />
    </div>
  );
};

export default Waste;
