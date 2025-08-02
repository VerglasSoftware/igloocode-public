import { Link } from 'react-router-dom'

interface FooterProps {
	session?: any; // You can replace with proper session type later
}

export default function Footer({ session }: FooterProps): JSX.Element {
	return (
		<>
			<footer className="p-6 bg-neutral-800 rounded-t-dlg shadow flex items-center justify-center flex-col">
				<div className="flex flex-row mb-6">
					<img src="/images/icl.png?color=purple&shade=600" height={28} width={28} alt="IglooCode" className="brightness-100" />
					<Link to="/" className="font-mono ml-4 text-transparent text-lg font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
						IglooCode
					</Link>
				</div>
				<div className="grid sm:grid-cols-4 gap-2 sm:gap-8 w-1/2">
					<div className="sm:flex items-end justify-end">
						<span className="font-mono text-md text-neutral-100 font-semibold">ABOUT |</span>
					</div>
					<Link to="/about" className="font-mono text-md text-neutral-200 hover:underline">
						Our story
					</Link>
					<Link to="/team" className="font-mono text-md text-neutral-200 hover:underline">
						Meet the team
					</Link>
				</div>
				<div className="grid sm:grid-cols-4 gap-2 sm:gap-8 w-1/2 pt-2">
					<div className="sm:flex items-end justify-end">
						<span className="font-mono text-md text-neutral-100 font-semibold">COMPETITION |</span>
					</div>
					<Link to="/competition" className="font-mono text-md text-neutral-200 hover:underline">
						How it works
					</Link>
					<Link to="/getinvolved/teachers" className="font-mono text-md text-neutral-200 hover:underline">
						Apply now
					</Link>
				</div>
				<div className="grid sm:grid-cols-4 gap-2 sm:gap-8 w-1/2 pt-2">
					<div className="sm:flex items-end justify-end">
						<span className="font-mono text-md text-neutral-100 font-semibold">GET INVOLVED |</span>
					</div>
					<Link to="/perks" className="font-mono text-md text-neutral-200 hover:underline">
						Perks for you
					</Link>
					<Link to="/getinvolved/teachers" className="font-mono text-md text-neutral-200 hover:underline">
						For teachers
					</Link>
					<Link to="/getinvolved/sixthform" className="font-mono text-md text-neutral-200 hover:underline">
						For sixth form
					</Link>
				</div>
				<p className="font-mono text-sm text-neutral-400 text-center mt-6">
					© {new Date(Date.now()).getFullYear()} Verglas Software Limited. All Rights Reserved.
					<br />
					Website by{" "}
					<a href="https://dandabs.io/" className="hover:underline">
						Daniel Adams
					</a>
					{" "}and{" "}
					<a href="https://github.com/JakeyGilly" className="hover:underline">
						Jake Gillman
					</a>.
					<br />
					<span className="text-[0.6rem] leading-[0.9rem] text-center">IglooCode is not associated with Slemish College or Strathearn School and any publications from us do not represent their views.</span>
					<br />
					<span className="text-[0.6rem] text-center">'IglooCode' is a trading name of Verglas Software Limited, a company registered in England and Wales (no. 14838037).</span>
				</p>
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
