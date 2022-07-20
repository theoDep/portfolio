import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "@components/Navbar";
import Router from "./helpers/Router";

import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <App />
    </Router>
  </React.StrictMode>
);
