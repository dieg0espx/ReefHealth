import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogProvider } from "@/contexts/BlogContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  // Check if current page is a dashboard page
  const isDashboardPage = router.pathname.startsWith('/dashboard');
  
  return (
    <AuthProvider>
      <BlogProvider>
        <div>
          <Header />
          <div className="pt-[65px]">
            <Component {...pageProps} />
          </div>
          {!isDashboardPage && <Footer />}
        </div>
      </BlogProvider>
    </AuthProvider>
  );
}
