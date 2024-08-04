import Image from 'next/image'
const locations = [
	{ id: 1, name: 'James Doe', boardingPass: 'NX123', image: '/travel/maps.png',  style: 'top-1/4 left-1/4' },
	{ id: 2, name: 'James Doe', boardingPass: 'NX123', image: '/travel/maps.png',  style: 'top-3/4 left-1/3' },
	{ id: 3, name: 'James Doe', boardingPass: 'NX123', image: '/travel/maps.png',  style: 'top-1/2 left-1/2' },
	{ id: 4, name: 'James Doe', boardingPass: 'NX123', image: '/travel/maps.png',  style: 'top-1/3 left-2/3' },
	{ id: 5, name: 'James Doe', boardingPass: 'NX123', image: '/travel/maps.png',  style: 'top-2/3 left-3/4' },
]

const TravelMap: React.FC = () => {
	return (
		<div className='relative h-screen bg-green-100 p-8'>
			<h1 className='text-3xl font-bold text-center mt-10'>Let`s go places together</h1>
			<p className='text-center mt-2'>Discover the latest offers and news and start planning your next trip with us.</p>
			<div className='relative w-full h-full'>
				{locations.map(location => (
					<div key={location.id} className={`absolute ${location.style} p-2 bg-white flex items-center justify-between rounded-lg shadow-md`}>
						<Image src={location.image} alt={location.name} className=' rounded-full'  width={50} height={50}/>
						<div className='ml-2'>
							<p className='font-semibold'>{location.name}</p>
							<p className='text-sm text-gray-500'>Boarding Pass {location.boardingPass}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default TravelMap
