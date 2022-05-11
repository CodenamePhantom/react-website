import React from "react";

import { Header } from "../Layout/header";
import { Footer } from "../Layout/footer";
import MainTitle from "../Layout/mainTitle";
import { ContactForm } from "../Components/contactForm";

export const Contact = () => {
  return (
    <>
      <Header />
      <MainTitle
        titleValue={"Say my name...".toUpperCase()}
        subTitleValue="You're goddamn right... i think."
        subTitleDuration={4.5}
      />
      <ContactForm />
      <Footer />
    </>
  );
};
