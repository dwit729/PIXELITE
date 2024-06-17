import React from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage';
import About from './pages/About';

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
