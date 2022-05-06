import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

import { HomeCollapse } from "../pages/Home";

export function SoftSkillChart() {
  const { chartType, setChartType, hidden, setHidden } =
    useContext(HomeCollapse);
  const [hide, setHide] = useState("h-0 w-0");

  useEffect(() => {
    if (chartType === "soft skills") {
      setHide("h-[600px] w-screen");
    } else {
      setHide("h-0 w-0");
    }
  }, [hidden, chartType]);

  return (
    <div
      className={`bg-gradient-to-t from-[rgb(193,231,227)] to-slate-900 transition-all ${hide}`}
    >
      <FontAwesomeIcon
        icon={faXmarkCircle}
        className="mt-4 ml-4 w-7 h-7 text-stone-50 transition-all"
        onClick={() => {
          setHidden((currHidden) => !currHidden);
          setChartType("");
        }}
      />
    </div>
  );
}
