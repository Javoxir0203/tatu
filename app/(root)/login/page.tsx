// pages/login.tsx
import Image from 'next/image'
import login from '@/public/login.png'
const Login: React.FC = () => {
	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100'>
			<div className='flex bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full'>
				<div className='w-1/2 p-8'>
					<h1 className='text-2xl font-bold mb-8'>Login</h1>
					<form>
						<div className='mb-4'>
							<label htmlFor='email' className='block text-sm font-semibold mb-2'>
								Email
							</label>
							<input type='email' id='email' className='w-full px-3 py-2 border border-gray-300 rounded-lg' />
						</div>
						<div className='mb-4'>
							<label htmlFor='password' className='block text-sm font-semibold mb-2'>
								Password
							</label>
							<input type='password' id='password' className='w-full px-3 py-2 border border-gray-300 rounded-lg' />
						</div>
						<div className='flex items-center justify-between mb-4'>
							<label className='inline-flex items-center'>
								<input type='checkbox' className='form-checkbox' />
								<span className='ml-2 text-sm'>Remember me</span>
							</label>
							<a href='#' className='text-sm text-blue-500 hover:underline'>
								Forgot Password?
							</a>
						</div>
						<button type='submit' className='w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200'>
							Login
						</button>
					</form>
					<div className='text-center mt-4'>
						<span>Don`t have an account? </span>
						<a href='#' className='text-blue-500 hover:underline'>
							Sign up
						</a>
					</div>
					<div className='mt-4 text-center'>
						<p>Or login with</p>
						<div className='flex justify-center mt-2'>
							<button className='bg-blue-500 text-white py-2 px-4 rounded-full mx-1'>Facebook</button>
							<button className='bg-red-500 text-white py-2 px-4 rounded-full mx-1'>Google</button>
							<button className='bg-black text-white py-2 px-4 rounded-full mx-1'>Apple</button>
						</div>
					</div>
				</div>
				<div className='w-1/2 hidden md:block'>
					<Image src={login} alt='Login' className='w-full h-full object-cover' />
				</div>
			</div>
		</div>
	)
}

export default Login
