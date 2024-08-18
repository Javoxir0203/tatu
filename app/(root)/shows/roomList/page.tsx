import Image from 'next/image'
import React from 'react'

interface Room {
	id: number
	name: string
	description: string
	price: number
	imageUrl: string
}

const rooms: Room[] = [
	{
		id: 1,
		name: 'Superior room',
		description: '1 double bed or 2 twin beds',
		price: 240,
		imageUrl: '/hotel/hotel3.png',
	},
	{
		id: 2,
		name: 'Superior room - City view',
		description: '1 double bed or 2 twin beds',
		price: 280,
		imageUrl: '/hotel/hotel2.png',
	},
	{
		id: 3,
		name: 'Superior room - City view',
		description: '1 double bed or 2 twin beds',
		price: 320,
		imageUrl: '/hotel/hotel1.png',
	},
	{
		id: 4,
		name: 'Superior room - City view',
		description: '1 double bed or 2 twin beds',
		price: 350,
		imageUrl: '/hotel/hotel.png',
	},
]

const RoomList: React.FC = () => {
	return (
		<div className=' w-full p-8'>
			<h2 className='text-xl font-bold mb-4'>Available Rooms</h2>
			<ul className='divide-y divide-gray-200'>
				{rooms.map(room => (
					<li key={room.id} className='flex items-center justify-between py-4'>
						<div className='flex items-center'>
							<Image src={room.imageUrl} alt={room.name} className=' rounded-md mr-4 object-cover' width={100} height={100} />
							<div>
								<h3 className='text-lg font-medium'>{room.name}</h3>
								<p className='text-gray-600'>{room.description}</p>
							</div>
						</div>
						<div className='text-right'>
							<div className='text-xl font-bold'>
								${room.price}
								<span className='text-sm font-normal'>/night</span>
							</div>
							<button className='mt-2 bg-green-200 text-green-800 font-bold py-2 px-4 rounded-md'>Book now</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default RoomList
