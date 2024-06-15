import React from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import LoginForm from './components/LoginForm';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/login',
        element: <LoginPage/>,
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
