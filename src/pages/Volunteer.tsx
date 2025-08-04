import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import Layout from '@components/Layout'
import { Calendar, Users, Clock, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react'

function Volunteer(): JSX.Element {
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
				<title>Volunteer Applications - IglooCode</title>
				<meta name="description" content="Volunteer applications for IglooCode 2026. Applications will open closer to the event date. Check back soon!" />
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
				<div className="flex flex-col items-center mb-8 px-4">
					<h1 className="font-mono text-transparent text-6xl sm:text-8xl md:text-9xl lg:text-[8rem] font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-4 hover:scale-105 transition-transform duration-700 ease-out cursor-default text-center">
						Volunteer
					</h1>
					
					<div className="mb-8 px-4 w-full flex justify-center">
						<div className="max-w-4xl">
							<div className="flex items-center justify-center text-center">
								<Typewriter
									options={{
										strings: ["< applications not open yet />", "< check back soon />", "< we'll be in touch />"],
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
				</div>


			</section>

			<div className="bg-zinc-900" id="content">
				<section className="flex items-center flex-col py-24">
					<div className="w-11/12 sm:w-9/12 max-w-screen-lg space-y-20">
						
						<div className="text-center space-y-6">
							<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
								Applications Not <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Open Yet</span>
							</h2>
							<p className="font-mono text-white/80 text-lg font-light leading-relaxed max-w-3xl mx-auto">
								We're not quite ready to start accepting volunteer applications for IglooCode 2026. Applications will open closer to the event date.
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							<div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm p-8 border border-amber-500/20 space-y-6">
								<div className="flex items-center gap-3 mb-4">
									<Clock className="w-6 h-6 text-amber-400" />
									<h3 className="font-mono text-white text-2xl font-semibold">When Will Applications Open?</h3>
								</div>
								<p className="font-mono text-white/80 text-lg font-light leading-relaxed">
									Volunteer applications typically open 6-8 months before the event. We'll announce the opening date on our social media channels and update this page.
								</p>
								<div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
									<p className="font-mono text-amber-300 text-sm font-light leading-relaxed">
										💡 <strong>Pro tip:</strong> Follow us on social media to be the first to know when applications open!
									</p>
								</div>
							</div>
							
							<div className="bg-gradient-to-br from-purple-500/10 to-cyan-400/10 backdrop-blur-sm p-8 border border-purple-500/20 space-y-6">
								<div className="flex items-center gap-3 mb-4">
									<CheckCircle className="w-6 h-6 text-purple-400" />
									<h3 className="font-mono text-white text-2xl font-semibold">What You Can Do Now</h3>
								</div>
								<div className="space-y-4">
									<div className="flex items-start gap-3">
										<div className="bg-purple-500/20 border border-purple-500/30 w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 mt-1">
											<span className="font-mono text-purple-400 text-xs font-medium">1</span>
										</div>
										<p className="font-mono text-white/80 text-sm font-light leading-relaxed">
											Read about what volunteering involves on our dedicated page
										</p>
									</div>
									<div className="flex items-start gap-3">
										<div className="bg-cyan-500/20 border border-cyan-500/30 w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 mt-1">
											<span className="font-mono text-cyan-400 text-xs font-medium">2</span>
										</div>
										<p className="font-mono text-white/80 text-sm font-light leading-relaxed">
											Speak to your IT or Careers teacher about your interest
										</p>
									</div>
									<div className="flex items-start gap-3">
										<div className="bg-purple-500/20 border border-purple-500/30 w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0 mt-1">
											<span className="font-mono text-purple-400 text-xs font-medium">3</span>
										</div>
										<p className="font-mono text-white/80 text-sm font-light leading-relaxed">
											Check that your school allows volunteering days
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-cyan-400/20 to-purple-400/20 blur-lg"></div>
							<div className="relative bg-zinc-800/70 backdrop-blur-sm p-12 border border-zinc-700/50 shadow-2xl">
								<div className="text-center mb-6">
									<AlertCircle className="w-12 h-12 text-orange-400 mx-auto mb-4" />
								</div>
								<h3 className="font-mono text-white text-2xl sm:text-3xl font-medium leading-tight mb-6 text-center">
									Important <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Information</span>
								</h3>
								<div className="space-y-6 max-w-4xl mx-auto">
									<p className="font-mono text-white/80 text-lg font-light leading-relaxed text-center">
										Volunteer positions are limited and applications are processed on a first-come, first-served basis. When applications do open, we recommend applying as soon as possible.
									</p>
									<div className="grid md:grid-cols-2 gap-6 mt-8">
										<div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
											<h4 className="font-mono text-blue-300 text-lg font-medium mb-3">Requirements Reminder</h4>
											<ul className="space-y-2 text-sm">
												<li className="font-mono text-white/70">• Must be in sixth form (Year 13-14)</li>
												<li className="font-mono text-white/70">• School permission required</li>
												<li className="font-mono text-white/70">• Interest in technology/computing</li>
												<li className="font-mono text-white/70">• Good communication skills</li>
											</ul>
										</div>
										<div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
											<h4 className="font-mono text-green-300 text-lg font-medium mb-3">What's Provided</h4>
											<ul className="space-y-2 text-sm">
												<li className="font-mono text-white/70">• Full training and support</li>
												<li className="font-mono text-white/70">• Free lunch and refreshments</li>
												<li className="font-mono text-white/70">• Volunteering certificate</li>
												<li className="font-mono text-white/70">• CV/UCAS experience</li>
											</ul>
										</div>
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
				<div className="w-11/12 sm:w-9/12 max-w-screen-lg text-center space-y-8">
					<h2 className="font-mono text-white text-3xl sm:text-4xl font-medium leading-tight">
						Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Updated</span>
					</h2>
					<p className="font-mono text-white/80 text-lg font-light leading-relaxed max-w-2xl mx-auto">
						We'll announce when volunteer applications open. In the meantime, learn more about what volunteering at IglooCode involves.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Link 
							to="/getinvolved/sixthform"
							className="relative font-mono text-gray-300 text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-black transition-all duration-300 hover:scale-105 cursor-pointer inline-block"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-[length:300%_100%] animate-[gradient_3s_ease-in-out_infinite] p-[2px]">
								<div className="w-full h-full bg-black"></div>
							</div>
							<div className="relative z-10">
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">Volunteering Info →</span>
							</div>
						</Link>
						<Link 
							to="/ourstory"
							className="relative font-mono text-gray-300 text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-black transition-all duration-300 hover:scale-105 cursor-pointer inline-block"
						>
							<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-[length:300%_100%] animate-[gradient_3s_ease-in-out_infinite] p-[2px]">
								<div className="w-full h-full bg-black"></div>
							</div>
							<div className="relative z-10">
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">Our Story →</span>
							</div>
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Volunteer;
