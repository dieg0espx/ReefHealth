import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-main-pink flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo-white.png" alt="reef health benefits logo" width={90} height={40} priority />
      </div>
      {/* Navigation */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex gap-10">
          {Array(6).fill().map((_, i) => (
            <li key={i}>
              <a className="text-white font-medium text-sm hover:underline cursor-pointer">Page</a>
            </li>
          ))}
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
