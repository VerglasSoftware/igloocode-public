import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Layout from '@components/Layout'

// Import team images
import imgAideen from '/images/team/aideen.png'
import imgAxel from '/images/team/axel.png'
import imgBenF from '/images/team/benf.png'
import imgBenT from '/images/team/bent.png'
import imgDan from '/images/team/dan.png'
import imgDylan from '/images/team/dylan.png'
import imgEliza from '/images/team/eliza.png'
import imgEmma from '/images/team/emma.png'
import imgGrainne from '/images/team/grainne.png'
import imgJake from '/images/team/jake.png'
import imgJosephi from '/images/team/josephi.png'
import imgLJ from '/images/team/lj.png'
import imgMa from '/images/team/ma.png'
import imgMatthew from '/images/team/matthew.png'
import imgOliver from '/images/team/oliver.png'
import imgRyan from '/images/team/ryan.png'
import imgConnlaith from '/images/team/connlaith.png'
import imgChris from '/images/team/chris.png'
import imgKayla from '/images/team/kayla.png'
import imgHollie from '/images/hollie.jpg'
import imgBlank from '/images/pfp.webp'

function Team2022(): JSX.Element {
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
				<title>Meet the team - IglooCode</title>
				<meta name="theme-color" content="#171717" />
			</Helmet>
			
			<section
				className="w-screen min-h-[60vh] bg-hero bg-cover flex flex-col justify-end items-left relative pl-6 pr-6 sm:pl-24 pb-6"
				style={{ backgroundBlendMode: "normal, saturation" }}
				id="hero">
				<h1 className="font-mono w-fit text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-3">Our team</h1>
				<p className="font-mono text-white text-3xl">{"< meet the people behind it all />"}</p>
			</section>
			
			<div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
				<section className="py-20 w-9/12 max-w-screen-lg justify-start">
					<div className="relative top-[-3rem]">
						<span className="font-mono text-gray-400">
							<Link to="/" className="hover:underline text-blue-500">
								Home
							</Link>{" "}
							· Our team
						</span>
					</div>
					<div id="organisers">
						<h2 className="font-mono text-white text-4xl font-medium mb-2">
							the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">organisers</span>.
						</h2>
						<p className="font-mono text-white text-lg font-light mb-12">
							The organisers are the people who came up with the idea of IglooCode, and are responsible for relations between external parties, the planning of the event and overall
							project management.
						</p>
						<div className="grid grid-cols-3 gap-28">
							<div className="flex flex-col justify-center items-center">
								<img src={imgEmma} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Emma" />
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgDan} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Dan" />
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgAideen} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Aideen" />
							</div>
						</div>
						<div className="grid grid-cols-3 gap-28">
							<div className="flex flex-col justify-top items-center">
								<p className="font-mono text-white text-2xl font-medium mt-4">Emma</p>
								<p className="font-mono text-gray-200 text-sm font-light mt-2 text-center">
									I first found my love of coding when I went to my school's coding club in Year 9. I've been building my skills and making new friends through the subject ever
									since. Now that I'm in Sixth Form I have restarted my school's Code Club and am currently running it as a way to ignite a passion for IT in younger students as the
									same was done for me.
								</p>
							</div>
							<div className="flex flex-col justify-top items-center">
								<p className="font-mono text-white text-2xl font-medium mt-4">Dan</p>
								<p className="font-mono text-gray-200 text-sm font-light mt-2 text-center">
									Ever since my mum told me that websites were made with code when I was in P2, I've been hooked. Throughout the past 10 years, I've been committed to developing my
									skills and experiences with different programming languages. I help to run the Code Club in my school, and in the next few years I dream of studying Computer
									Science at the University of Reykjavík.
								</p>
							</div>
							<div className="flex flex-col justify-top items-center">
								<p className="font-mono text-white text-2xl font-medium mt-4">Aideen</p>
								<p className="font-mono text-gray-200 text-sm font-light mt-2 text-center">
									I've been passionate about technology and coding since primary school; so much so that I was called the ICT Co-ordinator by teachers. When I'm not at school
									volunteering with the Code Club or the Rocket Club, I'm a member of the NICCY Youth Panel, where I have represented young people from NI in Brussels regarding
									Children's Digital Rights.
								</p>
							</div>
						</div>
					</div>
					<div id="helpers" className="mt-16">
						<h2 className="font-mono text-white text-4xl font-medium mb-2">
							the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">staff</span>.
						</h2>
						<p className="font-mono text-white text-lg font-light mb-12">
							The staff are the people who have helped with the planning of IglooCode, from name suggestions and graphic design to website and application development.
						</p>
						<div className="grid grid-cols-4 gap-28">
							<div className="flex flex-col justify-center items-center">
								<img src={imgJake} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Jake" />
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgOliver} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Oliver" />
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgRyan} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Ryan" />
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgJosephi} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Josephi" />
							</div>
						</div>
						<div className="grid grid-cols-4 gap-28">
							<div className="flex flex-col justify-top items-center">
								<p className="font-mono text-white text-2xl font-medium mt-4">Jake</p>
								<p className="font-mono text-gray-200 text-sm font-light mt-2 text-center">
									I love programming. I use languages like C/C++, Java, C# and Python for creating apps, scripts and programs. I also have interests in hardware and music.
								</p>
							</div>
							<div className="flex flex-col justify-top items-center">
								<p className="font-mono text-white text-2xl font-medium mt-4">Oliver</p>
								<p className="font-mono text-gray-200 text-sm font-light mt-2 text-center">
									I have always loved coding and in my spare time find ways to improve my skills, like using JavaScript to create bots for apps. Meeting new people with the same
									interests has been phenomenal for my growth in the subject.
								</p>
							</div>
							<div className="flex flex-col justify-top items-center">
								<p className="font-mono text-white text-2xl font-medium mt-4">Ryan</p>
								<p className="font-mono text-gray-200 text-sm font-light mt-2 text-center break-all">
									You don't have to be IT crazy to be tech savvy. You just have to be crazy. Take my advice and grab this oppurtunity
									=MzNgMmNgMmNgEjNgIjNgAjMgUjNggjNgQzNgAjMgkzNgIjN. £10 to the first under 16 that can decode this.
								</p>
							</div>
							<div className="flex flex-col justify-top items-center">
								<p className="font-mono text-white text-2xl font-medium mt-4">Josephi</p>
								<p className="font-mono text-gray-200 text-sm font-light mt-2 text-center">
									I have always loved everything related to computers, from graphic design to coding. I spend my time indulging in hobbies like gaming or video editing and believe
									these activities will behoove me.
								</p>
							</div>
						</div>
					</div>
					<div id="mentors" className="mt-16">
						<h2 className="font-mono text-white text-4xl font-medium mb-2">
							the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">mentors</span>.
						</h2>
						<p className="font-mono text-white text-lg font-light mb-12">
							The mentors are the people that will be on the floor at IglooCode - we'll be bringing one mentor per team to make sure the event runs smoothly, and to help with any
							problems the students may have.
						</p>
						<div className="grid grid-cols-5 gap-28 gap-y-8">
							<div className="flex flex-col justify-center items-center">
								<img src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Seth" />
								<p className="font-mono text-white text-2xl font-medium mt-4">Seth</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Calvin" />
								<p className="font-mono text-white text-2xl font-medium mt-4">Calvin</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgMa} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Ma" />
								<p className="font-mono text-white text-2xl font-medium mt-4">Ma</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgKayla} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Kayla" />
								<p className="font-mono text-white text-2xl font-medium mt-4">Kayla</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgChris} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Chris" />
								<p className="font-mono text-white text-2xl font-medium mt-4">Chris</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgEliza} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Eliza" />
								<p className="font-mono text-white text-2xl font-medium mt-4">Eliza</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Samuel B" />
								<p className="font-mono text-white text-2xl font-medium mt-4">Samuel B</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgBenT} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Ben T" />
								<p className="font-mono text-white text-2xl font-medium mt-4">Ben T</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgBenF} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Ben F" />
								<p className="font-mono text-white text-2xl font-medium mt-4">Ben F</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgDylan} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Dylan" />
								<p className="font-mono text-white text-2xl font-medium mt-4">Dylan</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Eve" />
								<p className="font-mono text-white text-2xl font-medium mt-4">Eve</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgLJ} className="w-full aspect-square rounded-full shadow-md object-cover" alt="LJ" />
								<p className="font-mono text-white text-2xl font-medium mt-4">LJ</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgHollie} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Hollie" />
								<p className="font-mono text-white text-2xl font-medium mt-4">Hollie</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgConnlaith} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Connlaith" />
								<p className="font-mono text-white text-2xl font-medium mt-4">Connlaith</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgMatthew} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Matthew" />
								<p className="font-mono text-white text-2xl font-medium mt-4">Matthew</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgGrainne} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Gráinne" />
								<p className="font-mono text-white text-2xl font-medium mt-4">Gráinne</p>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img src={imgAxel} className="w-full aspect-square rounded-full shadow-md object-cover" alt="Axel" />
								<p className="font-mono text-white text-2xl font-medium mt-4">Axel</p>
							</div>
						</div>
						<div className="flex justify-center items-center mt-6">
							<p className="font-mono text-white text-md font-light mt-4">
								Can you see yourself in our team?{" "}
								<Link className="text-sky-500 hover:underline hover:text-sky-600" to="/getinvolved/sixthform">
									Join now!
								</Link>
							</p>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
}

export default Team2022;
