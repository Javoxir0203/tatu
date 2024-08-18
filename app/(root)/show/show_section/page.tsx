import { Button } from '@/components/ui/button'
import React from 'react'

function Show_section() {
	return (
		<div className='relative p-8 '>
			<div className='bg-white w-full  relative p-8 border rounded-2xl '>
				<form className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
					<div className='col-span-1'>
						<label className='block mb-2 text-sm font-medium text-gray-700'>From - To</label>
						<input type='text' placeholder='Lahore - Karachi' className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500' />
					</div>
					<div className='col-span-1'>
						<label className='block mb-2 text-sm font-medium text-gray-700'>Trip</label>
						<select className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'>
							<option>Return</option>
							<option>One-way</option>
						</select>
					</div>

					<div className='col-span-1'>
						<label className='block mb-2 text-sm font-medium text-gray-700'>Depart - Return</label>
						<input type='text' placeholder='07 Nov 22 - 13 Nov 22' className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500' />
					</div>
					<div className='col-span-1'>
						<label className='block mb-2 text-sm font-medium text-gray-700'>Passenger - Class</label>
						<input type='text' placeholder='1 Passenger, Economy' className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500' />
					</div>
				</form>
			</div>
		</div>
	)
}

export default Show_section
