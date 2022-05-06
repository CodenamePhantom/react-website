import React, { useContext } from "react";

import { SoftSkillChart, softSkillChart } from "./softSkillChart.jsx";
import { SoftSkillTree } from "./softSkillTree.jsx";
import { DevSkillChart } from "./devSkillChart.jsx";
import { DevSkillTree } from "./devSkillTree.jsx";
import { DesignSkillChart } from "./designSkillChart.jsx";
import { DesignSkillTree } from "./designSkillTree.jsx";
import { HomeCollapse } from "../pages/Home.js";

export function SkillTreeMaster() {
  const { hidden, setHidden, chartType, setChartType } =
    useContext(HomeCollapse);

  const containerClass = `flex flex-col md:w-1/3 relative md:justify-end`;

  return (
    <HomeCollapse.Provider
      value={{ hidden, setHidden, chartType, setChartType }}
    >
      <section className="relative flex xs:flex-col md:flex-row">
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
      </section>
    </HomeCollapse.Provider>
  );
}
