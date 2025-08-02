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
				className="w-screen min-h-[60vh] bg-hero bg-cover flex flex-col justify-end items-left relative pl-6 pr-6 sm:pl-24 pb-6"
				style={{ backgroundBlendMode: "normal, saturation" }}
				id="hero">
				<h1 className="font-mono w-fit text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-3">For teachers</h1>
				<p className="font-mono text-white text-3xl">{"< bring your students for an adventure />"}</p>
			</section>
			
			<div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
				<section className="py-20 w-9/12 max-w-screen-lg justify-start">
					<div className="relative top-[-3rem]">
						<span className="font-mono text-gray-400">
							<Link to="/" className="hover:underline text-blue-500">
								Home
							</Link>{" "}
							·{" "}
							<Link to="/getinvolved" className="hover:underline text-blue-500">
								Get involved
							</Link>{" "}
							· For teachers
						</span>
					</div>
					
					<div id="about">
						<div className="grid grid-cols-2 gap-12">
							<div className="flex flex-col justify-center">
								<h2 className="font-mono text-white text-4xl font-medium">
									give your students a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">real-world</span> experience.
								</h2>
								<p className="font-mono text-white text-md font-thin pt-3">
									IglooCode offers your students a unique opportunity to practice their programming skills in a competitive, collaborative environment alongside peers from across Northern Ireland.
								</p>
								<p className="font-mono text-white text-md font-thin pt-3">
									Our event is designed to complement classroom learning while giving students hands-on experience with industry-standard tools and technologies. They'll work in teams, solve real problems, and gain valuable insights into the tech industry.
								</p>
								<p className="font-mono text-white text-md font-thin pt-3">
									<strong className="font-semibold">What's included:</strong> Professional mentorship, industry guest speakers, free lunch, and take-home resources for continued learning.
								</p>
							</div>
							<div className="flex justify-center items-center">
								<img src={imgHands} className="w-full h-[24rem] shadow-md object-cover" alt="Students collaborating" />
							</div>
						</div>
						
						<div className="grid grid-cols-1 gap-12 mt-16">
							<div className="flex flex-col justify-center items-center text-center">
								<h2 className="font-mono text-white text-4xl font-medium mb-6">
									ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">register</span> your school?
								</h2>
								<p className="font-mono text-white text-md font-thin mb-6 max-w-3xl">
									Give your students a day out to practice their skills in the real world, while making new friends and getting a first-hand insight into the tech industry. 
									Registration is free and we provide everything your students need for the day.
								</p>
								<Link 
									to="/f/school-interest" 
									className="font-mono text-white hover:underline text-xl mt-4 border-[1px] border-gray-400 p-4 px-8 text-center hover:bg-gray-800 transition-colors"
								>
									REGISTER YOUR SCHOOL NOW
								</Link>
							</div>
						</div>
						
						<div className="grid grid-cols-3 gap-8 mt-16">
							<div className="flex flex-col items-center text-center p-6 bg-zinc-800 rounded-lg">
								<div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
									<span className="font-mono text-white text-2xl font-bold">1</span>
								</div>
								<h3 className="font-mono text-white text-lg font-semibold mb-2">Register Interest</h3>
								<p className="font-mono text-gray-300 text-sm">
									Fill out our school interest form to let us know you'd like to participate.
								</p>
							</div>
							<div className="flex flex-col items-center text-center p-6 bg-zinc-800 rounded-lg">
								<div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mb-4">
									<span className="font-mono text-white text-2xl font-bold">2</span>
								</div>
								<h3 className="font-mono text-white text-lg font-semibold mb-2">Receive Details</h3>
								<p className="font-mono text-gray-300 text-sm">
									We'll send you all the information you need including date, venue, and student requirements.
								</p>
							</div>
							<div className="flex flex-col items-center text-center p-6 bg-zinc-800 rounded-lg">
								<div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
									<span className="font-mono text-white text-2xl font-bold">3</span>
								</div>
								<h3 className="font-mono text-white text-lg font-semibold mb-2">Attend Event</h3>
								<p className="font-mono text-gray-300 text-sm">
									Bring your students for an unforgettable day of coding, collaboration, and competition.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
			
			<section className="bg-hero bg-cover bg-sat flex items-center flex-col">
				<div className="py-16 w-9/12 max-w-screen-lg flex items-center justify-center flex-col">
					<p className="font-mono text-white text-4xl font-medium">
						designed for your students' <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">success</span>.
					</p>
					<Link to="/perks" className="font-mono text-white hover:underline text-xl mt-4 border-[1px] border-gray-400 p-2 w-1/3 text-center">
						SEE THE PERKS
					</Link>
				</div>
			</section>
		</Layout>
	);
}

export default Teachers;
