import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import Layout from '@components/Layout'
import { FiBook, FiCode, FiGift } from 'react-icons/fi'
import { Users } from 'lucide-react'
import imgScoreboard from '/images/DSC01768.jpeg'
import imgLB from '/images/DSC01822.jpeg'
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
			const end = new Date('04/15/2026 10:0 AM').getTime()
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
			<style>
				{`
					@keyframes gradient {
						0% { background-position: 0% 50%; }
						50% { background-position: 100% 50%; }
						100% { background-position: 0% 50%; }
					}
				`}
			</style>
			<section 
				className="w-screen min-h-screen bg-cover flex flex-col justify-center items-center relative" 
				style={{
					backgroundImage:
						"linear-gradient(rgba(0,0,0,0.80), rgba(0.1,0,0,0.85)), linear-gradient(black, black), url('/images/backdrop.png'), url('/images/DSC01874.jpeg')",
					backgroundBlendMode: "normal, saturation",
				}}
				id="hero"
			>
				<div className="flex flex-col items-center mb-8">
					<h1 className="font-mono text-transparent text-8xl sm:text-9xl lg:text-[10rem] font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-4 hover:scale-105 transition-transform duration-700 ease-out cursor-default">
						IglooCode
					</h1>
					
					<div className="flex flex-col items-center space-y-4 -mt-6">
						<span className="font-mono text-white/80 text-lg tracking-wider">by</span>
						<Link 
							to="https://verglas.io"
							className="group relative transform hover:scale-110 transition-all duration-500 ease-out"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<img 
								src={imgVerglas} 
								className="relative w-32 brightness-75 group-hover:brightness-100 transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(147,197,253,0.5)]" 
								alt="Verglas" 
							/>
						</Link>
					</div>
				</div>

				<div className="mb-8">
					<Typewriter
						options={{
							strings: ["< build your skills together />"],
							autoStart: true,
							loop: true,
							wrapperClassName: "font-mono text-white text-3xl sm:text-4xl text-center",
							cursorClassName: "font-mono text-white text-3xl sm:text-4xl",
							delay: 100,
						}}
					/>
				</div>
				
				<div className="relative font-mono text-gray-300 text-xl mt-4 px-6 py-3 bg-black hover:bg-black transition-all duration-300 hover:scale-105 cursor-default">
					<div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-[length:300%_100%] animate-[gradient_3s_ease-in-out_infinite] p-[2px]">
						<div className="w-full h-full bg-black"></div>
					</div>
					<div className="relative z-10">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">2026 APPLICATIONS</span> COMING SOON
					</div>
				</div>

				<div className="absolute bottom-0 mb-8 flex flex-col items-center">
					<p className="font-mono text-white mb-3 text-sm sm:text-base">Hosted at</p>
					<div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
						<Link to="https://www.qub.ac.uk" className="transition-all duration-300 hover:scale-110">
							<img src={imgQUB} className="w-20 sm:w-28 brightness-75 hover:brightness-90" alt="Queen's University Belfast" />
						</Link>
					</div>
				</div>
			</section>
			
			<div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
				<section className="py-24 w-9/12 max-w-screen-lg justify-start">
					<div id="about" className="space-y-20">
						<div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
							<div className="lg:col-span-2 space-y-8">
								<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
									captivating the next <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">generation</span>.
								</h2>
								<div className="space-y-6">
									<p className="font-mono text-white text-lg font-semibold">
										Build your skills together. Contribute to <em>your</em> future.
									</p>
									<p className="font-mono text-white text-base font-light leading-relaxed">
										IglooCode is a programming competition for KS3 pupils from Northern Ireland, aimed at those looking to study IT or Digital
										Technology at GCSE, or who have an interest in computers or programming.
									</p>
									<p className="font-mono text-white text-base font-light leading-relaxed">
										This unique event, organised by a group of sixth-form and first-year university students from Belfast, Ballymena and Newry in partnership with some of NI's biggest tech companies, is an amazing
										opportunity to test your computing skills in a competitive environment while hearing about careers in IT from some of the biggest names in the industry.
									</p>
									<p className="font-mono text-white text-base font-light leading-relaxed">We look forward to seeing you for our fourth year in 2026!</p>
								</div>
							</div>
							<div className="flex justify-center lg:justify-end">
								<div className="group overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
									<img src={imgLB} className="w-full max-w-sm lg:max-w-none lg:w-full h-64 lg:h-80 xl:h-96 object-cover transition-transform duration-500 group-hover:scale-105" alt="Competition environment" />
								</div>
							</div>
						</div>
					</div>
					
					<div className="bg-zinc-800/50 backdrop-blur-sm p-12 border border-zinc-700/50 shadow-lg mt-24">
						<blockquote className="text-white text-lg sm:text-xl font-light leading-relaxed font-mono text-center italic">
							"A very well organised event and such a credit to the pupils that organised. A great system to add some competitive edge during the competition sessions. Well done to all."
						</blockquote>
					</div>
					
					<div id="skills" className="mt-24 space-y-16">
						<div className="text-center mb-20">
							<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight mb-8">
								real life <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">skills</span> from
								<br />
								real life <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">companies</span>.
							</h2>
							<p className="font-mono text-white text-base font-light leading-relaxed max-w-3xl mx-auto">
								What will I get from this? What will I learn? We've designed IglooCode to push your limits in coding and encourage you to research new things.
							</p>
						</div>
						
						<div className="grid lg:grid-cols-2 gap-12">
							<div className="group p-12 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-yellow-400/30 transition-all duration-300">
								<div className="flex flex-row items-center mb-8">
									<div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-400/30 w-20 h-20 flex items-center justify-center mr-8 flex-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-400/20">
										<FiCode className="text-yellow-400 w-8 h-8" />
									</div>
									<div>
										<h3 className="font-mono text-white text-xl font-medium mb-2">Coding experience</h3>
										<p className="font-mono text-gray-300 text-sm font-light leading-relaxed">Test yourself and enhance your programming skills, while learning in the process.</p>
									</div>
								</div>
							</div>
							
							<div className="group p-12 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-red-500/30 transition-all duration-300">
								<div className="flex flex-row items-center mb-8">
									<div className="bg-gradient-to-br from-red-500/20 to-red-700/20 backdrop-blur-sm border border-red-500/30 w-20 h-20 flex items-center justify-center mr-8 flex-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/20">
										<Users className="text-red-500 w-8 h-8" />
									</div>
									<div>
										<h3 className="font-mono text-white text-xl font-medium mb-2">Teamwork skills</h3>
										<p className="font-mono text-gray-300 text-sm font-light leading-relaxed">
											Develop your skills working in a team with your friends but also strangers from other backgrounds.
										</p>
									</div>
								</div>
							</div>
							
							<div className="group p-12 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-lime-500/30 transition-all duration-300">
								<div className="flex flex-row items-center mb-8">
									<div className="bg-gradient-to-br from-lime-500/20 to-lime-700/20 backdrop-blur-sm border border-lime-500/30 w-20 h-20 flex items-center justify-center mr-8 flex-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-lime-500/20">
										<FiBook className="text-lime-400 w-8 h-8" />
									</div>
									<div>
										<h3 className="font-mono text-white text-xl font-medium mb-2">Industry talks</h3>
										<p className="font-mono text-gray-300 text-sm font-light leading-relaxed">Listen to talks about careers and education by some of the biggest tech companies in NI.</p>
									</div>
								</div>
							</div>
							
							<div className="group p-12 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-sky-500/30 transition-all duration-300">
								<div className="flex flex-row items-center mb-8">
									<div className="bg-gradient-to-br from-sky-500/20 to-sky-700/20 backdrop-blur-sm border border-sky-500/30 w-20 h-20 flex items-center justify-center mr-8 flex-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-sky-500/20">
										<FiGift className="text-sky-500 w-8 h-8" />
									</div>
									<div>
										<h3 className="font-mono text-white text-xl font-medium mb-2">Amazing prizes</h3>
										<p className="font-mono text-gray-300 text-sm font-light leading-relaxed">
											Be the winning team and take home unique prizes to display at your school for generations to come.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			
			<section className="bg-zinc-900 flex items-center flex-col py-24">
				<div className="w-11/12 sm:w-9/12 max-w-screen-lg flex items-center justify-center flex-col text-center space-y-12">
					<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
						inspiring our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">future</span>.
					</h2>
					<div className="relative font-mono text-white text-lg px-10 py-4 bg-black transition-all duration-300 hover:scale-105 cursor-pointer">
						<div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-[length:300%_100%] animate-[gradient_3s_ease-in-out_infinite] p-[2px]">
							<div className="w-full h-full bg-black"></div>
						</div>
						<Link to="/about" className="relative z-10 inline-flex items-center">
							READ OUR STORY
							<span className="ml-2">→</span>
						</Link>
					</div>
				</div>
			</section>
			
			<div className="flex w-screen items-center bg-zinc-900 flex-col">
				<section className="py-20 sm:py-24 w-11/12 sm:w-9/12 max-w-screen-lg">
					<div className="text-center mb-20">
						<h2 className="text-white text-3xl sm:text-4xl font-medium mb-6 font-mono leading-tight">
							supported by the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">biggest</span>.
						</h2>
						<p className="text-white text-lg font-light font-mono leading-relaxed max-w-3xl mx-auto">
							IglooCode has been made possible thanks to the generosity of some of the biggest IT companies in Northern Ireland.
						</p>
					</div>
					
					<div className="grid lg:grid-cols-2 gap-16 items-stretch mb-24">
						<div className="flex justify-center items-stretch">
							<div className="group overflow-hidden shadow-lg transition-all duration-300 w-full">
								<img src={imgScoreboard} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Scoreboard" />
							</div>
						</div>
						<div className="space-y-12">
							<div className="group p-10 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300">
								<h3 className="text-white text-xl sm:text-2xl font-mono font-medium mb-6">
									getting yourself <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">involved</span>.
								</h3>
								<p className="text-white text-base font-light leading-relaxed font-mono mb-6">
									IglooCode is an event full of opportunities and experiences for everyone. Are you a teacher that thinks your students would enjoy the competitive environment? Or
									are you a sixth former who'd like to get some volunteering experience at a fast-paced event?
								</p>
								<div className="relative inline-block font-mono text-blue-400 text-sm font-light">
									<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:300%_100%] p-[1px]">
										<div className="w-full h-full bg-zinc-900"></div>
									</div>
									<Link to="/getinvolved" className="relative z-10 block px-4 py-2 bg-black hover:bg-zinc-900 transition-colors">
										Ready to take part? →
									</Link>
								</div>
							</div>
							
							<div className="group p-10 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-green-500/30 transition-all duration-300">
								<h3 className="text-white text-xl sm:text-2xl font-mono font-medium mb-6">
									we're in it for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">everyone</span>.
								</h3>
								<p className="text-white text-base font-light leading-relaxed font-mono mb-6">
									100 kids is a lot - a lot of personalities, a lot of interests, and a lot of skills. We're offering hundreds of tasks across over 10 categories to make sure there's
									something for everyone.
								</p>
								<div className="relative inline-block font-mono text-blue-400 text-sm font-light">
									<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:300%_100%] p-[1px]">
										<div className="w-full h-full bg-zinc-900"></div>
									</div>
									<Link to="/competition" className="relative z-10 block px-4 py-2 bg-black hover:bg-zinc-900 transition-colors">
										How does IglooCode work? →
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			
			<section 
				className="bg-cover flex items-center flex-col py-20"
				style={{
					backgroundImage:
						"linear-gradient(rgba(0,0,0,0.80), rgba(0.1,0,0,0.85)), linear-gradient(black, black), url('/images/backdrop.png'), url('/images/DSC01874.jpeg')",
					backgroundBlendMode: "normal, saturation",
				}}
			>
				<div className="w-11/12 sm:w-9/12 max-w-screen-lg flex items-center justify-center flex-col text-center space-y-8">
					<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
						the countdown is <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">on</span>.
					</h2>
					<div className="flex flex-wrap justify-center gap-8">
						<div className="flex flex-col justify-center items-center">
							<p className="font-mono text-white text-4xl font-bold" id="cd-months">0</p>
							<p className="font-mono text-gray-300 text-lg">months</p>
						</div>
						<div className="flex flex-col justify-center items-center">
							<p className="font-mono text-white text-4xl font-bold" id="cd-weeks">0</p>
							<p className="font-mono text-gray-300 text-lg">weeks</p>
						</div>
						<div className="flex flex-col justify-center items-center">
							<p className="font-mono text-white text-4xl font-bold" id="cd-days">0</p>
							<p className="font-mono text-gray-300 text-lg">days</p>
						</div>
						<div className="flex flex-col justify-center items-center">
							<p className="font-mono text-white text-4xl font-bold" id="cd-hours">0</p>
							<p className="font-mono text-gray-300 text-lg">hours</p>
						</div>
					</div>
				</div>
			</section>
			
			<div className="flex w-screen items-center bg-zinc-900 flex-col">
				<section className="py-16 sm:py-20 w-11/12 sm:w-9/12 max-w-screen-lg">
					<div className="text-center mb-16">
						<h2 className="text-white text-3xl sm:text-4xl font-medium mb-4 font-mono leading-tight">
							we're ready to invest in our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">future</span>.
						</h2>
						<h3 className="text-white text-2xl sm:text-3xl font-medium font-mono leading-tight">
							are you ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">win</span>?
						</h3>
					</div>
					
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="bg-zinc-800/50 backdrop-blur-sm overflow-hidden shadow-lg">
							<iframe
								width="100%"
								height="400"
								src="https://api.mapbox.com/styles/v1/igloocode/clbc5xptx000614ozjjfo8pbo.html?title=false&access_token=pk.eyJ1IjoiaWdsb29jb2RlIiwiYSI6ImNsYmM1eDYyNDBjeGIzdnBlbG02dXh5ZnEifQ.7nYfmE8arqyIS2NT8rCnlw&zoomwheel=false#16.52/54.581748/-5.937585"
								title="QUB Location Map"
								className="border-0">
							</iframe>
						</div>
						<div className="space-y-8">
							<div className="bg-zinc-800/50 backdrop-blur-sm p-10 border border-zinc-700/50">
								<h4 className="font-mono text-white text-xl font-medium mb-6">Event Details</h4>
								<div className="space-y-4 text-white font-mono">
									<p className="text-base font-light">
										<span className="font-medium text-purple-400">IglooCode 2026</span><br />
										15th April 2026<br />
										10:30am - 3:30pm
									</p>
									<p className="text-base font-light">
										<span className="font-medium text-cyan-400">QUB Computer Science Building</span><br />
										18 Malone Road<br />
										Belfast<br />
										BT9 5AF
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}

export default Home
