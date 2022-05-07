import React, { createContext, useContext, useState } from "react";

import { SoftSkillChart } from "./softSkillChart.jsx";
import { SoftSkillTree } from "./softSkillTree.jsx";
import { DevSkillChart } from "./devSkillChart.jsx";
import { DevSkillTree } from "./devSkillTree.jsx";
import { DesignSkillChart } from "./designSkillChart.jsx";
import { DesignSkillTree } from "./designSkillTree.jsx";
import { HomeCollapse } from "../pages/Home.js";

// ChartManager context. It's created inside the master tree component for
// local state managment.
export const ChartManager = createContext(null);

export function SkillTreeMaster() {
  // Import the main context from Home to provide to the trees and charts
  const { hidden, setHidden } = useContext(HomeCollapse);

  // Create the chartType context for managing opened and closed charts and
  // its corresponding tree and the position of the components whe the chart
  // is open.
  const [chartType, setChartType] = useState("");

  // Main CSS class for skills containers.
  const containerClass = `flex flex-col relative md:w-1/3 md:justify-end`;

  // Main master component assembly.
  return (
    <HomeCollapse.Provider value={{ hidden, setHidden }}>
      <ChartManager.Provider value={{ chartType, setChartType }}>
        <div className="flex relative xs:flex-col md:flex-row md:drop-shadow-lg">
          <div
            className={`${containerClass} ${
              chartType === "soft skills" ? "order-first" : "order-none"
            }`}
          >
            <SoftSkillChart />
            <SoftSkillTree />
          </div>
          <div
            className={`${containerClass} ${
              chartType === "dev skills" ? "order-first" : "order-none"
            }`}
          >
            <DevSkillChart />
            <DevSkillTree />
          </div>
          <div
            className={`${containerClass} ${
              chartType === "design skills" ? "order-first" : "order-none"
            }`}
          >
            <DesignSkillChart />
            <DesignSkillTree />
          </div>
        </div>
      </ChartManager.Provider>
    </HomeCollapse.Provider>
  );
}
