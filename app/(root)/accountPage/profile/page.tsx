import Image from 'next/image'
import React from 'react'
import people from '@/public/people.jpeg'
const Profile: React.FC = () => {
	return (
		<div className='bg-gray-100 min-h-screen p-8'>
			<div className='bg-white shadow-md rounded-lg overflow-hidden max-w-4xl mx-auto'>
				<div className='bg-gradient-to-r from-orange-400 via-yellow-400 to-blue-800 h-48 relative'>
					<button className='absolute right-4 bottom-4 bg-teal-100 hover:bg-teal-200 text-teal-800 px-4 py-2 rounded-full shadow'>
						<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5 inline-block mr-1'>
							<path strokeLinecap='round' strokeLinejoin='round' d='M15.232 5.232l3.536 3.536m-2.036-2.036a2.828 2.828 0 11-4-4 2.828 2.828 0 014 4zM16 11v5.25a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 16.25V8.25A2.25 2.25 0 016.75 6h5.25' />
						</svg>
						Upload new cover
					</button>
				</div>
				<div className='flex relative justify-center -mt-16'>
					<Image src={people} alt='Profile' className='w-32 h-32  rounded-full border-4 border-white' />
				</div>
				<div className='text-center mt-4'>
					<h2 className='text-2xl font-semibold'>John Doe</h2>
					<p className='text-gray-600'>john.doe@gmail.com</p>
				</div>
				<div className='mt-6 px-6 '>
					<ul className='flex justify-between border rounded p-2 space-x-6'>
						<li className='font-semibold text-gray-700 border-b-2 border-green-500 pb-2'>Account</li>
						<li className='text-gray-500'>History</li>
						<li className='text-gray-500'>Payment methods</li>
					</ul>
				</div>
				<div className='px-6 py-4'>
					<div className='text-gray-800 text-2xl font-bold mb-4'>Account</div>
					<div className='space-y-4'>
						<div className='flex justify-between items-center'>
							<div>
								<p>Name</p>
								<h2 className='font-semibold'>John Doe</h2>
							</div>
							<button className='text-teal-600'>Change</button>
						</div>
						<div className='flex justify-between items-center'>
							<div>
								<p>Email</p>
								<p className='font-semibold'>john.doe@gmail.com</p>
							</div>
							<div className='flex items-center space-x-2'>
								<button className='bg-teal-100 text-teal-700 px-2 py-1 rounded'>Add another email</button>
								<button className='text-teal-600'>Change</button>
							</div>
						</div>
						<div className='flex justify-between items-center'>
							<div>
								<p>Password</p>
								<p className='font-semibold'>*********</p>
							</div>
							<button className='text-teal-600'>Change</button>
						</div>
						<div className='flex justify-between items-center'>
							<div>
								<p>Phone number</p>
								<p className='font-semibold'>+1 000-000-0000</p>
							</div>
							<button className='text-teal-600'>Change</button>
						</div>
						<div className='flex justify-between items-center'>
							<div>
								<p>Address</p>
								<p className='font-semibold'>St 32 main downtown, Los Angeles, California, USA</p>
							</div>
							<button className='text-teal-600'>Change</button>
						</div>
						<div className='flex justify-between items-center'>
							<div>
								<p>Date of birth</p>
								<p className='font-semibold'>01-01-1992</p>
							</div>
							<button className='text-teal-600'>Change</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
