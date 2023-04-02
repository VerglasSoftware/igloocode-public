import { ToastContainer } from "react-toastify";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import "react-toastify/dist/ReactToastify.css";
import "../public/styles/global.css";

export default function MyApp({ Component, pageProps: { ...pageProps } }) {
	return (
		<UserProvider>
			<Component {...pageProps} />
			<ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
		</UserProvider>
	);
}
