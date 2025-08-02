import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

export default function SchoolInterest(): JSX.Element {
	useEffect(() => {
		// Load Tally embed script
		const script = document.createElement('script');
		script.src = 'https://tally.so/widgets/embed.js';
		script.async = true;
		document.head.appendChild(script);

		return () => {
			// Cleanup script on unmount
			const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
			if (existingScript) {
				document.head.removeChild(existingScript);
			}
		};
	}, []);

	return (
		<>
			<Helmet>
				<title>School Interest Form - IglooCode</title>
				<meta name="theme-color" content="#171717" />
				<style type="text/css">
					{`
					html { margin: 0; height: 100%; overflow: hidden; }
					iframe { position: absolute; top: 0; right: 0; bottom: 0; left: 0; border: 0; }
					`}
				</style>
			</Helmet>
			<iframe 
				data-tally-src="https://tally.so/r/314GRg?transparentBackground=1" 
				width="100%" 
				height="100%" 
				frameBorder="0" 
				marginHeight={0} 
				marginWidth={0} 
				title="IglooCode 2024: School Interest Form"
			/>
		</>
	)
}
