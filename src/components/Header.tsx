import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      {/* Preheader */}
      <div className="bg-second text-white text-sm py-2">
        <div className="container max-w-full flex justify-end items-center gap-2 px-4">
          <div className="flex font-nourd font-medium">Follow us:</div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Image src="/instagram.svg" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="mailto:info@malbecbbq.com" className="hover:text-gray-300">
              <Image src="/email.svg" alt="Email" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header className="sticky top-0 bg-white z-50 shadow">
        <div className="container flex justify-between items-center max-w-full px-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Malbec BBQ Logo" className="w-30 h-30" />
          </div>
          <nav className="flex gap-6 font-nourd font-semibold">
            <Link href="#" className="link relative text-primary">Home</Link>
            <Link href="#about" className="link relative text-primary">About us</Link>
            <Link href="#catering" className="link relative text-primary">Catering & Events</Link>
            <Link href="#contact" className="link relative text-primary">Contact us</Link>
          </nav>
        </div>
      </header>

      {/* Barra de navegación responsive */}
      <div className="flex justify-between md:hidden px-4 py-2 bg-red-800">
        <button className="text-white">☰</button>
        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <Image src="/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="mailto:info@malbecbbq.com" className="hover:text-gray-300">
            <Image src="/email-icon.svg" alt="Email" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </>
  );
}
