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
				{ name: "Team", href: "/team", current: location.pathname === "/team" },
		{ name: "About", href: "/competition", current: location.pathname === "/competition" },
		{ name: "Get involved", href: "/getinvolved", current: location.pathname === "/getinvolved" },
		{ name: "Our story", href: "/about", current: location.pathname === "/about" || location.pathname === "/team" },
		{ name: "Join us", href: "/getinvolved", current: location.pathname.startsWith("/getinvolved") },
		{ name: "Contact", href: "/#contact", current: location.pathname === "/index" },
	]
	
	return (
		<div className="fixed w-screen z-50 bg-cover bg-bottom" id="navbar">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="flex-grow flex justify-center">
						<div className="flex-shrink-0 flex items-center">
							<div className="flex grow shrink mr-5 hidden sm:block">
								<img src="/images/icl.png" height={28} width={28} alt="IglooCode" className="brightness-100" />
							</div>
							<Link 
								to="/" 
								className="text-transparent text-lg font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 font-mono"
							>
								IglooCode
							</Link>
						</div>
						<div className="hidden sm:block sm:ml-6 sm:justify-self-end flex-grow">
							<div className="flex space-x-4 justify-end">
								{navigation.map((item) => (
									<Link
										key={item.name}
										to={item.href}
										className={classNames(
											item.current
												? `text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 border-white border-b-[1px]`
												: "text-gray-500 hover:text-gray-300",
											`px-0 py-1 text-md font-medium font-mono`,
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
