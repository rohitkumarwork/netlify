import React, { useState } from "react";
import Select from "react-dropdown-select";
import Region from "./Region";

function Sidebar({ setOpenModal, region, eastRegion, westRegion, northRegion, 
  centralRegion, selectedRegion  ,selectedCity}) {
  const [stage, setStage] = useState("stages");

  const StageOptions = [
    { label: "Comming Soon", value: "Comming Soon" },
    { label: "Vip Launch", value: "Vip Launch" },
    { label: "Sold", value: "Sold" },
    { label: "Sales", value: "Sales" },
  ];

  const stageChange = (event, values) => {
    debugger;
    if (event.length !== 0) {
      setStage(event[0].value);
    }
  };

  return (
    <div className="sidebar-wrap">
      <div className="sidebar-header">
        <div className="leftside">Precon lobby</div>
        <div class="topTitleAction select-container">
        <div class="rightSide">
            <select class="stageDrop">
                <option>Stages</option>
                <option>Comming Soon</option>
                <option>Vip Launch</option>
                <option>Sold</option>
                <option>Sales</option>
            </select>
        </div>
      </div>
        {/* <div>
          <Select
            color="#f89e37"
            options={StageOptions}
            values={StageOptions.filter((opt) => opt.value === stage)}
            onChange={(e, values) => stageChange(e, values)}
          />
        </div> */}
      </div>
      <div className="sidebar-headerDesc">
        <div className="siderbar-headerContent">
          Hop into our search and find the townhome of your dreams! Wehave every
          townhome and preconstruction townhome in the GTA!
        </div>
        <div className="sidebar-headerButtonContainer">
          <div
            className="sidebar-headerButton"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Speak to an Expert
          </div>
        </div>
      </div>
      <div className="sidebar-citybox">
        <Region region={region} eastRegion={eastRegion} westRegion={westRegion}
         centralRegion={centralRegion} northRegion={northRegion} selectedRegion={selectedRegion} 
         selectedCity={selectedCity} />
      </div>
    </div>
  );
}

export default Sidebar;
