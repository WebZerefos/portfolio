'use client' // this is a client component
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll/modules'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { motion } from 'framer-motion'

interface NavItem {
	label: string
	page: string
}

const NAV_ITEMS: Array<NavItem> = [
	{
		label: 'Home',
		page: 'home',
	},
	{
		label: 'Sobre',
		page: 'about',
	},
	{
		label: 'Projetos',
		page: 'projects',
	},
]

export default function Navbar() {
	const { systemTheme, theme, setTheme } = useTheme()
	const currentTheme = theme === 'system' ? systemTheme : theme
	const pathname = usePathname()
	const [navbar, setNavbar] = useState(false)
	return (
		<header className='w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-slate-700 dark:border-b dark:border-slate-600'>
			<div className='justify-between md:items-center md:flex'>
				<div>
					<motion.div
						initial={{ x: -500, opacity: 0, scale: 0.5 }}
						animate={{ x: 0, opacity: 1, scale: 1 }}
						transition={{
							duration: 1.5,
						}}
						className='flex items-center justify-between py-3 md:py-5 md:block'
					>
						<Link to='home'>
							<div className='container flex items-center space-x-2'>
								<h2 className='text-3xl font-bold text-slate-600 dark:text-white tracking-widest'>Victor Manuel</h2>
							</div>
						</Link>
						<div className='md:hidden'>
							<button
								className='p-2 text-slate-500 rounded-md outline-none focus:border-gray-400 focus:border'
								onClick={() => setNavbar(!navbar)}
							>
								{navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
							</button>
						</div>
					</motion.div>
				</div>

				<div>
					<div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'}`}>
						<div className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
							<motion.div
								initial={{ x: 500, opacity: 0, scale: 0.5 }}
								animate={{ x: 0, opacity: 1, scale: 1 }}
								transition={{
									duration: 1.5,
								}}
								className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'
							>
								{NAV_ITEMS.map((item, idx) => {
									return (
										<Link
											key={idx}
											to={item.page}
											className={'block lg:inline-block text-neutral-900 tracking-widest hover:text-neutral-500 dark:text-neutral-100'}
											activeClass='active'
											spy={true}
											smooth={true}
											offset={-100}
											duration={500}
											onClick={() => setNavbar(!navbar)}
										>
											<motion.div
												whileHover={{ scale: 1.2 }}
												whileTap={{ scale: 0.9 }}
											>
												{item.label}
											</motion.div>
										</Link>
									)
								})}
							</motion.div>
							<motion.div
								initial={{ y: -500, opacity: 0, scale: 0.5 }}
								animate={{ y: 0, opacity: 1, scale: 1 }}
								transition={{
									duration: 2,
								}}
								className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'
							>
								{currentTheme === 'dark' ? (
									<motion.button
										whileHover={{ scale: 1.5 }}
										whileTap={{ scale: 0.9 }}
										onClick={() => setTheme('light')}
									>
										<RiSunLine
											size={25}
											color='white'
										/>
									</motion.button>
								) : (
									<motion.button
										whileHover={{ scale: 1.5 }}
										whileTap={{ scale: 0.9 }}
										onClick={() => setTheme('dark')}
									>
										<RiMoonFill size={25} />
									</motion.button>
								)}
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
