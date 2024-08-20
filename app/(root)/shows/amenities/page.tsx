import { NextPage } from 'next'

const Amenities: NextPage = () => {
	return (
		<div className='p-8 w-full'>
			<div className='mb-8'>
				<h1 className='text-3xl font-bold mb-4'>Amenities</h1>
				<ul className='grid grid-cols-2 gap-y-4 text-lg'>
					<li className='flex items-center'>
						<span className='mr-2'>🏊</span> Outdoor pool
					</li>
					<li className='flex items-center'>
						<span className='mr-2'>🏊</span> Indoor pool
					</li>
					<li className='flex items-center'>
						<span className='mr-2'>💆</span> Spa and wellness center
					</li>
					<li className='flex items-center'>
						<span className='mr-2'>🍽️</span> Restaurant
					</li>
					<li className='flex items-center'>
						<span className='mr-2'>🛎️</span> Room service
					</li>
					<li className='flex items-center'>
						<span className='mr-2'>💪</span> Fitness center
					</li>
					<li className='flex items-center'>
						<span className='mr-2'>🍸</span> Bar/Lounge
					</li>
					<li className='flex items-center'>
						<span className='mr-2'>📶</span> Free Wi-Fi
					</li>
					<li className='flex items-center'>
						<span className='mr-2'>☕</span> Tea/coffee machine
					</li>
					<li className='col-span-2 text-blue-500 cursor-pointer'>+24 more</li>
				</ul>
			</div>
			<div className='flex justify-between border-t pt-4'>
				<h2 className='text-xl font-semibold mb-2'>Reviews</h2>
				<button className='bg-green-500 text-white py-2 px-4 rounded'>Give your review</button>
			</div>
		</div>
	)
}

export default Amenities
