import { Link } from 'react-router-dom'

interface FooterProps {
	session?: any; // You can replace with proper session type later
}

export default function Footer({ session }: FooterProps): JSX.Element {
	return (
		<>
			<footer className="p-8 bg-neutral-900 border-t border-neutral-700 shadow-2xl flex items-center justify-center flex-col relative overflow-hidden">
				{/* Background gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 to-transparent"></div>
				
				<div className="relative z-10 flex flex-row mb-8 group">
					<div className="transition-transform duration-300 group-hover:scale-110">
						<img src="/images/icl.png?color=purple&shade=600" height={32} width={32} alt="IglooCode" className="brightness-100 drop-shadow-lg" />
					</div>
					<Link to="/" className="font-mono ml-4 text-transparent text-xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 hover:from-purple-400 hover:to-cyan-400 transition-all duration-300">
						IglooCode
					</Link>
				</div>
				
				<div className="relative z-10 grid sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl mb-8">
					<div className="sm:flex items-end justify-end">
						<span className="font-mono text-sm text-neutral-100 font-semibold tracking-wider border-b-2 border-gradient-to-r border-purple-400 pb-1">ABOUT</span>
					</div>
					<Link to="/about" className="font-mono text-sm text-neutral-200 hover:text-white hover:underline transition-all duration-300 hover:translate-x-1">
						Our story
					</Link>
					<Link to="/team" className="font-mono text-sm text-neutral-200 hover:text-white hover:underline transition-all duration-300 hover:translate-x-1">
						Meet the team
					</Link>
					<div></div>
				</div>
				
				<div className="relative z-10 grid sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl mb-8">
					<div className="sm:flex items-end justify-end">
						<span className="font-mono text-sm text-neutral-100 font-semibold tracking-wider border-b-2 border-gradient-to-r border-cyan-400 pb-1">COMPETITION</span>
					</div>
					<Link to="/competition" className="font-mono text-sm text-neutral-200 hover:text-white hover:underline transition-all duration-300 hover:translate-x-1">
						How it works
					</Link>
					<Link to="/getinvolved/teachers" className="font-mono text-sm text-neutral-200 hover:text-white hover:underline transition-all duration-300 hover:translate-x-1">
						Apply now
					</Link>
					<div></div>
				</div>
				
				<div className="relative z-10 grid sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl mb-12">
					<div className="sm:flex items-end justify-end">
						<span className="font-mono text-sm text-neutral-100 font-semibold tracking-wider border-b-2 border-gradient-to-r border-purple-400 pb-1">GET INVOLVED</span>
					</div>
					<Link to="/perks" className="font-mono text-sm text-neutral-200 hover:text-white hover:underline transition-all duration-300 hover:translate-x-1">
						Perks for you
					</Link>
					<Link to="/getinvolved/teachers" className="font-mono text-sm text-neutral-200 hover:text-white hover:underline transition-all duration-300 hover:translate-x-1">
						For teachers
					</Link>
					<Link to="/getinvolved/sixthform" className="font-mono text-sm text-neutral-200 hover:text-white hover:underline transition-all duration-300 hover:translate-x-1">
						For sixth form
					</Link>
				</div>
				
				<div className="relative z-10 w-full max-w-4xl border-t border-neutral-700 pt-8">
					<p className="font-mono text-xs text-neutral-400 text-center leading-relaxed">
						<span className="text-neutral-300">© {new Date(Date.now()).getFullYear()} Verglas Software Limited.</span> All Rights Reserved.
						<br />
						<span className="text-neutral-400">Website crafted with ❤️ by </span>
						<a href="https://dandabs.io/" className="hover:underline text-purple-400 hover:text-purple-300 transition-colors">
							Daniel Adams
						</a>
						<span className="text-neutral-400"> and </span>
						<a href="https://github.com/JakeyGilly" className="hover:underline text-cyan-400 hover:text-cyan-300 transition-colors">
							Jake Gillman
						</a>
						<span className="text-neutral-400">.</span>
						<br />
						<span className="text-[0.6rem] leading-[1.2rem] text-center text-neutral-500 mt-2 block">
							IglooCode is not associated with Slemish College or Strathearn School and any publications from us do not represent their views.
						</span>
						<br />
						<span className="text-[0.6rem] text-center text-neutral-500">
							'IglooCode' is a trading name of Verglas Software Limited, a company registered in England and Wales (no. 14838037).
						</span>
					</p>
				</div>
			</footer>

			{import.meta.env.PROD && (
				<>
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-SLRW9XGVWW"></script>
					<script>
						{`window.dataLayer = window.dataLayer || [];
				  function gtag(){dataLayer.push(arguments);}
				  gtag('js', new Date());
				
				  gtag('config', 'G-SLRW9XGVWW'${!session ? "" : ', { "user_id": "' + session.id + '" }'});`}
					</script>
				</>
			)}
		</>
	)
}
