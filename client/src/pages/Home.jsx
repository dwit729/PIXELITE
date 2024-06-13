import React from 'react'
import App from '../App.jsx'
import MainNavbar from '../components/MainNavbar.jsx'
import ImgCarousel from '../components/Carousel.jsx'
import BookNow from '../components/BookNow.jsx'
import CardReview from '../components/CardReviews.jsx'

function Home() {
  return (
    <>
        <MainNavbar/>
        <ImgCarousel/>
        <BookNow/>
        <CardReview/>
    </>
  )
}

export default Home
