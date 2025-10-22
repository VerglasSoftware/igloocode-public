import { Red_Hat_Mono } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout, { siteTitle } from "../components/public/layout";
import { FiUsers, FiTrendingUp, FiAward, FiFileText, FiTarget, FiHeart } from "react-icons/fi";
const red_hat_mono = Red_Hat_Mono({ subsets: ["latin"] });

function Companies() {
	return (
		<Layout>
			<Head>
				<title>Partner with us - {siteTitle}</title>
				<meta name="description" content="Partner with IglooCode to support the next generation of programmers. Discover the benefits of sponsoring Northern Ireland's premier inter-school coding competition." />
				<meta name="theme-color" content="#171717" />
			</Head>

			<section className="w-screen min-h-[30vh] bg-hero bg-cover flex flex-col justify-end items-left relative pl-6 pr-6 sm:pl-24 pb-6 pt-24" style={{ backgroundBlendMode: "normal, saturation" }}>
				<h1 className={`${red_hat_mono.className} w-fit text-transparent text-5xl sm:text-7xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-3`}>
					Partner with us
				</h1>
				<p className={`${red_hat_mono.className} text-white text-xl sm:text-3xl`}>
					{"< invest in the future of tech talent />"}
				</p>
			</section>

			<section className="bg-zinc-900 py-20">
				<div className="max-w-6xl mx-auto px-4">
					<div className="mb-12">
						<span className={`${red_hat_mono.className} text-gray-400`}>
							<Link href="/" className="hover:underline text-blue-500">Home</Link> · Partner with us
						</span>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 mb-16">
						<div>
							<h2 className={`${red_hat_mono.className} text-white text-3xl sm:text-4xl font-bold mb-6`}>
								Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">partner</span> with IglooCode?
							</h2>
							<p className={`${red_hat_mono.className} text-gray-300 text-lg mb-6 leading-relaxed`}>
								IglooCode is more than just a competition - it's a talent pipeline connecting Northern Ireland's brightest young minds 
								with forward-thinking companies who understand the importance of early engagement in tech education.
							</p>
							<p className={`${red_hat_mono.className} text-gray-400 text-base mb-6`}>
								Our partners gain access to passionate students, enhance their brand reputation, and directly contribute to building 
								the tech workforce of tomorrow.
							</p>
							<div className="grid sm:grid-cols-2 gap-6">
								<div className="flex items-center">
									<FiUsers className="text-purple-400 w-6 h-6 mr-3" />
									<span className={`${red_hat_mono.className} text-gray-300`}>300+ students reached</span>
								</div>
								<div className="flex items-center">
									<FiTarget className="text-cyan-400 w-6 h-6 mr-3" />
									<span className={`${red_hat_mono.className} text-gray-300`}>Direct access to emerging talent</span>
								</div>
								<div className="flex items-center">
									<FiTrendingUp className="text-green-400 w-6 h-6 mr-3" />
									<span className={`${red_hat_mono.className} text-gray-300`}>Measurable community impact</span>
								</div>
								<div className="flex items-center">
									<FiHeart className="text-red-400 w-6 h-6 mr-3" />
									<span className={`${red_hat_mono.className} text-gray-300`}>Build brand loyalty early</span>
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<Image src="/images/DSC01890.jpeg" alt="Industry mentors helping students" width={400} height={300} className="rounded-lg shadow-lg w-full max-w-md object-cover" />
						</div>
					</div>

					<div className="text-center mb-16">
						<h3 className={`${red_hat_mono.className} text-white text-3xl font-bold mb-8`}>
							Partnership <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">benefits</span>
						</h3>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors">
								<div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
									<FiUsers className="text-purple-400 w-6 h-6" />
								</div>
								<h4 className={`${red_hat_mono.className} text-white text-xl font-semibold mb-4`}>Talent pipeline</h4>
								<p className={`${red_hat_mono.className} text-gray-400`}>
									Connect with motivated students who are passionate about technology and eager to learn from industry professionals.
								</p>
							</div>
							<div className="bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors">
								<div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
									<FiTrendingUp className="text-cyan-400 w-6 h-6" />
								</div>
								<h4 className={`${red_hat_mono.className} text-white text-xl font-semibold mb-4`}>Brand visibility</h4>
								<p className={`${red_hat_mono.className} text-gray-400`}>
									Showcase your company's commitment to education and community development across Northern Ireland's schools.
								</p>
							</div>
							<div className="bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors">
								<div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
									<FiAward className="text-green-400 w-6 h-6" />
								</div>
								<h4 className={`${red_hat_mono.className} text-white text-xl font-semibold mb-4`}>Industry leadership</h4>
								<p className={`${red_hat_mono.className} text-gray-400`}>
									Position your company as a leader in tech education and youth development within the NI tech ecosystem.
								</p>
							</div>
						</div>
					</div>

					<div className="bg-zinc-800 rounded-lg p-8 mb-16">
						<h3 className={`${red_hat_mono.className} text-white text-2xl font-semibold mb-6 text-center`}>
							Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">impact</span>
						</h3>
						<div className="grid md:grid-cols-2 gap-8 items-center mb-8">
							<div>
								<p className={`${red_hat_mono.className} text-gray-300 mb-4`}>
									Since 2023, IglooCode has been making measurable impact on Northern Ireland's tech education landscape. 
									Our comprehensive impact reports demonstrate the tangible benefits our partners help create.
								</p>
								<div className="grid grid-cols-2 gap-4 mb-6">
									<div className="text-center p-4 bg-zinc-700 rounded-lg">
										<div className={`${red_hat_mono.className} text-2xl font-bold text-purple-400`}>300+</div>
										<div className={`${red_hat_mono.className} text-gray-400 text-sm`}>Students reached</div>
									</div>
									<div className="text-center p-4 bg-zinc-700 rounded-lg">
										<div className={`${red_hat_mono.className} text-2xl font-bold text-cyan-400`}>50+</div>
										<div className={`${red_hat_mono.className} text-gray-400 text-sm`}>Schools involved</div>
									</div>
								</div>
							</div>
							<div className="space-y-4">
								<div className="bg-zinc-700 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
									<div>
										<h4 className={`${red_hat_mono.className} text-white font-semibold`}>2023 Impact Report</h4>
										<p className={`${red_hat_mono.className} text-gray-400 text-sm`}>Our inaugural year results and outcomes</p>
									</div>
									<a 
										href="/reports/igloocode-impact-2023.pdf" 
										className={`${red_hat_mono.className} bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center whitespace-nowrap`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FiFileText className="w-4 h-4 mr-2" />
										Download
									</a>
								</div>
								<div className="bg-zinc-700 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
									<div>
										<h4 className={`${red_hat_mono.className} text-white font-semibold`}>2026 Impact Report</h4>
										<p className={`${red_hat_mono.className} text-gray-400 text-sm`}>Latest results and future projections</p>
									</div>
									<a 
										href="/reports/igloocode-impact-2026.pdf" 
										className={`${red_hat_mono.className} bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center whitespace-nowrap`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FiFileText className="w-4 h-4 mr-2" />
										Download
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-lg p-8 text-center">
						<h3 className={`${red_hat_mono.className} text-white text-2xl font-semibold mb-4`}>
							Ready to invest in the future?
						</h3>
						<p className={`${red_hat_mono.className} text-gray-300 mb-6 max-w-2xl mx-auto`}>
							Join us in building Northern Ireland's next generation of tech talent. Let's discuss how your company can make a meaningful impact.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a href="mailto:igloocode@verglas.io" className={`${red_hat_mono.className} bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200`}>
								Get in touch
							</a>
							<a href="tel:+442896943669" className={`${red_hat_mono.className} text-white border border-gray-400 px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200`}>
								Call us
							</a>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Companies;