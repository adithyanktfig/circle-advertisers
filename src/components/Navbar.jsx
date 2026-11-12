import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './Icons';

export default function Navbar({ onContactClick, onRateCardClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Direct WhatsApp chat link for CIRCLE Advertisers
  const whatsappUrl =
    'https://wa.me/919074443624?text=Hi%20CIRCLE%20Advertisers,%20I%20would%20like%20to%20discuss%20a%20project.';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-neutral-200/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] flex items-center justify-between">
        {/* Brand Logo - Black Text */}
        <a
          href="#"
          className="font-inter-tight font-bold text-[24px] text-black tracking-tight select-none focus:outline-none"
        >
          CIRCLE
        </a>

        {/* Desktop Nav Links - Black Text */}
        <div className="hidden md:flex items-center gap-10 lg:gap-[70px]">
          <a
            href="#hero"
            className="font-inter-tight font-medium text-[15px] text-black hover:text-neutral-600 transition-colors py-2 tracking-[0.28px]"
          >
            Home
          </a>
          <a
            href="#services"
            className="font-inter-tight font-medium text-[15px] text-black hover:text-neutral-600 transition-colors py-2 tracking-[0.28px]"
          >
            Services
          </a>
          <a
            href="#about"
            className="font-inter-tight font-medium text-[15px] text-black hover:text-neutral-600 transition-colors py-2 tracking-[0.28px]"
          >
            About
          </a>
        </div>

        {/* Secondary CTA (Desktop) - Direct WhatsApp Link */}
        <div className="hidden md:block">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-black hover:bg-neutral-800 text-white font-inter-tight font-medium text-[15px] px-[20px] py-[10px] rounded-[10px] transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-sm"
          >
            Chat With Us
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-black hover:text-neutral-600 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-neutral-200 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="font-inter-tight font-medium text-[18px] text-black py-2 border-b border-neutral-100"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="font-inter-tight font-medium text-[18px] text-black py-2 border-b border-neutral-100"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="font-inter-tight font-medium text-[18px] text-black py-2 border-b border-neutral-100"
            >
              About
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center bg-black hover:bg-neutral-800 text-white font-inter-tight font-medium text-[16px] px-[20px] py-[12px] rounded-[10px] transition"
            >
              Chat With Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}