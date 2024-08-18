import React from 'react'

const Filter: React.FC = () => {
	return (
		<div className='w-64 p-4 bg-white shadow-md rounded-md'>
			<h2 className='text-lg font-semibold mb-4'>Filters</h2>
			<div className='mb-6'>
				<h3 className='font-medium mb-2'>Price</h3>
				<input type='range' min='50' max='1200' className='w-full' />
				<div className='flex justify-between text-sm text-gray-600'>
					<span>$50</span>
					<span>$1200</span>
				</div>
			</div>

			<div className='mb-6'>
				<h3 className='font-medium mb-2'>Departure Time</h3>
				<input type='range' min='0' max='24' className='w-full' />
				<div className='flex justify-between text-sm text-gray-600'>
					<span>12:01AM</span>
					<span>11:59PM</span>
				</div>
			</div>

			<div className='mb-6'>
				<h3 className='font-medium mb-2'>Rating</h3>
				<div className='space-y-2'>
					<div>
						<input type='checkbox' id='rating-1' />
						<label htmlFor='rating-1' className='ml-2'>
							1+
						</label>
					</div>
					<div>
						<input type='checkbox' id='rating-2' />
						<label htmlFor='rating-2' className='ml-2'>
							2+
						</label>
					</div>
					<div>
						<input type='checkbox' id='rating-3' />
						<label htmlFor='rating-3' className='ml-2'>
							3+
						</label>
					</div>
					<div>
						<input type='checkbox' id='rating-4' />
						<label htmlFor='rating-4' className='ml-2'>
							4+
						</label>
					</div>
				</div>
			</div>

			<div className='mb-6'>
				<h3 className='font-medium mb-2'>Airlines</h3>
				<div className='space-y-2'>
					<div>
						<input type='checkbox' id='airline-emirated' />
						<label htmlFor='airline-emirated' className='ml-2'>
							Emirated
						</label>
					</div>
					<div>
						<input type='checkbox' id='airline-flydubai' />
						<label htmlFor='airline-flydubai' className='ml-2'>
							Fly Dubai
						</label>
					</div>
					<div>
						<input type='checkbox' id='airline-qatar' />
						<label htmlFor='airline-qatar' className='ml-2'>
							Qatar
						</label>
					</div>
					<div>
						<input type='checkbox' id='airline-etihad' />
						<label htmlFor='airline-etihad' className='ml-2'>
							Etihad
						</label>
					</div>
				</div>
			</div>

			<div className='mb-6'>
				<h3 className='font-medium mb-2'>Trips</h3>
				<div className='space-y-2'>
					<div>
						<input type='checkbox' id='trip-round' />
						<label htmlFor='trip-round' className='ml-2'>
							Round trip
						</label>
					</div>
					<div>
						<input type='checkbox' id='trip-one-way' />
						<label htmlFor='trip-one-way' className='ml-2'>
							On Way
						</label>
					</div>
					<div>
						<input type='checkbox' id='trip-multi-city' />
						<label htmlFor='trip-multi-city' className='ml-2'>
							Multi-City
						</label>
					</div>
					<div>
						<input type='checkbox' id='trip-flexible' />
						<label htmlFor='trip-flexible' className='ml-2'>
							My Dates Are Flexible
						</label>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Filter
