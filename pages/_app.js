import "../public/styles/global.css";

export default function MyApp({ Component, pageProps: { ...pageProps } }) {
	return (
			<Component {...pageProps} />
	);
}
