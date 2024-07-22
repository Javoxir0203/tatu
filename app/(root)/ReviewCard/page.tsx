import React from 'react'
import Image from 'next/image'
import star from '@/public/Rectangle 36.png'
import googleLogo from '@/public/Rectangle 36 copy 2.png'
import mountain from '@/public/Rectangle 36 copy.png'
import { Star } from 'lucide-react'

const ReviewCard = () => {
	return (
		<div className='grid grid-cols-3 gap-6 p-8'>
			<div className='bg-white rounded-xl p-6 shadow-md max-w-md mx-auto'>
				<blockquote className='text-xl font-bold mb-4'>“A real sense of community, nurtured”</blockquote>
				<p className='text-gray-600 mb-4'>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...</p>
				<div className='flex justify-between items-center mb-4'>
					<div className='flex space-x-1'>
						{Array.from({ length: 5 }).map((_, i) => (
							<Star key={i} className='text-yellow-500' />
						))}
					</div>
					<span className='text-blue-500 cursor-pointer'>View more</span>
				</div>
				<div className='mb-4'>
					<span className='font-bold'>Olga</span>
					<span className='block text-gray-500'>Weave Studios – Kai Tak</span>
				</div>
				<div className='flex items-center mb-4'>
					<Image src={googleLogo} alt='Google' width={24} height={24} />
					<span className='ml-2'>Google</span>
				</div>
				<Image src={mountain} alt='Review' className='rounded-lg object-cover w-full h-auto' />
			</div>
			<div className='bg-white rounded-xl p-6 shadow-md max-w-md mx-auto'>
				<blockquote className='text-xl font-bold mb-4'>“A real sense of community, nurtured”</blockquote>
				<p className='text-gray-600 mb-4'>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...</p>
				<div className='flex justify-between items-center mb-4'>
					<div className='flex space-x-1'>
						{Array.from({ length: 5 }).map((_, i) => (
							<Star key={i} className='text-yellow-500' />
						))}
					</div>
					<span className='text-blue-500 cursor-pointer'>View more</span>
				</div>
				<div className='mb-4'>
					<span className='font-bold'>Olga</span>
					<span className='block text-gray-500'>Weave Studios – Kai Tak</span>
				</div>
				<div className='flex items-center mb-4'>
					<Image src={googleLogo} alt='Google' width={24} height={24} />
					<span className='ml-2'>Google</span>
				</div>
				<Image src={mountain} alt='Review' className='rounded-lg object-cover w-full h-auto' />
			</div>
			<div className='bg-white rounded-xl p-6 shadow-md max-w-md mx-auto'>
				<blockquote className='text-xl font-bold mb-4'>“A real sense of community, nurtured”</blockquote>
				<p className='text-gray-600 mb-4'>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...</p>
				<div className='flex justify-between items-center mb-4'>
					<div className='flex space-x-1'>
						{Array.from({ length: 5 }).map((_, i) => (
							<Star key={i} className='text-yellow-500' />
						))}
					</div>
					<span className='text-blue-500 cursor-pointer'>View more</span>
				</div>
				<div className='mb-4'>
					<span className='font-bold'>Olga</span>
					<span className='block text-gray-500'>Weave Studios – Kai Tak</span>
				</div>
				<div className='flex items-center mb-4'>
					<Image src={googleLogo} alt='Google' width={24} height={24} />
					<span className='ml-2'>Google</span>
				</div>
				<Image src={mountain} alt='Review' className='rounded-lg object-cover w-full h-auto' />
			</div>
		</div>
	)
}

export default ReviewCard
