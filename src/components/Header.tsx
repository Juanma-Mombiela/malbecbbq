import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Preheader */}
      <div className="bg-second text-white text-sm py-2">
        <div className="container max-w-full flex justify-end items-center gap-2 px-4">
          <div className="flex font-nourd font-medium">Follow us:</div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <img src="/instagram.svg" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="mailto:info@malbecbbq.com" className="hover:text-gray-300">
              <img src="/email.svg" alt="Email" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header className="sticky top-0 bg-white z-50 shadow">
        <div className="container flex justify-between items-center max-w-full px-4">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Malbec BBQ Logo" className="w-30 h-30" />
          </div>

          {/* Botón de menú para móvil */}
          <button 
            className="lg:hidden flex items-center justify-center p-2 text-primary" 
            onClick={toggleMenu}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-6 w-6"
            >
              <path d="M3 6h18M3 12h18M3 18h18"></path>
            </svg>
          </button>

          {/* Navegación */}
          <nav className={`flex gap-6 font-nourd font-semibold lg:flex ${isMenuOpen ? 'flex-col absolute top-16 left-0 bg-white w-full shadow-lg px-4 py-6' : 'hidden'}`}>
            <Link href="#" className="link relative text-primary">Home</Link>
            <Link href="#about" className="link relative text-primary">About us</Link>
            <Link href="#catering" className="link relative text-primary">Catering & Events</Link>
            <Link href="#contact" className="link relative text-primary">Contact us</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
