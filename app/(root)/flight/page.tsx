import React from 'react'
import Travel from '../travel/page'
import TravelSection from '../travel_section/page'
import Footer from '../footer/page'
import TravelMap from '../travelmap/page'
import TravelPage from '../travelpage/page'
import Navbar from '../navbar/page'

function Flight() {
	return (
		<div>
			<Navbar />
			<TravelPage />
			<TravelMap />
			<Travel />
			<TravelSection />
			<Footer />
		</div>
	)
}

export default Flight
