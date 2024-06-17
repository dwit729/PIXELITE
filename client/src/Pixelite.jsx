import React from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage';
import About from './pages/About';
import ClientProfile from './pages/ClientProfile';
import Register from './pages/Register';

const router = createBrowserRouter([
    {
        path: '/',
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
        path: '/client/:id',
        element: <About/>,
    },
    {
        path: '/profile',
        element: <About/>,
    },
    {
        path: '/signup',
        element: <Register/>
    }
    
]);

function Pixelite() {
  return (
   <>
    <div>
        <RouterProvider router={router}/>
    </div>
   </>
  )
}

export default Pixelite
