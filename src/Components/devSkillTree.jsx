import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { HomeCollapse } from "../pages/Home";

export function DevSkillTree() {
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
      className={`bg-gradient-to-b from-[rgb(193,187,221)] to-slate-300 p-4 flex
        w-full transition-all ${height}`}
    >
      <h2 className="text-stone-700 mb-2 underline">Developing Skills</h2>
      <ul
        className={`text-[12px] list-disc list-inside transition-all ${hide}`}
      >
        <li>
          Programing Concepts
          <ul className="list-decimal list-inside mb-2">
            <li>Frontend</li>
            <li>Backend</li>
            <li>Containers</li>
          </ul>
        </li>
        <li>
          Programing Languages
          <ul className="list-decimal list-inside">
            <li>Frontend languages</li>
            <li>Backend languages</li>
            <li>Frameworks</li>
          </ul>
        </li>
      </ul>
      <FontAwesomeIcon
        icon={faExpand}
        className={`mt-auto ml-auto w-6 h-6 fill-stone-600 transition-all ${hide}`}
        onClick={() => {
          setHidden((currHidden) => !currHidden);
          setChartType("dev skills");
        }}
      />
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        className={`ml-auto w-6 h-6 fill-stone-600 transition-all ${
          chartType === ""
            ? "opacity-0 max-h-0"
            : chartType !== "dev skills"
            ? "opacity-100"
            : "opacity-0 max-h-0"
        }`}
        onClick={() => {
          setChartType("dev skills");
        }}
      />
    </section>
  );
}
