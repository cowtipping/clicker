import { useEffect } from "react";

const Wastebux = ({ wastebux, cps, setWastebux }) => {
  
  // Add cps to wastebux
  // TODO: change to async??? how to mmake it keep counting when clicking? idk

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWastebux((prevCount) => prevCount + cps);
    }, 1000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="wastebux">
      <h2>
        wastebux: {wastebux}
        <span>clicks per second: {cps}</span>
      </h2>
    </div>
  );
};

export default Wastebux;
