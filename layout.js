import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";
export var siteTitle = "IglooCode";

export default function Layout({ children, session }) {
	return (
		<>
			<Navbar />
			<div className="flex flex-row justify-center">
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
						content="IglooCode is a capture-the-flag programming and cryptography competition for KS3 pupils from Northern Ireland, aimed at those looking to study IT or Digital Technology at GCSE, or who have an interest in computers or programming."
						property="og:description"
					/>
					<meta content="https://iglooco.de" property="og:url" />
					<meta content="#9233ea" data-react-helmet="true" name="theme-color" />
				</Head>
				<main className="justify-around">{children}</main>
			</div>
			<Footer session={session} />
		</>
	);
}
