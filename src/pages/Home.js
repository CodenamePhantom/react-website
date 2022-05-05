import React, { createContext, useState } from "react";

import { Header } from "../Layout/header.jsx";
import MainTitle from "../Components/mainTitleHome.jsx";
import { AboutMe } from "../Components/aboutMe.jsx";
import { SoftSkillChart } from "../Components/softSkillChart.jsx"
import { DevSkillChart } from "../Components/devSkillChart.jsx"
import { DesignSkillChart } from "../Components/designSkillChart.jsx";
import { SkillTreeMaster } from "../Components/skillTreeMaster.js"
import { Footer } from "../Layout/footer.jsx"

export const HomeCollapse = createContext(null);

export function Home() {
  const [hidden, setHidden] = useState(false);
  const [chartType, setChartType] = useState("");

  return(
    <HomeCollapse.Provider value={{hidden, setHidden, chartType, setChartType}}>
      <Header />
      <MainTitle
        titleValue={
          `Welcome to_vitor's web_site!!! the_world_most renowed web_developer!`.toUpperCase()
        } 
        subTitleValue="Well... at least my mom says so!"
      />
      <AboutMe />
      <h2 
        className="bg-slate-900 text-stone-100 text-center font-extrabold py-4"
      >
        Skill Charts
      </h2>
      <SoftSkillChart />
      <DevSkillChart />
      <DesignSkillChart />
      <SkillTreeMaster />
      <Footer />
    </HomeCollapse.Provider>
  )
}
