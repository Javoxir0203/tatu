import React from 'react'
import Navbar from '../navbar/page'
import Show_section from './show_section/page'
import Home from './show_home/page'
import Footer from '../footer/page'

function Show() {
	return (
		<div>
			<Navbar />
			<Show_section />
			<Home />
			<Footer />
		</div>
	)
}

export default Show
