import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import { LifeBuoy, Briefcase, Award, Coffee, Users, Heart, CheckCircle, GraduationCap, Zap } from "lucide-react"
import Layout from '@components/Layout'

import imgKaty from '/images/DSC01864.jpeg'
import imgQueens from '/images/IMG_0660.jpeg'
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
				<title>Join Our Team - IglooCode</title>
				<meta name="description" content="Join the IglooCode volunteer team as a sixth former. Gain valuable experience, make connections, and help inspire the next generation of programmers." />
				<meta name="theme-color" content="#171717" />
			</Helmet>
			
			<section
				className="w-screen min-h-[70vh] bg-cover flex flex-col justify-center items-center relative text-center"
				style={{
					backgroundImage:
						"linear-gradient(rgba(0,0,0,0.80), rgba(0.1,0,0,0.85)), linear-gradient(black, black), url('/images/backdrop.png'), url('/images/DSC01874.jpeg')",
					backgroundBlendMode: "normal, saturation",
				}}
				id="hero"
			>
				<div className="max-w-4xl px-4">
					<h1 className="w-fit text-transparent text-6xl sm:text-7xl lg:text-8xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-4 font-mono leading-tight mx-auto">
						Join Our Team
					</h1>
					<div className="flex items-center justify-center text-center">
						<Typewriter
							options={{
								strings: ["< passionate sixth formers wanted />"],
								autoStart: true,
								loop: true,
								wrapperClassName: "font-mono text-white text-xl sm:text-2xl lg:text-3xl",
								cursorClassName: "font-mono text-white text-xl sm:text-2xl lg:text-3xl",
								delay: 100,
							}}
						/>
					</div>
				</div>
			</section>

			<div className="bg-zinc-900" id="content">
				<section className="flex items-center flex-col py-24">
					<div className="w-11/12 sm:w-9/12 max-w-screen-lg space-y-20">
						
						<div className="text-center space-y-6">
							<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
								What We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Looking For</span>
							</h2>
							<p className="font-mono text-white/80 text-lg font-light leading-relaxed max-w-3xl mx-auto">
								We're seeking enthusiastic sixth formers with a passion for technology to join our volunteer team. No coding experience required—just enthusiasm and a desire to inspire others.
							</p>
						</div>

						<div className="grid lg:grid-cols-2 gap-12 items-stretch">
							<div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 flex flex-col">
								<div className="mb-6">
									<GraduationCap className="w-8 h-8 text-purple-400 mb-4" />
									<h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight">
										Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Candidate</span>
									</h3>
								</div>
								<div className="space-y-6 flex-grow">
									<p className="font-mono text-white/80 text-lg font-light leading-relaxed">
										We're a friendly team of Year 13s and 14s, and we'd be delighted to welcome you aboard! You don't need to be a coding expert—if you're interested in technology and computing, that's all we need.
									</p>
									<div className="space-y-4">
										<div className="flex items-start gap-3">
											<Heart className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">Passion for Technology</p>
												<p className="font-mono text-white/70 text-sm">Interest in IT, programming, or STEM subjects</p>
											</div>
										</div>
										<div className="flex items-start gap-3">
											<Users className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">People Skills</p>
												<p className="font-mono text-white/70 text-sm">Friendly, respectful, and good with younger students</p>
											</div>
										</div>
										<div className="flex items-start gap-3">
											<Zap className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">Enthusiasm to Learn</p>
												<p className="font-mono text-white/70 text-sm">Keen to develop new skills and take on challenges</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="group overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
								<img
									src={imgSam}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									alt="Volunteer team member helping participants"
								/>
							</div>
						</div>

						<div className="grid lg:grid-cols-2 gap-12 items-stretch">
							<div className="group overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 lg:order-last">
								<img
									src={imgKaty}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									alt="Team member assisting during the competition"
								/>
							</div>

							<div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 flex flex-col lg:order-first">
								<div className="mb-6">
									<CheckCircle className="w-8 h-8 text-cyan-400 mb-4" />
									<h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight">
										Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Responsibilities</span>
									</h3>
								</div>
								<div className="space-y-6 flex-grow">
									<p className="font-mono text-white/80 text-lg font-light leading-relaxed">
										You'll play a crucial role in making IglooCode run smoothly, from welcoming participants to providing technical support throughout the day.
									</p>
									<div className="space-y-4">
										<div className="flex items-start gap-3">
											<Users className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">Welcome & Setup</p>
												<p className="font-mono text-white/70 text-sm">Help schools settle in and get participants logged onto our platform</p>
											</div>
										</div>
										<div className="flex items-start gap-3">
											<LifeBuoy className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">Technical Support</p>
												<p className="font-mono text-white/70 text-sm">Respond to hint requests using our mobile app and guidebooks</p>
											</div>
										</div>
										<div className="flex items-start gap-3">
											<Award className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">Task Verification</p>
												<p className="font-mono text-white/70 text-sm">Check completed tasks and assign points to teams</p>
											</div>
										</div>
									</div>
									<div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
										<p className="font-mono text-green-300 text-sm font-light leading-relaxed">
											<strong>Don't worry!</strong> It might sound complex, but we've tested this with people who aren't techy at all, and they've done a perfect job. You'll have full training and support.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="text-center space-y-6">
							<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
								What You'll <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Gain</span>
							</h2>
							<p className="font-mono text-white/80 text-lg font-light leading-relaxed max-w-3xl mx-auto">
								Beyond having an amazing, energy-filled day with new friends, volunteering at IglooCode offers numerous benefits for your personal and professional development.
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							<div className="bg-gradient-to-br from-lime-500/10 to-green-500/10 backdrop-blur-sm p-8 border border-lime-500/20 space-y-4">
								<div className="flex items-center gap-3 mb-4">
									<LifeBuoy className="w-6 h-6 text-lime-400" />
									<h3 className="font-mono text-white text-2xl font-semibold">Volunteering Experience</h3>
								</div>
								<p className="font-mono text-white/80 text-lg font-light leading-relaxed">
									Learn what it's like to help keep a large, fast-paced tech event running smoothly. Perfect experience for your CV and university applications.
								</p>
							</div>
							
							<div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-sm p-8 border border-red-500/20 space-y-4">
								<div className="flex items-center gap-3 mb-4">
									<Briefcase className="w-6 h-6 text-red-400" />
									<h3 className="font-mono text-white text-2xl font-semibold">Industry Connections</h3>
								</div>
								<p className="font-mono text-white/80 text-lg font-light leading-relaxed">
									Network with professionals from leading tech companies in Northern Ireland and meet peers who could be your future colleagues.
								</p>
							</div>
						</div>

						<div className="grid lg:grid-cols-2 gap-12 items-stretch">
							<div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 flex flex-col">
								<div className="mb-6">
									<Award className="w-8 h-8 text-purple-400 mb-4" />
									<h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight">
										Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Benefits</span>
									</h3>
								</div>
								<div className="space-y-6 flex-grow">
									<p className="font-mono text-white/80 text-lg font-light leading-relaxed">
										Gain valuable experience that will set you apart in university applications and future job interviews.
									</p>
									<div className="space-y-4">
										<div className="flex items-start gap-3">
											<GraduationCap className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">UCAS Applications</p>
												<p className="font-mono text-white/70 text-sm">Perfect addition to your university applications</p>
											</div>
										</div>
										<div className="flex items-start gap-3">
											<Briefcase className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">Professional Skills</p>
												<p className="font-mono text-white/70 text-sm">Event management and technical support experience</p>
											</div>
										</div>
										<div className="flex items-start gap-3">
											<Coffee className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">Free Food & Fun</p>
												<p className="font-mono text-white/70 text-sm">Pizza, boba, and whatever else we order on the day!</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="group overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
								<img
									src={imgQueens}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									alt="QUB Computer Science Building - event venue"
								/>
							</div>
						</div>

						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-cyan-400/20 to-purple-400/20 blur-lg"></div>
							<div className="relative bg-zinc-800/70 backdrop-blur-sm p-12 border border-zinc-700/50 shadow-2xl">
								<div className="text-center mb-6">
									<span className="text-4xl">🚀</span>
								</div>
								<h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight mb-6 text-center">
									Ready to Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Started</span>?
								</h3>
								<p className="font-mono text-white/80 text-lg font-light leading-relaxed mb-8 max-w-3xl mx-auto text-center">
									Think you'd make a brilliant addition to our team? You'll need to apply through your IT teacher so we know you're serious about volunteering. Here's how:
								</p>
								<div className="grid md:grid-cols-2 gap-6">
									<div className="space-y-4">
										<div className="flex items-start gap-3">
											<div className="bg-sky-500/20 border border-sky-500/30 w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">
												<span className="font-mono text-sky-400 text-sm font-medium">1</span>
											</div>
											<p className="font-mono text-white/80 text-sm font-light leading-relaxed">
												Check your school allows volunteering days without being marked absent
											</p>
										</div>
										<div className="flex items-start gap-3">
											<div className="bg-purple-500/20 border border-purple-500/30 w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">
												<span className="font-mono text-purple-400 text-sm font-medium">2</span>
											</div>
											<p className="font-mono text-white/80 text-sm font-light leading-relaxed">
												Speak to your IT or Careers teacher about volunteering at IglooCode
											</p>
										</div>
									</div>
									<div className="space-y-4">
										<div className="flex items-start gap-3">
											<div className="bg-sky-500/20 border border-sky-500/30 w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">
												<span className="font-mono text-sky-400 text-sm font-medium">3</span>
											</div>
											<p className="font-mono text-white/80 text-sm font-light leading-relaxed">
												Fill in the application form at <Link to="/volunteer" className="text-cyan-400 hover:text-cyan-300 underline transition-colors">iglooco.de/volunteer</Link>
											</p>
										</div>
										<div className="flex items-start gap-3">
											<div className="bg-purple-500/20 border border-purple-500/30 w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">
												<span className="font-mono text-purple-400 text-sm font-medium">4</span>
											</div>
											<p className="font-mono text-white/80 text-sm font-light leading-relaxed">
												We'll invite you to our Discord server and welcome you to the team!
											</p>
										</div>
									</div>
								</div>
								<div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-8">
									<p className="font-mono text-amber-300 text-sm font-light leading-relaxed text-center">
										⚡ Applications are first-come, first-served—we can only accommodate a limited number of volunteers!
									</p>
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
				<div className="w-11/12 sm:w-9/12 max-w-screen-lg text-center space-y-8">
					<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
						Help Us Inspire the Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Generation</span>
					</h2>
					<p className="font-mono text-white/80 text-lg font-light leading-relaxed max-w-2xl mx-auto">
						Join our mission to bring together young programmers from across Northern Ireland and make a lasting impact on their coding journey.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Link 
							to="/ourstory"
							className="relative font-mono text-gray-300 text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-black transition-all duration-300 hover:scale-105 cursor-pointer inline-block"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-[length:300%_100%] animate-[gradient_3s_ease-in-out_infinite] p-[2px]">
								<div className="w-full h-full bg-black"></div>
							</div>
							<div className="relative z-10">
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">Read Our Story →</span>
							</div>
						</Link>
						<Link 
							to="/volunteer"
							className="relative font-mono text-gray-300 text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-black transition-all duration-300 hover:scale-105 cursor-pointer inline-block"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-[length:300%_100%] animate-[gradient_3s_ease-in-out_infinite] p-[2px]">
								<div className="w-full h-full bg-black"></div>
							</div>
							<div className="relative z-10">
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">Apply Now →</span>
							</div>
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default SixthForm;
