'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const Navbar: React.FC = () => {
	const { push } = useRouter()
	const user: any = localStorage.getItem('user') || ''

	const logout = () => {
		localStorage.removeItem('user')
		push('/login')
	}

	return (
		<nav className='bg-white shadow-md'>
			<div className='container mx-auto px-4 py-3 flex justify-between items-center'>
				<div className='flex space-x-6 items-center'>
					<Link href='flight' className='flex items-center text-black'>
						Find Flight
					</Link>
					<Link href='stays' className='flex items-center text-black'>
						Find Stays
					</Link>
				</div>

				<div className='flex justify-center items-center flex-1'>
					<Link href='#' className='text-2xl font-bold text-black'>
						g<span className='text-green-600'>l</span>obe
					</Link>
				</div>

				<div className='flex space-x-4 items-center'>
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
			</div>
		</nav>
	)
}

export default Navbar
