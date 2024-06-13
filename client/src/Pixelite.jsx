import React from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
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
