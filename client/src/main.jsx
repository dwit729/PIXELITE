import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavBar from './components/MainNavbar.jsx'
import Cards from './components/Cards.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Cards/>
  </React.StrictMode>,
)
