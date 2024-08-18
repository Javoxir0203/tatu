import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaPlane, FaBed, FaExchangeAlt } from 'react-icons/fa'
// import DatePicker from 'react-date-picker'
// import { useState } from 'react'


type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]
function TravelSearch() {
	//   const [value, onChange] = useState<Value>(new Date())
	return (
		<div className=' bg-white relative -mt-32 p-8 rounded-lg shadow-lg max-w-7xl mx-auto'>
			<div className='flex items-center gap-8 border-b-2 border-gray-300 pb-4 mb-4'>
				<button className='flex items-center space-x-2 text-green-900 font-semibold'>
					<FaPlane />
					<span>Flights</span>
				</button>
				<button className='flex items-center space-x-2 text-gray-600 font-semibold hover:text-green-900'>
					<FaBed />
					<span>Stays</span>
				</button>
			</div>
			<form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div className='flex space-x-4'>
					<div className='flex-1'>
						<label className='block text-gray-600'>From - To</label>
						<div className='flex items-center border rounded-lg p-2'>
							<input type='text' placeholder='Lahore - Karachi' className='flex-1 outline-none' />
							<FaExchangeAlt />
						</div>
					</div>
					<div className='flex-1'>
						<label className='block text-gray-600'>Trip</label>
						<select className='w-full border rounded-lg p-2'>
							<option>Return</option>
							<option>One way</option>
						</select>
					</div>
				</div>

				<div className='flex space-x-4'>
					<div className='flex-1'>
						<label className='block text-gray-600'>Depart - Return</label>
						<input type='text' placeholder='07 Nov 22 - 13 Nov 22' className='w-full border rounded-lg p-2' />
						{/* <DatePicker onChange={onChange} value={value} /> */}
					</div>
					<div className='flex-1'>
						<label className='block text-gray-600'>Passenger - Class</label>
						<input type='text' placeholder='1 Passenger, Economy' className='w-full border rounded-lg p-2' />
					</div>
				</div>

				<div className='flex w-full col-span-2 justify-end items-center gap-2'>
					<Button className='flex items-center space-x-2 text-green-900 font-semibold'>
						<span> + Add Promo Code </span>
					</Button>
					<Button className='bg-green-700 text-white rounded-lg px-6 py-2 flex items-center space-x-2'>
						<FaPlane />
						<Link href='/show'> Show Flights </Link>
					</Button>
				</div>
			</form>
		</div>
	)
}

export default TravelSearch
