import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

import { HomeCollapse } from "../../../pages/Home";
import { ChartManager } from "../skillTreeMaster";
function DevSkillChart() {
  // Context collection. The context on this component are imported
  // just to update states.
  const { setHidden, setDelay } = useContext(HomeCollapse);
  const { setChartType, setTreeDelay } = useContext(ChartManager);

  // State used to control the current chart scale delay. This makes
  // the component wait for the home to collapse to open.
  const [chartDelay, setChartDelay] = useState(0.4);

  // Function used to update the imported Contexts and local States
  function clickHandler() {
    setHidden((currHidden) => !currHidden);
    setChartType((currChartType) => (currChartType = ""));
    setTreeDelay(0.5);
    setDelay(0.4);
  }

  // Effect used to update the render scale to zero on mounting.
  // This grants that the component will colapse instantaniously on
  // unmounting.
  useEffect(() => {
    setChartDelay(0)
  }, [])

  // Main component assembly. A table of skills will be added soon.
  return (
    <motion.div
      className="bg-gradient-to-t from-[rgb(193,187,221)] to-stone-900 z-[9] w-screen"
      initial={{ height: 0 }}
      animate={{ height: "600px" }}
      transition={{
        ease: "linear",
        duration: 0.3,
        delay: chartDelay,
      }}
      exit={{ height: 0 }}
    >
      <FontAwesomeIcon
        icon={faXmarkCircle}
        className="text-stone-50 mt-4 ml-4 w-7 h-7 transition-all"
        onClick={() => clickHandler()}
      />
    </motion.div>
  );
}

export default DevSkillChart;
