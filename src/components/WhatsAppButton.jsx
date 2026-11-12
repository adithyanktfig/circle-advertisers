import React, { useState } from 'react';
import { WhatsAppIcon } from './Icons';

export default function WhatsAppButton({
  phoneNumber = '919074443624',
  message = "Hi, I'm interested in your services!",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on Hover */}
      <div
        className={`hidden sm:flex items-center bg-neutral-900 text-white text-xs font-inter font-medium py-2 px-3.5 rounded-lg shadow-xl transition-all duration-300 transform ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span>Chat on WhatsApp</span>
        <div className="w-2 h-2 bg-neutral-900 transform rotate-45 translate-x-1" />
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with CIRCLE Advertisers on WhatsApp"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(37,211,102,0.5),0_8px_10px_-6px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(37,211,102,0.6)] transform hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce-subtle group"
      >
        <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:rotate-12" />
      </a>
    </div>
  );
}
