import { Red_Hat_Mono } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout, { siteTitle } from "../components/public/layout";
import imgTeam from "../public/images/IMG_3652.png";
import imgEvent from "../public/images/DSC01776.jpg";
import { FiUsers, FiCalendar, FiMapPin, FiMail } from "react-icons/fi";
const red_hat_mono = Red_Hat_Mono({ subsets: ["latin"] });

function About() {
	return (
		<Layout>
			<Head>
				<title>About IglooCode - {siteTitle}</title>
				<meta name="description" content="Learn about IglooCode's mission to inspire the next generation of programmers in Northern Ireland through coding competitions and community building." />
				<meta name="theme-color" content="#171717" />
			</Head>

			<section className="w-screen min-h-[30vh] bg-hero bg-cover flex flex-col justify-end items-left relative pl-6 pr-6 sm:pl-24 pb-6 pt-24" style={{ backgroundBlendMode: "normal, saturation" }}>
				<h1 className={`${red_hat_mono.className} w-fit text-transparent text-5xl sm:text-7xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-3`}>
					About IglooCode
				</h1>
				<p className={`${red_hat_mono.className} text-white text-xl sm:text-3xl`}>
					{"< inspiring the next generation of coders />"}
				</p>
			</section>

			<section className="bg-zinc-900 py-20">
				<div className="max-w-6xl mx-auto px-4">
					<div className="mb-12">
						<span className={`${red_hat_mono.className} text-gray-400`}>
							<Link href="/" className="hover:underline text-blue-500">Home</Link> · About
						</span>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 mb-16">
						<div>
							<h2 className={`${red_hat_mono.className} text-white text-3xl sm:text-4xl font-bold mb-6`}>
								Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Mission</span>
							</h2>
							<p className={`${red_hat_mono.className} text-gray-300 text-lg mb-6 leading-relaxed`}>
								IglooCode is Northern Ireland's premier coding competition for young people, designed to inspire the next generation 
								of programmers and connect like-minded students across the region.
							</p>
							<p className={`${red_hat_mono.className} text-gray-400 text-base mb-6`}>
								We believe that learning to code should be fun, collaborative, and accessible to everyone - regardless of experience level. 
								Our competition provides a supportive environment where students can test their skills, make friends, and discover 
								exciting career opportunities in technology.
							</p>
							<div className="grid sm:grid-cols-2 gap-6">
								<div className="flex items-center">
									<FiUsers className="text-purple-400 w-6 h-6 mr-3" />
									<span className={`${red_hat_mono.className} text-gray-300`}>200+ participants annually</span>
								</div>
								<div className="flex items-center">
									<FiCalendar className="text-cyan-400 w-6 h-6 mr-3" />
									<span className={`${red_hat_mono.className} text-gray-300`}>Running since 2023</span>
								</div>
								<div className="flex items-center">
									<FiMapPin className="text-green-400 w-6 h-6 mr-3" />
									<span className={`${red_hat_mono.className} text-gray-300`}>Hosted at Queen's University</span>
								</div>
								<div className="flex items-center">
									<FiMail className="text-yellow-400 w-6 h-6 mr-3" />
									<span className={`${red_hat_mono.className} text-gray-300`}>Industry partnerships</span>
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<Image src="/images/cat-spinning.gif" width={400} height={400} alt="IglooCode team and participants" className="rounded-lg shadow-lg w-full max-w-md object-cover" unoptimized />
						</div>
					</div>

					<div className="bg-zinc-800 rounded-lg p-8 mb-16">
						<h3 className={`${red_hat_mono.className} text-white text-2xl font-semibold mb-6 text-center`}>
							How It All <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Started</span>
						</h3>
						<div className="grid md:grid-cols-2 gap-8 items-center">
							<Image src={imgEvent} alt="IglooCode competition in action" className="rounded-lg shadow-md w-full object-cover" />
							<div>
								<p className={`${red_hat_mono.className} text-gray-300 mb-4`}>
									IglooCode was born from a simple idea: what if we could bring together young programmers from across Northern Ireland 
									to learn, compete, and inspire each other?
								</p>
								<p className={`${red_hat_mono.className} text-gray-400 mb-4`}>
									Founded by a group of passionate sixth-form and university students who met at a coding summer camp, 
									IglooCode has grown from a small idea to an even bigger coding competition for young people.
								</p>
								<p className={`${red_hat_mono.className} text-gray-400`}>
									With support from leading tech companies like Liberty IT, Kainos, and Queen's University Belfast, 
									we continue to expand our reach and impact across the region.
								</p>
							</div>
						</div>
					</div>

					<div className="text-center mb-16">
						<h3 className={`${red_hat_mono.className} text-white text-3xl font-bold mb-8`}>
							What Makes Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Different</span>
						</h3>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-zinc-800 rounded-lg p-6">
								<h4 className={`${red_hat_mono.className} text-white text-xl font-semibold mb-4`}>Student-Led</h4>
								<p className={`${red_hat_mono.className} text-gray-400`}>
									Organized by young people, for young people. We understand what makes coding fun and engaging.
								</p>
							</div>
							<div className="bg-zinc-800 rounded-lg p-6">
								<h4 className={`${red_hat_mono.className} text-white text-xl font-semibold mb-4`}>Inclusive</h4>
								<p className={`${red_hat_mono.className} text-gray-400`}>
									Challenges designed for all skill levels, from complete beginners to experienced coders.
								</p>
							</div>
							<div className="bg-zinc-800 rounded-lg p-6">
								<h4 className={`${red_hat_mono.className} text-white text-xl font-semibold mb-4`}>Industry-Connected</h4>
								<p className={`${red_hat_mono.className} text-gray-400`}>
									Direct connections to Northern Ireland's leading tech companies and career opportunities.
								</p>
							</div>
						</div>
					</div>

					<div className="bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-lg p-8 text-center">
						<h3 className={`${red_hat_mono.className} text-white text-2xl font-semibold mb-4`}>
							Ready to Join Our Community?
						</h3>
						<p className={`${red_hat_mono.className} text-gray-300 mb-6 max-w-2xl mx-auto`}>
							Whether you're a student, teacher, or just passionate about coding education, there's a place for you in the IglooCode community.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/getinvolved" className={`${red_hat_mono.className} bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200`}>
								Get Involved
							</Link>
							<a href="mailto:hello@igloocode.com" className={`${red_hat_mono.className} text-white border border-gray-400 px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200`}>
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default About;