import Layout from "../../components/public/layout";
import { Red_Hat_Mono } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";

const red_hat_mono = Red_Hat_Mono({ subsets: ["latin"] });

export default function VolunteerRegistration() {
	return (
		<Layout>
			<Head>
				<title>Volunteer Registration - IglooCode</title>
				<meta name="description" content="Join the IglooCode volunteer team and help inspire the next generation of coders" />
				<meta name="theme-color" content="#171717" />
			</Head>

			<main className="min-h-screen bg-gradient-to-br from-zinc-900 via-gray-900 to-black pt-20">
				<div className="max-w-6xl mx-auto px-4 py-12">
					{/* Header */}
					<div className="text-center mb-8">
						<h1 className={`${red_hat_mono.className} text-white text-3xl sm:text-4xl font-bold mb-4`}>
							Volunteer with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">IglooCode</span>
						</h1>
						<p className={`${red_hat_mono.className} text-gray-400 text-lg max-w-3xl mx-auto mb-6`}>
							Help us inspire the next generation of programmers. Join our volunteer team for IglooCode 2025.
						</p>
						
						{/* Navigation Breadcrumb */}
						<div className="mb-8">
							<span className={`${red_hat_mono.className} text-gray-400 text-sm`}>
								<Link href="/" className="hover:underline text-blue-400">Home</Link> · 
								<Link href="/getinvolved" className="hover:underline text-blue-400 ml-1">Get Involved</Link> · 
								<span className="ml-1">Volunteer Registration</span>
							</span>
						</div>
					</div>

					{/* Quick Links */}
					<div className="flex justify-center mb-8">
						<div className="bg-zinc-800 p-1 rounded-lg flex">
							<Link href="/register/school" className={`${red_hat_mono.className} px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200 text-gray-400 hover:text-white`}>
								School Registration
							</Link>
							<div className={`${red_hat_mono.className} px-6 py-3 rounded-md text-sm font-semibold bg-purple-500 text-white shadow-lg flex items-center`}>
								<FiHeart className="mr-2" />
								Volunteer Registration
							</div>
						</div>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						{/* Information Panel */}
						<div className="lg:col-span-1">
							<div className="bg-zinc-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 sticky top-8">
								<h3 className={`${red_hat_mono.className} text-white text-xl font-semibold mb-4 flex items-center`}>
									<FiHeart className="mr-2 text-purple-400" />
									Why Volunteer?
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
										<span><strong>Be part of something special</strong> in NI's tech community</span>
									</li>
								</ul>
								
								<div className="mt-6 pt-6 border-t border-gray-600">
									<p className={`${red_hat_mono.className} text-gray-400 text-xs`}>
										Questions? Email us at{" "}
										<a href="mailto:hello@igloocode.com" className="text-blue-400 hover:text-blue-300 transition-colors">
											hello@igloocode.com
										</a>
									</p>
								</div>
							</div>
						</div>

						{/* Form Panel */}
						<div className="lg:col-span-2">
							<div className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden">
								<div className={`${red_hat_mono.className} px-6 py-4 border-b border-gray-600`}>
									<h2 className="text-white text-lg font-semibold">
										Volunteer Registration Form
									</h2>
									<p className="text-gray-400 text-sm mt-1">
										Join our volunteer team and help make IglooCode amazing
									</p>
								</div>
								
								<div className="p-1">
									<iframe 
										src="https://tally.so/r/314GRg" 
										width="100%" 
										height="700" 
										frameBorder="0" 
										marginHeight={0} 
										marginWidth={0} 
										title="Volunteer Registration Form"
										className="rounded-lg"
									>
										Loading form...
									</iframe>
								</div>
							</div>
						</div>
					</div>

					{/* Call to Action */}
					<div className="text-center mt-12 pt-8 border-t border-gray-700">
						<p className={`${red_hat_mono.className} text-gray-400 text-sm mb-4`}>
							Want to learn more about IglooCode?
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/about" className={`${red_hat_mono.className} text-white border border-gray-400 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-white/10 transition-all duration-200`}>
								About IglooCode
							</Link>
							<Link href="/getinvolved" className={`${red_hat_mono.className} text-gray-400 hover:text-white px-6 py-2 text-sm transition-colors duration-200`}>
								← Back to Get Involved
							</Link>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
}