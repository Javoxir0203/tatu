import beach from '@/public/beach.svg'
import airport from '@/public/airport.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'
function Main() {
	return (
		<main className='flex items-center  gap-8 justify-center p-8'>
			<div className='flex relative flex-col items-center '>
				<Image src={airport} alt='airport' />
				<h2 className='text-xl absolute top-[400px]  font-bold text-white '>Flights</h2>
				<p className='absolute top-[430px] text-white'>Search Flights & Places Hire to our most popular destinations</p>
				<Button className='text-xl absolute top-[480px] bg-[#8DD3BB] text-center w-44 h-16 gap-2'>
					<Send className='w-10 h-10' /> Show Filghts
				</Button>
			</div>
			<div className='flex flex-col items-center relative '>
				<Image src={beach} alt='beach' />
				<h2 className='text-xl absolute top-[400px] text-white font-bold '>Hotels</h2>
				<p className='text-white absolute top-[430px]'>Search hotels & Places Hire to our most popular destinations</p>
				<Button className='text-xl bg-[#8DD3BB] top-[480px] absolute  w-44 h-16 gap-2'>
					<Send className='w-10 h-10' /> Show Hotels
				</Button>
			</div>
		</main>
	)
}

export default Main
