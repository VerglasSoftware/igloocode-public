import { Red_Hat_Mono } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Layout, { siteTitle } from "../components/public/layout";
import imgTeam from "../public/images/IMG_3652.png";
import imgEvent from "../public/images/DSC01776.jpg";
import { FiUsers, FiCalendar, FiMapPin, FiMail, FiX } from "react-icons/fi";
const red_hat_mono = Red_Hat_Mono({ subsets: ["latin"] });

function About() {
	const [selectedImage, setSelectedImage] = useState(null);

	const galleryImages = [
		{ src: "/images/IMG_6481.jpg", alt: "Prizegiving" },
		{ src: "/images/DSC05306.JPG", alt: "" },
		{ src: "/images/DSC04722.JPG", alt: "" },
		{ src: "/images/DSC05635.JPG", alt: "" },
		{ src: "/images/DSC05227.JPG", alt: "" },
		{ src: "/images/DSC05269.JPG", alt: "" },
		{ src: "/images/DSC04804.JPG", alt: "" },
		{ src: "/images/DSC05593.JPG", alt: "" }
	];

	return (
		<Layout>
			<Head>
				<title>About IglooCode - {siteTitle}</title>
				<meta
					name="description"
					content="Learn about IglooCode's mission to inspire the next generation of programmers in Northern Ireland through coding competitions and community building."
				/>
				<meta name="theme-color" content="#171717" />
			</Head>

			<section
				className="w-screen min-h-[30vh] bg-hero bg-cover flex flex-col justify-end items-left relative pl-6 pr-6 sm:pl-24 pb-6 pt-24"
				style={{ backgroundBlendMode: "normal, saturation" }}
			>
				<h1
					className={`${red_hat_mono.className} w-fit text-transparent text-5xl sm:text-7xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 pb-3`}
				>
					About IglooCode
				</h1>
				<p
					className={`${red_hat_mono.className} text-white text-xl sm:text-3xl`}
				>
					{"< inspiring the next generation of coders />"}
				</p>
			</section>

			<section className="bg-zinc-900 py-20">
				<div className="max-w-6xl mx-auto px-4">
					<div className="mb-12">
						<span className={`${red_hat_mono.className} text-gray-400`}>
							<Link href="/" className="hover:underline text-blue-500">
								Home
							</Link>{" "}
							· About
						</span>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 mb-16">
						<div>
							<h2
								className={`${red_hat_mono.className} text-white text-3xl sm:text-4xl font-bold mb-6`}
							>
								Our{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
									mission
								</span>
							</h2>
							<p
								className={`${red_hat_mono.className} text-gray-300 text-lg mb-6 leading-relaxed`}
							>
								IglooCode is Northern Ireland's premier inter-school coding
								competition for young people, designed to inspire the next
								generation of programmers and connect like-minded students
								across the region.
							</p>
							<p
								className={`${red_hat_mono.className} text-gray-400 text-base mb-6`}
							>
								We believe that learning to code should be fun, collaborative,
								and accessible to everyone - regardless of experience level. Our
								competition provides a supportive environment where students can
								test their skills, make friends, and discover exciting career
								opportunities in technology.
							</p>
							<div className="grid sm:grid-cols-2 gap-6">
								<div className="flex items-center">
									<FiUsers className="text-purple-400 w-6 h-6 mr-3" />
									<span className={`${red_hat_mono.className} text-gray-300`}>
										300+ participants reached
									</span>
								</div>
								<div className="flex items-center">
									<FiCalendar className="text-cyan-400 w-6 h-6 mr-3" />
									<span className={`${red_hat_mono.className} text-gray-300`}>
										4th year running
									</span>
								</div>
								<div className="flex items-center">
									<FiMapPin className="text-green-400 w-6 h-6 mr-3" />
									<span className={`${red_hat_mono.className} text-gray-300`}>
										Hosted at Queen's University
									</span>
								</div>
								<div className="flex items-center">
									<FiMail className="text-yellow-400 w-6 h-6 mr-3" />
									<span className={`${red_hat_mono.className} text-gray-300`}>
										Industry partnerships
									</span>
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<Image
								src="/images/DSC05187.JPG"
								width={400}
								height={400}
								alt="IglooCode team and participants"
								className="rounded-lg shadow-lg w-full max-w-md object-cover"
								unoptimized
							/>
						</div>
					</div>

					<div className="bg-zinc-800 rounded-lg p-8 mb-16 hover:bg-zinc-700 transition-colors">
						<h3
							className={`${red_hat_mono.className} text-white text-2xl font-semibold mb-6 text-center`}
						>
							How it all{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
								started
							</span>
						</h3>
						<div className="grid md:grid-cols-2 gap-8 items-center">
							<Image
								src={imgEvent}
								alt="IglooCode competition in action"
								className="rounded-lg shadow-md w-full object-cover"
							/>
							<div>
								<p className={`${red_hat_mono.className} text-gray-300 mb-4`}>
									IglooCode was born from a simple idea: what if we could bring
									together young programmers from across Northern Ireland to
									learn, compete, and inspire each other?
								</p>
								<p className={`${red_hat_mono.className} text-gray-400 mb-4`}>
									Founded by a group of passionate sixth-form and university
									students who met at a coding summer camp, IglooCode has grown
									from a small idea to an even bigger coding competition for
									young people.
								</p>
								<p className={`${red_hat_mono.className} text-gray-400`}>
									With support from our partners and Queen's University Belfast,
									we continue to expand our reach and impact across the region.
								</p>
							</div>
						</div>
					</div>

					<div className="text-center mb-16">
						<h3
							className={`${red_hat_mono.className} text-white text-3xl font-bold mb-8`}
						>
							What makes us{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
								different
							</span>
						</h3>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors">
								<h4
									className={`${red_hat_mono.className} text-white text-xl font-semibold mb-4`}
								>
									Student-led
								</h4>
								<p className={`${red_hat_mono.className} text-gray-400`}>
									Organized by young people, for young people. We understand
									what makes coding fun and engaging.
								</p>
							</div>
							<div className="bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors">
								<h4
									className={`${red_hat_mono.className} text-white text-xl font-semibold mb-4`}
								>
									Inclusive
								</h4>
								<p className={`${red_hat_mono.className} text-gray-400`}>
									Challenges designed for all skill levels, from complete
									beginners to experienced coders.
								</p>
							</div>
							<div className="bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors">
								<h4
									className={`${red_hat_mono.className} text-white text-xl font-semibold mb-4`}
								>
									Industry-connected
								</h4>
								<p className={`${red_hat_mono.className} text-gray-400`}>
									Direct connections to Northern Ireland's leading tech
									companies and career opportunities.
								</p>
							</div>
						</div>
					</div>

					<div className="mb-16">
						<h3
							className={`${red_hat_mono.className} text-white text-3xl font-bold mb-8 text-center`}
						>
							Testimonials from our{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
								community
							</span>
						</h3>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							
							<div className="bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors">
								<p
									className={`${red_hat_mono.className} text-gray-300 text-sm mb-4 italic leading-relaxed`}
								>
									"The tasks were brilliant and incredibly well thought out, the
									software you created was astounding."
								</p>
								<p
									className={`${red_hat_mono.className} text-gray-500 text-xs`}
								>
									— Teacher
								</p>
							</div>

							<div className="bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors">
								<p
									className={`${red_hat_mono.className} text-gray-300 text-sm mb-4 italic leading-relaxed`}
								>
									"A very well organised event and such a credit to the pupils
									that organised. A great system to add some competitive edge."
								</p>
								<p
									className={`${red_hat_mono.className} text-gray-500 text-xs`}
								>
									— Teacher
								</p>
							</div>

							<div className="bg-zinc-800 rounded-lg p-6 hover:bg-zinc-700 transition-colors">
								<p
									className={`${red_hat_mono.className} text-gray-300 text-sm mb-4 italic leading-relaxed`}
								>
									"This was a successful, well run event and you should be proud
									of yourselves."
								</p>
								<p
									className={`${red_hat_mono.className} text-gray-500 text-xs`}
								>
									— Teacher
								</p>
							</div>
						</div>
					</div>

					<div className="mb-16">
						<h2
							className={`${red_hat_mono.className} text-white text-3xl sm:text-4xl font-bold mb-6 text-center`}
						>
							Previous{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
								events
							</span>
						</h2>
						<p
							className={`${red_hat_mono.className} text-gray-400 text-lg text-center mb-8 max-w-2xl mx-auto`}
						>
							Take a look at the highlights from our past competitions
						</p>{" "}
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
							{galleryImages.map((image, index) => (
								<div key={index} className="aspect-square bg-zinc-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={() => setSelectedImage(image)}>
									<Image src={image.src} alt={image.alt} width={300} height={300} className="w-full h-full object-cover"/>
								</div>
							))}
						</div>
					</div>

					<div className="bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-lg p-8 text-center">
						<h3
							className={`${red_hat_mono.className} text-white text-2xl font-semibold mb-4`}
						>
							Ready to join our community?
						</h3>
						<p
							className={`${red_hat_mono.className} text-gray-300 mb-6 max-w-2xl mx-auto`}
						>
							Whether you're a student, teacher, or just passionate about coding
							education, there's a place for you in the IglooCode community.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/getinvolved"
								className={`${red_hat_mono.className} bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200`}
							>
								Get involved
							</Link>
							<a
								href="mailto:igloocode@verglas.io"
								className={`${red_hat_mono.className} text-white border border-gray-400 px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200`}
							>
								Contact us
							</a>
						</div>
					</div>
				</div>
			</section>

			{selectedImage && (
				<div
					className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
					onClick={() => setSelectedImage(null)}
				>
					<div className="relative max-w-4xl max-h-full">
						<button
							onClick={() => setSelectedImage(null)}
							className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200 z-10"
						>
							<FiX className="w-6 h-6" />
						</button>
						<div className="relative" onClick={(e) => e.stopPropagation()}>
							<Image src={selectedImage.src} alt={selectedImage.alt} width={800} height={600} className="max-w-full max-h-[80vh] object-contain rounded-lg"/>
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
								<p className={`${red_hat_mono.className} text-white text-sm`}>
									{selectedImage.alt}
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</Layout>
	);
}

export default About;