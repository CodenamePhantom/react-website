import React, { useContext } from "react";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import { HomeCollapse } from "../../../pages/Home";
import { ChartManager } from "../skillTreeMaster";

export function SoftSkillTree() {
  // Context collection. Its used to manage the current style, position and
  // state of the container.
  const { hidden, setHidden } = useContext(HomeCollapse);
  const { chartType, setChartType, setTreeDelay } = useContext(ChartManager);

  // Function to update the imported Contexts States.
  const clickHandler = () => {
    setTreeDelay(0);
    setHidden((currHidden) => !currHidden);
    setChartType("soft skills");
  };

  // CSS property to switch the container from block to tab and vice versa, and
  // to bold the text when selected.
  const height = hidden ? "flex-row md:h-auto" : "flex-col md:h-full";
  const bold = (props) => (chartType === props ? "font-extrabold" : "");

  // Main component assembly.
  return (
    <section
      className={`flex bg-gradient-to-b from-[rgb(193,231,227)] to-stone-50 p-4 
        w-full transition-all ${height}`}
    >
      <motion.h2
        className={`text-stone-700 underline mb-2 transition-all delay-200 ${bold(
          "soft skills"
        )}`}
      >
        Soft Skills
      </motion.h2>
      {!hidden && (
        <motion.ul className="text-stone-800 text-[12px] list-disc list-inside">
          <li>Interpersonal habilities</li>
          <li>Emotional concepts</li>
          <li>Commitment and focus</li>
        </motion.ul>
      )}
      {!hidden && (
        <FontAwesomeIcon
          icon={faExpand}
          className="text-stone-700 mt-auto ml-auto w-6 h-6"
          onClick={() => clickHandler()}
        />
      )}
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
          setTreeDelay(0.3);
        }}
      />
    </section>
  );
}
