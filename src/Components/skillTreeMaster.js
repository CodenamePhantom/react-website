import React, { createContext, useContext, useEffect, useState } from "react";

import { SoftSkillTree } from "./softSkillTree.jsx";
import { DevSkillTree } from "./devSkillTree.jsx";
import { DesignSkillTree } from "./designSkillTree";
import { HomeCollapse } from "../pages/Home.js";

export function SkillTreeMaster() {
  const { hidden, setHidden, chartType, setChartType } = useContext(HomeCollapse);

  return (
    <HomeCollapse.Provider value={{ hidden, setHidden, chartType, setChartType }}>
      <section className="flex xs:flex-col md:flex-row">
        <SoftSkillTree />
        <DevSkillTree />
        <DesignSkillTree />
      </section>
    </HomeCollapse.Provider>
  );
}
