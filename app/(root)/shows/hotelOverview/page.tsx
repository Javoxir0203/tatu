import React from 'react'

const HotelOverview: React.FC = () => {
	return (
		<>
			<div className='w-full p-8'>
				<h1 className='text-xl font-bold mb-4'>Overview</h1>
				<p className='text-gray-700 mb-6'>
					Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With its 452 luxurious rooms
					and suites, 8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces with Bosphorus view, Istanbul’s largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the popular
					attraction point of the city. Room and suite categories at various sizes with city and Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests as a wide variety of selection.
				</p>
				<div className='flex items-center mb-4'>
					<div className='bg-green-200 text-green-800 font-bold p-4 rounded-md mr-4'>
						<div className='text-2xl'>4.2</div>
						<div>Very good</div>
						<div className='text-sm'>371 reviews</div>
					</div>
					<div className='grid grid-cols-4 gap-4'>
						<div className='bg-gray-100 p-4 rounded-md text-center'>
							<span className='text-2xl'>⭐️⭐️⭐️⭐️</span>
							<div className='text-sm'>Near park</div>
						</div>
						<div className='bg-gray-100 p-4 rounded-md text-center'>
							<span className='text-2xl'>⭐️⭐️⭐️⭐️</span>
							<div className='text-sm'>Near nightlife</div>
						</div>
						<div className='bg-gray-100 p-4 rounded-md text-center'>
							<span className='text-2xl'>⭐️⭐️⭐️⭐️</span>
							<div className='text-sm'>Near theater</div>
						</div>
						<div className='bg-gray-100 p-4 rounded-md text-center'>
							<span className='text-2xl'>⭐️⭐️⭐️⭐️</span>
							<div className='text-sm'>Clean Hotel</div>
						</div>
					</div>
				</div>
			</div>
            <p className=' container border rounded w-full'></p>
		</>
	)
}

export default HotelOverview
