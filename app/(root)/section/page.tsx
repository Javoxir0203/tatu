import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { data } from '@/constants'
import Image from 'next/image'
import React from 'react'

function Section() {
	return (
		<>
			<div className='flex items-start justify-between p-6'>
				<div>
					<h2 className='text-4xl font-bold'>Plan your perfect trip</h2>
					<p>Search Flights & Places Hire to our most popular destinations</p>
				</div>
				<Button className='bg-slate-400'>See more places</Button>
			</div>
			<div className='grid grid-cols-3 gap-6 p-6'>
				{data.map((item, index) => (
					<Card className='flex items-center p-4 space-x-4 max-w-md' key={index}>
						<Image src={item.img} alt='Istanb' width={48} height={48} className='rounded-md' />
						<div>
							<h3 className='text-lg font-medium'>{item.title}</h3>
							<p className='text-muted-foreground'>{item.description}</p>
						</div>
					</Card>
				))}
			</div>
		</>
	)
}
export default Section
