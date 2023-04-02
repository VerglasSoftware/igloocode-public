import Head from "next/head";
export var siteTitle = "IglooCode";

import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Layout({ children, title }) {
    return (
        <div className="min-h-screen flex flex-col">

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
                <title>{title + " - " + siteTitle}</title>
            </Head>

            <div className="flex flex-col md:flex-row flex-1">
                <Sidebar />
                <div className="flex flex-col flex-1">
                    <Navbar title={title} />
                    <main className="flex-1 p-5 bg-gray-100">{children}</main>
                </div>
            </div>
        </div>
    );
}
