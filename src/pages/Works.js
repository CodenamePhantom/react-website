import React, { useContext } from "react";

import { Header } from "../Layout/header.jsx"
import MainTitle from "../Layout/mainTitle.jsx"

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
