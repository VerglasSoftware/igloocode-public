import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import Layout from '@components/Layout'
import { FiCode, FiLayout, FiPenTool, FiCpu, FiShare2, FiDatabase, FiPlusCircle } from 'react-icons/fi'
import { Users, Calendar, MapPin, Zap } from 'lucide-react'
import imgScoreboard from '/images/DSC01768.jpeg'
import imgLB from '/images/DSC01822.jpeg'
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
				<div className="flex flex-col items-center mb-8 px-4">
					<h1 className="font-mono text-transparent text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-4 hover:scale-105 transition-transform duration-700 ease-out cursor-default text-center">
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

				<div className="mb-8 px-4 w-full flex justify-center">
					<div className="max-w-4xl">
						<div className="flex items-center justify-center text-center">
							<Typewriter
								options={{
									strings: ["< solve challenges, score points, win prizes />"],
									autoStart: true,
									loop: true,
									wrapperClassName: "font-mono text-white text-xl sm:text-2xl lg:text-3xl",
									cursorClassName: "font-mono text-white text-xl sm:text-2xl lg:text-3xl",
									delay: 100,
								}}
							/>
						</div>
					</div>
				</div>

				<div className="mb-8 space-y-4 text-center">
					<div className="font-mono text-white text-xl font-medium flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2">
						<div className="flex items-center gap-2">
							<Calendar className="w-5 h-5 text-purple-400" />
							<span className="text-purple-400">15th April 2026</span>
						</div>
						<span className="mx-2 hidden sm:inline">•</span>
						<div className="flex items-center gap-2">
							<Users className="w-5 h-5 text-cyan-400" />
							<span className="text-cyan-400">Ages 11-14</span>
						</div>
					</div>
					<div className="font-mono text-white text-lg flex items-center justify-center gap-2">
						<MapPin className="w-5 h-5 text-white" />
						<span className="text-center">QUB Computer Science Building</span>
					</div>
				</div>				<a 
					href="#how-it-works"
					className="relative font-mono text-gray-300 text-lg sm:text-xl mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-black transition-all duration-300 hover:scale-105 cursor-pointer inline-block"
					onClick={(e) => {
						e.preventDefault();
						document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
					}}
				>
					<div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-[length:300%_100%] animate-[gradient_3s_ease-in-out_infinite] p-[2px]">
						<div className="w-full h-full bg-black"></div>
					</div>
					<div className="relative z-10">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">How It Works</span>
					</div>
				</a>
			</section>
			
			<section className="bg-zinc-900 flex items-center flex-col py-24" id="how-it-works">
				<div className="w-11/12 sm:w-9/12 max-w-screen-lg text-center space-y-16">
					<div className="space-y-6">
						<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
							A Coding Competition for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Everyone</span>
						</h2>
						<h3 className="font-mono text-white text-xl sm:text-2xl font-light">
							Jeopardy-Style Challenges • For All Skill Levels
						</h3>
					</div>

					<div className="grid md:grid-cols-2 gap-8 text-left">
						<div className="bg-gradient-to-br from-purple-500/10 to-cyan-400/10 backdrop-blur-sm p-8 border border-purple-500/20 space-y-4">
							<h4 className="font-mono text-white text-2xl font-semibold flex items-center gap-3">
								<Zap className="w-6 h-6 text-cyan-400" />
								How It Works
							</h4>
							<p className="font-mono text-white/80 text-lg font-light leading-relaxed">
								IglooCode is a Jeopardy-style competition. Teams log onto our platform and face a board of challenges across various categories. Pick a challenge, solve it, and score points!
							</p>
						</div>
						<div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm p-8 border border-yellow-500/20 space-y-4">
							<h4 className="font-mono text-white text-2xl font-semibold flex items-center gap-3">
								<Users className="w-6 h-6 text-yellow-400" />
								No Experience? No Problem.
							</h4>
							<p className="font-mono text-white/80 text-lg font-light leading-relaxed">
								You don't need to be a coding expert. If you've ever tried Scratch, tinkered with HTML, or written a line of Python, you have what it takes to compete and win.
							</p>
						</div>
					</div>
					
					<div className="space-y-8">
						<h4 className="font-mono text-white text-xl font-medium">Challenge Categories Include:</h4>
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
							{[
								{ name: "Python", color: "from-yellow-400 to-green-500", icon: <Zap className="w-3 h-3 sm:w-4 sm:h-4" /> },
								{ name: "C#", color: "from-purple-500 to-purple-700", icon: <FiCode className="w-3 h-3 sm:w-4 sm:h-4" /> },
								{ name: "HTML & CSS", color: "from-orange-500 to-red-600", icon: <FiLayout className="w-3 h-3 sm:w-4 sm:h-4" /> },
								{ name: "Scratch", color: "from-yellow-400 to-orange-500", icon: <FiPenTool className="w-3 h-3 sm:w-4 sm:h-4" /> },
								{ name: "Micro:bit", color: "from-green-400 to-green-600", icon: <FiCpu className="w-3 h-3 sm:w-4 sm:h-4" /> },
								{ name: "Logic Gates", color: "from-blue-400 to-blue-600", icon: <FiShare2 className="w-3 h-3 sm:w-4 sm:h-4" /> },
								{ name: "Binary Manipulation", color: "from-cyan-400 to-blue-500", icon: <FiDatabase className="w-3 h-3 sm:w-4 sm:h-4" /> },
								{ name: "& More!", color: "from-pink-400 to-purple-500", icon: <FiPlusCircle className="w-3 h-3 sm:w-4 sm:h-4" /> }
							].map((category, index) => (
								<div 
									key={index}
									className={`bg-gradient-to-r ${category.color} h-12 sm:h-14 text-white font-mono text-xs sm:text-sm font-medium text-center hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-1 sm:gap-2 shadow-lg hover:shadow-xl px-2`}
								>
									{category.icon}
									<span className="whitespace-nowrap leading-tight">{category.name}</span>
								</div>
							))}
						</div>
					</div>
					
					<div className="relative">
						<div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-cyan-400/20 to-purple-400/20 blur-lg"></div>
						<div className="relative bg-zinc-900/80 backdrop-blur-sm p-8 border border-zinc-700/50">
							<p className="font-mono text-white text-lg font-light leading-relaxed mb-4">
								🏆 More difficult tasks are worth more points. The team with the most points at the end of the day wins!
							</p>
							<p className="font-mono text-white text-lg font-light leading-relaxed">
								💡 Strategy tip: Teams win by specializing! One person tackles HTML/CSS, another focuses on Scratch, someone else handles logic puzzles. You don't need to know it all! <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 font-medium">This is the key to success!</span>
							</p>
						</div>
					</div>
				</div>
			</section>
			
			<section className="bg-zinc-900 flex items-center flex-col py-24">
				<div className="w-11/12 sm:w-9/12 max-w-screen-lg space-y-20">
					<div className="text-center">
						<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight mb-8">
							Past Highlights & Our Amazing <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Supporters</span>
						</h2>
					</div>
					
					<div className="grid lg:grid-cols-2 gap-8 mb-20">
						<div className="group overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 h-64 lg:h-80">
							<img src={imgScoreboard} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Competition Scoreboard" />
						</div>
						<div className="group overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 h-64 lg:h-80">
							<img src={imgLB} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Competition Environment" />
						</div>
					</div>
					
					<div className="relative">
						<div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-400/10 blur-xl"></div>
						<div className="relative bg-zinc-800/70 backdrop-blur-sm p-12 border border-zinc-700/50 shadow-2xl">
							<div className="text-center mb-6">
								<span className="text-4xl">💬</span>
							</div>
							<blockquote className="text-white text-lg sm:text-xl font-light leading-relaxed font-mono text-center italic">
								"A very well organised event and such a credit to the pupils that organised. A great system to add some competitive edge during the competition sessions. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 font-medium not-italic">Well done to all.</span>"
							</blockquote>
						</div>
					</div>
				</div>
			</section>
			
			<div className="flex w-screen items-center bg-zinc-900 flex-col">
				<section className="py-32 w-11/12 sm:w-9/12 max-w-screen-lg">
					<div className="text-center mb-16">
						<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
							Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Location</span>
						</h2>
					</div>
					
					<div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
						<div className="bg-zinc-800/50 backdrop-blur-sm overflow-hidden shadow-2xl border border-zinc-700/50 h-[300px] sm:h-[400px] lg:h-[450px]">
							<iframe
								width="100%"
								height="100%"
								src="https://api.mapbox.com/styles/v1/igloocode/clbc5xptx000614ozjjfo8pbo.html?title=false&access_token=pk.eyJ1IjoiaWdsb29jb2RlIiwiYSI6ImNsYmM1eDYyNDBjeGIzdnBlbG02dXh5ZnEifQ.7nYfmE8arqyIS2NT8rCnlw&zoomwheel=false#16.52/54.581748/-5.937585"
								title="QUB Location Map"
								className="border-0">
							</iframe>
						</div>
						<div className="flex flex-col h-[300px] sm:h-[400px] lg:h-[450px]">
							<div className="bg-zinc-800/50 backdrop-blur-sm p-6 sm:p-8 lg:p-12 border border-zinc-700/50 shadow-xl hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col justify-center">
								<h4 className="font-mono text-white text-xl sm:text-2xl font-medium mb-6 sm:mb-8 flex items-center gap-3">
									📅 Event Details
								</h4>
								<div className="space-y-4 sm:space-y-6 text-white font-mono">
									<div className="border-l-4 border-purple-400 pl-4 sm:pl-6">
										<p className="text-base sm:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 mb-2">IglooCode 2026</p>
										<p className="text-sm sm:text-base font-light">15th April 2026</p>
										<p className="text-sm sm:text-base font-light">10:30am - 3:30pm</p>
									</div>
									<div className="border-l-4 border-cyan-400 pl-4 sm:pl-6">
										<p className="text-base sm:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 mb-2">Location</p>
										<p className="text-sm sm:text-base font-light">QUB Computer Science Building</p>
										<p className="text-sm sm:text-base font-light">18 Malone Road</p>
										<p className="text-sm sm:text-base font-light">Belfast</p>
										<p className="text-sm sm:text-base font-light">BT9 5AF</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			
			<section 
				className="bg-cover flex items-center flex-col py-24"
				style={{
					backgroundImage:
						"linear-gradient(rgba(0,0,0,0.80), rgba(0.1,0,0,0.85)), linear-gradient(black, black), url('/images/backdrop.png'), url('/images/DSC01874.jpeg')",
					backgroundBlendMode: "normal, saturation",
				}}
			>
				<div className="w-11/12 sm:w-9/12 max-w-screen-lg space-y-16">
					<div className="text-center">
						<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight mb-8">
							Ready to Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Challenge</span>?
						</h2>
					</div>
					
					<div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
						<div className="group p-6 sm:p-8 lg:p-10 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300 h-full flex flex-col">
							<h3 className="text-white text-lg sm:text-xl lg:text-2xl font-mono font-medium mb-4 sm:mb-6">
								For <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Teachers</span>
							</h3>
							<p className="text-white text-sm sm:text-base font-light leading-relaxed font-mono mb-4 sm:mb-6 flex-grow">
								Are you a teacher who thinks your students would enjoy this competitive coding environment? IglooCode is perfect for KS3 pupils interested in computing and technology.
							</p>
							<p className="text-sm sm:text-base font-light leading-relaxed font-mono">
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 font-medium">Students just need some experience in any ONE category to contribute meaningfully to a team!</span>
							</p>
						</div>
						
						<div className="group p-6 sm:p-8 lg:p-10 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col">
							<h3 className="text-white text-lg sm:text-xl lg:text-2xl font-mono font-medium mb-4 sm:mb-6">
								For <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Volunteers</span>
							</h3>
							<p className="text-white text-sm sm:text-base font-light leading-relaxed font-mono mb-4 sm:mb-6 flex-grow">
								Are you a sixth former looking to get volunteering experience at a fast-paced, exciting tech event?
							</p>
							<p className="text-sm sm:text-base font-light leading-relaxed font-mono">
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 font-medium">Join our team and help make IglooCode amazing!</span>
							</p>
						</div>
					</div>
					
					<div className="text-center px-4">
						<Link
							to="/getinvolved" 
							className="relative font-mono text-gray-300 text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-black transition-all duration-300 hover:scale-105 cursor-pointer inline-block"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-[length:300%_100%] animate-[gradient_3s_ease-in-out_infinite] p-[2px]">
								<div className="w-full h-full bg-black"></div>
							</div>
							<div className="relative z-10">
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">Express Your Interest →</span>
							</div>
						</Link>
					</div>
					
					<div className="text-center space-y-6 sm:space-y-8 mt-16 sm:mt-20 border-t border-zinc-700/50 pt-16 sm:pt-20">
						<h3 className="font-mono text-white text-xl sm:text-2xl font-medium">
							The Countdown is <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">On</span>!
						</h3>
						<div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
							<div className="flex flex-col justify-center items-center bg-zinc-800/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 min-w-[100px] sm:min-w-[120px]">
								<p className="font-mono text-white text-2xl sm:text-3xl lg:text-4xl font-bold" id="cd-months">0</p>
								<p className="font-mono text-gray-300 text-sm sm:text-base lg:text-lg">months</p>
							</div>
							<div className="flex flex-col justify-center items-center bg-zinc-800/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 min-w-[100px] sm:min-w-[120px]">
								<p className="font-mono text-white text-2xl sm:text-3xl lg:text-4xl font-bold" id="cd-weeks">0</p>
								<p className="font-mono text-gray-300 text-sm sm:text-base lg:text-lg">weeks</p>
							</div>
							<div className="flex flex-col justify-center items-center bg-zinc-800/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 min-w-[100px] sm:min-w-[120px]">
								<p className="font-mono text-white text-2xl sm:text-3xl lg:text-4xl font-bold" id="cd-days">0</p>
								<p className="font-mono text-gray-300 text-sm sm:text-base lg:text-lg">days</p>
							</div>
							<div className="flex flex-col justify-center items-center bg-zinc-800/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 border border-zinc-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 min-w-[100px] sm:min-w-[120px]">
								<p className="font-mono text-white text-2xl sm:text-3xl lg:text-4xl font-bold" id="cd-hours">0</p>
								<p className="font-mono text-gray-300 text-sm sm:text-base lg:text-lg">hours</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Home
