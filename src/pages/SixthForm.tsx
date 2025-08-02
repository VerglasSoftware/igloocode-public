import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FiAward, FiBriefcase, FiCoffee, FiLifeBuoy } from 'react-icons/fi'
import Layout from '@components/Layout'

// Import images
import imgKaty from '/images/DSC01864.jpeg'
import imgQueens from '/images/IMG_0660.jpeg'
import imgMacSB from '/images/DSC01908.jpeg'
import imgSam from '/images/DSC01890.jpeg'

function SixthForm(): JSX.Element {
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
			const navbar = document.getElementById("navbar");
			const content = document.getElementById("content");
			if (navbar && content) {
				if (scrollTop >= content.offsetTop) {
					navbar.classList.add("bg-zinc-900");
					navbar.classList.add("bg-sat");
				} else {
					navbar.classList.remove("bg-zinc-900");
					navbar.classList.remove("bg-sat");
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<Layout>
			<Helmet>
				<title>Sixth Form - Get involved - IglooCode</title>
				<meta name="theme-color" content="#171717" />
			</Helmet>
			
			<section
				className="w-screen min-h-[70vh] bg-cover flex flex-col justify-end items-left relative pl-6 pr-6 sm:pl-24 pb-8"
				style={{
					backgroundImage:
						"linear-gradient(rgba(0,0,0,0.80), rgba(0.1,0,0,0.85)), linear-gradient(black, black), url('/images/backdrop.png'), url('/images/DSC01874.jpeg')",
					backgroundBlendMode: "normal, saturation",
				}}
				id="hero"
			>
				<div className="max-w-4xl">
					<h1 className="font-mono w-fit text-transparent text-6xl sm:text-7xl lg:text-8xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-4 leading-tight">Join the team</h1>
					<p className="font-mono text-white text-xl sm:text-3xl leading-relaxed drop-shadow-lg">{"< think you have what it takes? />"}</p>
				</div>
			</section>
			
			<div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
				<section className="py-16 sm:py-20 w-11/12 sm:w-9/12 max-w-screen-lg">
					<div className="relative -top-6 sm:-top-12 mb-8">
						<nav className="font-mono text-gray-400 text-sm">
							<Link to="/" className="hover:underline text-blue-400 hover:text-blue-300 transition-colors">
								Home
							</Link>
							<span className="mx-2">·</span>
							<Link to="/getinvolved" className="hover:underline text-blue-400 hover:text-blue-300 transition-colors">
								Get involved
							</Link>
							<span className="mx-2">·</span>
							<span className="text-gray-300">Join the team</span>
						</nav>
					</div>
					
					<div id="about" className="space-y-16">
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div className="space-y-6 order-2 lg:order-1">
								<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
									what are we <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">looking</span> for?
								</h2>
								<div className="space-y-4">
									<p className="font-mono text-white text-base font-light leading-relaxed">
										We're looking for sixth formers with a passion for IT and programming to give us a hand at IglooCode. We're a friendly bunch of Year 13s and 14s and we'd be
										delighted to get to know you and welcome you to our team!
									</p>
									<p className="font-mono text-white text-base font-light leading-relaxed">
										<strong className="font-semibold text-purple-400">Can't code? Don't worry! </strong>
										If you're interested in technology and computing, that's all we need. We're looking for people who are keen to learn new things, and we hope you can take away
										something from the day as well.
									</p>
									<p className="font-mono text-white text-base font-light leading-relaxed">
										We'll be inviting teachers, students and professionals from across the country to IglooCode and we want to make it an enjoyable time for all. If you're friendly,
										respectful and reliable, you'll make a great addition to our team.
										<strong className="font-semibold text-cyan-400"> Good with kids? Even better.</strong>
									</p>
								</div>
							</div>
							<div className="flex justify-center items-center order-1 lg:order-2">
								<div className="group overflow-hidden rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
									<img src={imgSam} className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105" alt="Team member" />
								</div>
							</div>
						</div>
						
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div className="flex justify-center items-center">
								<div className="group overflow-hidden rounded-xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
									<img src={imgKaty} className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105" alt="Team member" />
								</div>
							</div>
							<div className="space-y-6">
								<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
									what'll you be <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">doing</span>?
								</h2>
								<div className="space-y-4">
									<p className="font-mono text-white text-base font-light leading-relaxed">
										At the start of the day, you'll be helping us to welcome the schools to the venue and getting the participants logged on and comfortable.
									</p>
									<p className="font-mono text-white text-base font-light leading-relaxed">
										Throughout competition time, you'll be given a login to our custom mobile app, where you'll be able to respond to hint requests from participants. You'll get a
										guidebook and step by step instructions of how to complete each task, allowing you to provide help to anyone who needs it.
									</p>
									<p className="font-mono text-white text-base font-light leading-relaxed">
										You'll also be running around every time a team completes a task, checking it's been done right and assigning points to the person who finished it.
									</p>
									<p className="font-mono text-white text-base font-light leading-relaxed">
										<strong className="font-semibold text-green-400">It might sound complicated, but trust us, it's not. </strong> We've done taster sessions with people who aren't techy at all and
										they've done a perfect job!
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			
			<section className="bg-zinc-900 flex items-center flex-col py-20">
				<div className="w-11/12 sm:w-9/12 max-w-screen-lg flex items-center justify-center flex-col text-center space-y-8">
					<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
						inspiring the next <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">generation</span>.
					</h2>
					<Link to="/about" className="group inline-flex items-center text-white hover:text-purple-300 transition-all duration-300 text-lg border-2 border-purple-500/50 hover:border-purple-400 px-8 py-4 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 backdrop-blur-sm hover:scale-105 font-mono">
						READ THE STORY
						<span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
					</Link>
				</div>
			</section>
			
			<div className="flex w-screen items-center bg-zinc-900 flex-col">
				<section className="py-16 sm:py-20 w-11/12 sm:w-9/12 max-w-screen-lg">
					<div className="text-center mb-16">
						<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
							what'll you get out of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">igloocode</span>?
						</h2>
						<p className="text-white text-lg font-light font-mono leading-relaxed max-w-3xl mx-auto mt-6">
							In addition to having an amazing, energy-filled day out with new friends, IglooCode has many benefits waiting for you if you choose to join our team.
						</p>
					</div>
					
					<div className="grid lg:grid-cols-2 gap-12 items-stretch mb-20">
						<div className="space-y-8">
							<div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-lime-500/30 transition-all duration-300">
								<div className="flex flex-row items-center mb-6">
									<div className="bg-gradient-to-br from-lime-500/20 to-lime-700/20 backdrop-blur-sm border border-lime-500/30 w-16 h-16 flex items-center justify-center rounded-full mr-6 flex-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-lime-500/20">
										<FiLifeBuoy className="text-lime-400 w-7 h-7" />
									</div>
									<div>
										<h3 className="font-mono text-white text-xl font-medium">Volunteering experience</h3>
										<p className="font-mono text-gray-300 text-sm font-light leading-relaxed">Learn what it's like to help keep a pretty big, fast-paced event running smoothly.</p>
									</div>
								</div>
							</div>
							
							<div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-red-500/30 transition-all duration-300">
								<div className="flex flex-row items-center mb-6">
									<div className="bg-gradient-to-br from-red-500/20 to-red-700/20 backdrop-blur-sm border border-red-500/30 w-16 h-16 flex items-center justify-center rounded-full mr-6 flex-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/20">
										<FiBriefcase className="text-red-500 w-7 h-7" />
									</div>
									<div>
										<h3 className="font-mono text-white text-xl font-medium">Industry links</h3>
										<p className="font-mono text-gray-300 text-sm font-light leading-relaxed">
											Chat to people from some of the biggest IT companies in NI, and new friends who could be working with you in the future.
										</p>
									</div>
								</div>
							</div>
							
							<div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-sky-500/30 transition-all duration-300">
								<div className="flex flex-row items-center mb-6">
									<div className="bg-gradient-to-br from-sky-500/20 to-sky-700/20 backdrop-blur-sm border border-sky-500/30 w-16 h-16 flex items-center justify-center rounded-full mr-6 flex-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-sky-500/20">
										<FiAward className="text-sky-400 w-7 h-7" />
									</div>
									<div>
										<h3 className="font-mono text-white text-xl font-medium">Something for UCAS</h3>
										<p className="font-mono text-gray-300 text-sm font-light leading-relaxed">A fun day out and something to stick on your uni applications... what's not to lose?</p>
									</div>
								</div>
							</div>
							
							<div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-yellow-500/30 transition-all duration-300">
								<div className="flex flex-row items-center mb-6">
									<div className="bg-gradient-to-br from-yellow-500/20 to-yellow-700/20 backdrop-blur-sm border border-yellow-500/30 w-16 h-16 flex items-center justify-center rounded-full mr-6 flex-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-500/20">
										<FiCoffee className="text-yellow-400 w-7 h-7" />
									</div>
									<div>
										<h3 className="font-mono text-white text-xl font-medium">Free food!</h3>
										<p className="font-mono text-gray-300 text-sm font-light leading-relaxed">Grab some pizza and boba with us, or whatever else we choose to Deliveroo on the day.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-center items-stretch">
							<div className="group overflow-hidden rounded-xl shadow-lg transition-all duration-300 w-full">
								<img src={imgQueens} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Event venue" />
							</div>
						</div>
					</div>
					
					<div className="grid lg:grid-cols-2 gap-12 items-stretch">
						<div className="flex justify-center items-stretch">
							<div className="group overflow-hidden rounded-xl shadow-lg transition-all duration-300 w-full">
								<img src={imgMacSB} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Team member" />
							</div>
						</div>
						<div className="flex flex-col justify-center space-y-8">
							<div className="text-center lg:text-left">
								<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
									so... ready to get <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">started</span>?
								</h2>
								<p className="text-white text-lg font-light font-mono leading-relaxed mt-6">
									Think you'd make a good addition to our team? You'll need to apply through your IT teacher so we know you aren't just skiving for us! Here's how:
								</p>
							</div>
							
							<div className="space-y-6">
								<div className="group p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-sky-500/30 transition-all duration-300">
									<div className="flex flex-row items-start">
										<div className="bg-gradient-to-br from-sky-500/20 to-sky-700/20 backdrop-blur-sm border border-sky-500/30 w-12 h-12 flex items-center justify-center rounded-full mr-4 flex-none transition-all duration-300 group-hover:scale-110">
											<span className="font-mono text-sky-400 text-lg font-medium">1</span>
										</div>
										<p className="font-mono text-gray-300 text-sm font-light leading-relaxed">
											Check that your school will allow you to take a day out for volunteering / vocational activities without getting marked as absent.
										</p>
									</div>
								</div>
								
								<div className="group p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
									<div className="flex flex-row items-start">
										<div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-sm border border-purple-500/30 w-12 h-12 flex items-center justify-center rounded-full mr-4 flex-none transition-all duration-300 group-hover:scale-110">
											<span className="font-mono text-purple-400 text-lg font-medium">2</span>
										</div>
										<p className="font-mono text-gray-300 text-sm font-light leading-relaxed">
											Speak to your IT or Careers teacher to express your interest in volunteering to help at IglooCode.
										</p>
									</div>
								</div>
								
								<div className="group p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-sky-500/30 transition-all duration-300">
									<div className="flex flex-row items-start">
										<div className="bg-gradient-to-br from-sky-500/20 to-sky-700/20 backdrop-blur-sm border border-sky-500/30 w-12 h-12 flex items-center justify-center rounded-full mr-4 flex-none transition-all duration-300 group-hover:scale-110">
											<span className="font-mono text-sky-400 text-lg font-medium">3</span>
										</div>
										<p className="font-mono text-gray-300 text-sm font-light leading-relaxed">
											Fill in the application form at <Link to="/f/volunteer" className="font-mono text-cyan-400 hover:text-cyan-300 underline transition-colors duration-200">https://iglooco.de/f/volunteer</Link> and submit it before December 21st.
										</p>
									</div>
								</div>
								
								<div className="group p-6 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300">
									<div className="flex flex-row items-start">
										<div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-sm border border-purple-500/30 w-12 h-12 flex items-center justify-center rounded-full mr-4 flex-none transition-all duration-300 group-hover:scale-110">
											<span className="font-mono text-purple-400 text-lg font-medium">4</span>
										</div>
										<p className="font-mono text-gray-300 text-sm font-light leading-relaxed">
											We'll get back to you as soon as possible and invite you to the IglooCode Discord server to welcome you to the team!
										</p>
									</div>
								</div>
							</div>
							
							<div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mt-8">
								<p className="font-mono text-amber-300 text-sm font-light leading-relaxed text-center">
									Please note that our volunteer applications are first-come first-served - we can only fit so many people in the venue!
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
}

export default SixthForm;
