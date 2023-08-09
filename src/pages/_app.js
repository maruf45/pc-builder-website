import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import store from "@/redux/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      {getLayout(
        <SessionProvider session={pageProps.session}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </SessionProvider>
      )}
    </Provider>
  );
}
