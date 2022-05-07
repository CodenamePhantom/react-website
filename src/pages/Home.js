import React, { createContext, useState } from "react";

import { Header } from "../Layout/header.jsx";
import MainTitle from "../Components/mainTitleHome.jsx";
import { AboutMe } from "../Components/aboutMe.jsx";
import { SkillTreeMaster } from "../Components/skillTreeMaster.js";
import { Footer } from "../Layout/footer.jsx";

// Create the home page main context to manage the collapsed state of the components.
export const HomeCollapse = createContext(null);

export function Home() {
  // State used to provide the values for the collapse functions. On true, the MainTitle
  // and the AboutMe components will be collapsed to give space to the skillCharts on
  // SkillTreeMaster
  const [hidden, setHidden] = useState(false);

  return (
    <HomeCollapse.Provider
      value={{ hidden, setHidden }}
    >
      <Header />
      <MainTitle
        titleValue={`Welcome to_vitor's web_site!!! the_world_most renowed web_developer!`.toUpperCase()}
        subTitleValue="Well... at least my mom says so!"
        subTitleAnimation={"animate-[typping_5.2s_steps(32,end)]"}
        subTitleDuration={3.2}
      />
      <AboutMe />
      <h2 className="bg-stone-900 text-stone-300 text-center font-extrabold py-4">
        Skill Charts
      </h2>
      <SkillTreeMaster />
      <Footer />
    </HomeCollapse.Provider>
  );
}
