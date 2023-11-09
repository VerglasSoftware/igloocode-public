import { Red_Hat_Mono } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Layout, { siteTitle } from "../components/public/layout";

import imgAideen from "../public/images/team/aideen.png";
import imgAxel from "../public/images/team/axel.png";
import imgBenF from "../public/images/team/benf.png";
import imgBenT from "../public/images/team/bent.png";
import imgDan from "../public/images/team/dan.png";
import imgDylan from "../public/images/team/dylan.png";
import imgEliza from "../public/images/team/eliza.png";
import imgEmma from "../public/images/team/emma.png";
import imgGrainne from "../public/images/team/grainne.png";
import imgJake from "../public/images/team/jake.png";
import imgJosephi from "../public/images/team/josephi.png";
import imgLJ from "../public/images/team/lj.png";
import imgMa from "../public/images/team/ma.png";
import imgMatthew from "../public/images/team/matthew.png";
import imgOliver from "../public/images/team/oliver.png";
import imgRyan from "../public/images/team/ryan.png";
import imgConnlaith from "../public/images/team/connlaith.png";
import imgChris from "../public/images/team/chris.png";
import imgKayla from "../public/images/team/kayla.png";
import imgHollie from "../public/images/hollie.jpg";

import Script from "next/script";
import imgBlank from "../public/images/pfp.webp";
const red_hat_mono = Red_Hat_Mono({ subsets: ["latin"] });

