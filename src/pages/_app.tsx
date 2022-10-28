import "../styles/global.css";
import { IBM_Plex_Sans } from "@next/font/google";
import Header from "../components/header";
const ibm = IBM_Plex_Sans({
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={ibm.className}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
