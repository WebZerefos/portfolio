import React from 'react'
import Image from 'next/image'

const skills = [
	{ skill: 'HTML' },
	{ skill: 'JavaScript' },
	{ skill: 'TypeScript' },
	{ skill: 'React' },
	{ skill: 'Next.js' },
	{ skill: 'React Native' },
	{ skill: 'Tailwind CSS' },
	{ skill: 'Git' },
	{ skill: 'GitHub' },
]

const AboutSection = () => {
	return (
		<section id='about'>
			<div className='my-12 pb-12 md:pt-16 md:pb-48'>
				<h1 className='text-center font-bold text-4xl text-slate-600 dark:text-white'>
					Sobre mim
					<hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
				</h1>

				<div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
					<div className='md:w-1/2 '>
						<h1 className='text-center text-2xl font-bold mb-6 md:text-left text-slate-600 dark:text-white'>Um pouco mais sobre mim!</h1>
						<p className='text-slate-600 dark:text-white'>
							Olá, meu nome Victor Manuel Zerefos <span className='font-bold'>{'Altamente ambicioso'}</span>,
							<span className='font-bold'>{' automotivado'}</span>, e<span className='font-bold'>{' focado'}</span> na área de desenvolvimento para
							desenvolver soluções que possam impactar na vida das pessoas e empresas.
						</p>
						<br />
						<p className='text-slate-600 dark:text-white'>
							Eu me formei na Faculdade Fortium Brasília, em 2014, com bacharelado em Sistemas de Informação e pós graduado em Engenharia de Software.
						</p>
						<br />
						<p className='text-slate-600 dark:text-white'>
							Eu tenho uma grande variedade de hobbies e paixões que me mantêm ocupado. Desde ler, praticar esportes, viajar, eu estou Sempre buscando
							novas experiências e para me manter envolvido e aprender coisas novas.
						</p>
						<br />
						<p className='text-slate-600 dark:text-white'>
							Eu acredito que você <span className='font-bold text-teal-500'>nunca deve parar de crescer</span> e é isso que me esforço a fazer, eu
							tenho Uma paixão por tecnologia e um desejo de sempre ir além dos limites do que é possível. Estou animado para ver aonde minha carreira
							me leva e estou sempre aberto a novas oportunidades. 🙂
						</p>
					</div>
					<div className='text-center md:w-1/2 md:text-left '>
						<h1 className='text-2xl font-bold mb-6 text-slate-600 dark:text-white'>Meus conhecimentos</h1>
						<div className='flex flex-wrap flex-row justify-center z-10 md:justify-start'>
							{skills.map((item, idx) => {
								return (
									<p
										key={idx}
										className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'
									>
										{item.skill}
									</p>
								)
							})}
						</div>
						<Image
							src='/hero1.png'
							alt=''
							width={280}
							height={280}
							className='hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 opacity-[0.8]'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
