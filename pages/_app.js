import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogProvider } from "@/contexts/BlogContext";

export default function App({ Component, pageProps }) {
  return (
    <BlogProvider>
      <div>
        <Header />
        <div className="pt-[65px]">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </BlogProvider>
  );
}
