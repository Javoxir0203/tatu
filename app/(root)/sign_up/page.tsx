'use client'
import Image from 'next/image'
import signup from '@/public/sign_up.png'
import logo from '@/public/login_logo.png'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
const SignUp: React.FC = () => {
	const { push } = useRouter()
	const handleSubmit = (e: any) => {
		e.preventDefault()
		const { password, email } = e.target

		const user = {
			email: email.value,
			password: password.value,
		}

		localStorage.setItem('user', JSON.stringify(user))

		push('/')
	}
	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100'>
			<div className='flex bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full'>
				<div className='w-full md:w-1/2 p-8'>
					<div className='mb-8'>
						<Image src={logo} alt='Golobe Logo' className='h-8 w-auto mb-4' />
						<h1 className='text-2xl font-bold mb-2'>Sign up</h1>
						<p className='text-gray-600'>Let`s get you all set up so you can access your personal account.</p>
					</div>
					<form onSubmit={handleSubmit}>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div className='mb-4'>
								<label htmlFor='firstName' className='block text-sm font-semibold mb-2'>
									First Name
								</label>
								<input type='text' id='firstName' className='w-full px-3 py-2 border border-gray-300 rounded-lg' placeholder='john.doe@gmail.com' />
							</div>
							<div className='mb-4'>
								<label htmlFor='lastName' className='block text-sm font-semibold mb-2'>
									Last Name
								</label>
								<input type='text' id='lastName' className='w-full px-3 py-2 border border-gray-300 rounded-lg' placeholder='john.doe@gmail.com' />
							</div>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div className='mb-4'>
								<label htmlFor='email' className='block text-sm font-semibold mb-2'>
									Email
								</label>
								<input type='email' id='email' className='w-full px-3 py-2 border border-gray-300 rounded-lg' placeholder='john.doe@gmail.com' />
							</div>
							<div className='mb-4'>
								<label htmlFor='phoneNumber' className='block text-sm font-semibold mb-2'>
									Phone Number
								</label>
								<input type='text' id='phoneNumber' className='w-full px-3 py-2 border border-gray-300 rounded-lg' placeholder='john.doe@gmail.com' />
							</div>
						</div>
						<div className='mb-4'>
							<label htmlFor='password' className='block text-sm font-semibold mb-2'>
								Password
							</label>
							<input type='password' id='password' className='w-full px-3 py-2 border border-gray-300 rounded-lg' />
						</div>
						<div className='mb-4'>
							<label htmlFor='confirmPassword' className='block text-sm font-semibold mb-2'>
								Confirm Password
							</label>
							<input type='password' id='confirmPassword' className='w-full px-3 py-2 border border-gray-300 rounded-lg' />
						</div>
						<div className='flex items-center mb-4'>
							<input type='checkbox' id='terms' className='form-checkbox' />
							<label htmlFor='terms' className='ml-2 text-sm'>
								I agree to all the{' '}
								<a href='#' className='text-red-500 hover:underline'>
									Terms
								</a>{' '}
								and{' '}
								<a href='#' className='text-red-500 hover:underline'>
									Privacy Policies
								</a>
							</label>
						</div>

						<button type='submit' className='w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200'>
							Create account
						</button>
					</form>
					<div className='text-center mt-4'>
						<span>Already have an account? </span>
						<a href='#' className='text-red-500 hover:underline'>
							<Link href={'/login'}>Login</Link>
						</a>
					</div>
					<div className='mt-4 text-center'>
						<p>Or Sign up with</p>
						<div className='flex justify-center mt-2'>
							<button className='bg-blue-500 text-white py-2 px-4 rounded-full mx-1'>Facebook</button>
							<button className='bg-red-500 text-white py-2 px-4 rounded-full mx-1'>Google</button>
							<button className='bg-black text-white py-2 px-4 rounded-full mx-1'>Apple</button>
						</div>
					</div>
				</div>
				<div className='w-1/2 hidden md:block'>
					<Image src={signup} alt='Sign up' className='w-full h-full object-cover' />
				</div>
			</div>
		</div>
	)
}

export default SignUp
