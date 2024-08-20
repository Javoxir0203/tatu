import React from 'react'
import Navbar from '../navbar/page'
import Footer from '../footer/page'
import HotelCard from '../hotelCard/page'
import Shows_Section from './shows_section/page'
import Home from './shows_main/page'
import LocationMap from './locationMap/page'
import Amenities from './amenities/page'
import Reviews from './eviews/page'

function Shows() {
	return (
		<div>
			<Navbar />
			<HotelCard />
			<Shows_Section />
			<Home />
			<LocationMap />
			<Amenities />
			<Reviews/>
			<Footer />
		</div>
	)
}

export default Shows
