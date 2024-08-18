import { Button } from '@/components/ui/button'
import React from 'react'

const HotelCard: React.FC = () => {
	return (
		<div className='h-max flex items-center p-8 justify-center '>
			<div className='flex justify-between p-6 items-center border rounded-lg shadow-lg w-full bg-white'>
				<div >
					<h2 className='text-2xl font-bold text-gray-900'>CVK Park Bosphorus Hotel Istanbul</h2>
					<p className='text-gray-600'>Gümüşsuyu Mah. İnönü Cad. No:8, Istanbul 34437</p>
					<div className='flex items-center mt-2'>
						<span className='text-white bg-green-500 px-2 py-1 rounded-md text-sm mr-2'>4.2</span>
						<span className='text-gray-700 font-semibold'>Very Good</span>
						<span className='text-gray-500 ml-1'>(371 reviews)</span>
					</div>
				</div>
				<div className='text-right'>
					<div className='flex items-center justify-between'>
						<p className='text-red-500 font-bold text-3xl'>$240</p>
						<p className='text-sm text-red-500'>/night</p>
					</div>
					<Button className='mt-2 bg-green-500 text-white px-4 py-2 rounded-md'>Book now</Button>
				</div>
			</div>
		</div>
	)
}

export default HotelCard
