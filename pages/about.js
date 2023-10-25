import { Red_Hat_Mono } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import Layout, { siteTitle } from "../components/public/layout";
import imgPeterFroggott from "../public/images/IMG_0673.jpg";
import imgOpenDay from "../public/images/IMG_3652.png";
import imgMacSB from "../public/images/DSC01776.jpg";
const red_hat_mono = Red_Hat_Mono({ subsets: ["latin"] });

function About() {
	return (
		<Layout>
			<Head>
				<title>Our story - {siteTitle}</title>
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
				<h1 className={`${red_hat_mono.className} w-fit text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-3`}>Our story</h1>
				<p className={`${red_hat_mono.className} text-white text-3xl`}>{"< connecting the youth of northern ireland through code />"}</p>
			</section>
			<div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
				<section className="py-20 w-9/12 max-w-screen-lg justify-start">
					<div className="relative top-[-3rem]">
						<span className={`${red_hat_mono.className} text-gray-400`}>
							<a href="/" className="hover:underline text-blue-500">
								Home
							</a>{" "}
							· Our story
						</span>
					</div>
					<div id="about">
						<div className="grid sm:grid-cols-3">
							<div className="col-span-2 sm:pr-16 flex flex-col justify-center">
								<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium mb-6`}>
									the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">beginning</span> of igloocode.
								</h2>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									Back in October 2022, three sixth form students from Ballymena and Belfast, had the idea to collaborate to organise a cross-community programming competition for aspiring IT students
									across Northern Ireland.
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									We met at QA's CyberFirst Advanced course during August 2022 - a week-long residential at QUB, where we became close friends both during and after the week.
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									It was an extremely moving experience coming together with people who shared the same interests as us, but also a phenomenal week of memories to look back on with
									new friends, proving that there is so much more to education than a constant stream of work.
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									Our goal is to encourage the next generation to get further involved in the industry, by spreading our love and passion for IT, but also to meet other like-minded individuals and have the opportunity to
									make lifelong friendships just like we did.
								</p>
							</div>
							<div className="flex flex-col justify-center  sm:block hidden">
								<Image src={imgOpenDay} className="w-full h-[31rem] shadow-md object-cover" />
							</div>
						</div>
						<div className="grid sm:grid-cols-3 mt-12">
							<div className="flex flex-col justif y-center  sm:block hidden">
								<Image src={imgPeterFroggott} className="w-full h-[26rem] shadow-md object-cover" style={{ objectPosition: "100% 70%" }} />
							</div>
							<div className="col-span-2 pl-16 flex flex-col justify-center">
								<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium mb-6`}>
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">success</span> at last.
								</h2>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									Throughout November 2022, we drafted basic plans for a CTF competition for schools, and sent emails to 65 secondary schools to gauge interest. After only a week we
									received responses from over 14 schools, totalling to almost 200 pupils interested in attending.
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									Then, we reached out to Liberty IT and Kainos who very kindly gave us a financial contribution to be able to run the event. In March 2023, after an early 6am start,
									we welcomed everyone to QUB's Computer Science Building for IglooCode.
								</p>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									Six hours of event later, we were relieved as IglooCode came to a close. With only minimal problems and some very valuable feedback from teachers and students alike,
									we were confident that IglooCode would become an annual event.
								</p>
							</div>
						</div>
						<div className="grid sm:grid-cols-3 mt-12">
							<div className="col-span-2 sm:pr-16 flex flex-col justify-center">
								<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium mb-6`}>
									a new <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">chapter</span>.
								</h2>
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									In May 2023, the main people involved in IglooCode decided to incorporate into a limited company, and we started work on releasing our highly-acclaimed competition
									software to teachers to use across the country for their own classes.
								</p>
								
								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									In August, we decided to rename our company to Verglas, and the shareholders elected a new Board of Directors and Outreach Committee of 2 sixth-formers and 3 first-year
									degree apprentices to be in charge of events such as IglooCode.
								</p>

								<p className={`${red_hat_mono.className} text-white text-md font-thin pt-3`}>
									IglooCode 2024 planning began in early October. We held a meeting to discuss improvements and plans for the next year, and we again started our annual process of onboarding
									schools, sponsors and volunteers. 
								</p>
							</div>
							<div className="flex flex-col justify-center sm:block hidden">
								<Image src={imgMacSB} className="w-full h-[25rem] shadow-md object-cover" />
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
		</Layout>
	);
}

export default About;
