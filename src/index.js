import React from "react";
import ReactDOM from "react-dom/client";

import "./Assets/Styles/index.css";

import { App } from "./routes/router.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
