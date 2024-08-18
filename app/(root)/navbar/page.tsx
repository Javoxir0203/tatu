import Link from 'next/link'
import React from 'react'

const Navbar: React.FC = () => {
	return (
		<nav className='bg-white shadow-md'>
			<div className='container mx-auto px-4 py-3 flex justify-between items-center'>
				<div className='flex space-x-6 items-center'>
					<Link href='flight' className='flex items-center text-black'>
						{/* <svg className='w-6 h-6 mr-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
							<path d='M10.9 2.3a1 1 0 00-1.8 0l-2 4-4.5.7a1 1 0 00-.5 1.7l3.3 3.2-.8 4.5a1 1 0 001.5 1.1L10 15.6l4 2.1a1 1 0 001.5-1.1l-.8-4.5 3.3-3.2a1 1 0 00-.5-1.7l-4.5-.7-2-4z' />
						</svg> */}
						Find Flight
					</Link>
					<Link href='stays' className='flex items-center text-black'>
						{/* <svg className='w-6 h-6 mr-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
							<path d='M9 12.7a4.5 4.5 0 01-1.3-.3 3 3 0 01-.7-.5l-1.8 1.8 1.8 1.8a3 3 0 01-.5.7 4.5 4.5 0 01-1.3.3v1.8a4.5 4.5 0 012-.5 4.5 4.5 0 012-.5v-1.8a4.5 4.5 0 01-2 .5 4.5 4.5 0 01-2-.5v-1.8a4.5 4.5 0 012 .5 4.5 4.5 0 012 .5v1.8zM14.5 1a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 1a1.5 1.5 0 110 3 1.5 1.5 0 010-3z' />
						</svg> */}
						Find Stays
					</Link>
				</div>

				<div className='flex justify-center items-center flex-1'>
					<Link href='#' className='text-2xl font-bold text-black'>
						g<span className='text-green-600'>l</span>obe
					</Link>
				</div>

				<div className='flex space-x-4 items-center'>
					<Link href='/login' className='text-black'>
						Login
					</Link>
					<Link href='/accountPage' className='px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700'>
						Sign up
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
