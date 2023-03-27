'use client' // this is a client component
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from 'react-icons/hi'
import { motion } from 'framer-motion'

const HeroSection = () => {
	return (
		<section id='home'>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 1.2,
				}}
				className='flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left'
			>
				<div className='md:mt-2 md:w-1/2 '>
					<Image
						src='/victor2.jpg'
						alt=''
						width={325}
						height={325}
						className='rounded-full shadow-2xl'
					/>
				</div>
				<div className='md:mt-2 md:w-3/5'>
					<h1 className='text-4xl font-bold mt-6 md:mt-0 md:text-7xl text-slate-600 dark:text-white'>Olá, sou Victor!</h1>
					<p className='text-lg mt-4 mb-6 md:text-2xl text-slate-600 dark:text-white'>
						Sou <span className='font-semibold text-teal-600'>Desenvolvedor Mobile & Web </span>
						trabalhando e aprendendo para criar software que torne a vida mais fácil e significativa.
					</p>
					<Link
						to='projects'
						className='text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700'
						activeClass='active'
						spy={true}
						smooth={true}
						offset={-100}
						duration={500}
					>
						Projetos
					</Link>
				</div>
			</motion.div>
			<div className='flex flex-row items-center text-center justify-center '>
				<Link
					to='about'
					activeClass='active'
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
				>
					<HiArrowDown
						size={35}
						className='animate-bounce'
					/>
				</Link>
			</div>
		</section>
	)
}

export default HeroSection
