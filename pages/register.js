import Layout from "../components/public/layout";
import { Red_Hat_Mono } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FiUsers, FiHeart } from "react-icons/fi";

const red_hat_mono = Red_Hat_Mono({ subsets: ["latin"] });

export default function Registration() {
	const [formType, setFormType] = useState("school");
	const router = useRouter();

	useEffect(() => {
		if (router.query.tab === "volunteer") {
			setFormType("volunteer");
		} else {
			setFormType("school");
		}
	}, [router.query.tab]);

	return (
		<Layout>
			<Head>
				<title>{`${formType === "school" ? "School Registration" : "Volunteer Registration"} - IglooCode`}</title>
				<meta name="description" content={formType === "school" 
					? "Register your school for IglooCode - Northern Ireland's premier inter-school coding competition for KS3 students" 
					: "Join the IglooCode volunteer team and help inspire the next generation of coders"
				} />
				<meta name="theme-color" content="#171717" />
			</Head>

			<main className="min-h-screen bg-gradient-to-br from-zinc-900 via-gray-900 to-black pt-20">
				<div className="max-w-6xl mx-auto px-4 py-12">
					<div className="text-center mb-8">
						<h1 className={`${red_hat_mono.className} text-white text-3xl sm:text-4xl font-bold mb-4`}>
							{formType === "school" ? (
								<>Register your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">school</span></>
							) : (
								<>Volunteer with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">IglooCode</span></>
							)}
						</h1>
						<p className={`${red_hat_mono.className} text-gray-400 text-lg max-w-3xl mx-auto mb-6`}>
							{formType === "school" 
								? "Join IglooCode 2026 - the perfect opportunity for KS3 students to explore coding together, in a fun and interactive way."
								: "Help us inspire the next generation of programmers. Join our volunteer team for IglooCode 2026."
							}
						</p>
						
						<div className="mb-8">
							<span className={`${red_hat_mono.className} text-gray-400 text-sm`}>
								<Link href="/" className="hover:underline text-blue-400">Home</Link> · 
								<Link href="/getinvolved" className="hover:underline text-blue-400 ml-1">Get involved</Link> · 
								<span className="ml-1">{formType === "school" ? "School registration" : "Volunteer registration"}</span>
							</span>
						</div>
					</div>

					<div className="flex justify-center mb-8">
						<div className="bg-zinc-800 p-1 rounded-lg flex">
							<button
								onClick={() => {setFormType("school"); router.push('/register?tab=school', undefined, { shallow: true });}}
								className={`${red_hat_mono.className} px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200 flex items-center ${
									formType === "school"
										? "bg-cyan-500 text-white shadow-lg"
										: "text-gray-400 hover:text-white"
								}`}
							>
								<FiUsers className="mr-2" />
								School/Teacher
							</button>
							<button
								onClick={() => {setFormType("volunteer"); router.push('/register?tab=volunteer', undefined, { shallow: true });}}
								className={`${red_hat_mono.className} px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200 flex items-center ${
									formType === "volunteer"
										? "bg-purple-500 text-white shadow-lg"
										: "text-gray-400 hover:text-white"
								}`}
							>
								<FiHeart className="mr-2" />
								Volunteer
							</button>
						</div>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						<div className="lg:col-span-1">
							<div className="bg-zinc-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 sticky top-24">
								{formType === "school" ? (
									<>
										<h3 className={`${red_hat_mono.className} text-white text-xl font-semibold mb-4 flex items-center`}>
											<FiUsers className="mr-2 text-cyan-400" />
											For schools & teachers
										</h3>
										<ul className={`${red_hat_mono.className} text-gray-300 space-y-3 text-sm`}>
											<li className="flex items-start">
												<span className="text-cyan-400 mr-2">•</span>
												<span><strong>Free event</strong> for all participating schools</span>
											</li>
											<li className="flex items-start">
												<span className="text-cyan-400 mr-2">•</span>
												<span><strong>All abilities welcome</strong> - no coding experience required</span>
											</li>
											<li className="flex items-start">
												<span className="text-cyan-400 mr-2">•</span>
												<span><strong>Teams of 2-4</strong> KS3 students (ages 11-14)</span>
											</li>
											<li className="flex items-start">
												<span className="text-cyan-400 mr-2">•</span>
												<span><strong>Professional development</strong> opportunity for teachers</span>
											</li>
											<li className="flex items-start">
												<span className="text-cyan-400 mr-2">•</span>
												<span><strong>Industry connections</strong> and networking</span>
											</li>
											<li className="flex items-start">
												<span className="text-cyan-400 mr-2">•</span>
												<span><strong>Prizes and recognition</strong> for participating schools</span>
											</li>
										</ul>
									</>
								) : (
									<>
										<h3 className={`${red_hat_mono.className} text-white text-xl font-semibold mb-4 flex items-center`}>
											<FiHeart className="mr-2 text-purple-400" />
											For volunteers
										</h3>
										<ul className={`${red_hat_mono.className} text-gray-300 space-y-3 text-sm`}>
											<li className="flex items-start">
												<span className="text-purple-400 mr-2">•</span>
												<span><strong>Make a difference</strong> in young people's lives</span>
											</li>
											<li className="flex items-start">
												<span className="text-purple-400 mr-2">•</span>
												<span><strong>Share your expertise</strong> with the next generation</span>
											</li>
											<li className="flex items-start">
												<span className="text-purple-400 mr-2">•</span>
												<span><strong>Flexible commitment</strong> - help when you can</span>
											</li>
											<li className="flex items-start">
												<span className="text-purple-400 mr-2">•</span>
												<span><strong>Network with professionals</strong> from leading tech companies</span>
											</li>
											<li className="flex items-start">
												<span className="text-purple-400 mr-2">•</span>
												<span><strong>Support roles available</strong> - technical and non-technical</span>
											</li>
											<li className="flex items-start">
												<span className="text-purple-400 mr-2">•</span>
												<span><strong>Be part of something special</strong> in the IglooCode community</span>
											</li>
										</ul>
									</>
								)}
								
								<div className="mt-6 pt-6 border-t border-gray-600">
									<p className={`${red_hat_mono.className} text-gray-400 text-xs`}>
										Need help? Email us at{" "}
										<a href="mailto:igloocode@verglas.io" className="text-blue-400 hover:text-blue-300 transition-colors">
											igloocode@verglas.io
										</a>
									</p>
								</div>
							</div>
						</div>

						<div className="lg:col-span-2">
							<div className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden">
								<div className={`${red_hat_mono.className} px-6 py-4 border-b border-gray-600`}>
									<h2 className="text-white text-lg font-semibold">
										{formType === "school" ? "School registration form" : "Volunteer registration form"}
									</h2>
									<p className="text-gray-400 text-sm mt-1">
										{formType === "school" 
											? "Register your school's interest in participating in IglooCode 2026"
											: "Join our volunteer team and help make IglooCode amazing"
										}
									</p>
								</div>
								
								<div className="p-1">
									<iframe 
										src={formType === "school" ? "https://forms.office.com/e/8R1WitgbpY" : "https://forms.office.com/e/z4DskYQnV4"}
										width="100%" 
										height="700" 
										frameBorder="0" 
										marginHeight={0} 
										marginWidth={0} 
										title={formType === "school" ? "School registration form" : "Volunteer registration form"}
										className="rounded-lg"
									>
										Loading form...
									</iframe>
								</div>
							</div>
						</div>
					</div>

					<div className="text-center mt-12 pt-8 border-t border-gray-700">
						<p className={`${red_hat_mono.className} text-gray-400 text-sm mb-4`}>
							Want to learn more about IglooCode?
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/about" className={`${red_hat_mono.className} text-white border border-gray-400 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-white/10 transition-all duration-200`}>
								About IglooCode
							</Link>
							<Link href="/getinvolved" className={`${red_hat_mono.className} text-gray-400 hover:text-white px-6 py-2 text-sm transition-colors duration-200`}>
								← Back to get involved
							</Link>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
}