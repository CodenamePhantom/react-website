import React from "react";

import { Header } from "../Layout/header.jsx";
import MainTitle from "../Layout/mainTitle.jsx";

export const Works = () => {
  return (
    <>
      <Header />
      <MainTitle
        titleValue={`Khajiit has wares...`.toUpperCase()}
        subTitleValue={`If you have coin...`}
        subTitleAnimation="animate-[typping_6.2s_steps(32,end)]"
        subTitleDuration={2}
      />
    </>
  );
};
