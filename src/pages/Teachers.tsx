import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import Layout from '@components/Layout'
import { Users, Calendar, GraduationCap, Award, BookOpen, Coffee, Zap, CheckCircle, Heart, Target, Briefcase } from 'lucide-react'

import imgHands from '/images/60A456C6-0BA2-43F1-B30E-97211DF2C6D9.jpeg'
import imgClassroom from '/images/DSC01866.jpeg'
import imgStudents from '/images/DSC01974.jpeg'

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
				<title>For Teachers - IglooCode</title>
				<meta name="description" content="Bring your students to IglooCode - Northern Ireland's premier coding competition. Free registration, professional mentorship, and real-world tech experience for KS3 pupils." />
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
						For Teachers
					</h1>
					<div className="flex items-center justify-center text-center">
						<Typewriter
							options={{
								strings: ["< bring your students for an adventure />"],
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
								Give Your Students a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Real-World</span> Experience
							</h2>
							<p className="font-mono text-white/80 text-lg font-light leading-relaxed max-w-3xl mx-auto">
								IglooCode offers your students a unique opportunity to practice their programming skills in a competitive, collaborative environment alongside peers from across Northern Ireland.
							</p>
						</div>

						<div className="grid lg:grid-cols-2 gap-12 items-stretch">
							<div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 flex flex-col">
								<div className="mb-6">
									<GraduationCap className="w-8 h-8 text-purple-400 mb-4" />
									<h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight">
										Perfect for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">KS3 Students</span>
									</h3>
								</div>
								<div className="space-y-6 flex-grow">
									<p className="font-mono text-white/80 text-lg font-light leading-relaxed">
										Our event is designed to complement classroom learning whilst giving students hands-on experience with industry-standard tools and technologies. They'll work in teams, solve real problems, and gain valuable insights into the tech industry.
									</p>
									<div className="space-y-4">
										<div className="flex items-start gap-3">
											<BookOpen className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">Curriculum Aligned</p>
												<p className="font-mono text-white/70 text-sm">Supports KS3 Computing objectives and beyond</p>
											</div>
										</div>
										<div className="flex items-start gap-3">
											<Users className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">Team Collaboration</p>
												<p className="font-mono text-white/70 text-sm">Students work together, leveraging individual strengths</p>
											</div>
										</div>
										<div className="flex items-start gap-3">
											<Target className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">Real-World Application</p>
												<p className="font-mono text-white/70 text-sm">Practical programming challenges with industry relevance</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="group overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
								<img
									src={imgHands}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									alt="Students collaborating on coding challenges"
								/>
							</div>
						</div>

						<div className="grid lg:grid-cols-2 gap-12 items-stretch">
							<div className="group overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 lg:order-last">
								<img
									src={imgClassroom}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									alt="Classroom environment during the competition"
								/>
							</div>

							<div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 flex flex-col lg:order-first">
								<div className="mb-6">
									<Award className="w-8 h-8 text-cyan-400 mb-4" />
									<h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight">
										What's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Included</span>
									</h3>
								</div>
								<div className="space-y-6 flex-grow">
									<p className="font-mono text-white/80 text-lg font-light leading-relaxed">
										We provide everything your students need for an amazing day of learning, competition, and professional development.
									</p>
									<div className="space-y-4">
										<div className="flex items-start gap-3">
											<Heart className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">Professional Mentorship</p>
												<p className="font-mono text-white/70 text-sm">Industry experts guiding and supporting teams</p>
											</div>
										</div>
										<div className="flex items-start gap-3">
											<Briefcase className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">Industry Guest Speakers</p>
												<p className="font-mono text-white/70 text-sm">Insights from leading tech professionals</p>
											</div>
										</div>
										<div className="flex items-start gap-3">
											<Coffee className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">Free Lunch & Refreshments</p>
												<p className="font-mono text-white/70 text-sm">All meals and snacks provided throughout the day</p>
											</div>
										</div>
										<div className="flex items-start gap-3">
											<BookOpen className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">Take-Home Resources</p>
												<p className="font-mono text-white/70 text-sm">Materials for continued learning in the classroom</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="text-center space-y-6">
							<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
								Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Details</span>
							</h2>
							<p className="font-mono text-white/80 text-lg font-light leading-relaxed max-w-3xl mx-auto">
								Mark your calendars! Here's everything you need to know about bringing your students to IglooCode 2026.
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							<div className="bg-gradient-to-br from-purple-500/10 to-cyan-400/10 backdrop-blur-sm p-8 border border-purple-500/20 space-y-6">
								<div className="flex items-center gap-3 mb-4">
									<Calendar className="w-6 h-6 text-purple-400" />
									<h3 className="font-mono text-white text-2xl font-semibold">When & Where</h3>
								</div>
								<div className="space-y-4">
									<div className="border-l-4 border-purple-400 pl-4">
										<p className="font-mono text-white font-medium text-lg">Tuesday, 15th April 2026</p>
										<p className="font-mono text-white/70">10:30am - 3:30pm</p>
									</div>
									<div className="border-l-4 border-cyan-400 pl-4">
										<p className="font-mono text-white font-medium">QUB Computer Science Building</p>
										<p className="font-mono text-white/70 text-sm">18 Malone Road, Belfast BT9 5AF</p>
									</div>
								</div>
							</div>
							
							<div className="bg-gradient-to-br from-cyan-400/10 to-purple-500/10 backdrop-blur-sm p-8 border border-cyan-400/20 space-y-6">
								<div className="flex items-center gap-3 mb-4">
									<Users className="w-6 h-6 text-cyan-400" />
									<h3 className="font-mono text-white text-2xl font-semibold">Who Can Attend</h3>
								</div>
								<div className="space-y-4">
									<div className="border-l-4 border-cyan-400 pl-4">
										<p className="font-mono text-white font-medium">KS3 Students (Ages 11-14)</p>
										<p className="font-mono text-white/70 text-sm">Years 8, 9, and 10</p>
									</div>
									<div className="border-l-4 border-purple-400 pl-4">
										<p className="font-mono text-white font-medium">Any Experience Level</p>
										<p className="font-mono text-white/70 text-sm">From complete beginners to coding enthusiasts</p>
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-cyan-400/20 to-purple-400/20 blur-lg"></div>
							<div className="relative bg-zinc-800/70 backdrop-blur-sm p-12 border border-zinc-700/50 shadow-2xl">
								<div className="text-center mb-6">
									<span className="text-4xl">🚀</span>
								</div>
								<h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight mb-6 text-center">
									Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Register</span> Your School?
								</h3>
								<p className="font-mono text-white/80 text-lg font-light leading-relaxed mb-8 max-w-3xl mx-auto text-center">
									Give your students a day out to practise their skills in the real world, whilst making new friends and getting first-hand insight into the tech industry. Registration is completely free and we provide everything your students need.
								</p>
								<div className="text-center">
									<div className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-400/20 backdrop-blur-sm border border-purple-500/30">
										<p className="font-mono text-white text-lg font-medium">
											2026 APPLICATIONS COMING SOON
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="text-center space-y-6">
							<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
								How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Get Started</span>
							</h2>
							<p className="font-mono text-white/80 text-lg font-light leading-relaxed max-w-3xl mx-auto">
								Follow these simple steps to bring your students to Northern Ireland's premier coding competition.
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 text-center hover:border-purple-500/30 transition-all duration-300 group">
								<div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-sm border border-purple-500/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/20">
									<span className="font-mono text-purple-400 text-2xl font-bold">1</span>
								</div>
								<h3 className="font-mono text-white text-xl font-medium mb-4">Register Interest</h3>
								<p className="font-mono text-white/70 text-sm font-light leading-relaxed">
									Fill out our school interest form to let us know you'd like to participate in IglooCode 2026.
								</p>
							</div>
							<div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 text-center hover:border-cyan-400/30 transition-all duration-300 group">
								<div className="bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 backdrop-blur-sm border border-cyan-400/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-400/20">
									<span className="font-mono text-cyan-400 text-2xl font-bold">2</span>
								</div>
								<h3 className="font-mono text-white text-xl font-medium mb-4">Receive Details</h3>
								<p className="font-mono text-white/70 text-sm font-light leading-relaxed">
									We'll send you all the information you need including transport, venue details, and student requirements.
								</p>
							</div>
							<div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 text-center hover:border-purple-500/30 transition-all duration-300 group">
								<div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 backdrop-blur-sm border border-purple-500/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/20">
									<span className="font-mono text-purple-400 text-2xl font-bold">3</span>
								</div>
								<h3 className="font-mono text-white text-xl font-medium mb-4">Attend Event</h3>
								<p className="font-mono text-white/70 text-sm font-light leading-relaxed">
									Bring your students for an unforgettable day of coding, collaboration, and competition.
								</p>
							</div>
						</div>

						<div className="grid lg:grid-cols-2 gap-12 items-stretch">
							<div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 flex flex-col">
								<div className="mb-6">
									<Zap className="w-8 h-8 text-purple-400 mb-4" />
									<h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight">
										Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Benefits</span>
									</h3>
								</div>
								<div className="space-y-6 flex-grow">
									<p className="font-mono text-white/80 text-lg font-light leading-relaxed">
										Your students will gain invaluable experience whilst having an absolute blast competing alongside their peers.
									</p>
									<div className="space-y-4">
										<div className="flex items-start gap-3">
											<CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">Practical Skills Development</p>
												<p className="font-mono text-white/70 text-sm">Real coding experience beyond the classroom</p>
											</div>
										</div>
										<div className="flex items-start gap-3">
											<Users className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">Peer Networking</p>
												<p className="font-mono text-white/70 text-sm">Connect with like-minded students from across NI</p>
											</div>
										</div>
										<div className="flex items-start gap-3">
											<Award className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">Achievement Recognition</p>
												<p className="font-mono text-white/70 text-sm">Certificates and prizes for all participants</p>
											</div>
										</div>
										<div className="flex items-start gap-3">
											<Target className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
											<div>
												<p className="font-mono text-white font-medium">Career Inspiration</p>
												<p className="font-mono text-white/70 text-sm">Exposure to tech industry professionals and opportunities</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="group overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
								<img
									src={imgStudents}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									alt="Students celebrating their achievements"
								/>
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
						Designed for Your Students' <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Success</span>
					</h2>
					<p className="font-mono text-white/80 text-lg font-light leading-relaxed max-w-2xl mx-auto">
						Join hundreds of students from across Northern Ireland for a day of coding, creativity, and competition that they'll never forget.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Link 
							to="/perks"
							className="relative font-mono text-gray-300 text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-black transition-all duration-300 hover:scale-105 cursor-pointer inline-block"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-[length:300%_100%] animate-[gradient_3s_ease-in-out_infinite] p-[2px]">
								<div className="w-full h-full bg-black"></div>
							</div>
							<div className="relative z-10">
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">See the Perks →</span>
							</div>
						</Link>
						<Link 
							to="/competition"
							className="relative font-mono text-gray-300 text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-black transition-all duration-300 hover:scale-105 cursor-pointer inline-block"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-[length:300%_100%] animate-[gradient_3s_ease-in-out_infinite] p-[2px]">
								<div className="w-full h-full bg-black"></div>
							</div>
							<div className="relative z-10">
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">Learn More →</span>
							</div>
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Teachers;
