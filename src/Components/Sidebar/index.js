import Upgrade from "../Upgrade";

const INFLATION = 1.125;

const Sidebar = ({
  wastebux,
  cps,
  setCps,
  setWastebux,
  allUpgrades,
  setAllUpgrades,
}) => {
  function clickUpgrade(e) {
    // Get the value id of the clicked div
    const clickedUpgrade = e.target.value;
    // Get the cps from the clicked upgrade
    const upgradeCPS = allUpgrades[clickedUpgrade].cps;

    // Subtract cost from wastebux (unless you're skint)
    const moneyYouOwe = allUpgrades[clickedUpgrade].cost;
    if (moneyYouOwe > wastebux) {
      console.log("skint!");
    } else {
      // Add it to total cps
      setCps(cps + upgradeCPS);
      // Subtract the cost from your savings
      setWastebux(wastebux - moneyYouOwe);
      // Create a new object that copies the state object
      const updatedState = { ...allUpgrades };
      // Update the 'owned' property on the copied object
      updatedState[clickedUpgrade].owned++;
      // Add inflation to the cost
      updatedState[clickedUpgrade].cost = Math.floor(
        updatedState[clickedUpgrade].cost * INFLATION
      );
      // Set visibility
      updatedState[clickedUpgrade].isVisible = true;
      
      setAllUpgrades(updatedState);
    }
  }

  // (this could almost defnitely dunked into an array and mapped)
  return (
    <div className="sidebar">
      {wastebux >= 20 || allUpgrades[1].owned > 0 ? <h2>🍪 upgrades 🍪</h2> : null}
      <Upgrade
        wastebux={wastebux}
        allUpgrades={allUpgrades}
        clickUpgrade={clickUpgrade}
        upgradeNumber="1"
      />
      <Upgrade
        wastebux={wastebux}
        allUpgrades={allUpgrades}
        clickUpgrade={clickUpgrade}
        upgradeNumber="2"
      />
      <Upgrade
        wastebux={wastebux}
        allUpgrades={allUpgrades}
        clickUpgrade={clickUpgrade}
        upgradeNumber="3"
      />
      <Upgrade
        wastebux={wastebux}
        allUpgrades={allUpgrades}
        clickUpgrade={clickUpgrade}
        upgradeNumber="4"
      />
      <Upgrade
        wastebux={wastebux}
        allUpgrades={allUpgrades}
        clickUpgrade={clickUpgrade}
        upgradeNumber="5"
      />
    </div>
  );
};

export default Sidebar;
