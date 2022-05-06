import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { HomeCollapse } from "../pages/Home";

export function DesignSkillTree() {
  const { hidden, setHidden, chartType, setChartType } =
    useContext(HomeCollapse);
  const [hide, setHide] = useState("opacity-100");

  useEffect(() => {
    if (hidden === true) {
      setHide("opacity-0 max-h-0 max-w-0");
    } else {
      setHide("opacity-100");
    }
  }, [hidden]);

  const height = hidden ? "flex-row md:h-auto" : "flex-col md:h-full";

  return (
    <section
      className={`bg-gradient-to-b from-[rgb(255,220,244)] to-slate-300 p-4 flex
        w-full transition-all ${height}`}
    >
      <h2 className="text-stone-700 mb-2 underline">Design Skills</h2>
      <ul className={`text-[12px] list-disc list-inside ${hide}`}>
        <li>Design Concepts</li>
        <li>Design Tools</li>
      </ul>
      <FontAwesomeIcon
        icon={faExpand}
        className={`mt-auto ml-auto w-6 h-6 fill-stone-700 transition-all ${hide}`}
        onClick={() => {
          setHidden((currHidden) => !currHidden);
          setChartType("design skills");
        }}
      />
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        className={`ml-auto w-6 h-6 fill-stone-700 transition-all ${
          chartType === ""
            ? "opacity-0 max-h-0"
            : chartType !== "design skills"
            ? "opacity-100"
            : "opacity-0 max-h-0"
        }`}
        onClick={() => {
          setChartType("design skills");
        }}
      />
    </section>
  );
}
