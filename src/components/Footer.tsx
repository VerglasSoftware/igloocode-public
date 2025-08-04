import { Link } from 'react-router-dom'

interface FooterProps {
	session?: any;
}

export default function Footer({ session }: FooterProps): JSX.Element {
	return (
		<>
			<footer className="p-8 bg-neutral-900 border-t border-neutral-700 shadow-2xl flex items-center justify-center flex-col relative overflow-hidden">
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
					<Link to="https://verglas.io/#/people" className="font-mono text-sm text-neutral-200 hover:text-white hover:underline transition-all duration-300 hover:translate-x-1">
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
				
				<div className="relative z-10 text-center text-neutral-400 text-sm max-w-4xl mx-auto mb-8 leading-relaxed">
					<p className="mb-4 font-light">
						Verglas (NI) Limited is a company registered in Northern Ireland
						(no. NI716105). Registered office: Office 218, 92 Castle Street,
						Belfast, BT1 1HE.
					</p>
					<p className="mb-4 font-light">
						Verglas is not associated with our founding schools, and any
						publications from us are not representative of our partners or
						sponsors.
					</p>
					<p className="font-light">
						IglooCode™ and Educatr™ are trademarks of Verglas (NI) Limited.
					</p>
				</div>

				<div className="relative z-10 text-center text-neutral-300 text-sm border-t border-neutral-700 pt-8">
					<p className="font-light mb-4">
						© 2025 Verglas (NI) Limited. All rights reserved.
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
