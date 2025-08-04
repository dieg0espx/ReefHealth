import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";
import { signOut } from "../lib/auth";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactClick = () => {
    router.push("/contact");
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <header className="w-full bg-main-pink flex items-center justify-between px-4 sm:px-6 py-4 fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
        <Image src="/logo-white.png" alt="reef health benefits logo" width={90} height={40} priority />
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex gap-6 lg:gap-10">
          <li>
              <a href={"/"} className="text-white font-medium text-sm hover:underline cursor-pointer">Home</a>
          </li>
          <li>
              <a href={"/about"} className="text-white font-medium text-sm hover:underline cursor-pointer">About Us</a>
          </li>
          <li>
              <a href={"/blog"} className="text-white font-medium text-sm hover:underline cursor-pointer">Our Blog</a>
          </li>
          <li>
              <a href={"/contact"} className="text-white font-medium text-sm hover:underline cursor-pointer">Contact Us</a>
          </li>
 
        </ul>
      </nav>

      {/* Desktop Contact Button */}
      <div className="hidden md:block">
        {user ? (
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/dashboard")}
              className="text-white font-medium text-sm hover:underline cursor-pointer"
            >
              Dashboard
            </button>
            <button
              onClick={handleSignOut}
              className="text-white border border-white rounded-full px-6 py-2 flex items-center gap-2 font-medium text-sm transition hover:bg-white hover:text-main-pink cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/login")}
              className="text-white font-medium text-sm hover:underline cursor-pointer"
            >
              Sign In
            </button>
            <button
              onClick={handleContactClick}
              className="text-white border border-white rounded-full px-6 py-2 flex items-center gap-2 font-medium text-sm transition hover:bg-white hover:text-main-pink cursor-pointer"
            >
              Contact Us
              <i className="bi bi-arrow-up-right"></i>
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white p-2"
        aria-label="Toggle menu"
      >
        <i className={`text-2xl ${isMenuOpen ? 'bi bi-x-lg' : 'bi bi-list'}`}></i>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-main-pink z-40">
          <nav className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col gap-8 text-center">
              <li>
                <a 
                  href={"/"} 
                  className="text-white font-medium text-lg hover:underline cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href={"/about"} 
                  className="text-white font-medium text-lg hover:underline cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href={"/blog"} 
                  className="text-white font-medium text-lg hover:underline cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Blog
                </a>
              </li>
              <li>
                <a 
                  href={"/contact"} 
                  className="text-white font-medium text-lg hover:underline cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </a>
              </li>
              
              {user ? (
                <>
                  <li>
                    <a 
                      href={"/dashboard"} 
                      className="text-white font-medium text-lg hover:underline cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="mt-8">
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        handleSignOut();
                      }}
                      className="text-white border border-white rounded-full px-8 py-3 flex items-center gap-2 font-medium text-lg transition hover:bg-white hover:text-main-pink cursor-pointer"
                    >
                      Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a 
                      href={"/login"} 
                      className="text-white font-medium text-lg hover:underline cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </a>
                  </li>
                  <li className="mt-8">
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        handleContactClick();
                      }}
                      className="text-white border border-white rounded-full px-8 py-3 flex items-center gap-2 font-medium text-lg transition hover:bg-white hover:text-main-pink cursor-pointer"
                    >
                      Contact Us
                      <i className="bi bi-arrow-up-right"></i>
                    </button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
