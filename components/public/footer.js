import { Red_Hat_Mono } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

import Script from "next/script";

const red_hat_mono = Red_Hat_Mono({ subsets: ["latin"] });

export default function Footer({ session }) {
	return (
		<>
			<footer className="p-6 bg-neutral-800 rounded-t-dlg shadow flex items-center justify-center flex-col">
				<div className="flex flex-row mb-6">
					<Image src="/images/icl.png?color=purple&shade=600" height={28} width={28} alt="IglooCode" className="brightness-100" />
					<Link href="/" className={`${red_hat_mono.className} ml-4 text-transparent text-lg font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400`}>
						IglooCode
					</Link>
				</div>
				<div className="grid sm:grid-cols-4 gap-2 sm:gap-8 w-1/2">
					<div className="sm:flex items-end justify-end">
						<span className={`${red_hat_mono.className} text-md text-neutral-100 font-semibold`}>ABOUT |</span>
					</div>
					<Link href="/about" className={`${red_hat_mono.className} text-md text-neutral-200 hover:underline`}>
						Our story
					</Link>
					<Link href="/team" className={`${red_hat_mono.className} text-md text-neutral-200 hover:underline`}>
						Meet the team
					</Link>
					<Link href="/contact" className={`${red_hat_mono.className} text-md text-neutral-200 hover:underline`}>
						Contact us
					</Link>
				</div>
				<div className="grid sm:grid-cols-4 gap-2 sm:gap-8 w-1/2 pt-2">
					<div className="sm:flex items-end justify-end">
						<span className={`${red_hat_mono.className} text-md text-neutral-100 font-semibold`}>COMPETITION |</span>
					</div>
					<Link href="/competition" className={`${red_hat_mono.className} text-md text-neutral-200 hover:underline`}>
						How it works
					</Link>
					<Link href="/partners" className={`${red_hat_mono.className} text-md text-neutral-200 hover:underline`}>
						Our partners
					</Link>
					<Link href="/getinvolved/teachers" className={`${red_hat_mono.className} text-md text-neutral-200 hover:underline`}>
						Apply now
					</Link>
				</div>
				<div className="grid sm:grid-cols-4 gap-2 sm:gap-8 w-1/2 pt-2">
					<div className="sm:flex items-end justify-end">
						<span className={`${red_hat_mono.className} text-md text-neutral-100 font-semibold`}>GET INVOLVED |</span>
					</div>
					<Link href="/perks" className={`${red_hat_mono.className} text-md text-neutral-200 hover:underline`}>
						Perks for you
					</Link>
					<Link href="/getinvolved/teachers" className={`${red_hat_mono.className} text-md text-neutral-200 hover:underline`}>
						For teachers
					</Link>
					<Link href="/getinvolved/sixthform" className={`${red_hat_mono.className} text-md text-neutral-200 hover:underline`}>
						For sixth form
					</Link>
				</div>
				<p className={`${red_hat_mono.className} text-sm text-neutral-400 text-center mt-6`}>
					© 2022{" "}
					<a href="https://dandabs.io/" className="hover:underline">
						Daniel Adams
					</a>
					,{" "}
					<a href="#" className="hover:underline">
						Aideen McHugh
					</a>
					,{" "}
					<a href="#" className="hover:underline">
						Emma White
					</a>{" "}
					&{" "}
					<a href="https://github.com/JakeyGilly" className="hover:underline">
						Jake Gillman
					</a>
					. All Rights Reserved.
					<br />
					<span className="text-xs text-center">IglooCode is not associated with Slemish College or Strathearn School and any publications from us do not represent their views.</span>
					<br />
					<span className="text-xs text-center">Information on this website may not be final or confirmed. We reserve the right to change content at any time without notice.</span>
				</p>
			</footer>

			{process.env.NODE_ENV == "production" ? (
				<>
					<Script src="https://www.googletagmanager.com/gtag/js?id=G-SLRW9XGVWW" />
					<Script id="analytics">
						{`window.dataLayer = window.dataLayer || [];
				  function gtag(){dataLayer.push(arguments);}
				  gtag('js', new Date());
				
				  gtag('config', 'G-SLRW9XGVWW'${!session ? "" : ', { "user_id": "' + session.id + '" }'});`}
					</Script>
				</>
			) : null}
		</>
	);
}
