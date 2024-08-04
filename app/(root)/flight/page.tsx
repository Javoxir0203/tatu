import React from 'react'
import Travel from '../travel/page'
import TravelSection from '../travel_section/page'
import Footer from '../footer/page'
import TravelMap from '../travelmap/page'

function Flight() {
  return (
    <div>
      <TravelMap/>
        <Travel/>
        <TravelSection/>
        <Footer/>
    </div>
  )
}

export default Flight