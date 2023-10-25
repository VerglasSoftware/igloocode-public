import { Red_Hat_Mono } from "@next/font/google";
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
		{ name: "About", href: "/competition", current: router.route == "/competition" || router.route == "/partners" },
		{ name: "Our story", href: "/about", current: router.route == "/about" || router.route == "/team" },
		{ name: "Join us", href: "/getinvolved", current: router.route.startsWith("/getinvolved") },
		{ name: "Contact", href: "/#contact", current: router.route == "/index" },
	];
	return (
		<div className="fixed w-screen z-50 bg-cover bg-bottom" id="navbar">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="flex-grow flex justify-center">
						<div className="flex-shrink-0 flex items-center">
							<div className="flex grow shrink mr-5 hidden sm:block">
								<Image src="/images/icl.png" height={28} width={28} alt="IglooCode" className="brightness-100" />
							</div>
							<Link href="/" className={classNames("text-transparent text-lg font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400", red_hat_mono.className)}>
								IglooCode
							</Link>
						</div>
						<div className="hidden sm:block sm:ml-6 sm:justify-self-end flex-grow">
							<div className="flex space-x-4 justify-end">
								{navigation.map((item) => (
									<Link
										href={item.href}
										className={classNames(
											item.current
												? `text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 border-white border-b-[1px]`
												: "text-gray-500 hover:text-gray-300",
											`px-0 py-1 text-md font-medium ${red_hat_mono.className}`,
										)}
										aria-current={item.current ? "page" : undefined}>
										{item.name}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
