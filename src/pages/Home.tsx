import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import Layout from '@components/Layout'
import { FiBook, FiCode, FiGift } from 'react-icons/fi'
import { SiHandshake } from 'react-icons/si'

import imgHelp from '/images/DSC01901.jpeg'
import imgKayla from '/images/DSC01823.jpeg'
import imgScoreboard from '/images/DSC01768.jpeg'
import imgLB from '/images/DSC01822.jpeg'
import imgKainos from '/images/kainos_transparent.webp'
import imgLIT from '/images/LIT-logo.webp'
import imgQUB from '/images/qub_transparent.png'
import imgVerglas from '/images/wll.png'

function Home(): JSX.Element {
	useEffect(() => {
		// Navbar scroll effect
		const handleScroll = () => {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop
			const navbar = document.getElementById("navbar")
			const content = document.getElementById("content")
			
			if (content && scrollTop >= content.offsetTop) {
				navbar?.classList.add("bg-zinc-900", "bg-sat")
			} else {
				navbar?.classList.remove("bg-zinc-900", "bg-sat")
			}
		}

		// Countdown timer
		const updateCountdown = () => {
			const end = new Date('03/26/2024 10:0 AM').getTime()
			const now = new Date().getTime()
			const distance = end - now
			
			const _second = 1000
			const _minute = _second * 60
			const _hour = _minute * 60
			const _day = _hour * 24
			const _week = _day * 7
			const _month = _week * 4
			
			const months = Math.floor(distance / _month)
			const weeks = Math.floor((distance % _month) / _week)
			const days = Math.floor((distance % _week) / _day)
			const hours = Math.floor((distance % _day) / _hour)
			
			try {
				const monthsEl = document.getElementById('cd-months')
				const weeksEl = document.getElementById('cd-weeks')
				const daysEl = document.getElementById('cd-days')
				const hoursEl = document.getElementById('cd-hours')
				
				if (monthsEl) monthsEl.textContent = months + ''
				if (weeksEl) weeksEl.textContent = weeks + ''
				if (daysEl) daysEl.textContent = days + ''
				if (hoursEl) hoursEl.textContent = hours + ''
			} catch (e) {
				// Handle error silently
			}
		}

		window.addEventListener('scroll', handleScroll)
		const timer = setInterval(updateCountdown, 1000)
		
		// Initial call
		updateCountdown()

		return () => {
			window.removeEventListener('scroll', handleScroll)
			clearInterval(timer)
		}
	}, [])

	return (
		<Layout>
			<section className="w-screen min-h-screen bg-hero bg-cover flex flex-col justify-center items-center relative" style={{ backgroundBlendMode: "normal, saturation" }} id="hero">
				<div className="flex flex-col">
					<h1 className="font-mono w-fit text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-3">IglooCode</h1>
					
					<div className="flex flex-row justify-end items-center -mt-4 mb-3">
						<span className="font-mono text-white brightness-75 text-lg">by</span>
						<Link to="https://verglas.io">
							<img src={imgVerglas} className="w-28 mx-5 brightness-75 hover:brightness-95 ml-2 mr-0" alt="Verglas" />
						</Link>
					</div>
				</div>

				<Typewriter
					options={{
						strings: ["< build your skills together />"],
						autoStart: true,
						loop: true,
						wrapperClassName: "font-mono text-white text-3xl",
						cursorClassName: "font-mono text-white text-3xl",
						delay: 100,
					}}
				/>
				<a className="font-mono text-gray-300 text-xl mt-7 border-[1px] border-gray-400 p-2 cursor-default" href="/f/school-interest">2024 APPLICATIONS HAVE CLOSED</a>

				<div className="absolute bottom-0 mb-8 flex flex-col items-center">
					<p className="font-mono text-white mb-3">In partnership with</p>
					<div className="flex flex-row justify-center items-center">
						<Link to="https://www.liberty-it.co.uk/about-us/overview">
							<img src={imgLIT} className="w-32" alt="Liberty IT" />
						</Link>
						<Link to="https://www.kainos.com">
							<img src={imgKainos} className="w-32 mx-5" alt="Kainos" />
						</Link>
						<Link to="https://www.qub.ac.uk">
							<img src={imgQUB} className="w-32" alt="Queen's University Belfast" />
						</Link>
					</div>
				</div>
			</section>
			
			<div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
				<section className="py-20 w-9/12 max-w-screen-lg justify-start">
					<div id="about">
						<div className="grid sm:grid-cols-3">
							<div className="col-span-2 sm:pr-16">
								<h2 className="font-mono text-white text-4xl font-medium mb-6">
									captivating the next <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">generation</span>.
								</h2>
								<p className="font-mono text-white text-md font-semibold pt-3">
									Build your skills together. Contribute to <em>your</em> future.
								</p>
								<p className="font-mono text-white text-md font-thin pt-3">
									IglooCode is a capture-the-flag programming and cryptography competition for KS3 pupils from Northern Ireland, aimed at those looking to study IT or Digital
									Technology at GCSE, or who have an interest in computers or programming.
								</p>
								<p className="font-mono text-white text-md font-thin pt-3">
									This unique event, organised by a group of sixth-form and first-year university students from Belfast, Ballymena and Newry in partnership with some of NI's biggest tech companies, is an amazing
									opportunity to test your computing skills in a competitive environment while hearing about careers in IT from some of the biggest names in the industry.
								</p>
								<p className="font-mono text-white text-md font-thin pt-3">We look forward to seeing you for our second year in 2024!</p>
							</div>
							<div className="sm:block hidden">
								<img src={imgLB} className="w-full h-[28rem] shadow-md object-cover sm:block hidden" alt="Competition environment" />
							</div>
						</div>
					</div>
					
					<div className="mt-12 text-white text-xl px-36 font-medium">
						<span className="font-mono">
							"A very well organised event and such a credit to the pupils that organised. A great system to add some competitive edge during the competition sessions. Well done to all."
						</span>
					</div>
					
					<div id="skills" className="mt-12">
						<div className="flex flex-col sm:flex-row mb-10">
							<div className="flex justify-center items-center">
								<p className="font-mono text-white text-sm font-thin sm:pr-20 hidden sm:block">
									What will I get from this? What will I learn? We've designed IglooCode to push your limits in coding and encourage you to research new things.
								</p>
							</div>
							<div className="flex-none">
								<h2 className="font-mono text-white text-4xl font-medium text-left sm:text-right">
									real life <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">skills</span> from
									<br />
									real life <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">companies</span>.
								</h2>
							</div>
						</div>
						
						<div className="grid sm:grid-cols-2 gap-x-4 gap-y-10">
							<div className="flex flex-row items-center justify-center">
								<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
									<FiCode className="text-yellow-400 w-7 h-7" />
								</div>
								<div>
									<p className="font-mono text-white text-lg">Coding experience</p>
									<p className="font-mono text-gray-400 text-sm">Test yourself and enhance your programming skills, while learning in the process.</p>
								</div>
							</div>
							
							<div className="flex flex-row items-center justify-center">
								<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
									<SiHandshake className="text-red-600 w-7 h-7" />
								</div>
								<div>
									<p className="font-mono text-white text-lg">Teamwork skills</p>
									<p className="font-mono text-gray-400 text-sm">
										Develop your skills working in a team with your friends but also strangers from other backgrounds.
									</p>
								</div>
							</div>
							
							<div className="flex flex-row items-center justify-center">
								<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
									<FiBook className="text-lime-400 w-7 h-7" />
								</div>
								<div>
									<p className="font-mono text-white text-lg">Industry talks</p>
									<p className="font-mono text-gray-400 text-sm">Listen to talks about careers and education by some of the biggest tech companies in NI.</p>
								</div>
							</div>
							
							<div className="flex flex-row items-center justify-center">
								<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
									<FiGift className="text-sky-500 w-7 h-7" />
								</div>
								<div>
									<p className="font-mono text-white text-lg">Amazing prizes</p>
									<p className="font-mono text-gray-400 text-sm">
										Be the winning team and take home unique prizes to display at your school for generations to come.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			
			<section className="bg-hero bg-cover bg-sat flex items-center flex-col">
				<div className="py-16 w-9/12 max-w-screen-lg flex items-center justify-center flex-col">
					<p className="font-mono text-white text-4xl font-medium text-center sm:text-left">
						inspiring our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">future</span>.
					</p>
					<Link to="/about" className="font-mono text-white hover:underline text-xl mt-4 border-[1px] border-gray-400 p-2 w-11/12 sm:w-1/3 text-center">
						READ OUR STORY
					</Link>
				</div>
			</section>
			
			<div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
				<section className="py-20 w-9/12 max-w-screen-lg justify-start">
					<div id="sponsors">
						<div className="grid sm:grid-cols-2 gap-16">
							<div className="flex flex-col justify-center sm:block hidden">
								<img src={imgScoreboard} className="w-full h-80 shadow-md object-cover sm:block hidden" alt="Scoreboard" />
							</div>
							<div className="flex flex-col justify-center">
								<h2 className="font-mono text-white text-4xl font-medium mb-6 sm:text-right">
									supported by the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">biggest</span>.
								</h2>
								<p className="font-mono text-white text-md font-thin pt-3 sm:text-right">
									IglooCode has been made possible thanks to the generosity of some of the biggest IT companies in Northern Ireland. We're very lucky to have the support of Liberty
									IT and Kainos, who will be present at IglooCode to give an insight into work and opportunities for students in the industry.
								</p>
							</div>
						</div>
					</div>
					
					<div id="getinvolved" className="pt-12">
						<div className="grid sm:grid-cols-2 gap-16">
							<div className="flex flex-col justify-center">
								<h2 className="font-mono text-white text-4xl font-medium mb-6">
									getting yourself <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">involved</span>.
								</h2>
								<p className="font-mono text-white text-md font-thin pt-3">
									IglooCode is an event full of opportunities and experiences for everyone. Are you a teacher that thinks your students would enjoy the competitive environment? Or
									are you a sixth former who'd like to get some volunteering experience at a fast-paced event? Whichever you are, we have something for you.
								</p>
								<Link to="/getinvolved" className="font-mono hover:underline text-blue-400 text-md font-thin mt-3 block after:content-['_↗']">
									Ready to take part?
								</Link>
							</div>
							<div className="flex flex-col justify-center sm:block hidden">
								<img src={imgKayla} className="w-full h-80 shadow-md object-cover sm:block hidden" alt="Students participating" />
							</div>
						</div>
					</div>
					
					<div id="initforeveryone" className="pt-12">
						<div className="grid sm:grid-cols-2 gap-16">
							<div className="flex flex-col justify-center sm:block hidden">
								<img src={imgHelp} className="w-full h-80 shadow-md object-cover sm:block hidden" alt="Students getting help" />
							</div>
							<div className="flex flex-col justify-center">
								<h2 className="font-mono text-white text-4xl font-medium mb-6 sm:text-right">
									we're in it for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">everyone</span>.
								</h2>
								<p className="font-mono text-white text-md font-thin pt-3 sm:text-right">
									100 kids is a lot - a lot of personalities, a lot of interests, and a lot of skills. We're offering hundreds of tasks across over 10 categories to make sure there's
									something for everyone, no matter how much natural ability or programming experience you have.
								</p>
								<Link to="/competition" className="font-mono hover:underline text-blue-400 text-md font-thin mt-3 block after:content-['_↗'] sm:text-right">
									How does IglooCode work?
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
			
			<section className="bg-hero bg-cover bg-sat flex items-center flex-col">
				<div className="py-16 w-9/12 max-w-screen-lg flex items-center justify-center flex-col">
					<p className="font-mono text-white text-4xl font-medium text-center sm:text-left">
						the countdown is <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">on</span>.
					</p>
					<div className="flex flex-row mt-4">
						<div className="flex flex-col justify-center items-center mx-4">
							<p className="font-mono text-white text-3xl" id="cd-months"></p>
							<p className="font-mono text-white text-lg">months</p>
						</div>
						<div className="flex flex-col justify-center items-center mx-4">
							<p className="font-mono text-white text-3xl" id="cd-weeks"></p>
							<p className="font-mono text-white text-lg">weeks</p>
						</div>
						<div className="flex flex-col justify-center items-center mx-4">
							<p className="font-mono text-white text-3xl" id="cd-days"></p>
							<p className="font-mono text-white text-lg">days</p>
						</div>
						<div className="flex flex-col justify-center items-center mx-4">
							<p className="font-mono text-white text-3xl" id="cd-hours"></p>
							<p className="font-mono text-white text-lg">hours</p>
						</div>
					</div>
				</div>
			</section>
			
			<div className="flex w-screen items-center bg-zinc-900 flex-col" id="contact">
				<section className="py-20 w-9/12 max-w-screen-lg justify-start">
					<div id="sponsors">
						<div className="grid sm:grid-cols-2 gap-16">
							<div className="flex flex-col justify-center">
								<iframe
									width="100%"
									height="100%"
									src="https://api.mapbox.com/styles/v1/igloocode/clbc5xptx000614ozjjfo8pbo.html?title=false&access_token=pk.eyJ1IjoiaWdsb29jb2RlIiwiYSI6ImNsYmM1eDYyNDBjeGIzdnBlbG02dXh5ZnEifQ.7nYfmE8arqyIS2NT8rCnlw&zoomwheel=false#16.52/54.581748/-5.937585"
									title="Streets"
									className="border-0">
								</iframe>
							</div>
							<div className="flex flex-col justify-center">
								<h2 className="font-mono text-white text-4xl font-medium mb-3">
									we're ready to invest in our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">future</span>.
								</h2>
								<h2 className="font-mono text-white text-4xl font-medium mb-6">
									are you ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">win</span>?
								</h2>
								<p className="font-mono text-white text-md font-thin pt-3">
									<span className="font-medium">IglooCode 2024</span> will take part on <br />
									26th March 2023 <br />
									10:30am - 3:30pm
								</p>
								<p className="font-mono text-white text-md font-thin pt-3">
									<span className="font-medium">QUB Computer Science Building</span> <br />
									18 Malone Road <br />
									Belfast <br />
									BT9 5AF
								</p>
								<p className="font-mono text-white text-md font-thin pt-3 mt-10">
									<span className="font-medium">Enquiries</span> <br />
									dana@verglas.io
									<br />
									dadams479@c2ken.net
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}

export default Home
