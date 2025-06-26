import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-main-pink flex items-center justify-between px-4 sm:px-6 py-4 fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo-white.png" alt="reef health benefits logo" width={90} height={40} priority onClick={() => router.push("/home")}/>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex gap-6 lg:gap-10">
          <li>
              <a href={"/home"} className="text-white font-medium text-sm hover:underline cursor-pointer">Home</a>
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
        <a
          href="#"
          className="text-white border border-white rounded-full px-6 py-2 flex items-center gap-2 font-medium text-sm transition hover:bg-white hover:text-main-pink"
        >
          Contact Us
          <span className="ml-1">→</span>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white p-2"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-main-pink z-40">
          <nav className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col gap-8 text-center">
              <li>
                <a 
                  href={"/home"} 
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
              <li className="mt-8">
                <a
                  href="#"
                  className="text-white border border-white rounded-full px-8 py-3 flex items-center gap-2 font-medium text-lg transition hover:bg-white hover:text-main-pink"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                  <span className="ml-1">→</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
