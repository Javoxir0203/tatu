"use client"
const LocationMap: React.FC = () => {
	return (
		<div className='flex flex-col items-center justify-center  w-full '>
			<div className='bg-white  rounded-lg p-6 w-full '>
				<div className="flex justify-between mb-6">
					<h2 className='text-xl font-semibold mb-4'>Location/Map</h2>
					<div className='flex justify-between items-center'>
						<button onClick={() => window.open('https://www.google.com/maps/place/Dolmabah%C3%A7e+Palace/@41.0366682,28.9732323,15z', '_blank')} className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>
							View on Google Maps
						</button>
					</div>
				</div>
				<div className='mb-6 border rounded-md'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12093.433807752654!2d28.973232318537278!3d41.036668196289065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9b08951c551%3A0x540a0e8fabe29b0!2sDolmabah%C3%A7e%20Palace!5e0!3m2!1sen!2str!4v1660498722569!5m2!1sen!2str'
						className='w-full h-96 rounded'
						loading='lazy'
						allowFullScreen
					></iframe>
				</div>

				<div className='mt-4 text-gray-600'>
					<p>Gümüşsuyu Mah. İnönü Cad. No:1, Istanbul 34437</p>
				</div>
			</div>
		</div>
	)
}

export default LocationMap
