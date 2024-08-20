'use client'
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useRouter } from 'next/navigation'

function LandingPage() {
	const { push } = useRouter()
	const user: any = localStorage.getItem('user') || ''

	const logout = () => {
		localStorage.removeItem('user')
		push('/login')
	}
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
							{user ? (
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Avatar>
											<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuLabel>My Account</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											<Link href={'/accountPage'}>Profile</Link>
										</DropdownMenuItem>
										<DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							) : (
								<>
									<Link href='/login' className='text-black'>
										Login
									</Link>
									<Link href='/accountPage' className='px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700'>
										Sign up
									</Link>
								</>
							)}
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
