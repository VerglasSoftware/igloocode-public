import { Red_Hat_Mono } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import Layout, { siteTitle } from "../../components/public/layout";
import imgCosmo from "../../public/images/IMG_6195.png";
import imgHands from "../../public/images/IMG_6559.png";
const red_hat_mono = Red_Hat_Mono({ subsets: ["latin"] });

function Index() {
	return (
		<Layout>
			<Head>
				<title>Get involved - {siteTitle}</title>
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
				<h1 className={`${red_hat_mono.className} w-fit text-transparent text-7xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-3`}>Get involved</h1>
				<p className={`${red_hat_mono.className} text-white text-3xl`}>{"< a worthwhile experience for all />"}</p>
			</section>
			<div className="flex w-screen items-center bg-zinc-900 flex-col" id="content">
				<section className="py-20 w-9/12 max-w-screen-lg justify-start">
					<div className="relative top-[-3rem]">
						<span className={`${red_hat_mono.className} text-gray-400`}>
							<a href="/" className="hover:underline text-blue-500">
								Home
							</a>{" "}
							· Get involved
						</span>
					</div>
					<div id="about">
						<div className="grid grid-cols-2 gap-12">
							<div className="flex flex-col justify-center">
								<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium`}>
									for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">teachers</span>.
								</h2>
								<Image src={imgHands} className="w-full h-[24rem] shadow-md object-cover my-6" />
								<p className={`${red_hat_mono.className} text-white text-center text-md font-thin pt-3`}>
									Give your students a day out to practice their skills in the real world, while making new friends and getting a first-hand insight to the industry.
								</p>
								<Link href="/getinvolved/teachers" className={`${red_hat_mono.className} text-white hover:underline text-xl mt-4 border-[1px] border-gray-400 p-2 w-full text-center`}>
									ENTER YOUR SCHOOL
								</Link>
							</div>
							<div className="flex flex-col justify-center">
								<h2 className={`${red_hat_mono.className} text-white text-4xl font-medium`}>
									for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">sixth formers</span>.
								</h2>
								<Image src={imgCosmo} className="w-full h-[24rem] shadow-md object-cover my-6" />
								<p className={`${red_hat_mono.className} text-white text-center text-md font-thin pt-3`}>
									We're looking for keen sixth formers with a passion for IT and programming to give us a hand on the big day. Think you have what it takes?
								</p>
								<Link href="/getinvolved/sixthform" className={`${red_hat_mono.className} text-white hover:underline text-xl mt-4 border-[1px] border-gray-400 p-2 w-full text-center`}>
									JOIN THE TEAM
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
			<section className="bg-hero bg-cover bg-sat flex items-center flex-col">
				<div className="py-16 w-9/12 max-w-screen-lg flex items-center justify-center flex-col">
					<p className={`${red_hat_mono.className} text-white text-4xl font-medium`}>
						designed for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">enjoyment</span>.
					</p>
					<Link href="/perks" className={`${red_hat_mono.className} text-white hover:underline text-xl mt-4 border-[1px] border-gray-400 p-2 w-1/3 text-center`}>
						PERKS FOR YOU
					</Link>
				</div>
			</section>
		</Layout>
	);
}

export default Index;
