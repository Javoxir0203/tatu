'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import filght from '@/public/filght.jpeg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { FaBed, FaPlane } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

function Show_section() {
	const { push } = useRouter()
	const formSchema = z.object({
		username: z.string().min(2, { message: 'Username must be at least 2 characters.' }),
		country: z.string().min(2, { message: 'Username must be at least 2 characters.' }),
		date: z.date({ required_error: 'A date of birth is required.' }),
		person: z.string().min(2, { message: 'Username must be at least 2 characters.' }),
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { username: '', country: '' },
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)
		push('/show')
	}
	return (
		<div className='relative p-8 '>
			<div className='bg-white w-full  relative p-8 border rounded-2xl '>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
						<div className='grid grid-cols-1 gap-4 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
							<FormField
								control={form.control}
								name='username'
								render={({ field }) => (
									<FormItem>
										<FormLabel>From - To</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder='Select a Country' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value='russia'>Russia - Dubai</SelectItem>
												<SelectItem value='uzbekistan'>Russia - Uzbekistan</SelectItem>
											</SelectContent>
										</Select>

										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='country'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Trip</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder='Select a Trip' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value='return'>Return</SelectItem>
												<SelectItem value='one-way'>One Way</SelectItem>
											</SelectContent>
										</Select>

										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='date'
								render={({ field }) => (
									<FormItem className='flex flex-col'>
										<FormLabel>Date of birth</FormLabel>
										<Popover>
											<PopoverTrigger asChild>
												<FormControl>
													<Button variant={'outline'} className={cn('w-[240px] pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}>
														{field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
														<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
													</Button>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent className='w-auto p-0' align='start'>
												<Calendar mode='single' selected={field.value} onSelect={field.onChange} disabled={date => date > new Date() || date < new Date('1900-01-01')} initialFocus />
											</PopoverContent>
										</Popover>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='person'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Passenger - Class</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder='Select a Person' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value='one'>1 </SelectItem>
												<SelectItem value='two'>2</SelectItem>
												<SelectItem value='three'>3</SelectItem>
												<SelectItem value='four'>4</SelectItem>
											</SelectContent>
										</Select>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</form>
				</Form>
			</div>
		</div>
	)
}

export default Show_section
