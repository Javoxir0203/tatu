import React from 'react'
import hotel from '@/public/hotel/hotel.png'
import hptel1 from '@/public/hotel/hotel1.png'
import hptel2 from '@/public/hotel/hotel2.png'
import hptel3 from '@/public/hotel/hotel3.png'
import hotel4 from '@/public/hotel/hotel4.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Shows_Section() {
	return (
		<>
			<div className='grid p-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
				<div className='col-span-1 lg:col-span-2'>
					<Image src={hotel4} alt='hotel' width={500} height={300} className='w-full h-auto rounded-lg shadow-lg' />
				</div>
				<div className='grid relative grid-cols-2 gap-4 col-span-1 lg:col-span-2'>
					<Image src={hptel1} alt='hotel' width={500} height={300} className='w-full h-auto rounded-lg shadow-lg' />
					<Image src={hptel2} alt='hotel' width={500} height={300} className='w-full h-auto rounded-lg shadow-lg' />
					<Image src={hptel3} alt='hotel' width={500} height={300} className='w-full h-auto rounded-lg shadow-lg' />
					<Image src={hotel} alt='hotel' width={500} height={300} className='w-full h-auto rounded-lg shadow-lg' />
					<div>
						<Button className='bg-green-500 text-white px-4 py-2 rounded-md'>View all photos</Button>
					</div>
				</div>
			</div>
			<p className='container border rounded '></p>
		</>
	)
}

export default Shows_Section
