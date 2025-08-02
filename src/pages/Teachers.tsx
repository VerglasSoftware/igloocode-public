import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Layout from '@components/Layout'

// Import images
import imgHands from '/images/60A456C6-0BA2-43F1-B30E-97211DF2C6D9.jpeg'

function Teachers(): JSX.Element {
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
				<title>For Teachers - Get involved - IglooCode</title>
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
					<h1 className="font-mono w-fit text-transparent text-6xl sm:text-7xl lg:text-8xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-4 leading-tight">For teachers</h1>
					<p className="font-mono text-white text-xl sm:text-3xl leading-relaxed drop-shadow-lg">{"< bring your students for an adventure />"}</p>
				</div>
			</section>
			
			<div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
				<section className="py-16 sm:py-20 w-11/12 sm:w-9/12 max-w-screen-lg">
					<div className="relative -top-6 sm:-top-12 mb-8">
						<nav className="font-mono text-gray-400 text-sm">
							<Link to="/" className="hover:text-cyan-400 transition-colors duration-200">
								Home
							</Link>
							<span className="mx-2 text-gray-500">·</span>
							<Link to="/getinvolved" className="hover:text-cyan-400 transition-colors duration-200">
								Get involved
							</Link>
							<span className="mx-2 text-gray-500">·</span>
							<span className="text-white">For teachers</span>
						</nav>
					</div>
					
					<div id="about" className="space-y-16">
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div className="space-y-6">
								<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
									give your students a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">real-world</span> experience.
								</h2>
								<div className="space-y-4">
									<p className="font-mono text-white text-base font-light leading-relaxed">
										IglooCode offers your students a unique opportunity to practice their programming skills in a competitive, collaborative environment alongside peers from across Northern Ireland.
									</p>
									<p className="font-mono text-white text-base font-light leading-relaxed">
										Our event is designed to complement classroom learning while giving students hands-on experience with industry-standard tools and technologies. They'll work in teams, solve real problems, and gain valuable insights into the tech industry.
									</p>
									<p className="font-mono text-white text-base font-light leading-relaxed">
										<strong className="font-semibold text-purple-400">What's included:</strong> Professional mentorship, industry guest speakers, free lunch, and take-home resources for continued learning.
									</p>
								</div>
							</div>
							<div className="flex justify-center items-center">
								<div className="group overflow-hidden rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
									<img src={imgHands} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" alt="Students collaborating" />
								</div>
							</div>
						</div>
						
						<div className="text-center p-12 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50">
							<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium mb-6 leading-tight">
								ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">register</span> your school?
							</h2>
							<p className="font-mono text-white text-lg font-light mb-8 max-w-3xl mx-auto leading-relaxed">
								Give your students a day out to practice their skills in the real world, while making new friends and getting a first-hand insight into the tech industry. 
								Registration is free and we provide everything your students need for the day.
							</p>
							<div className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-400/20 backdrop-blur-sm border border-purple-500/30">
								<p className="font-mono text-white text-lg font-medium">
									2026 APPLICATIONS COMING SOON
								</p>
							</div>
						</div>
						
						<div className="grid md:grid-cols-3 gap-8 mt-16">
							<div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300 text-center">
								<div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-sm border border-purple-500/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/20">
									<span className="font-mono text-purple-400 text-2xl font-bold">1</span>
								</div>
								<h3 className="font-mono text-white text-xl font-medium mb-4">Register Interest</h3>
								<p className="font-mono text-gray-300 text-sm font-light leading-relaxed">
									Fill out our school interest form to let us know you'd like to participate.
								</p>
							</div>
							<div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-cyan-400/30 transition-all duration-300 text-center">
								<div className="bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 backdrop-blur-sm border border-cyan-400/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-400/20">
									<span className="font-mono text-cyan-400 text-2xl font-bold">2</span>
								</div>
								<h3 className="font-mono text-white text-xl font-medium mb-4">Receive Details</h3>
								<p className="font-mono text-gray-300 text-sm font-light leading-relaxed">
									We'll send you all the information you need including date, venue, and student requirements.
								</p>
							</div>
							<div className="group p-8 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-300 text-center">
								<div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-sm border border-purple-500/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/20">
									<span className="font-mono text-purple-400 text-2xl font-bold">3</span>
								</div>
								<h3 className="font-mono text-white text-xl font-medium mb-4">Attend Event</h3>
								<p className="font-mono text-gray-300 text-sm font-light leading-relaxed">
									Bring your students for an unforgettable day of coding, collaboration, and competition.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
			
			<section className="bg-zinc-900 flex items-center flex-col">
				<div className="py-16 sm:py-20 w-11/12 sm:w-9/12 max-w-screen-lg flex items-center justify-center flex-col text-center">
					<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium mb-8 leading-tight">
						designed for your students' <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">success</span>.
					</h2>
					<Link 
						to="/perks" 
						className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-300 hover:bg-zinc-700/50 hover:shadow-lg hover:shadow-purple-500/20"
					>
						<span className="font-mono text-white text-lg font-medium group-hover:text-purple-400 transition-colors duration-300">
							SEE THE PERKS
						</span>
					</Link>
				</div>
			</section>
		</Layout>
	);
}

export default Teachers;
