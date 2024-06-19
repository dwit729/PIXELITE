import React from "react";
import ReactDOM from "react-dom/client";
import Pixelite from "./Pixelite.jsx";
import ClientProfile from "./pages/ClientProfile.jsx";
import Register from "./pages/Register.jsx";
import Photoshoot from "./panels/Photoshoot.jsx";
import EventOrgs from "./panels/EventOrgs.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EventOrgs />
  </React.StrictMode>
);
