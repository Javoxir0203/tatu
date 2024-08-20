import { NextPage } from 'next'
import Image from 'next/image'

const Reviews: NextPage = () => {
	const reviews = [
		{
			rating: 5.0,
			title: 'Amazing',
			name: 'Omar Shipton',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			imageUrl: '/shows/person2.svg',
		},
		{
			rating: 5.0,
			title: 'Amazing',
			name: 'Cristofer Ekstrom Botman',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			imageUrl: '/shows/person4.svg',
		},
		{
			rating: 5.0,
			title: 'Amazing',
			name: 'Kaija Lubin',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			imageUrl: '/shows/person1.svg',
		},
		{
			rating: 5.0,
			title: 'Amazing',
			name: 'Erin Septimus',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			imageUrl: '/shows/person.svg',
		},
		{
			rating: 5.0,
			title: 'Amazing',
			name: 'Terry George',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
			imageUrl: '/shows/person3.svg',
		},
	]

	return (
		<div className='p-8 w-full'>
			<div className='mb-8'>
				<div className='flex items-center mb-4'>
					<h1 className='text-4xl font-bold mr-4'>4.2</h1>
					<div>
						<p className='text-lg font-semibold'>Very good</p>
						<p className='text-gray-500'>311 verified reviews</p>
					</div>
				</div>

				<div>
					{reviews.map((review, index) => (
						<div key={index} className='border-b py-4'>
							<div className='flex justify-between'>
								<div className='flex items-center'>
									<Image src={review.imageUrl} alt={review.name} className=' rounded-full mr-4' width={50} height={50} />
									<div>
										<p className='font-semibold'>
											{review.rating.toFixed(1)} {review.title}
										</p>
										<p className='text-gray-500'>{review.name}</p>
									</div>
								</div>
								<button className='text-gray-500'>
									<svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
										<path d='M9 7a1 1 0 012 0v6a1 1 0 01-2 0V7z' />
										<path fillRule='evenodd' d='M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm2 2a1 1 0 100 2h6a1 1 0 100-2H7z' clipRule='evenodd' />
									</svg>
								</button>
							</div>
							<p className='mt-2 text-gray-700'>{review.content}</p>
						</div>
					))}
				</div>

				<div className='flex justify-between items-center mt-4'>
					<div className='flex items-center text-center '>
						<button className='text-gray-500'>
							<svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
								<path fillRule='evenodd' d='M12.293 14.707a1 1 0 001.414-1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 10-1.414-1.414l-3.586 3.586a2 2 0 000 2.828l3.586 3.586a1 1 0 001.414 0z' clipRule='evenodd' />
							</svg>
						</button>
						<p className='text-gray-500 '>1 of 40</p>
						<button className='text-gray-500'>
							<svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
								<path fillRule='evenodd' d='M7.707 14.707a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414l-3-3a1 1 0 111.414-1.414l3.586 3.586a2 2 0 010 2.828l-3.586 3.586a1 1 0 01-1.414 0z' clipRule='evenodd' />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Reviews
