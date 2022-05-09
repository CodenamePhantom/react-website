import React, { createContext, useContext, useState } from "react";

import { SoftSkillTree } from "./softSkills/softSkillTree.jsx";
import { DevSkillTree } from "./devSkills/devSkillTree.jsx";
import { DesignSkillTree } from "./designSkills/designSkillTree.jsx";
import { HomeCollapse } from "../../pages/Home.js";
import SoftSkillChart from "./softSkills/softSkillChart.jsx";
import DevSkillChart from "./devSkills/devSkillChart.jsx";
import DesignSkillChart from "./designSkills/designSkillChart.jsx";

import { AnimatePresence, motion } from "framer-motion";

// ChartManager context. It's created inside the master tree component for
// local state managment.
export const ChartManager = createContext(null);

export function SkillTreeMaster() {
  // Import home context for providing to the children
  const { hidden, setHidden, setDelay } = useContext(HomeCollapse);

  // State Management
  // chartType manages the current open chart and unmount the others together
    // with the hidden State from the HomeCollapse Context.
  // treeDelay manages the wait time for the chart opening and skillTre position
    // change.
  const [chartType, setChartType] = useState("");
  const [treeDelay, setTreeDelay] = useState(0);

  // Function to calculate the skillTree position
  function position(props, order) {
    if (chartType === props) {
      return { order: -9999 };
    } else {
      return { order: order };
    }
  }

  // Main CSS class for skills containers.
  const containerClass =
    "flex flex-col relative md:w-1/3 md:justify-end transition-all";

  // Main master component assembly.
  return (
    <HomeCollapse.Provider value={{ hidden, setHidden, setDelay }}>
      <ChartManager.Provider value={{ chartType, setChartType, setTreeDelay }}>
        <div className="flex relative xs:flex-col md:flex-row md:drop-shadow-lg">
          <motion.div
            className={containerClass}
            initial={{ order: 1 }}
            animate={position("soft skills", 1)}
            transition={{
              duration: 0,
              delay: treeDelay,
            }}
          >
            <AnimatePresence>
              {hidden && chartType === "soft skills" && <SoftSkillChart />}
            </AnimatePresence>
            <SoftSkillTree />
          </motion.div>
          <motion.div
            className={containerClass}
            initial={{ order: 2 }}
            animate={position("dev skills", 2)}
            transition={{
              duration: 0,
              delay: treeDelay,
            }}
          >
            <AnimatePresence>
              {hidden && chartType === "dev skills" && <DevSkillChart />}
            </AnimatePresence>
            <DevSkillTree />
          </motion.div>
          <motion.div
            className={containerClass}
            initial={{ order: 3 }}
            animate={position("design skills", 3)}
            transition={{
              duration: 0,
              delay: treeDelay,
            }}
          >
            <AnimatePresence>
              {hidden && chartType === "design skills" && <DesignSkillChart />}
            </AnimatePresence>
            <DesignSkillTree />
          </motion.div>
        </div>
      </ChartManager.Provider>
    </HomeCollapse.Provider>
  );
}
