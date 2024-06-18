import React from "react";
import ReactDOM from "react-dom/client";
import Pixelite from "./Pixelite.jsx";
import ClientProfile from "./pages/ClientProfile.jsx";
import Register from "./pages/Register.jsx";
import Photoshoot from "./panels/Photoshoot.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Photoshoot />
  </React.StrictMode>
);
