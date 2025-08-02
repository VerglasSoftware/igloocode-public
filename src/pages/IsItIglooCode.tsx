
export default function IsItIglooCode(): JSX.Element {
	const inputDate = new Date("04/15/2026");
	const todaysDate = new Date();
	
	const isIglooCodeDay = inputDate.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0);
	
	return (
		<div 
			className="grid h-screen place-items-center w-screen bg-cover"
			style={{
				backgroundImage:
					"linear-gradient(rgba(0,0,0,0.80), rgba(0.1,0,0,0.85)), linear-gradient(black, black), url('/images/backdrop.png'), url('/images/DSC01874.jpeg')",
				backgroundBlendMode: "normal, saturation",
			}}
		>
			<div className="text-center">
				<div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-16 border border-zinc-700/50 shadow-2xl hover:border-purple-500/30 transition-all duration-300">
					<div className={`text-8xl sm:text-9xl font-mono font-bold mb-8 ${
						isIglooCodeDay 
							? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse' 
							: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 animate-pulse'
					}`}>
						{isIglooCodeDay ? 'YES' : 'NO'}
					</div>
					<p className="text-white font-mono text-lg sm:text-xl font-light">
						{isIglooCodeDay 
							? '🎉 It\'s IglooCode day! 🎉' 
							: 'Not today... but soon!'
						}
					</p>
					{!isIglooCodeDay && (
						<div className="mt-6 p-4 rounded-lg bg-zinc-900/50 border border-zinc-600/30">
							<p className="text-cyan-400 font-mono text-sm font-medium">
								IglooCode 2026: April 15th
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
