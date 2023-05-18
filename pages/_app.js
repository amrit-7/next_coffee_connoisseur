import "@/styles/globals.css";
import { IBM_Plex_Sans } from "next/font/google";
const ibmplex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={ibmplex.className}>
      <Component {...pageProps} />
    </main>
  );
}
