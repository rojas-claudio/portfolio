import "../styles/global.css";
import { IBM_Plex_Mono } from "@next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";
import localFont from 'next/font/local'

const ibm = IBM_Plex_Mono({
  weight: "400",
  style: "normal",
  subsets: ["latin"]
});

const w95fa = localFont({ src: './../fonts/W95FA/w95fa.woff2' })

export default function App({ Component, pageProps }) {
  return (
    <div className={w95fa.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
