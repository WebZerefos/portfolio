import React from 'react'
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineYoutube } from 'react-icons/ai'
import { motion } from 'framer-motion'

const Footer = () => {
	return (
		<footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl '>
			<hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0'></hr>
			<div className='mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
				<div className='flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100'>
					© 2023 Victor Manuel
					<a
						href='/'
						className='hover:underline'
					></a>
				</div>
				<div className='flex flex-row items-center justify-center space-x-2 mb-1'>
					<motion.a
						whileHover={{ scale: 1.5 }}
						whileTap={{ scale: 0.9 }}
						href='https://github.com/WebZerefos'
						rel='noreferrer'
						target='_blank'
					>
						<AiOutlineGithub
							className='cursor-pointer text-slate-600 dark:text-white'
							size={30}
						/>
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.5 }}
						whileTap={{ scale: 0.9 }}
						href='https://twitter.com/onlyzerefos'
						rel='noreferrer'
						target='_blank'
					>
						<AiOutlineTwitter
							className='cursor-pointer text-slate-600 dark:text-white'
							size={30}
						/>
					</motion.a>

					<motion.a
						whileHover={{ scale: 1.5 }}
						whileTap={{ scale: 0.9 }}
						href='https://www.linkedin.com/in/victor-zerefos-aaa35297/'
						rel='noreferrer'
						target='_blank'
					>
						<AiOutlineLinkedin
							className='cursor-pointer text-slate-600 dark:text-white'
							size={30}
						/>
					</motion.a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
