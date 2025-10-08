import { Red_Hat_Mono } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import { FiBook, FiBriefcase, FiCode, FiCoffee, FiLink, FiMinimize } from "react-icons/fi";
import { SiHandshake } from "react-icons/si";
import Layout, { siteTitle } from "../components/public/layout";
import imgMacSB from "../public/images/DSC01974.jpeg";
import imgRachelle from "../public/images/IMG_0693.jpg";
const red_hat_mono = Red_Hat_Mono({ subsets: ["latin"] });

function Perks() {
	return (
		<Layout>
			<Head>
				<title>Perks for you - {siteTitle}</title>
				<meta name="theme-color" content="#171717" />
			</Head>
			<Script id="update-header">
				{`window.onscroll = function() {
					var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
					var navbar = document.getElementById("navbar");
					if (scrollTop >= document.getElementById("content").offsetTop) {
						navbar.classList.add("bg-zinc-900");
						navbar.classList.add("bg-sat");
					} else {
						navbar.classList.remove("bg-zinc-900");
						navbar.classList.remove("bg-sat");
					}
				}`}
			</Script>
			<section
				className="w-screen min-h-[60vh] bg-hero bg-cover flex flex-col justify-end items-left relative pl-6 pr-6 sm:pl-24 pb-6"
				style={{ backgroundBlendMode: "normal, saturation" }}
				id="hero">
				<h1 className={`${red_hat_mono.className} w-fit text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-3`}>Perks for you</h1>
				<p className={`${red_hat_mono.className} text-white text-3xl`}>{"< what'll you get out of it? />"}</p>
			</section>
			<div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
				<section className="py-20 w-9/12 max-w-screen-lg justify-start">
					<div className="relative top-[-3rem]">
						<span className={`${red_hat_mono.className} text-gray-400`}>
							<a href="/" className="hover:underline text-blue-500">
								Home
							</a>{" "}
							· Perks for you
						</span>
					</div>
					<div id="about">
						<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium mb-6`}>
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">skills</span>.
						</h2>
						<div className="grid grid-cols-2 gap-12">
							<div className="flex flex-col justify-center">
								<div className="flex flex-row items-center mb-6">
									<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
										<FiCode className="text-yellow-400 w-7 h-7" />
									</div>
									<h2 className={`${red_hat_mono.className} text-white text-3xl`}>
										coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">experience</span>.
									</h2>
								</div>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									There are going to be people better than you at IglooCode; there are going to be people worse than you; but that doesn't matter. We want to make sure you test your
									own skills and find <em>your</em> passion.
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									Spend the entire competition working on tasks you already know how to do, or experiment a little and try something new - it's totally up to you!
								</p>
							</div>
							<div className="flex flex-col justify-center">
								<div className="flex flex-row items-center mb-6">
									<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
										<SiHandshake className="text-red-600 w-7 h-7" />
									</div>
									<h2 className={`${red_hat_mono.className} text-white text-3xl`}>
										teamworking <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">skills</span>.
									</h2>
								</div>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									Teamwork is one of the most crucial and desired skills within the IT industry - it's something you need to be able to do to succeed.
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									At IglooCode, we'll be testing your ability to work together as a team with your friends to be productive as possible, while also interacting and working with those
									you've never met before - time to get out of your comfort zone!
								</p>
							</div>
							<div className="flex flex-col justify-center">
								<div className="flex flex-row items-tcenter mb-6">
									<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
										<FiMinimize className="text-green-600 w-7 h-7" />
									</div>
									<h2 className={`${red_hat_mono.className} text-white text-3xl`}>
										working under <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">pressure</span>.
									</h2>
								</div>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									Coding under a competitive environment isn't easy! It'll get stressful, and tension will rise, but we want to watch you rise to the battle and perform the best you
									possibly can!
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									As the competition goes on, you'll find ways to improve your concentration and efficiency, making it much easier to work and get as many tasks completed as possible
									- a useful skill when working to deadlines!
								</p>
							</div>
							<div className="flex flex-col justify-center">
								<div className="flex flex-row items-center mb-6">
									<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
										<FiCoffee className="text-sky-600 w-7 h-7" />
									</div>
									<h2 className={`${red_hat_mono.className} text-white text-3xl`}>
										problem <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">solving</span>.
									</h2>
								</div>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									Some of our tasks will be really easy - they'll be the things you learned in the first week of P6 ICT class. Don't be fooled, though - many tasks will be nothing
									like anything you've experienced before.
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}></p>
							</div>
						</div>
					</div>
				</section>
			</div>
			<section className="bg-hero bg-cover bg-sat flex items-center flex-col">
				<div className="py-16 w-9/12 max-w-screen-lg flex items-center justify-center flex-col">
					<p className={`${red_hat_mono.className} text-white text-4xl font-medium`}>
						the people behind it <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">all</span>.
					</p>
					<Link href="/team" className={`${red_hat_mono.className} text-white hover:underline text-xl mt-4 border-[1px] border-gray-400 p-2 w-1/3 text-center`}>
						MEET THE TEAM
					</Link>
				</div>
			</section>
			<div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
				<section className="py-20 w-9/12 max-w-screen-lg justify-start">
					<div id="about">
						<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium mb-6`}>
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">experiences</span>.
						</h2>
						<div className="grid grid-cols-2 gap-12">
							<div>
								<div className="flex flex-col justify-center pb-12">
									<div className="flex flex-row items-center mb-6">
										<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
											<FiBriefcase className="text-pink-400 w-7 h-7" />
										</div>
										<h2 className={`${red_hat_mono.className} text-white text-3xl`}>
											industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">talks</span>.
										</h2>
									</div>
									<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
										We have secured the opportunity to hear from industry experts, allowing you to learn top tips on how to enter and succeed in the industry. Grow your budding
										passion with the field and discover what you're able to do with your newly developed skills.
									</p>
									<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
										Hear from experts from Liberty IT, one of the biggest tech companies in Belfast and Dublin. Uncover career opportunities, next steps after KS3 and options with
										LIT themselves.
									</p>
								</div>
								<div className="flex flex-col justify-center">
									<div className="flex flex-row items-center mb-6">
										<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
											<FiLink className="text-orange-400 w-7 h-7" />
										</div>
										<h2 className={`${red_hat_mono.className} text-white text-3xl`}>
											cross-<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">community</span>.
										</h2>
									</div>
									<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
										The inspiration for this competition originally came from when we met on a Cyber Security course, coming from all parts of Northern Ireland (and even a few
										people from England).
									</p>
									<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
										{" "}
										Our aim is to bring people together from across the country to make new friends through coding, in the same way we were able to.
									</p>
								</div>
							</div>
							<div>
								<Image src={imgRachelle} className="w-full h-[43rem] shadow-md object-cover" />
							</div>
						</div>
					</div>
					<div id="about" className="mt-20 flex flex-col">
						<div className="grid grid-cols-2 gap-12">
							<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium mb-6 self-end`}>
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">rewards</span>.
							</h2>
						</div>
						<div className="grid grid-cols-2 gap-12">
							<div>
								<Image src={imgMacSB} className="w-full h-[41rem] shadow-md object-cover" />
							</div>
							<div>
								<div className="flex flex-col justify-center pb-12">
									<div className="flex flex-row items-center mb-6">
										<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
											<FiBriefcase className="text-purple-400 w-7 h-7" />
										</div>
										<h2 className={`${red_hat_mono.className} text-white text-3xl`}>
											amazing <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">prizes</span>.
										</h2>
									</div>
									<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
										Thinking about going for the win? If you succeed, you'll be going home victorious, along with state-of-the-art Arduino starter kits, worth £100 each,
										to further enhance your interest and knowledge of STEM and IT.
									</p>
									<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
										Forever go down in history as the first winners of IglooCode - what is there to lose?!
									</p>
								</div>
								<div className="flex flex-col justify-center">
									<div className="flex flex-row items-center mb-6">
										<div className="bg-[#111113] w-16 h-16 flex items-center justify-center rounded-full mr-5 flex-none">
											<FiBook className="text-blue-400 w-7 h-7" />
										</div>
										<h2 className={`${red_hat_mono.className} text-white text-3xl`}>
											tutorial <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">booklets</span>.
										</h2>
									</div>
									<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
										Don't worry - we're not leaving you in the dark! As part of our goal to make sure IglooCode improves your skills, we'll be sending out information booklets to
										every school involved, with tutorials on how to get started and up to speed on new topics.
									</p>
									<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
										Take these home or work through them with your teachers or mentors at school, and maybe you could be coming home with the victory in 2024!
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
}

export default Perks;
