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

			<section className="w-screen h-[60vh] bg-hero bg-cover flex flex-col justify-center items-center relative px-4 pt-16" style={{ backgroundBlendMode: "normal, saturation" }}>
				<div className="text-center max-w-4xl">
					<h1 className={`${red_hat_mono.className} text-transparent text-6xl sm:text-8xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 mb-2 leading-none pb-2`}>
						IglooCode
					</h1>
					<div className="flex items-center justify-center mb-6">
						<span className={`${red_hat_mono.className} text-gray-400 text-sm mr-2 leading-tight`}>by</span>
						<a href="https://verglas.io/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity duration-200 flex items-center">
							<Image src="/images/wll.png" alt="Verglas" width={50} height={13} className="opacity-75 hover:opacity-100" />
						</a>
					</div>
					<p className={`${red_hat_mono.className} text-white text-lg sm:text-xl mb-6 leading-relaxed`}>
						Code. Compete. Die.
					</p>
					<p className={`${red_hat_mono.className} text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto`}>
						Northern Ireland's premier coding competition for KS3 students
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Link href="/getinvolved" className={`${red_hat_mono.className} bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200`}>
							Get Involved
						</Link>
						<Link href="/about" className={`${red_hat_mono.className} text-white border border-gray-400 px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200`}>
							Learn More
						</Link>
					</div>
				</div>
			</section>

			<section className="bg-zinc-900 py-16">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<h2 className={`${red_hat_mono.className} text-white text-2xl sm:text-3xl font-bold mb-6`}>
						What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">IglooCode</span>?
					</h2>
					<p className={`${red_hat_mono.className} text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed`}>
						An exciting capture-the-flag style competition where teams of KS3 students work together to solve coding challenges. 
						No experience required - teamwork and problem-solving skills are what matter most!
					</p>
					<p className={`${red_hat_mono.className} text-gray-400 text-base mb-12 max-w-2xl mx-auto leading-relaxed`}>
						Teams compete in rounds of programming puzzles, learn from industry experts, and make lifelong friendships. 
						It's about collaboration, creativity, and having fun with code.
					</p>
				</div>

				<div className="max-w-6xl mx-auto px-4">
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors text-center">
							<FiUsers className="text-purple-400 w-8 h-8 mx-auto mb-4" />
							<h3 className={`${red_hat_mono.className} text-white font-semibold mb-2`}>For KS3 Students</h3>
							<p className={`${red_hat_mono.className} text-gray-400 text-sm`}>Ages 11-14 from NI schools</p>
						</div>
						<div className="bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors text-center">
							<FiCalendar className="text-cyan-400 w-8 h-8 mx-auto mb-4" />
							<h3 className={`${red_hat_mono.className} text-white font-semibold mb-2`}>Annual Event</h3>
							<p className={`${red_hat_mono.className} text-gray-400 text-sm`}>Next event: 2026</p>
						</div>
						<div className="bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors text-center">
							<FiMapPin className="text-green-400 w-8 h-8 mx-auto mb-4" />
							<h3 className={`${red_hat_mono.className} text-white font-semibold mb-2`}>QUB</h3>
							<p className={`${red_hat_mono.className} text-gray-400 text-sm`}>Computer Science Building</p>
						</div>
						<div className="bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors text-center">
							<FiAward className="text-yellow-400 w-8 h-8 mx-auto mb-4" />
							<h3 className={`${red_hat_mono.className} text-white font-semibold mb-2`}>Win Prizes</h3>
							<p className={`${red_hat_mono.className} text-gray-400 text-sm`}>For you and your school</p>
						</div>
					</div>
				</div>

				<div className="max-w-4xl mx-auto px-4 text-center mt-16">
					<h2 className={`${red_hat_mono.className} text-white text-2xl sm:text-3xl font-bold mb-6`}>
						How it works
					</h2>
					
					<div className="bg-zinc-800 rounded-lg p-8 mb-12 aspect-video flex items-center justify-center border-2 border-dashed border-gray-600">
						<div className="text-center">
							<div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
								</svg>
							</div>
							<h3 className={`${red_hat_mono.className} text-white text-lg font-semibold mb-2`}>Video coming soon</h3>
							<p className={`${red_hat_mono.className} text-gray-400 text-sm`}>
								Learn about the competition format, how to enter teams, and what to expect on the day
							</p>
						</div>
					</div>

					<p className={`${red_hat_mono.className} text-gray-400 mb-6 text-sm`}>Proudly supported by</p>
					<div className="flex flex-row justify-center items-center gap-8 opacity-75 hover:opacity-100 transition-opacity">
						<Image src={imgLIT} alt="Liberty IT" className="h-8 w-auto" />
						<Image src={imgKainos} alt="Kainos" className="h-8 w-auto" />
						<Image src={imgQUB} alt="Queen's University Belfast" className="h-8 w-auto" />
					</div>
				</div>
			</section>

			<section className="bg-zinc-900 py-20">
				<div className="max-w-6xl mx-auto px-4">
					<div className="text-center mb-16">
						<h2 className={`${red_hat_mono.className} text-white text-3xl sm:text-4xl font-bold mb-4`}>
							What you'll <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">gain</span>
						</h2>
						<p className={`${red_hat_mono.className} text-gray-400 text-lg max-w-4xl mx-auto`}>
							More than just a competition - it's your gateway to the tech industry
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-zinc-800 rounded-lg p-8 hover:bg-zinc-700 transition-colors text-center">
							<div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
								<FiAward className="text-purple-400 w-8 h-8" />
							</div>
							<h3 className={`${red_hat_mono.className} text-white text-xl font-semibold mb-4`}>Programming skills</h3>
							<p className={`${red_hat_mono.className} text-gray-400`}>
								Solve real coding challenges and learn new programming concepts through hands-on practice.
							</p>
						</div>

						<div className="bg-zinc-800 rounded-lg p-8 hover:bg-zinc-700 transition-colors text-center">
							<div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
								<FiUsers className="text-cyan-400 w-8 h-8" />
							</div>
							<h3 className={`${red_hat_mono.className} text-white text-xl font-semibold mb-4`}>Make friends</h3>
							<p className={`${red_hat_mono.className} text-gray-400`}>
								Connect with like-minded students from across Northern Ireland who share your passion for tech.
							</p>
						</div>

						<div className="bg-zinc-800 rounded-lg p-8 hover:bg-zinc-700 transition-colors text-center">
							<div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
								<FiMapPin className="text-green-400 w-8 h-8" />
							</div>
							<h3 className={`${red_hat_mono.className} text-white text-xl font-semibold mb-4`}>Industry insights</h3>
							<p className={`${red_hat_mono.className} text-gray-400`}>
								Hear from professionals at leading tech companies about careers and opportunities in IT.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-zinc-800 py-12 md:py-16 pb-20 md:pb-16">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<div className="flex items-center justify-center mb-4 md:mb-6">
						<a href="https://verglas.io/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity duration-200 flex items-center">
							<Image src="/images/wll.png" alt="Verglas" width={160} height={43} className="opacity-90 hover:opacity-100" />
						</a>
					</div>
					<h2 className={`${red_hat_mono.className} text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4`}>
						Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Young Innovators</span>
					</h2>
					<p className={`${red_hat_mono.className} text-gray-400 text-base md:text-lg mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed`}>
						IglooCode is created by Verglas, an NI tech startup developing software solutions to give students a competitive classroom edge. We believe young people should lead the charge in tech education.
					</p>
					<div className="flex items-center justify-center text-gray-500 text-sm">
						<span className={`${red_hat_mono.className}`}>Empowering the next generation through code</span>
					</div>
				</div>
			</section>

			<section className="bg-hero bg-cover bg-center relative py-20 md:py-16 mt-8 md:mt-0">
				<div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-zinc-900/70 to-cyan-900/60"></div>
				<div className="max-w-4xl mx-auto text-center px-4 relative z-10">
					<h2 className={`${red_hat_mono.className} text-white text-3xl sm:text-4xl font-bold mb-6`}>
						Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">code</span>?
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