function Team() {
	return (
		<Layout>
			<Head>
				<title>Meet the team - {siteTitle}</title>
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
				<h1 className={`${red_hat_mono.className} w-fit text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-3`}>Our team</h1>
				<p className={`${red_hat_mono.className} text-white text-3xl`}>{"< meet the people behind it all />"}</p>
			</section>
			<div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
				<section className="py-20 w-9/12 max-w-screen-lg justify-start">
					<div className="relative top-[-3rem]">
						<span className={`${red_hat_mono.className} text-gray-400`}>
							<a href="/" className="hover:underline text-blue-500">
								Home
							</a>{" "}
							· Our team
						</span>
					</div>
					<div id="organisers">
						<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium mb-2`}>
							the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">event coordinators</span>.
						</h2>
						<p className={`${red_hat_mono.className} text-white text-lg font-light mb-12`}>
							the event coordinators are made up of the verglas board of directors and outreach committee. they are responsible for relations between external parties, the planning of the event and overall project management.
						</p>

						<div className="flex flex-col gap-y-4">
							<div className="flex flex-row justify-start items-center">
								<Image src={imgDan} className="aspect-square rounded-full shadow-md object-cover w-40 h-40" />
								<div className="flex flex-col ms-8">
									<p className={`${red_hat_mono.className} text-white text-2xl font-medium`}>Dan <span className="brightness-50">– Lead Event Coordinator</span></p>
									<p className={`${red_hat_mono.className} text-gray-200 text-sm font-light mt-2`}>
										Ever since my mum told me that websites were made with code when I was in P2, I've been hooked. Throughout the past 10 years, I've been committed to developing my
										skills and experiences with different programming languages. I help to run the Code Club in my school, and in the next few years I dream of studying Computer
										Science at the University of Reykjavík.
									</p>
								</div>
							</div>
							<div className="flex flex-row justify-start items-center">
								<Image src={imgAideen} className="aspect-square rounded-full shadow-md object-cover w-40 h-40" />
								<div className="flex flex-col ms-8">
									<p className={`${red_hat_mono.className} text-white text-2xl font-medium`}>Aideen <span className="brightness-50">– Lead Speaker</span></p>
									<p className={`${red_hat_mono.className} text-gray-200 text-sm font-light mt-2`}>
										I've been passionate about technology and coding since primary school; so much so that I was called the ICT Co-ordinator by teachers. When I’m not at school
										volunteering with the Code Club or the Rocket Club, I'm a member of the NICCY Youth Panel, where I have represented young people from NI in Brussels regarding
										Children's Digital Rights.
									</p>
								</div>
							</div>
							<div className="flex flex-row justify-start items-center">
								<Image src={imgJake} className="aspect-square rounded-full shadow-md object-cover w-40" />
								<div className="flex flex-col ms-8">
									<p className={`${red_hat_mono.className} text-white text-2xl font-medium`}>Jake <span className="brightness-50">– Software Developer</span></p>
									<p className={`${red_hat_mono.className} text-gray-200 text-sm font-light mt-2`}>
										I love programming. I use languages like C/C++, Java, C# and Python for creating apps, scripts and programs. I also have interests in hardware and music.
									</p>
								</div>
							</div>
							<div className="flex flex-row justify-start items-center">
								<Image src={imgMa} className="aspect-square rounded-full shadow-md object-cover w-40" />
								<div className="flex flex-col ms-8">
									<p className={`${red_hat_mono.className} text-white text-2xl font-medium`}>Matthew H <span className="brightness-50">– Lead Photographer</span></p>
									<p className={`${red_hat_mono.className} text-gray-200 text-sm font-light mt-2`}>
										
									</p>
								</div>
							</div>
							<div className="flex flex-row justify-start items-center">
								<Image src={imgBlank} className="aspect-square rounded-full shadow-md object-cover w-40" />
								<div className="flex flex-col ms-8">
									<p className={`${red_hat_mono.className} text-white text-2xl font-medium`}>Samuel B</p>
									<p className={`${red_hat_mono.className} text-gray-200 text-sm font-light mt-2`}>
										I'm currently a full time software degree apprentice with Kainos studying part time at Ulster University. Tech has been a lifelong hobby of mine and I can't wait to put my skills to the test at IglooCode :)
									</p>
								</div>
							</div>
							<div className="flex flex-row justify-start items-center">
								<Image src={imgBlank} className="aspect-square rounded-full shadow-md object-cover w-40" />
								<div className="flex flex-col ms-8">
									<p className={`${red_hat_mono.className} text-white text-2xl font-medium`}>Autumn</p>
									<p className={`${red_hat_mono.className} text-gray-200 text-sm font-light mt-2`}>
										
									</p>
								</div>
							</div>
						</div>
					</div>
					<div id="volunteers" className="mt-16">
						<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium mb-2`}>
							the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">volunteers</span>.
						</h2>
						<p className={`${red_hat_mono.className} text-white text-lg font-light mb-12`}>
							The volunteers are the people that will be on the floor at IglooCode - we'll be bringing one mentor per team to make sure the event runs smoothly, and to help with any
							problems the students may have.
						</p>
						<div className="grid grid-cols-5 gap-28 gap-y-8">
							{/* <div className="flex flex-col justify-center items-center">
								<Image src={imgAxel} className="w-full aspect-square rounded-full shadow-md object-cover" />
								<p className={`${red_hat_mono.className} text-white text-2xl font-medium mt-4`}>Axel</p>
							</div> */}
							{/* <div className="flex flex-col justify-center items-center">
								<Image src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" />
								<p className={`${red_hat_mono.className} text-white text-2xl font-medium mt-4`}>Ben C</p>
							</div> */}
							<div className="flex flex-col justify-center items-center">
								<Image src={imgBenF} className="w-full aspect-square rounded-full shadow-md object-cover" />
								<p className={`${red_hat_mono.className} text-white text-2xl font-medium mt-4`}>Ben F</p>
							</div>
							{/* <div className="flex flex-col justify-center items-center">
								<Image src={imgBenT} className="w-full aspect-square rounded-full shadow-md object-cover" />
								<p className={`${red_hat_mono.className} text-white text-2xl font-medium mt-4`}>Ben T</p>
							</div> */}
							{/* <div className="flex flex-col justify-center items-center">
								<Image src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" />
								<p className={`${red_hat_mono.className} text-white text-2xl font-medium mt-4`}>Calvin</p>
							</div> */}
							{/* <div className="flex flex-col justify-center items-center">
								<Image src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" />
								<p className={`${red_hat_mono.className} text-white text-2xl font-medium mt-4`}>Crio</p>
							</div> */}
							{/* <div className="flex flex-col justify-center items-center">
								<Image src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" />
								<p className={`${red_hat_mono.className} text-white text-2xl font-medium mt-4`}>Daniel B</p>
							</div> */}
							{/* <div className="flex flex-col justify-center items-center">
								<Image src={imgDylan} className="w-full aspect-square rounded-full shadow-md object-cover" />
								<p className={`${red_hat_mono.className} text-white text-2xl font-medium mt-4`}>Dylan</p>
							</div> */}
							{/* <div className="flex flex-col justify-center items-center">
								<Image src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" />
								<p className={`${red_hat_mono.className} text-white text-2xl font-medium mt-4`}>Eve</p>
							</div> */}
							{/* <div className="flex flex-col justify-center items-center">
								<Image src={imgGrainne} className="w-full aspect-square rounded-full shadow-md object-cover" />
								<p className={`${red_hat_mono.className} text-white text-2xl font-medium mt-4`}>Gráinne</p>
							</div> */}
							{/* <div className="flex flex-col justify-center items-center">
								<Image src={imgLJ} className="w-full aspect-square rounded-full shadow-md object-cover" />
								<p className={`${red_hat_mono.className} text-white text-2xl font-medium mt-4`}>LJ</p>
							</div> */}
							{/* <div className="flex flex-col justify-center items-center">
								<Image src={imgMatthew} className="w-full aspect-square rounded-full shadow-md object-cover" />
								<p className={`${red_hat_mono.className} text-white text-2xl font-medium mt-4`}>Matthew</p>
							</div> */}
							{/* <div className="flex flex-col justify-center items-center">
								<Image src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" />
								<p className={`${red_hat_mono.className} text-white text-2xl font-medium mt-4`}>Odhran</p>
							</div> */}
							{/* <div className="flex flex-col justify-center items-center">
								<Image src={imgOliver} className="w-full aspect-square rounded-full shadow-md object-cover" />
								<p className={`${red_hat_mono.className} text-white text-2xl font-medium mt-4`}>Oliver</p>
							</div> */}
							{/* <div className="flex flex-col justify-center items-center">
								<Image src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" />
								<p className={`${red_hat_mono.className} text-white text-2xl font-medium mt-4`}>Sarah</p>
							</div> */}
							{/* <div className="flex flex-col justify-center items-center">
								<Image src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" />
								<p className={`${red_hat_mono.className} text-white text-2xl font-medium mt-4`}>Seth</p>
							</div> */}
							{/* <div className="flex flex-col justify-center items-center">
								<Image src={imgBlank} className="w-full aspect-square rounded-full shadow-md object-cover" />
								<p className={`${red_hat_mono.className} text-white text-2xl font-medium mt-4`}>Viv</p>
							</div> */}
						</div>
						<div className="flex justify-center items-center mt-6">
							<p className={`${red_hat_mono.className} text-white text-md font-light mt-4`}>
								Can you see yourself in our team?{" "}
								<a className="text-sky-500 hover:underline hover:text-sky-600" href="/getinvolved/sixthform">
									Join now!
								</a>
							</p>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
}

export default Team;
