import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";
export var siteTitle = "IglooCode";

export default function Layout({ children, session }) {
	return (
		<>
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
				<link rel="manifest" href="/images/site.webmanifest" />
				<link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#9333ea" />
				<link rel="shortcut icon" href="/images/favicon.ico" />
				<meta name="apple-mobile-web-app-title" content="IglooCode" />
				<meta name="application-name" content="IglooCode" />
				<meta name="msapplication-TileColor" content="#2f2f2f" />
				<meta name="msapplication-config" content="/images/browserconfig.xml" />
				<meta content="IglooCode" property="og:title" />
				<meta
					content="IglooCode is Northern Ireland's premier coding competition for KS3 students. Learn programming, make friends, and win prizes!"
					property="og:description"
				/>
				<meta content="https://iglooco.de" property="og:url" />
				<meta content="#9233ea" data-react-helmet="true" name="theme-color" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md z-50"
			>
				Skip to main content
			</a>
			
			<header role="banner">
				<Navbar />
			</header>
			
			<main id="main-content" role="main" className="flex-1">
				{children}
			</main>
			
			<Footer session={session} />
		</>
	);
}
