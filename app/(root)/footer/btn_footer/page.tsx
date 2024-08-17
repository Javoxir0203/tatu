import Image from 'next/image'
import userimage from '@/public/userimage.svg'
function BtnFooter() {
	return (
		<div className='p-8 relative top-20'>
			<div className='bg-[#CDEAE1] max-w-full p-6 h-66 rounded-lg   shadow-lg flex justify-between'>
				<div className='w-full'>
					<h1 className='text-3xl font-bold mb-2'>
						Subscribe <span className='underline decoration-purple-500'>Newsletter</span>
					</h1>
					<p className='text-gray-600 mb-4'>The Travel</p>
					<p className='text-gray-600 mb-6'>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
					<form className='flex'>
						<input type='email' placeholder='Your email address' className='p-3 border border-gray-300 rounded-l-lg w-full' />
						<button type='submit' className='bg-gray-800 text-white p-2 rounded-r-lg'>
							Subscribe
						</button>
					</form>
				</div>
				<div className='w-1/2 flex justify-center'>
					<Image src={userimage} alt='image' width={300} height={300} />
				</div>
			</div>
		</div>
	)
}

export default BtnFooter
