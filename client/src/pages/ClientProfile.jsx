import React from "react";
import ProfileNav from "../components/ProfileNav.jsx";
import AccountSettings from "../panels/AccountSettings.jsx";
import Appointments from "../panels/Appointments.jsx";
import Calendar from "../panels/Calendar.jsx";
import Reviews from "../panels/Reviews.jsx";
import Albums from "../panels/Albums.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientDefault from "../panels/ClientDefault.jsx";
import About from "../pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientDefault />,
  },
  {
    path: "/account-settings",
    element: <AccountSettings />,
  },
  {
    path: "/appointments",
    element: <Appointments />,
  },
  {
    path: "/albums",
    element: <Albums />,
  },
  {
    path: "/reviews",
    element: <Reviews />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function ClientProfile() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default ClientProfile;
