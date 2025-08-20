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
              <a href={"/"} className="text-white font-medium text-xs lg:text-sm hover:underline cursor-pointer">Home</a>
          </li>
          <li>
              <a href={"/individuals"} className="text-white font-medium text-xs lg:text-sm hover:underline cursor-pointer">Individuals</a>
          </li>
          <li>
              <a href={"/employees"} className="text-white font-medium text-xs lg:text-sm hover:underline cursor-pointer">Businesses</a>
          </li>
          <li>
              <a href={"/about"} className="text-white font-medium text-xs lg:text-sm hover:underline cursor-pointer">About Us</a>
          </li>
          <li>
              <a href={"/blog"} className="text-white font-medium text-xs lg:text-sm hover:underline cursor-pointer">Our Blog</a>
          </li>
          <li>
              <a href={"/contact"} className="text-white font-medium text-xs lg:text-sm hover:underline cursor-pointer">Contact Us</a>
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
                   className="text-gray-800 font-medium text-base px-6 py-3 hover:bg-gray-50 transition-colors cursor-pointer flex items-center"
                   onClick={() => setIsMenuOpen(false)}
                 >
                   <i className="bi bi-house mr-3 text-main-pink"></i>
                   Home
                 </a>
               </li>
               <li>
                 <a 
                   href={"/individuals"} 
                   className="text-gray-800 font-medium text-base px-6 py-3 hover:bg-gray-50 transition-colors cursor-pointer flex items-center"
                   onClick={() => setIsMenuOpen(false)}
                 >
                   <i className="bi bi-person mr-3 text-main-pink"></i>
                   Individuals
                 </a>
               </li>
               <li>
                 <a 
                   href={"/employees"} 
                   className="text-gray-800 font-medium text-base px-6 py-3 hover:bg-gray-50 transition-colors cursor-pointer flex items-center"
                   onClick={() => setIsMenuOpen(false)}
                 >
                   <i className="bi bi-building mr-3 text-main-pink"></i>
                   Businesses
                 </a>
               </li>
               <li>
                 <a 
                   href={"/about"} 
                   className="text-gray-800 font-medium text-base px-6 py-3 hover:bg-gray-50 transition-colors cursor-pointer flex items-center"
                   onClick={() => setIsMenuOpen(false)}
                 >
                   <i className="bi bi-info-circle mr-3 text-main-pink"></i>
                   About Us
                 </a>
               </li>
               <li>
                 <a 
                   href={"/blog"} 
                   className="text-gray-800 font-medium text-base px-6 py-3 hover:bg-gray-50 transition-colors cursor-pointer flex items-center"
                   onClick={() => setIsMenuOpen(false)}
                 >
                   <i className="bi bi-journal-text mr-3 text-main-pink"></i>
                   Our Blog
                 </a>
               </li>
               <li>
                 <a 
                   href={"/contact"} 
                   className="text-gray-800 font-medium text-base px-6 py-3 hover:bg-gray-50 transition-colors cursor-pointer flex items-center"
                   onClick={() => setIsMenuOpen(false)}
                 >
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
