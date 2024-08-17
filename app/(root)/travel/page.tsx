import Image from 'next/image'
import travel from '@/public/travel/travel.png'
import travel1 from '@/public/travel/travel1.png'
import travel2 from '@/public/travel/travel2.png'
import travel3 from '@/public/travel/travel3.png'
import { Button } from '@/components/ui/button'
const Travel: React.FC = () => {
	return (
		<div className='h-max bg-gray-100 p-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='flex items-center justify-between mb-8'>
					<div>
						<h1 className='text-3xl font-bold'>Fall into travel</h1>
						<p className='text-gray-600'>
							Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got <br /> the travel tools to get you to your destination.
						</p>
					</div>
					<button className='bg-transparent border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-200'>See All</button>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					<div className='bg-white rounded-lg shadow-md overflow-hidden'>
						<Image src={travel} alt='Melbourne' className='w-full h-48 object-cover' />
						<div className='flex  justify-between '>
							<div className='p-4'>
								<h2 className='text-xl font-bold'>Melbourne</h2>
								<p className='text-gray-600'>An amazing journey</p>
							</div>
							<div className=' p-4'>
								<span className='text-lg font-bold'>$700</span>
							</div>
						</div>
						<div className='p-4'>
							<Button className='bg-green-500 w-full p-4 px-4 py-2  text-white rounded-lg hover:bg-green-600'>Book Flight</Button>
						</div>
					</div>
					<div className='bg-white rounded-lg shadow-md overflow-hidden'>
						<Image src={travel1} alt='Paris' className='w-full h-48 object-cover' />
						<div className='flex  justify-between'>
							<div className='p-4'>
								<h2 className='text-xl font-bold'>Paris</h2>
								<p className='text-gray-600'>A Paris Adventure</p>
							</div>
							<div className='p-4'>
								<span className='text-lg font-bold'>$600</span>
							</div>
						</div>
						<div className='p-4'>
							<Button className='bg-green-500 text-white w-full p-4 px-4 py-2 rounded-lg hover:bg-green-600'>Book Flight</Button>
						</div>
					</div>
					<div className='bg-white rounded-lg shadow-md overflow-hidden'>
						<Image src={travel2} alt='London' className='w-full h-48 object-cover' />
						<div className='flex  justify-between'>
							<div className='p-4'>
								<h2 className='text-xl font-bold'>London</h2>
								<p className='text-gray-600'>London eye adventure</p>
							</div>
							<div className='p-4'>
								<span className='text-lg font-bold'>$350</span>
							</div>
						</div>
						<div className='p-4'>
							<Button className='bg-green-500 w-full p-4 text-white px-4 py-2 rounded-lg hover:bg-green-600'>Book Flight</Button>
						</div>
					</div>
					<div className='bg-white rounded-lg shadow-md overflow-hidden'>
						<Image src={travel3} alt='Columbia' className='w-full h-48 object-cover' />
						<div className='flex  justify-between'>
							<div className='p-4'>
								<h2 className='text-xl font-bold'>Columbia</h2>
								<p className='text-gray-600'>Amazing streets</p>
							</div>
							<div className='p-4'>
								<span className='text-lg font-bold'>$700</span>
							</div>
						</div>
						<div className='p-4'>
							<Button className='bg-green-500 w-full p-4 text-white px-4 py-2 rounded-lg hover:bg-green-600'>Book Flight</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Travel
