import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { HomeCollapse } from "../pages/Home";

export function DevSkillTree() {
  const { hidden, setHidden, chartType, setChartType } = useContext(HomeCollapse);
  const [ hide, setHide ] = useState("opacity-100 max-h-400")

  useEffect(() => {
    if(hidden === true){
      setHide("opacity-0 max-h-0")
    } else {
      setHide("opacity-100 max-h-400")
    }
  }, [hidden])

  return (
    <section
      className="bg-gradient-to-b from-[rgb(193,187,221)] to-slate-300 p-4 flex
    flex-col xs:w-auto xs:h-auto md:w-1/3"
    >
      <h2 className="text-stone-700 mb-2 underline">Developing Skills</h2>
      <ul className={`text-[12px] list-disc list-inside transition-all ${hide}`}>
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
          setHidden(currHidden => !currHidden);
          setChartType("dev skills")
        }}
      />
    </section>
  );
}
