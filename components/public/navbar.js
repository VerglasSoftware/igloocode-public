import { Red_Hat_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
const red_hat_mono = Red_Hat_Mono({ subsets: ["latin"] });

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
	const router = useRouter();
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
	
	const navigation = [
		{ name: "Home", href: "/", current: router.route == "/" },
		{ name: "About", href: "/about", current: router.route == "/about" || router.route == "/team" },
		{ name: "Get Involved", href: "/getinvolved", current: router.route.startsWith("/getinvolved") },
	];
	
	return (
		<nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800" id="navbar" role="navigation" aria-label="Main navigation">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex items-center">
						<div className="flex-shrink-0 flex items-center">
							<Image src="/images/icl.png" height={24} width={24} alt="IglooCode logo" className="brightness-100 mr-3" />
							<div className="flex flex-col sm:flex-row sm:items-center">
								<Link 
									href="/" 
									className={classNames("text-transparent text-lg sm:text-xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 leading-none flex items-center", red_hat_mono.className)}
									aria-label="IglooCode home"
								>
									IglooCode
								</Link>
								<div className="hidden sm:flex items-center sm:ml-2">
									<span className={`${red_hat_mono.className} text-gray-400 text-xs mr-1 flex items-center`}>by</span>
									<a href="https://verglas.io/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity duration-200 flex items-center">
										<Image src="/images/wll.png" alt="Verglas" width={40} height={11} className="opacity-75 hover:opacity-100" />
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<ul className="flex space-x-6" role="menubar">
							{navigation.map((item) => (
								<li key={item.name} role="none">
									<Link
										href={item.href}
										className={classNames(
											item.current
												? `text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 border-b-2 border-purple-500`
												: "text-gray-300 hover:text-white focus:text-white",
											`px-3 py-2 text-sm font-medium ${red_hat_mono.className} transition-colors duration-200`,
										)}
										aria-current={item.current ? "page" : undefined}
										role="menuitem"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className="text-gray-300 hover:text-white focus:text-white p-2"
							aria-expanded={mobileMenuOpen}
							aria-label="Toggle mobile menu"
						>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								{mobileMenuOpen ? (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								) : (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile menu */}
				{mobileMenuOpen && (
					<div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
						<ul className="px-4 py-4 space-y-2" role="menu">
							{navigation.map((item) => (
								<li key={item.name} role="none">
									<Link
										href={item.href}
										className={classNames(
											item.current
												? `text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400`
												: "text-gray-300 hover:text-white",
											`block px-3 py-2 text-base font-medium ${red_hat_mono.className} transition-colors duration-200`,
										)}
										aria-current={item.current ? "page" : undefined}
										role="menuitem"
										onClick={() => setMobileMenuOpen(false)}
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
}
