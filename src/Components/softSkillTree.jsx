import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

import { HomeCollapse } from "../pages/Home";

export function SoftSkillTree() {
  const { hidden, setHidden, setChartType } = useContext(HomeCollapse);
  const [ hide, setHide ] = useState("opacity-100");


  useEffect(() => {
    if(hidden === true){
      setHide("opacity-0 max-h-0")
    } else {
      setHide("opacity-100")
    }
  }, [hidden])

  return (
    <section
      className="bg-gradient-to-b from-[rgb(193,231,227)] to-slate-300 p-4 flex 
    flex-col xs:w-auto xs:h-auto md:w-1/3"
    >
      <h2 className="text-stone-700 mb-2 underline">Soft Skills</h2>
      <ul className={`text-[12px] list-disc list-inside transition-all ${hide}`}>
        <li>Interpersonal habilities</li>
        <li>Emotional concepts</li>
        <li>Commitment and focus</li>
      </ul>
      <FontAwesomeIcon
        icon={faExpand}
        className={`mt-auto ml-auto w-6 h-6 fill-stone-700 transition-all ${hide}`}
        onClick={() => {
          setHidden(currHidden => !currHidden);
          setChartType("soft skills")
        }}
      />
    </section>
  );
}
