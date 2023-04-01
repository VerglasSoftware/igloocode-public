import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../public/styles/global.css";

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<Component {...pageProps} />
			<ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
		</SessionProvider>
	);
}
