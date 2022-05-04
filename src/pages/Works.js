import React from "react";

import { Header } from "../Layout/header.jsx"
import { MainTitle } from "../Components/intro.jsx"

export const Works = () => {
  return(
    <>
      <Header />
      <MainTitle 
        titleValue={`Khajiit has wares...`.toUpperCase()}
        subTitleValue={`If you have coin...`}
      />
    </>
  );
}
