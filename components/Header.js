import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-main-pink flex items-center justify-between px-6 py-4 fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo-white.png" alt="reef health benefits logo" width={90} height={40} priority />
      </div>
      {/* Navigation */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex gap-10">
          <li>
              <a href={"/home"} className="text-white font-medium text-sm hover:underline cursor-pointer">Home </a>
          </li>
          <li>
              <a href={"/about"} className="text-white font-medium text-sm hover:underline cursor-pointer">About Us </a>
          </li>
          <li>
              <a href={"/blog"} className="text-white font-medium text-sm hover:underline cursor-pointer"> Our Blog </a>
          </li>
          <li>
              <a href={"/contact"} className="text-white font-medium text-sm hover:underline cursor-pointer">Contact Us </a>
          </li>
        </ul>
      </nav>
      {/* Contact Us Button */}
      <div>
        <a
          href="#"
          className="text-white border border-white rounded-full px-6 py-2 flex items-center gap-2 font-medium text-sm transition hover:bg-white hover:text-main-pink"
        >
          Contact Us
          <span className="ml-1">→</span>
        </a>
      </div>
    </header>
  );
}
