import React, { createContext, useEffect, useState } from "react";

import { Header } from "../Layout/header.jsx";
import MainTitle from "../Layout/mainTitle.jsx";
import { AboutMe } from "../Components/aboutMe.jsx";
import { SkillTreeMaster } from "../Components/skillTree/skillTreeMaster.js";
import { Footer } from "../Layout/footer.jsx";

import { motion, AnimatePresence } from "framer-motion";

// Create the home page main context to manage the collapsed state of the components.
export const HomeCollapse = createContext(null);

export function Home() {
  // State management. 
  // The hidden state is utilized to mount and unmount components.
  // The scale state is utilized to make the MainTitle and AboutMe full
    // size on the page render.
  // The delay state is utilized to delay the component scale back until
    // the chart is completely closed.
  const [hidden, setHidden] = useState(false);
  const [scale, setScale] = useState(9999);
  const [delay, setDelay] = useState(0);

  // State updates. On the component mounting, it updates the scale and delay state to 0.
  // The scale state makes the component rescale after umounting and mounting. but not rescale
    // on the page render. 
  // The delay is reseted back to zero to make the component collapse instantaniously after
    // The skill chart update the delay.
  useEffect(() => {
    setTimeout(() => {
      setScale(0)
      setDelay(0)
    }, 100);
  });

  return (
    <HomeCollapse.Provider value={{ hidden, setHidden, setDelay }}>
      <link rel="preconnect" href="https://via.placeholder.com/" />
      <Header />
      <AnimatePresence>
        {!hidden && (
          <motion.div
            className="overflow-hidden"
            initial={{
              maxHeight: scale,
            }}
            animate={{
              maxHeight: 1200,
              originX: 0,
            }}
            transition={{
              ease: "easeOut",
              duration: 0.3,
              delay: delay
            }}
            exit={{
              maxHeight: 0,
            }}
          >
            <MainTitle
              titleValue={`Welcome to_vitor's web_site!!! the_world_most renowed web_developer!`.toUpperCase()}
              subTitleValue="Well... at least my mom says so!"
              subTitleAnimation={"animate-[typping_5.2s_steps(32,end)]"}
              subTitleDuration={3.2}
            />
            <AboutMe />
          </motion.div>
        )}
      </AnimatePresence>
      <h2 className="bg-stone-900 text-stone-300 text-center font-extrabold drop-shadow-md py-4">
        Skill Charts
      </h2>
      <SkillTreeMaster />
      <Footer />
    </HomeCollapse.Provider>
  );
}
