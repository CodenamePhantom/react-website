import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { HomeCollapse } from "../pages/Home";

export function DesignSkillTree() {
  const { hidden, setHidden, chartType, setChartType } = useContext(HomeCollapse);
  const [ hide, setHide ] = useState("opacity-100");

  const closeButton = hidden ? "opacity-100 h-7" : "opacity-0 h-0"

  useEffect(() => {
    if(hidden === true){
      setHide("opacity-0 max-h-0")
    } else {
      setHide("opacity-100")
    }
  }, [hidden])

  return (
    <section
      className="bg-gradient-to-b from-[rgb(255,220,244)] to-slate-300 p-4 flex
    flex-col xs:w-auto xs:h-auto md:w-1/3"
    >
      <h2 className="text-stone-700 mb-2 underline">Design Skills</h2>
      <ul className={`text-[12px] list-disc list-inside ${hide}`}>
        <li>Design Concepts</li>
        <li>Design Tools</li>
      </ul>
      <FontAwesomeIcon
        icon={faExpand}
        className={`mt-auto ml-auto w-6 h-6 fill-stone-700 ${hide}`}
        onClick={() => {
          setHidden(currHidden => !currHidden);
          setChartType("design skills")
        }}
      />
    </section>
  );
}
