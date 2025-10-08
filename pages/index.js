import { Red_Hat_Mono } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Layout, { siteTitle } from "../components/public/layout";
import imgKainos from "../public/images/kainos_transparent.webp";
import imgLIT from "../public/images/LIT-logo.webp";
import imgQUB from "../public/images/qub_transparent.png";
import Link from "next/link";
import { FiCalendar, FiUsers, FiAward, FiMapPin } from "react-icons/fi";
const red_hat_mono = Red_Hat_Mono({ subsets: ["latin"] });

function Index() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
				<meta name="description" content="IglooCode is Northern Ireland's premier coding competition for KS3 students. Learn programming, make friends, and win prizes!" />
				<meta name="theme-color" content="#171717" />
			</Head>

			{/* Hero Section */}
			<section className="w-screen min-h-screen bg-hero bg-cover flex flex-col justify-center items-center relative px-4" style={{ backgroundBlendMode: "normal, saturation" }}>
				<div className="text-center max-w-4xl">
					<h1 className={`${red_hat_mono.className} text-transparent text-6xl sm:text-8xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 mb-2 leading-none pb-2`}>
						IglooCode
					</h1>
					<div className="flex items-center justify-center mb-6">
						<span className={`${red_hat_mono.className} text-gray-400 text-sm mr-2`}>by</span>
						<Image src="/images/wll.png" alt="Verglas" width={50} height={13} className="opacity-75" />
					</div>
					<p className={`${red_hat_mono.className} text-white text-xl sm:text-2xl mb-8 leading-relaxed`}>
						Northern Ireland's premier <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 font-semibold">coding competition</span> for KS3 students
					</p>
					<p className={`${red_hat_mono.className} text-gray-300 text-lg mb-12 max-w-2xl mx-auto`}>
						<span className="text-cyan-400 font-semibold">No coding experience? No problem!</span> Teamwork is the most important part, not knowing it all! Make lifelong friends, and learn from industry experts in this exciting capture-the-flag competition.
					</p>

					{/* Key Info Cards */}
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
						<div className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
							<FiUsers className="text-purple-400 w-8 h-8 mx-auto mb-4" />
							<p className={`${red_hat_mono.className} text-white font-semibold`}>For KS3 Students</p>
							<p className={`${red_hat_mono.className} text-gray-400 text-sm mt-2`}>Ages 11-14 from NI schools</p>
						</div>
						<div className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
							<FiCalendar className="text-cyan-400 w-8 h-8 mx-auto mb-4" />
							<p className={`${red_hat_mono.className} text-white font-semibold`}>Annual Event</p>
							<p className={`${red_hat_mono.className} text-gray-400 text-sm mt-2`}>Next event: 2026</p>
						</div>
						<div className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
							<FiMapPin className="text-green-400 w-8 h-8 mx-auto mb-4" />
							<p className={`${red_hat_mono.className} text-white font-semibold`}>QUB</p>
							<p className={`${red_hat_mono.className} text-gray-400 text-sm mt-2`}>Computer Science Building</p>
						</div>
						<div className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
							<FiAward className="text-yellow-400 w-8 h-8 mx-auto mb-4" />
							<p className={`${red_hat_mono.className} text-white font-semibold`}>Win Prizes</p>
							<p className={`${red_hat_mono.className} text-gray-400 text-sm mt-2`}>For you and your school</p>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Link href="/getinvolved" className={`${red_hat_mono.className} bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200`}>
							Get Involved
						</Link>
						<Link href="/about" className={`${red_hat_mono.className} text-white border border-gray-400 px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200`}>
							Learn More
						</Link>
					</div>
				</div>

				{/* Partner Logos */}
				<div className="absolute bottom-0 mb-8 flex flex-col items-center">
					<p className={`${red_hat_mono.className} text-gray-400 mb-4 text-sm`}>Proudly supported by</p>
					<div className="flex flex-row justify-center items-center gap-8 opacity-75 hover:opacity-100 transition-opacity">
						<Image src={imgLIT} alt="Liberty IT" className="h-8 w-auto" />
						<Image src={imgKainos} alt="Kainos" className="h-8 w-auto" />
						<Image src={imgQUB} alt="Queen's University Belfast" className="h-8 w-auto" />
					</div>
				</div>
			</section>

			{/* What You'll Gain Section */}
			<section className="bg-zinc-900 py-20">
				<div className="max-w-6xl mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className={`${red_hat_mono.className} text-white text-3xl sm:text-4xl font-bold mb-4`}>
							What You'll <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Gain</span>
						</h2>
						<p className={`${red_hat_mono.className} text-gray-400 text-lg max-w-2xl mx-auto`}>
							More than just a competition - it's your gateway to the tech industry
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-zinc-800 rounded-lg p-8 hover:bg-zinc-700 transition-colors">
							<div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
								<FiAward className="text-purple-400 w-8 h-8" />
							</div>
							<h3 className={`${red_hat_mono.className} text-white text-xl font-semibold mb-4`}>Programming Skills</h3>
							<p className={`${red_hat_mono.className} text-gray-400`}>
								Solve real coding challenges and learn new programming concepts through hands-on practice.
							</p>
						</div>

						<div className="bg-zinc-800 rounded-lg p-8 hover:bg-zinc-700 transition-colors">
							<div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
								<FiUsers className="text-cyan-400 w-8 h-8" />
							</div>
							<h3 className={`${red_hat_mono.className} text-white text-xl font-semibold mb-4`}>Make Friends</h3>
							<p className={`${red_hat_mono.className} text-gray-400`}>
								Connect with like-minded students from across Northern Ireland who share your passion for tech.
							</p>
						</div>

						<div className="bg-zinc-800 rounded-lg p-8 hover:bg-zinc-700 transition-colors">
							<div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
								<FiMapPin className="text-green-400 w-8 h-8" />
							</div>
							<h3 className={`${red_hat_mono.className} text-white text-xl font-semibold mb-4`}>Industry Insights</h3>
							<p className={`${red_hat_mono.className} text-gray-400`}>
								Hear from professionals at leading tech companies about careers and opportunities in IT.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* About Verglas Section */}
			<section className="bg-zinc-800 py-16">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<div className="flex items-center justify-center mb-6">
						<Image src="/images/wll.png" alt="Verglas" width={120} height={32} className="opacity-90" />
					</div>
					<h2 className={`${red_hat_mono.className} text-white text-2xl sm:text-3xl font-bold mb-4`}>
						Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Young Innovators</span>
					</h2>
					<p className={`${red_hat_mono.className} text-gray-400 text-lg mb-6 max-w-2xl mx-auto leading-relaxed`}>
						IglooCode is created by Verglas, an 18-21 year old startup developing software solutions to give students a competitive classroom edge. We believe young people should lead the charge in tech education.
					</p>
					<div className="flex items-center justify-center text-gray-500 text-sm">
						<span className={`${red_hat_mono.className}`}>Empowering the next generation through code</span>
					</div>
				</div>
			</section>

			{/* Simple CTA Section */}
			<section className="bg-gradient-to-br from-purple-900/80 via-zinc-900 to-cyan-900/80 py-16">
				<div className="max-w-4xl mx-auto text-center px-4">
					<h2 className={`${red_hat_mono.className} text-white text-3xl sm:text-4xl font-bold mb-6`}>
						Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Code</span>?
					</h2>
					<p className={`${red_hat_mono.className} text-gray-300 text-lg mb-8 max-w-2xl mx-auto`}>
						Applications for IglooCode 2025 will open soon. Don't miss your chance to be part of Northern Ireland's biggest coding competition for young people.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/getinvolved" className={`${red_hat_mono.className} bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200`}>
							Stay Updated
						</Link>
						<Link href="/about" className={`${red_hat_mono.className} text-white border border-gray-400 px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200`}>
							Our Story
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Index;