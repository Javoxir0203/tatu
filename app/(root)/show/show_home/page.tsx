import type { NextPage } from 'next'
import Head from 'next/head'
import Filter from '../filter/page'
import FlightCard from '../flightCard/page'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Flight Search</title>
				<meta name='description' content='Find the best flight deals' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='bg-gray-100 min-h-screen py-8'>
				<div className='container mx-auto flex space-x-8'>
					<aside className='w-1/4'>
						<Filter />
					</aside>

					<section className='flex-1'>
						<div className='mb-6'>
							<h2 className='text-2xl font-semibold mb-4'>Showing 4 of 257 places</h2>
							<div className='flex items-center justify-between'>
								<div>
									<button className='px-4 py-2 bg-gray-200 rounded-md'>Cheapest</button>
									<button className='px-4 py-2 bg-gray-200 rounded-md ml-2'>Best</button>
									<button className='px-4 py-2 bg-gray-200 rounded-md ml-2'>Quickest</button>
								</div>
								<div>
									<button className='px-4 py-2 bg-gray-200 rounded-md'>Sort by Recommended</button>
								</div>
							</div>
						</div>

						<FlightCard airline='Emirates' departureTime='12:00 pm' arrivalTime='01:28 pm' duration='2h 28m' price='$104' logoSrc='/emirates-logo.png' />

						<FlightCard airline='Fly Dubai' departureTime='12:00 pm' arrivalTime='01:28 pm' duration='2h 28m' price='$104' logoSrc='/flydubai-logo.png' />

						<FlightCard airline='Qatar' departureTime='12:00 pm' arrivalTime='01:28 pm' duration='2h 28m' price='$104' logoSrc='/qatar-logo.png' />

						<FlightCard airline='Etihad' departureTime='12:00 pm' arrivalTime='01:28 pm' duration='2h 28m' price='$104' logoSrc='/etihad-logo.png' />

						<div className='text-center mt-6'>
							<button className='px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600'>Show more results</button>
						</div>
					</section>
				</div>
			</main>
		</div>
	)
}

export default Home
