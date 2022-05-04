import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AnimatedRoutes } from './AnimatedRoutes.js'

export function App() {
  return(
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
