import React, { useContext, useEffect, useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

import { HomeCollapse } from "../pages/Home";

export function DesignSkillChart() {
  const { chartType, setChartType, hidden, setHidden } = useContext(HomeCollapse);
  const [hide, setHide] = useState("h-0");

  useEffect(() => {
    if (chartType === "design skills") {
      setHide("h-[600px]");
    } else {
      setHide("h-0");
    }
  }, [hidden]);

  return (
    <div
      className={`bg-gradient-to-t from-[rgb(255,220,244)] to-slate-900 transition-all ${hide}`}
    >
      <FontAwesomeIcon
        icon={faXmarkCircle}
        className="mt-4 ml-4 w-7 h-7 text-stone-50 transition-all"
        onClick={() => {
          setHidden((currHidden) => !currHidden);
          setChartType("")
        }}
      />
    </div>
  );
}
