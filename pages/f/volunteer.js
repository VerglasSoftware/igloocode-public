import { Red_Hat_Mono } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import Layout, { siteTitle } from "../../components/public/layout";
import imgCosmo from "../../public/images/IMG_0679.jpeg";
import imgHands from "../../public/images/60A456C6-0BA2-43F1-B30E-97211DF2C6D9.jpeg";
const red_hat_mono = Red_Hat_Mono({ subsets: ["latin"] });

function Index() {
	return (
		<>
			<Head>
				<title>Volunteer Application Form - {siteTitle}</title>
				<meta name="theme-color" content="#171717" />
				<script async src="https://tally.so/widgets/embed.js"></script>
			</Head>
		<style type="text/css">
			{`
			html { margin: 0; height: 100%; overflow: hidden; }
			iframe { position: absolute; top: 0; right: 0; bottom: 0; left: 0; border: 0; }
			`}
</style>
<iframe data-tally-src="https://tally.so/r/w2A5gD?transparentBackground=1" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="IglooCode 2024: School Interest Form"></iframe>
	</>
	);
}

export default Index;
