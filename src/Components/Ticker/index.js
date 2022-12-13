// experimental component

import { useEffect } from "react";

const Ticker = ({ setWastebux, cps }) => {
  return (
    // add cps to wastebux
    // TODO: how to make it keep counting when clicking? idk
    useEffect(() => {
      const intervalId = setInterval(() => {
        setWastebux((prevCount) => prevCount + cps);
      }, 1000);
      return () => clearInterval(intervalId);
    })
  );
};

export default Ticker;
