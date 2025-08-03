import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes: (string | undefined | null | boolean)[]): string {
	return classes.filter(Boolean).join(" ")
}

interface NavigationItem {
	name: string;
	href: string;
	current: boolean;
}

export default function Navbar(): JSX.Element {
	const location = useLocation()
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	
	const navigation: NavigationItem[] = [
		{ name: "Home", href: "/", current: location.pathname === "/" },
		{ name: "About", href: "/competition", current: location.pathname === "/competition" },
		{ name: "Our story", href: "/ourstory", current: location.pathname === "/ourstory" },
		{ name: "Get involved", href: "/getinvolved", current: location.pathname === "/getinvolved" },
	]
	
	return (
		<div className="fixed w-screen z-50 bg-cover bg-bottom transition-all duration-300 backdrop-blur-sm" id="navbar">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="flex items-center justify-center flex-1 sm:flex-initial sm:justify-start">
						<div className="flex-shrink-0 flex items-center group">
							<div className="flex grow shrink mr-3 hidden sm:block transition-transform duration-300 group-hover:scale-110">
								<img src="/images/icl.png" height={32} width={32} alt="IglooCode" className="brightness-100 drop-shadow-md" />
							</div>
							<Link 
								to="/" 
								className="text-transparent text-lg font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 font-mono hover:from-purple-400 hover:to-cyan-400 transition-all duration-300"
							>
								IglooCode
							</Link>
						</div>
					</div>

					<div className="hidden sm:block">
						<div className="flex space-x-6">
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									className={classNames(
										item.current
											? `text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 border-b-2 border-gradient-to-r border-purple-400`
											: "text-gray-400 hover:text-white",
										`px-2 py-2 text-sm font-medium font-mono transition-all duration-300 hover:scale-105 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/10 before:to-cyan-400/10 before:rounded-md before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300`,
									)}
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>

					<div className="sm:hidden absolute right-2">
						<button
							type="button"
							className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
							aria-controls="mobile-menu"
							aria-expanded="false"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						>
							<span className="sr-only">Open main menu</span>
							{mobileMenuOpen ? (
								<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
							) : (
								<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>

				{mobileMenuOpen && (
					<div className="sm:hidden" id="mobile-menu">
						<div className="space-y-1 px-2 pb-3 pt-2 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-700/50">
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									className={classNames(
										item.current 
											? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 bg-zinc-800/50' 
											: 'text-gray-300 hover:bg-zinc-700/50 hover:text-white',
										'block px-3 py-2 rounded-md text-base font-medium font-mono transition-all duration-200'
									)}
									aria-current={item.current ? 'page' : undefined}
									onClick={() => setMobileMenuOpen(false)}
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
