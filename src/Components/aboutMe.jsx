import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";

import { fadeInProperties } from "../helpers/framer-motionProperties.js";
import { HomeCollapse } from "../pages/Home.js";

export function AboutMe() {
  const [toggle, setToggle] = useState("");
  const [toggleId, setToggleId] = useState(0);
  const [collapse, setCollapse] = useState("scale-100");

  const { hidden } = useContext(HomeCollapse);

  const aboutsAnimation = (prop) =>
    toggle === prop ? "animate-aboutOpen max-h-fit" : "max-h-0";
  const aboutsContainer = "overflow-hidden bg-stone-200 rounded xs:px-5";
  const aboutsTitle = `bg-stone-200 text-red-700 font-extrabold cursor-pointer rounded-full pl-2 
      xs:text-[16px] xs:py-2 xs:w-[90%] xs:m-2 xs:mx-auto md:w-auto md:mx-4 md:my-4`;
  const aboutsText = "xs:text-[14px] xs:py-1";
  const aboutsSeparator =
    "bg-stone-500 xs:w-[70%] xs:h-1 xs:mx-auto md:w-[85%]";
  const aboutsList = "list-disc xs:text-[13px] xs:py-2 xs:ml-3 md:my-2";

  const switchId = (id) => {
    setToggleId((currId) => (currId === id ? 0 : id));
  };

  useEffect(() => {
    switch (toggleId) {
      case 1:
        setToggle("about me");
        break;
      case 2:
        setToggle("about my degrees");
        break;
      case 3:
        setToggle("curiosities");
        break;
      default:
        setToggle("");
    }
  }, [toggleId]);

  useEffect(() => {
    if (hidden === true) {
      setCollapse("scale-x-0 max-h-0");
    } else {
      setCollapse("scale-x-100 xs:max-h-[490px] md:max-h-[300px]");
    }
  }, [hidden]);

  return (
    <div className={`transition-all transform origin-left ${collapse}`}>
      <article className="bg-stone-300 w-full h-auto overflow-hidden flex xs:flex-col md:flex-row">
        <motion.section
          className="flex flex-col justify-center place-content-start md:w-auto"
          initial={fadeInProperties[0]}
          animate={fadeInProperties[1]}
          transition={fadeInProperties[2]}
          exit={fadeInProperties[0]}
        >
          <img
            src="https://via.placeholder.com/130"
            alt=""
            className="rounded-full border-8 border-stone-700 p-3 w-[170px] h-[170px] max-w-fit 
            xs:mx-auto xs:my-5"
          />
          <h2
            className="text-stone-800 font-bold xs:text-[18px] xs:mx-auto md:text-center 
          md:m-4"
          >
            Hello, my name is Vitor!
          </h2>
        </motion.section>
        <span
          className="bg-gray-600 xs:w-[80%] xs:h-1 xs:mx-auto xs:my-4 md:w-1 md:h-[80%] 
        md:mx-4 md:my-auto"
        ></span>
        <section className="flex xs:flex-col md:w-[75%]">
          <motion.h3
            className={aboutsTitle}
            onClick={() => switchId(1)}
            initial={fadeInProperties[0]}
            animate={fadeInProperties[1]}
            transition={fadeInProperties[2]}
            exit={fadeInProperties[0]}
          >
            ~ About me.
          </motion.h3>
          <div className={`${aboutsContainer} ${aboutsAnimation("about me")}`}>
            <p className={aboutsText}>
              I'm a web developer from brazil, that is currently working with IT
              Infrastructure.
            </p>
            <p className={aboutsText}>
              I know, they aren't anything alike. but that's because i started
              learning software development for real recently! I mean, i always
              had the background with my automation projects, but now i'm more
              focused than ever on evolving my development skills!
            </p>
          </div>
          <span className={aboutsSeparator}></span>
          <motion.h3
            className={aboutsTitle}
            onClick={() => switchId(2)}
            initial={fadeInProperties[0]}
            animate={fadeInProperties[1]}
            transition={fadeInProperties[2]}
            exit={fadeInProperties[0]}
          >
            ~ About my degrees
          </motion.h3>
          <div
            className={`${aboutsContainer} ${aboutsAnimation(
              "about my degrees"
            )}`}
          >
            <p className={aboutsText}>
              I have a bachelor degree in Infrastructure and computer network,
              and one year of computer engineering on the backpack, as well as a
              bunch of trainings and certificates, including:
            </p>
            <ul className={aboutsList}>
              <li>Pentest validation and threat analysis.</li>
              <li>Power Platform administration and development (PL-38400).</li>
              <li>Front-end development with HTML, CSS and JavaScript.</li>
              <li>System and infrastructure automation with python.</li>
            </ul>
            <p className={aboutsText}>
              Not to metion all the self taught skills i collected along the
              way, like this react-tailwind web site for example.
            </p>
          </div>
          <span className={aboutsSeparator}></span>
          <motion.h3
            className={aboutsTitle}
            onClick={() => switchId(3)}
            initial={fadeInProperties[0]}
            animate={fadeInProperties[1]}
            transition={fadeInProperties[2]}
            exit={fadeInProperties[0]}
          >
            ~ Curiosities
          </motion.h3>
          <div
            className={`${aboutsContainer} ${aboutsAnimation("curiosities")}`}
          >
            <ul className={aboutsList}>
              <li>I learned ReactJS by my self making this very site</li>
              <li>
                I also learned a lot of backend libraries (NodeJS and Python) to
                go with the overall knowledge
              </li>
              <li>
                I'm also a part time room musician (meaning i only play in my
                room)
              </li>
              <li>I began with web dev on the beggining of 2022</li>
            </ul>
          </div>
          <span className={`${aboutsSeparator} mb-4`}></span>
        </section>
      </article>
    </div>
  );
}
