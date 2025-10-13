import { Red_Hat_Mono } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout, { siteTitle } from "../../components/public/layout";
import imgStudents from "../../public/images/DSC01856.jpeg";
import { FiUsers, FiBookOpen, FiHeart, FiMail } from "react-icons/fi";
const red_hat_mono = Red_Hat_Mono({ subsets: ["latin"] });

function GetInvolved() {
	return (
		<Layout>
			<Head>
				<title>Get involved - {siteTitle}</title>
				<meta name="description" content="Join IglooCode as a student team, teacher, or volunteer. Multiple ways to get involved in Northern Ireland's premier coding competition." />
				<meta name="theme-color" content="#171717" />
			</Head>

			<section className="w-screen min-h-[30vh] bg-hero bg-cover flex flex-col justify-end items-left relative pl-6 pr-6 sm:pl-24 pb-6 pt-24" style={{ backgroundBlendMode: "normal, saturation" }}>
				<h1 className={`${red_hat_mono.className} w-fit text-transparent text-5xl sm:text-7xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-3`}>
					Get involved
				</h1>
				<p className={`${red_hat_mono.className} text-white text-xl sm:text-3xl`}>
					{"< join northern ireland's coding community />"}
				</p>
			</section>

			<section className="bg-zinc-900 py-20">
				<div className="max-w-6xl mx-auto px-4">
					<div className="mb-12">
						<span className={`${red_hat_mono.className} text-gray-400`}>
							<Link href="/" className="hover:underline text-blue-500">Home</Link> · Get involved
						</span>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 mb-16">
						<div>
							<h2 className={`${red_hat_mono.className} text-white text-3xl sm:text-4xl font-bold mb-6`}>
								Multiple ways to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">participate</span>
							</h2>
							<p className={`${red_hat_mono.className} text-gray-300 text-lg mb-8 leading-relaxed`}>
								Whether you're a student ready to code, a teacher wanting to inspire your pupils, or someone looking to volunteer, 
								there's a place for you in the IglooCode community.
							</p>
							<p className={`${red_hat_mono.className} text-gray-400 text-base`}>
								IglooCode 2025 applications will open early in the new year. Sign up below to be notified when registration begins.
							</p>
						</div>
						<div className="flex justify-center">
							<Image src={imgStudents} alt="Students collaborating at IglooCode" className="rounded-lg shadow-lg w-full max-w-md object-cover" />
						</div>
					</div>

					<div className="grid md:grid-cols-3 gap-8 mb-16">
						<div className="bg-zinc-800 rounded-lg p-8 hover:bg-zinc-700 transition-colors border border-zinc-700">
							<div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
								<FiUsers className="text-purple-400 w-8 h-8" />
							</div>
							<h3 className={`${red_hat_mono.className} text-white text-2xl font-semibold mb-4`}>For students</h3>
							<p className={`${red_hat_mono.className} text-gray-400 mb-6`}>
								KS3 pupils (ages 11-14) from Northern Irish schools can compete in teams of 2-4 students.
							</p>
							<p className={`${red_hat_mono.className} text-gray-400 mb-6`}>
								<strong className="text-cyan-400">Complete beginners welcome!</strong>
							</p>
							<ul className={`${red_hat_mono.className} text-gray-300 text-sm space-y-2 mb-6`}>
								<li>• <strong>Zero coding experience required</strong> - Teamwork makes the dream work!</li>
								<li>• Form teams with friends or classmates</li>
								<li>• Challenges designed for complete beginners to advanced whizz kids!</li>
								<li>• Win prizes for your school</li>
							</ul>
							<p className={`${red_hat_mono.className} text-purple-400 text-sm`}>
								Registration opens early 2025
							</p>
						</div>

						<div className="bg-zinc-800 rounded-lg p-8 hover:bg-zinc-700 transition-colors border border-zinc-700">
							<div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
								<FiBookOpen className="text-cyan-400 w-8 h-8" />
							</div>
							<h3 className={`${red_hat_mono.className} text-white text-2xl font-semibold mb-4`}>For teachers</h3>
							<p className={`${red_hat_mono.className} text-gray-400 mb-6`}>
								Bring your students to experience competitive programming and industry insights.
							</p>
							<ul className={`${red_hat_mono.className} text-gray-300 text-sm space-y-2 mb-6`}>
								<li>• Free event for schools</li>
								<li>• Professional development opportunity</li>
								<li>• Network with other educators</li>
								<li>• Inspire students' tech careers</li>
							</ul>
							<Link href="/register?tab=school" className={`${red_hat_mono.className} inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200`}>
								Register your school
							</Link>
						</div>

						<div className="bg-zinc-800 rounded-lg p-8 hover:bg-zinc-700 transition-colors border border-zinc-700">
							<div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
								<FiHeart className="text-green-400 w-8 h-8" />
							</div>
							<h3 className={`${red_hat_mono.className} text-white text-2xl font-semibold mb-4`}>For volunteers</h3>
							<p className={`${red_hat_mono.className} text-gray-400 mb-6`}>
								Sixth form and university students can help run the event and mentor participants.
							</p>
							<ul className={`${red_hat_mono.className} text-gray-300 text-sm space-y-2 mb-6`}>
								<li>• Gain valuable event experience</li>
								<li>• Mentor younger students</li>
								<li>• Build your CV</li>
								<li>• Make industry connections</li>
							</ul>
							<Link href="/register?tab=volunteer" className={`${red_hat_mono.className} inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200`}>
								Register to volunteer
							</Link>
						</div>
					</div>

					<div className="bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-lg p-8 text-center">
						<FiMail className="text-gray-400 w-12 h-12 mx-auto mb-6" />
						<h3 className={`${red_hat_mono.className} text-white text-2xl font-semibold mb-4`}>
							Ready to get started?
						</h3>
						<p className={`${red_hat_mono.className} text-gray-300 mb-6 max-w-2xl mx-auto`}>
							Have questions or want to register your interest? Get in touch with our team - we'd love to hear from you!
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<a 
								href="mailto:hello@igloocode.com" 
								className={`${red_hat_mono.className} bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200`}
							>
								Email Us
							</a>
							<span className={`${red_hat_mono.className} text-gray-400 text-sm`}>
								or follow us on social media for updates
							</span>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default GetInvolved;