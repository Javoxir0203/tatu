import type { NextPage } from 'next'
import Head from 'next/head'
import HotelOverview from '../hotelOverview/page'
import RoomList from '../roomList/page'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Hotel Overview</title>
				<meta name='description' content='Overview of CVK Park Bosphorus Hotel Istanbul' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<HotelOverview />
                <RoomList/>
			</main>
		</div>
	)
}

export default Home
