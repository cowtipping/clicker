const Upgrade = ({ wastebux, allUpgrades, clickUpgrade, upgradeNumber }) => {
  return (
    <>
      {allUpgrades[upgradeNumber].isVisible ||
      wastebux >= allUpgrades[upgradeNumber].cost ? (
        <>
          <button
            value={allUpgrades[upgradeNumber].id}
            onClick={(e) => clickUpgrade(e)}
          >
            {allUpgrades[upgradeNumber].name}{" "}
            <span>👉 {allUpgrades[upgradeNumber].owned}</span>
            <span>+ {allUpgrades[upgradeNumber].cps} cps</span>
          </button>
          <div className="upgrades">
            <p>{allUpgrades[upgradeNumber].cost} bux</p>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Upgrade;