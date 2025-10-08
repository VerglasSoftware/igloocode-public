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
								<Image src="/images/wll.png" alt="Verglas" width={50} height={13} className="opacity-75 hover:opacity-100 md:w-[60px] md:h-[16px]" />
							</a>
						</div>
					</div>

					{/* Quick Links and Partners side by side on both mobile and desktop */}
					<div className="grid grid-cols-2 gap-6 col-span-1 md:col-span-2">
						<div>
							<h3 className={`${red_hat_mono.className} text-white font-semibold mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider`}>
								Quick Links
							</h3>
							<ul className="space-y-2">
								<li>
									<Link href="/about" className={`${red_hat_mono.className} text-gray-400 hover:text-white text-xs md:text-sm transition-colors duration-200`}>
										About IglooCode
									</Link>
								</li>
								<li>
									<Link href="/getinvolved" className={`${red_hat_mono.className} text-gray-400 hover:text-white text-xs md:text-sm transition-colors duration-200`}>
										Get Involved
									</Link>
								</li>
								<li>
									<a href="mailto:hello@igloocode.com" className={`${red_hat_mono.className} text-gray-400 hover:text-white text-xs md:text-sm transition-colors duration-200`}>
										Contact Us
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h3 className={`${red_hat_mono.className} text-white font-semibold mb-3 md:mb-4 text-xs md:text-sm uppercase tracking-wider`}>
								Partners
							</h3>
							<div className="space-y-2 md:space-y-3">
								<div className="flex items-center">
									<Image src="/images/LIT-logo.webp" alt="Liberty IT" width={70} height={18} className="opacity-75 hover:opacity-100 transition-opacity md:w-20 md:h-5" />
								</div>
								<div className="flex items-center">
									<Image src="/images/kainos_transparent.webp" alt="Kainos" width={70} height={18} className="opacity-75 hover:opacity-100 transition-opacity md:w-20 md:h-5" />
								</div>
								<div className="flex items-center">
									<Image src="/images/qub_transparent.png" alt="Queen's University Belfast" width={70} height={18} className="opacity-75 hover:opacity-100 transition-opacity md:w-20 md:h-5" />
								</div>
							</div>
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
