import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.png'
import Section from '../section/page'
import Main from '../main/page'
import ReviewCard from '../ReviewCard/page'
import Footer from '../footer/page'
import TravelSearch from './TravelSearch/page'
import Link from 'next/link'

function LandingPage() {
	return (
		<>
			<div className='relative p-8'>
				<div className='w-full h-[80vh] bg-banner'>
					<header className='flex h-max items-start p-10   justify-between'>
						<div className='flex items-start  gap-5'>
							<Link href={'/flight'} className='text-white '>
								Find Flight
							</Link>
							<Link href={'/stays'} className='text-white'>
								Find Stays
							</Link>
						</div>

						<div>
							<Image src={logo} alt='Logo' />
						</div>

						<div className='flex items-start gap-8'>
							<Link href={'/login'} className='bg-slate-100 w-20 h-8 text-center border rounded-md pt-1'>
								Login
							</Link>
							<Link href={'/sign_up'} className='bg-slate-100 w-20 h-8 text-center border rounded-md pt-1'>
								Sign up
							</Link>
						</div>
					</header>

					<div className='text-center mt-16 p-6'>
						<h3 className='font-bold text-3xl  text-white'>Helping Others</h3>
						<h1 className='font-bold text-6xl  text-white'>LIVE & TRAVEL</h1>
						<p className=' font-semibold text-lg text-white'>Special offers to suit your plan</p>
					</div>
				</div>
				<TravelSearch />
				<Section />
				<Main />
				<ReviewCard />
			</div>
			<Footer />
		</>
	)
}

export default LandingPage
