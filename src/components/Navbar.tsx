import { Link, useLocation } from 'react-router-dom'

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
	
	const navigation: NavigationItem[] = [
		{ name: "Home", href: "/", current: location.pathname === "/" },
		{ name: "About", href: "/competition", current: location.pathname === "/competition" },
		{ name: "Team", href: "/team", current: location.pathname === "/team" },
		{ name: "Our story", href: "/about", current: location.pathname === "/about" },
		{ name: "Get involved", href: "/getinvolved", current: location.pathname === "/getinvolved" },
	]
	
	return (
		<div className="fixed w-screen z-50 bg-cover bg-bottom transition-all duration-300 backdrop-blur-sm" id="navbar">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="flex-grow flex justify-center">
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
						<div className="hidden sm:block sm:ml-8 sm:justify-self-end flex-grow">
							<div className="flex space-x-6 justify-end">
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
					</div>
				</div>
			</div>
		</div>
	)
}
