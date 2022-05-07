import React, { useContext, useEffect, useState } from "react";

import { motion } from "framer-motion";
import { fadeInProperties } from "../helpers/framer-motionProperties";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import { HomeCollapse } from "../pages/Home";
import { ChartManager } from "./skillTreeMaster";

export function SoftSkillTree() {
  // Collection of the Home Collapse Context. It manages the collapsed or open state
  // based on the hidden context value. Additionally, the chartType context manages the
  // current focused skillTree and open skillChart.
  const { hidden, setHidden } = useContext(HomeCollapse);
  const { chartType, setChartType } = useContext(ChartManager);
  const [hide, setHide] = useState("opacity-100");

  // Set the current collapsed state if the component based on the hidden value. If the
  // hidden status changes, the content of the box will be collapsed and transform the
  // skill tree in a tab. Additionally, it will add an expand button to the tab, to switch
  // between open skillCharts.
  useEffect(() => {
    if (hidden === true) {
      setHide("hidden opacity-0");
    } else {
      setHide("opacity-100");
    }
  }, [hidden, chartType]);

  // CSS property to switch the container from block to tab and vice versa
  const height = hidden ? "flex-row md:h-auto" : "flex-col md:h-full";

  // Main component assembly.
  return (
    <section
      className={`flex bg-gradient-to-b from-[rgb(193,231,227)] to-stone-50 p-4 
        w-full transition-all ${height}`}
    >
      <motion.h2 
        className="text-stone-700 underline mb-2"
        initial={fadeInProperties[0]}
        animate={fadeInProperties[1]}
        transition={{
          ease: "easeOut",
          duration: 0.6,
          delay: 0.8
        }}
      >
        Soft Skills
      </motion.h2>
      <motion.ul
        className={`text-stone-800 text-[12px] list-disc list-inside transition-all ${hide}`}
        initial={fadeInProperties[0]}
        animate={fadeInProperties[1]}
        transition={{
          ease: "easeOut",
          duration: 0.6,
          delay: 1.3
        }}
      >
        <li>Interpersonal habilities</li>
        <li>Emotional concepts</li>
        <li>Commitment and focus</li>
      </motion.ul>
      <FontAwesomeIcon
        icon={faExpand}
        className={`text-stone-700 mt-auto ml-auto w-6 h-6 transition-all ${hide}`}
        onClick={() => {
          setHidden((currHidden) => !currHidden);
          setChartType("soft skills");
        }}
      />
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        className={`text-stone-700 ml-auto w-6 h-6 transition-all ${
          chartType === ""
            ? "hidden opacity-0"
            : chartType !== "soft skills"
            ? "opacity-100 block"
            : "hidden opacity-0"
        }`}
        onClick={() => {
          setChartType("soft skills");
        }}
      />
    </section>
  );
}
