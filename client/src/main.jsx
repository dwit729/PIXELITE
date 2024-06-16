import React from "react";
import ReactDOM from "react-dom/client";
import Pixelite from "./Pixelite.jsx";
import LoginForm from "./components/LoginForm.jsx";
import ClientProfile from "./pages/ClientProfile.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClientProfile />
  </React.StrictMode>
);
