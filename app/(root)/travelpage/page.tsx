'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import filght from '@/public/filght.jpeg'
import Link from 'next/link'
const TravelPage: React.FC = () => {
	return (
		<div className='relative'>
			<div className='relative h-96'>
				<Image src={filght} alt='Airport' className='w-full h-full object-cover' />
				<div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4'>
					<h1 className='text-4xl font-bold mb-4 text-center'>Make your travel wishlist, we’ll do the rest</h1>
					<p className='text-lg mb-4 text-center'>Special offers to suit your plan</p>
				</div>
			</div>

			<div className='bg-white relative p-8 rounded-xl shadow-xl mb-8 -mt-20 mx-auto max-w-4xl'>
				<h2 className='text-2xl font-semibold mb-6 text-center'>Where are you flying?</h2>
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
					<div className='flex w-full  justify-between items-center gap-2'>
						<div className='col-span-2  sm:col-span-1'>
							<Button type='button' className='w-full p-3 border bg-gray-100 text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'>
								+ Add Promo Code
							</Button>
						</div>
						<div className='col-span-2 sm:col-span-1 lg:col-span-2'>
							<Button type='submit' className='w-full p-3 bg-green-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'>
								<Link href={'shows'}> Shows Flights</Link>
							</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default TravelPage
