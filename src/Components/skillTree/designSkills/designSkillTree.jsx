import React, { useContext } from "react";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import { HomeCollapse } from "../../../pages/Home";
import { ChartManager } from "../skillTreeMaster";

export function DesignSkillTree() {
  // Context collection. Its used to manage the current style, position and
  // state of the container.
  const { hidden, setHidden } = useContext(HomeCollapse);
  const { chartType, setChartType, setTreeDelay } = useContext(ChartManager);

  // Function to update the imported Contexts States.
  const clickHandler = () => {
    setTreeDelay(0);
    setHidden((currHidden) => !currHidden);
    setChartType("design skills");
  };

  // CSS property to switch the container from block to tab and vice versa
  const height = hidden ? "flex-row md:h-auto" : "flex-col md:h-full";
  const bold = (props) => (chartType === props ? "font-extrabold" : "");

  // Main component assembly.
  return (
    <section
      className={`flex bg-gradient-to-b from-[rgb(255,220,244)] to-stone-50 p-4
        w-full transition-all delay-300 ${height}`}
    >
      <motion.h2
        className={`text-stone-700 underline mb-2 transition-all delay-200 ${bold(
          "design skills"
        )}`}
      >
        Design Skills
      </motion.h2>
      {!hidden && (
        <motion.ul
          className={`text-stone-800 text-[12px] list-disc list-inside transition-all`}
        >
          <li>Design Concepts</li>
          <li>Design Tools</li>
        </motion.ul>
      )}
      {!hidden && (
        <FontAwesomeIcon
          icon={faExpand}
          className={`text-stone-700 mt-auto ml-auto w-6 h-6 transition-all`}
          onClick={() => clickHandler()}
        />
      )}
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        className={`text-stone-700 ml-auto w-6 h-6 transition-all ${
          chartType === ""
            ? "hidden opacity-0"
            : chartType !== "design skills"
            ? "opacity-100"
            : "hidden opacity-0"
        }`}
        onClick={() => {
          setChartType("design skills");
          setTreeDelay(0.3);
        }}
      />
    </section>
  );
}
