import Image from 'next/image'
import Link from 'next/link'
import footer_logo from '@/public/footer_logo.svg'
import icon from '@/public/icon.svg'
import icon1 from '@/public/icon1.svg'
import icon2 from '@/public/icon2.svg'
import icon3 from '@/public/icon3.svg'
function SectionFooter() {
	return (
		<footer className='bg-[#8DD3BB] text-gray-300 p-6 md:py-12 w-full'>
			<div className='container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8'>
				<div className='space-y-2'>
					<Image src={footer_logo} alt='Logo' width={96} height={96} />
					<div className='flex items-center gap-4'>
						<Link href='#' className='text-gray-400 hover:text-white' prefetch={false}>
							<Image src={icon} alt='icon' width={24} height={24} />
						</Link>
						<Link href='#' className='text-gray-400 hover:text-white' prefetch={false}>
							<Image src={icon1} alt='icon' width={24} height={24} />
						</Link>
						<Link href='#' className='text-gray-400 hover:text-white' prefetch={false}>
							<Image src={icon2} alt='icon' width={24} height={24} />
						</Link>
						<Link href='#' className='text-gray-400 hover:text-white' prefetch={false}>
							<Image src={icon3} alt='icon' width={24} height={24} />
						</Link>
					</div>
				</div>

				<div className='space-y-2'>
					<h3 className='text-lg  text-black font-bold'>Our Destinations</h3>
					<ul className='space-y-1'>
						<li>
							<Link href='#' className='hover:underline text-black font-medium' prefetch={false}>
								Canada
							</Link>
						</li>
						<li>
							<Link href='#' className='hover:underline text-black font-medium' prefetch={false}>
								Alaksa
							</Link>
						</li>
						<li>
							<Link href='#' className='hover:underline text-black font-medium' prefetch={false}>
								France
							</Link>
						</li>
						<li>
							<Link href='#' className='hover:underline text-black  font-medium' prefetch={false}>
								Iceland
							</Link>
						</li>
					</ul>
				</div>
				<div className='space-y-2'>
					<h3 className='text-lg font-bold text-black'>Our Activities</h3>
					<ul className='space-y-1'>
						<li>
							<Link href='#' className='hover:underline text-black  font-medium' prefetch={false}>
								Northern Lights
							</Link>
						</li>
						<li>
							<Link href='#' className='hover:underline text-black  font-medium' prefetch={false}>
								Cruising & sailing
							</Link>
						</li>
						<li>
							<Link href='#' className='hover:underline text-black  font-medium' prefetch={false}>
								Multi-activities
							</Link>
						</li>
						<li>
							<Link href='#' className='hover:underline text-black  font-medium' prefetch={false}>
								Kayaing
							</Link>
						</li>
					</ul>
				</div>

				<div className='space-y-2'>
					<h3 className='text-lg font-bold text-black'>Travel Blogs</h3>
					<ul className='space-y-1'>
						<li>
							<Link href='#' className='hover:underline text-black  font-medium' prefetch={false}>
								Bali Travel Guide
							</Link>
						</li>
						<li>
							<Link href='#' className='hover:underline text-black  font-medium' prefetch={false}>
								Sri Lanks Travel Guide
							</Link>
						</li>
						<li>
							<Link href='#' className='hover:underline text-black  font-medium' prefetch={false}>
								Peru Travel Guide
							</Link>
						</li>
						<li>
							<Link href='#' className='hover:underline text-black  font-medium' prefetch={false}>
								Bali Travel Guide
							</Link>
						</li>
					</ul>
				</div>

				<div className='space-y-2'>
					<h3 className='text-lg font-bold text-black'>About Us</h3>
					<ul className='space-y-1'>
						<li>
							<Link href='#' className='hover:underline text-black  font-medium' prefetch={false}>
								Our Story
							</Link>
						</li>
						<li>
							<Link href='#' className='hover:underline text-black font-medium' prefetch={false}>
								Work with us
							</Link>
						</li>
					</ul>
				</div>

				<div className='space-y-2'>
					<h3 className='text-lg text-black font-bold'>Contact Us</h3>
					<ul className='space-y-1'>
						<li>
							<Link href='#' className='hover:underline text-black font-medium' prefetch={false}>
								Our Story
							</Link>
						</li>
						<li>
							<Link href='#' className='hover:underline text-black  font-medium' prefetch={false}>
								Work with us
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default SectionFooter
