import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.png'
import Section from '../section/page'
import Main from '../main/page'
import Footer from '../footer/page'
import ReviewCard from '../ReviewCard/page'

function LandingPage() {
	return (
		<>
			<div className='w-full h-[80vh] bg-banner '>
				<header className='flex h-max items-start p-10   justify-between'>
					<div className='flex items-start  gap-5'>
						<h3 className='text-white '>Find Flight</h3>
						<h3 className='text-white'>Find Stays</h3>
					</div>

					<div>
						<Image src={logo} alt='Logo' />
					</div>

					<div className='flex items-start gap-8'>
						<Button className='bg-slate-900'>Login</Button>
						<Button className='bg-slate-900'>Sign up</Button>
					</div>
				</header>

				<div className='text-center mt-16 p-6'>
					<h3 className='font-bold text-3xl  text-white'>Helping Others</h3>
					<h1 className='font-bold text-6xl  text-white'>LIVE & TRAVEL</h1>
					<p className=' font-semibold text-lg text-white'>Special offers to suit your plan</p>
				</div>
			</div>
			<Section />
			<Main />
			<ReviewCard/>
			<Footer />
		</>
	)
}

export default LandingPage
