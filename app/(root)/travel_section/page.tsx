import Image from 'next/image'
import travel_section from '@/public/travel/travel_section.png'
import travel_section1 from '@/public/travel/travel_section1.png'
import travel_section2 from '@/public/travel/travel_section2.png'
import travel_section3 from '@/public/travel/travel_section3.png'
import { Button } from '@/components/ui/button'

const TravelSection: React.FC = () => {
	return (
		<div className='min-h-screen bg-gray-100 '>
			<div className='max-w-7xl mx-auto'>
				<div className='flex items-center justify-between mb-8'>
					<div>
						<h1 className='text-3xl font-bold'>Fall into travel</h1>
						<p className='text-gray-600'>Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</p>
					</div>
					<button className='bg-transparent border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-200'>See All</button>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
					<div className='bg-green-200 rounded-lg shadow-md overflow-hidden'>
						<div className='p-6'>
							<div className='flex justify-between'>
								<h2 className='text-3xl font-bold mb-2'>
									Backpacking <br />  Sri Lanka
								</h2>
								<div className='text-right'>
									<span className='inline-block bg-white text-black text-lg font-semibold py-1 px-3 rounded-lg'>From <br /> $700</span>
								</div>
							</div>
							<p className='mt-4 text-gray-800'>
								Traveling is a unique experience as it`s the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines,
								traditions, and ways of living.
							</p>
							<Button className='mt-10 w-full h-10 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200'>Book Flight</Button>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-4'>
						<Image src={travel_section} alt='Sri Lanka 1' className='w-full h-48 object-cover rounded-lg' />
						<Image src={travel_section1} alt='Sri Lanka 2' className='w-full h-48 object-cover rounded-lg' />
						<Image src={travel_section2} alt='Sri Lanka 3' className='w-full h-48 object-cover rounded-lg' />
						<Image src={travel_section3} alt='Sri Lanka 4' className='w-full h-48 object-cover rounded-lg' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default TravelSection
