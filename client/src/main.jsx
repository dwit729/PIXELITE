import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MainNavbar from './components/MainNavbar.jsx'
import ImgCarousel from './components/Carousel.jsx'
import BookNow from './components/BookNow.jsx'
import CardReview from './components/CardReviews.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainNavbar/>
   <ImgCarousel/>
   <BookNow/>
   <CardReview/>
  </React.StrictMode>,
)
