import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <header className="w-full bg-main-pink flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-4 fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
        <Image src="/logo-white.png" alt="reef health benefits logo" width={80} height={35} className="sm:w-[90px] sm:h-[40px]" priority />
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex gap-4 lg:gap-6 xl:gap-10">
          <li>
              <a 
                href={"/"} 
                className={`font-medium text-xs lg:text-sm cursor-pointer transition-all duration-200 relative ${
                  router.pathname === "/" 
                    ? "text-white font-semibold" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                Businesses
                {router.pathname === "/" && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"></div>
                )}
              </a>
          </li>
          <li>
              <a 
                href={"/individuals"} 
                className={`font-medium text-xs lg:text-sm cursor-pointer transition-all duration-200 relative ${
                  router.pathname === "/individuals" 
                    ? "text-white font-semibold" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                Individuals
                {router.pathname === "/individuals" && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"></div>
                )}
              </a>
          </li>
          <li>
              <a 
                href={"/franchise"} 
                className={`font-medium text-xs lg:text-sm cursor-pointer transition-all duration-200 relative ${
                  router.pathname === "/franchise" 
                    ? "text-white font-semibold" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                Franchise
                {router.pathname === "/franchise" && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"></div>
                )}
              </a>
          </li>
          <li>
              <a 
                href={"/about"} 
                className={`font-medium text-xs lg:text-sm cursor-pointer transition-all duration-200 relative ${
                  router.pathname === "/about" 
                    ? "text-white font-semibold" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                About Us
                {router.pathname === "/about" && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"></div>
                )}
              </a>
          </li>
          <li>
              <a 
                href={"/blog"} 
                className={`font-medium text-xs lg:text-sm cursor-pointer transition-all duration-200 relative ${
                  router.pathname === "/blog" 
                    ? "text-white font-semibold" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                Our Blog
                {router.pathname === "/blog" && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"></div>
                )}
              </a>
          </li>
          <li>
              <a 
                href={"/contact"} 
                className={`font-medium text-xs lg:text-sm cursor-pointer transition-all duration-200 relative ${
                  router.pathname === "/contact" 
                    ? "text-white font-semibold" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                Contact Us
                {router.pathname === "/contact" && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"></div>
                )}
              </a>
          </li>
        </ul>
      </nav>

      {/* Desktop Contact Button */}
      <div className="hidden md:block">
        <button
          onClick={handleContactClick}
          className="text-white border border-white rounded-full px-4 lg:px-6 py-2 flex items-center gap-1 lg:gap-2 font-medium text-xs lg:text-sm transition hover:bg-white hover:text-main-pink cursor-pointer"
        >
          Contact Us
          <i className="bi bi-arrow-up-right text-xs lg:text-sm"></i>
        </button>
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
         <div className="md:hidden fixed top-16 right-4 bg-white rounded-2xl shadow-2xl border border-gray-100 z-40 min-w-[200px] py-4">
           <nav className="flex flex-col">
             <ul className="flex flex-col">
               <li>
                 <a 
                   href={"/"} 
                   className={`font-medium text-base px-6 py-3 transition-all duration-200 cursor-pointer flex items-center relative ${
                     router.pathname === "/" 
                       ? "text-main-pink bg-gradient-to-r from-pink-50 to-pink-100/50 font-semibold border-l-4 border-main-pink" 
                       : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                   }`}
                   onClick={() => setIsMenuOpen(false)}
                 >
                   <i className={`mr-3 ${router.pathname === "/" ? "text-main-pink" : "text-gray-400"}`}></i>
                   <i className="bi bi-house mr-3 text-main-pink"></i>
                   Businesses
                 </a>
               </li>
               <li>
                 <a 
                   href={"/individuals"} 
                   className={`font-medium text-base px-6 py-3 transition-all duration-200 cursor-pointer flex items-center relative ${
                     router.pathname === "/individuals" 
                       ? "text-main-pink bg-gradient-to-r from-pink-50 to-pink-100/50 font-semibold border-l-4 border-main-pink" 
                       : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                   }`}
                   onClick={() => setIsMenuOpen(false)}
                 >
                   <i className={`mr-3 ${router.pathname === "/individuals" ? "text-main-pink" : "text-gray-400"}`}></i>
                   <i className="bi bi-person mr-3 text-main-pink"></i>
                   Individuals
                 </a>
               </li>
               <li>
                 <a 
                   href={"/franchise"} 
                   className={`font-medium text-base px-6 py-3 transition-all duration-200 cursor-pointer flex items-center relative ${
                     router.pathname === "/franchise" 
                       ? "text-main-pink bg-gradient-to-r from-pink-50 to-pink-100/50 font-semibold border-l-4 border-main-pink" 
                       : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                   }`}
                   onClick={() => setIsMenuOpen(false)}
                 >
                   <i className={`mr-3 ${router.pathname === "/franchise" ? "text-main-pink" : "text-gray-400"}`}></i>
                   <i className="bi bi-building mr-3 text-main-pink"></i>
                   Franchise
                 </a>
               </li>
               <li>
                 <a 
                   href={"/about"} 
                   className={`font-medium text-base px-6 py-3 transition-all duration-200 cursor-pointer flex items-center relative ${
                     router.pathname === "/about" 
                       ? "text-main-pink bg-gradient-to-r from-pink-50 to-pink-100/50 font-semibold border-l-4 border-main-pink" 
                       : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                   }`}
                   onClick={() => setIsMenuOpen(false)}
                 >
                   <i className={`mr-3 ${router.pathname === "/about" ? "text-main-pink" : "text-gray-400"}`}></i>
                   <i className="bi bi-info-circle mr-3 text-main-pink"></i>
                   About Us
                 </a>
               </li>
               <li>
                 <a 
                   href={"/blog"} 
                   className={`font-medium text-base px-6 py-3 transition-all duration-200 cursor-pointer flex items-center relative ${
                     router.pathname === "/blog" 
                       ? "text-main-pink bg-gradient-to-r from-pink-50 to-pink-100/50 font-semibold border-l-4 border-main-pink" 
                       : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                   }`}
                   onClick={() => setIsMenuOpen(false)}
                 >
                   <i className={`mr-3 ${router.pathname === "/blog" ? "text-main-pink" : "text-gray-400"}`}></i>
                   <i className="bi bi-journal-text mr-3 text-main-pink"></i>
                   Our Blog
                 </a>
               </li>
               <li>
                 <a 
                   href={"/contact"} 
                   className={`font-medium text-base px-6 py-3 transition-all duration-200 cursor-pointer flex items-center relative ${
                     router.pathname === "/contact" 
                       ? "text-main-pink bg-gradient-to-r from-pink-50 to-pink-100/50 font-semibold border-l-4 border-main-pink" 
                       : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                   }`}
                   onClick={() => setIsMenuOpen(false)}
                 >
                   <i className={`mr-3 ${router.pathname === "/contact" ? "text-main-pink" : "text-gray-400"}`}></i>
                   <i className="bi bi-envelope mr-3 text-main-pink"></i>
                   Contact Us
                 </a>
               </li>
               <div className="border-t border-gray-200 mt-2 pt-2">
                 <li>
                   <button
                     onClick={() => {
                       router.push("/contact");
                       setIsMenuOpen(false);
                     }}
                     className="w-full text-left text-main-pink font-semibold text-base px-6 py-3 hover:bg-pink-50 transition-colors cursor-pointer flex items-center"
                   >
                     <i className="bi bi-arrow-up-right mr-3"></i>
                     Get Started
                   </button>
                 </li>
               </div>
             </ul>
           </nav>
         </div>
       )}
    </header>
  );
}
