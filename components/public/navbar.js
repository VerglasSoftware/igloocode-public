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
	const navigation = [
		{ name: "Home", href: "/", current: router.route == "/" },
		{ name: "About", href: "/about", current: router.route == "/about" || router.route == "/team" },
		{ name: "Get Involved", href: "/getinvolved", current: router.route.startsWith("/getinvolved") },
	];
	return (
		<nav className="fixed w-screen z-50 bg-cover bg-bottom" id="navbar" role="navigation" aria-label="Main navigation">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="flex-grow flex justify-center">
						<div className="flex-shrink-0 flex items-center">
							<div className="flex grow shrink mr-5 hidden sm:block">
								<Image src="/images/icl.png" height={28} width={28} alt="IglooCode logo" className="brightness-100" />
							</div>
							<Link 
								href="/" 
								className={classNames("text-transparent text-lg font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400", red_hat_mono.className)}
								aria-label="IglooCode home"
							>
								IglooCode
							</Link>
						</div>
						<div className="hidden sm:block sm:ml-6 sm:justify-self-end flex-grow">
							<ul className="flex space-x-4 justify-end" role="menubar">
								{navigation.map((item) => (
									<li key={item.name} role="none">
										<Link
											href={item.href}
											className={classNames(
												item.current
													? `text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 border-white border-b-[1px]`
													: "text-gray-300 hover:text-white focus:text-white",
												`px-3 py-2 text-md font-medium ${red_hat_mono.className} transition-colors duration-200`,
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
					</div>
				</div>
			</div>
		</nav>
	);
}
