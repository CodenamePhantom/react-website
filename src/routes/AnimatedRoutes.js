import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Home } from "../pages/Home.js";
import { Works } from "../pages/Works.js";

import { AnimatePresence } from "framer-motion";

export function AnimatedRoutes() {
  const Location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={Location} key={Location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Works" element={<Works />} />
      </Routes>
    </AnimatePresence>
  );
}
