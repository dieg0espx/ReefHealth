import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <div className="pt-[70px]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
