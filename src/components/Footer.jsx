import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[rgba(243,243,243,0.9)] border-t-[0.5px] border-footer-border pt-16 lg:pt-[72px] pb-10 px-6 md:px-12 lg:px-[100px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12 lg:gap-[48px]">
        {/* Top Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 items-start justify-between">
          {/* Brand info */}
          <div className="md:col-span-6 lg:col-span-6 flex flex-col gap-4 max-w-[360px]">
            <p className="font-inter-tight font-medium text-[24px] text-black">
              CIRCLE Advertisers
            </p>
            <p className="font-inter font-medium text-[16px] lg:text-[18px] text-body-text leading-[1.25]">
              Outdoor advertising, banners, and promotional solutions for
              businesses, event organisers, and organisations based in Kozhikode,
              Kerala.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-3">
            <p className="font-inter-tight font-normal text-[16px] text-black tracking-[0.32px]">
              Navigation
            </p>
            <nav className="flex flex-col gap-[10px] font-inter font-medium text-[16px] text-body-text">
              <a href="#hero" className="hover:text-black transition-colors">
                Home
              </a>
              <a href="#services" className="hover:text-black transition-colors">
                Services
              </a>
              <a href="#why-circle" className="hover:text-black transition-colors">
                Why CIRCLE
              </a>
              <a href="#about" className="hover:text-black transition-colors">
                About
              </a>
            </nav>
          </div>

          {/* Quick Actions */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-3">
            <p className="font-inter-tight font-normal text-[16px] text-black tracking-[0.32px]">
              Quick Actions
            </p>
            <div className="flex flex-col gap-[10px] font-inter font-medium text-[16px] text-body-text">
              <a href="#contact" className="hover:text-black transition-colors">
                Get a Quote
              </a>
              <a
                href="https://wa.me/919074443624?text=Hi%2C%20I'm%20interested%20in%20your%20services!"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-600 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 border-t border-neutral-300/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-inter-tight font-normal text-[15px] lg:text-[16px] text-body-text tracking-[0.32px]">
          <p>© {new Date().getFullYear()} CIRCLE Advertisers. All rights reserved.</p>
          <p>Kozhikode, Kerala</p>
        </div>
      </div>
    </footer>
  );
}
