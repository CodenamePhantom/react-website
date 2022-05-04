import React from "react";

import { Header } from "../Layout/header.jsx";
import { MainTitle } from "../Components/intro.jsx";
import { AboutMe } from "../Components/aboutMe.jsx";

export const Home = () => {
  return(
    <>
      <Header />
      <MainTitle 
        titleValue={`Welcome to_vitor's web_site!!! the_world_most renowed web_developer!`.toUpperCase()} 
        subTitleValue="Well... at least my mom says so!" 
      />
      <AboutMe />
      <h2 
        className="bg-slate-900 text-stone-100 text-center font-extrabold py-4"
      >
        Skill Charts
      </h2>
    </>
  )
}
