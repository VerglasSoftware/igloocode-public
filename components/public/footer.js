import { Red_Hat_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const red_hat_mono = Red_Hat_Mono({ subsets: ["latin"] });

export default function Footer({ session }) {
	return (
		<footer className="bg-zinc-800 border-t border-gray-700" role="contentinfo">
			<div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-10">
					<div className="col-span-1 md:col-span-2">
						<div className="flex items-center mb-3 md:mb-4">
							<Image src="/images/icl.png" height={28} width={28} alt="IglooCode logo" className="brightness-100 mr-2 md:mr-3" />
							<Link href="/" className={`${red_hat_mono.className} text-transparent text-lg md:text-xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 leading-none flex items-center`}>
								IglooCode
							</Link>
						</div>
						<p className={`${red_hat_mono.className} text-gray-400 text-xs md:text-sm mb-4 md:mb-6 max-w-md leading-relaxed`}>
							Northern Ireland's premier coding competition for KS3 students. Inspiring the next generation of programmers through fun, competitive challenges.
						</p>
						<div className="flex items-center text-gray-500 text-xs mb-4 md:mb-0">
							<span className={`${red_hat_mono.className} mr-1 md:mr-2 flex items-center`}>by</span>
							<a href="https://verglas.io/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity duration-200 flex items-center">
								<Image src="/images/wll.png" alt="Verglas" width={50} height={13} className="opacity-75 hover:opacity-100 h-auto w-[50px] md:w-[60px]" style={{ marginTop: '3px' }} />
							</a>
						</div>
					</div>

					<div className="grid grid-cols-3 gap-6 col-span-1 md:col-span-2">
						<div>
							<h3 className={`${red_hat_mono.className} text-white font-semibold mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider`}>
								Quick links
							</h3>
							<ul className="space-y-2">
								<li>
									<Link href="/about" className={`${red_hat_mono.className} text-gray-400 hover:text-white text-xs md:text-sm transition-colors duration-200`}>
										About IglooCode
									</Link>
								</li>
								<li>
									<Link href="/getinvolved" className={`${red_hat_mono.className} text-gray-400 hover:text-white text-xs md:text-sm transition-colors duration-200`}>
										Get involved
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className={`${red_hat_mono.className} text-white font-semibold mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider`}>
								Contact
							</h3>
							<ul className="space-y-2">
								<li>
									<a href="mailto:igloocode@verglas.io" className={`${red_hat_mono.className} text-gray-400 hover:text-white text-xs md:text-sm transition-colors duration-200`}>
										Event enquiries
									</a>
								</li>
								<li>
									<a href="mailto:media@verglas.io" className={`${red_hat_mono.className} text-gray-400 hover:text-white text-xs md:text-sm transition-colors duration-200`}>
										Press & media
									</a>
								</li>
								<li>
									<a href="tel:+442896943669" className={`${red_hat_mono.className} text-gray-400 hover:text-white text-xs md:text-sm transition-colors duration-200`}>
										028 9694 3669
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h3 className={`${red_hat_mono.className} text-white font-semibold mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider`}>
								Follow us
							</h3>
							<ul className="space-y-2">
								<li>
									<a 
										href="https://www.instagram.com/igloocode/" 
										target="_blank" 
										rel="noopener noreferrer"
										className={`${red_hat_mono.className} text-gray-400 hover:text-white text-xs md:text-sm transition-colors duration-200 flex items-center`}
									>
										<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
										</svg>
										Instagram
									</a>
								</li>
								<li className="pt-2">
									<div className="text-gray-500 text-xs">
										<p className={`${red_hat_mono.className} mb-1`}>Supported by</p>
										<Image src="/images/qub_transparent.png" alt="Queen's University Belfast" width={60} height={16} className="opacity-75 hover:opacity-100 transition-opacity" />
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-700 pt-4 md:pt-6">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
						<div className="text-center md:text-left">
							<p className={`${red_hat_mono.className} text-gray-500 text-xs`}>
								© 2025 Verglas (NI) Limited. IglooCode is a trademark of Verglas (NI) Limited.
							</p>
							<p className={`${red_hat_mono.className} text-gray-600 text-xs mt-1`}>
								Registered in Northern Ireland (no. NI716105). Office 218, 92 Castle Street, Belfast, BT1 1HE.
							</p>
						</div>
						<div className="text-center md:text-right">
							<p className={`${red_hat_mono.className} text-gray-500 text-xs`}>
								Made with ❤️ by young people, for young people
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
