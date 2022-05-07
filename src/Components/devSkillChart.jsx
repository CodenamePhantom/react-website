import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

import { HomeCollapse } from "../pages/Home";
import { ChartManager } from "./skillTreeMaster";

export function DevSkillChart() {
  // Collection of the Home Collapse Context. It manages the collapsed or open state
  // based on the hidden context value. Additionally, the chartType context manages the
  // current focused skillTree and open skillChart.
  const { hidden, setHidden } = useContext(HomeCollapse);
  const { chartType, setChartType } = useContext(ChartManager);

  // State used for managing the current collapsed state of the component.
  const [hide, setHide] = useState("h-0");

  // Set the current collapsed state of the component based on the chartType and hidden
  // value. If the hidden status change, it will check the charType to see if it's this
  // component that is going to open. When chartType changes, it does the same.
  useEffect(() => {
    if (chartType === "dev skills") {
      setHide("h-[600px] w-screen");
    } else {
      setHide("h-0");
    }
  }, [hidden, chartType]);

  // Main component assembly. A table of skills will be added soon.
  return (
    <div
      className={`bg-gradient-to-t from-[rgb(193,187,221)] to-stone-900 transition-all ${hide}`}
    >
      <FontAwesomeIcon
        icon={faXmarkCircle}
        className="text-stone-50 mt-4 ml-4 w-7 h-7 transition-all"
        onClick={() => {
          setHidden((currHidden) => !currHidden);
          setChartType("");
        }}
      />
    </div>
  );
}
