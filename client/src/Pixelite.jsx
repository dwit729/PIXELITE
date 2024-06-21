import React from 'react'
import {createBrowserRouter, RouterProvider, Route, Router } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage';
import About from './pages/About';
import AccountSettings from "./panels/AccountSettings.jsx";
import Appointments from "./panels/Appointments.jsx";
import Calendar from "./panels/Calendar.jsx";
import Reviews from "./panels/Reviews.jsx";
import Albums from "./panels/Albums.jsx";
import Register from './pages/Register';
import ClientDefault from './panels/ClientDefault';
import { useState } from 'react';
import { createContext } from 'react';
import Photoshoot from './panels/Photoshoot.jsx';
import PreviewPage from './pages/PreviewPage.jsx';

export const UserContext = createContext();

const router = createBrowserRouter([
    {
    path: '/',
    element: <PreviewPage/>,
    },
    {
        path: '/home',
        element: <Home/>,
    },
    {
        path: '/login',
        element: <LoginPage/>,
    },
    {
        path: '/about',
        element: <About/>,
    },
    {
        path: '/profile',
        children: [
                {
                path: "/profile",
                element: <ClientDefault />,
              },
              {
                path: "/profile/account-settings",
                element: <AccountSettings/>,
              },
              {
                path: "/profile/appointments",
                element: <Appointments />,
              },
              {
                path: "/profile/albums",
                element: <Albums/>,
              },
              {
                path: "/profile/reviews",
                element: <Reviews/>,
              },
              {
                path: "/profile/calendar",
                element: <Calendar />,
              },
              {
                path: "/profile/about",
                element: <About/>,
              },
        ]
    },
    {
        path: '/signup',
        element: <Register/>
    },
    {
      path: 'photoshoot_service',
      element: <Photoshoot/>
    }
    
]);

function Pixelite() {

  const [currentUser, setCurrentUser] = useState({
    user_id: 0,
    user_type: "",
  })

  return (
   <>
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      <div>
        <RouterProvider router={router}/>
      </div>
    </UserContext.Provider>
   
   </>
  )
}

export default Pixelite
