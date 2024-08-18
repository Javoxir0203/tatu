import Image from 'next/image'
import React from 'react'
import emirates from '@/public/emirates.png'
import { Button } from '@/components/ui/button'

interface FlightCardProps {
	airline: string
	departureTime: string
	arrivalTime: string
	duration: string
	price: string
	logoSrc: string
}

const FlightCard: React.FC<FlightCardProps> = ({ airline, departureTime, arrivalTime, duration, price, logoSrc }) => {
	return (
		<>
			<div className='bg-white shadow-md rounded-md p-4 mb-6 flex items-center justify-between'>
				<div className='flex items-center space-x-4'>
					<Image src={emirates} alt={`${airline} logo`} className='w-16' width={200} height={200} />
					<div>
						<h3 className='text-lg font-medium'>{airline}</h3>
						<p className='text-sm text-gray-600'>
							{departureTime} - {arrivalTime}
						</p>
						<p className='text-sm text-gray-600'>{duration}</p>
					</div>
				</div>
				<div className='text-right'>
					<p className='text-xl font-bold'>{price}</p>
				<Button className='mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600'>View Deals</Button>
				</div>
			</div>
		</>
	)
}

export default FlightCard
