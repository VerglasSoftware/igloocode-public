import { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import Footer from './Footer'
import Navbar from './Navbar'

export const siteTitle = "IglooCode"

interface LayoutProps {
	children: ReactNode;
	title?: string;
	session?: any; // You can replace with proper session type later
}

export default function Layout({ children, title, session }: LayoutProps): JSX.Element {
	return (
		<>
			<Helmet>
				<title>{title ? `${title} - ${siteTitle}` : siteTitle}</title>
				<meta name="theme-color" content="#171717" />
				<meta name="description" content="IglooCode - A capture-the-flag programming competition for KS3 pupils from Northern Ireland. Build your skills together." />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Helmet>
			<Navbar />
			<div className="flex flex-row justify-center">
				<main className="justify-around w-full">{children}</main>
			</div>
			<Footer session={session} />
		</>
	)
}
