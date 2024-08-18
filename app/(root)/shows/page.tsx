import React from 'react'
import Navbar from '../navbar/page'
import Footer from '../footer/page'
import HotelCard from '../hotelCard/page'
import Shows_Section from './shows_section/page'

function Shows() {
  return (
    <div>
      <Navbar/>
      <HotelCard/>
      <Shows_Section/>
      <Footer/>
    </div>
  )
}

export default Shows
