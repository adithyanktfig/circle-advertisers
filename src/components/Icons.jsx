import React from 'react';

// Symmetrical Circle Advertisers Brand Mark as shown in Figma
export function CircleBrandMark({ className = "w-[260px] h-[190px]", color = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 260 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="CIRCLE Advertisers Emblem"
    >
      {/* Top Left Curve */}
      <path
        d="M 50 20 C 100 20 120 70 120 100 C 100 80 70 60 40 70 C 20 75 10 95 10 95 C 10 95 25 50 50 20 Z"
        fill={color}
      />
      {/* Top Right Curve */}
      <path
        d="M 210 20 C 160 20 140 70 140 100 C 160 80 190 60 220 70 C 240 75 250 95 250 95 C 250 95 235 50 210 20 Z"
        fill={color}
      />
      {/* Center top arc */}
      <path
        d="M 70 30 C 110 55 150 55 190 30 C 165 65 95 65 70 30 Z"
        fill={color}
      />
      {/* Central horizontal arch structure */}
      <path
        d="M 60 110 C 100 115 120 105 130 95 C 140 105 160 115 200 110 C 160 125 100 125 60 110 Z"
        fill={color}
      />
      {/* Bottom Left Wing */}
      <path
        d="M 50 200 C 100 200 120 150 120 120 C 100 140 70 160 40 150 C 20 145 10 125 10 125 C 10 125 25 170 50 200 Z"
        fill={color}
      />
      {/* Bottom Right Wing */}
      <path
        d="M 210 200 C 160 200 140 150 140 120 C 160 140 190 160 220 150 C 240 145 250 125 250 125 C 250 125 235 170 210 200 Z"
        fill={color}
      />
      {/* Center bottom arc */}
      <path
        d="M 70 190 C 110 165 150 165 190 190 C 165 155 95 155 70 190 Z"
        fill={color}
      />
    </svg>
  );
}

// Button Arrow Icon (exact Figma 18px width with horizontal line and arrow head)
export function ArrowRightIcon({ className = "w-[18px] h-[12px]" }) {
  return (
    <svg
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 6H17M17 6L12 1M17 6L12 11"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Users / Personal Service Icon
export function UsersIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

// Wallet / Budget Icon
export function WalletIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 7V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2" />
      <path d="M16 12h6v4h-6a2 2 0 0 1 0-4z" />
      <circle cx="18" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}

// Check Circle / Quality Icon
export function CheckCircleIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

// Map Pin / Local Understanding Icon
export function MapPinIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// Mail Icon for contact section
export function MailIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

// Phone Icon for contact section
export function PhoneIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

// Mobile Hamburger Menu Icon
export function MenuIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

// Mobile Close Icon
export function CloseIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// WhatsApp Icon
export function WhatsAppIcon({ className = "w-7 h-7" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.02 2C8.28 2 2 8.28 2 16.02c0 2.47.64 4.88 1.87 7.02L2 30l7.19-1.83c2.07 1.14 4.41 1.74 6.83 1.74h.01c7.74 0 14.02-6.28 14.02-14.02C30.05 8.28 23.76 2 16.02 2zm7.1 19.83c-.3.84-1.74 1.6-2.4 1.68-.62.08-1.42.12-2.31-.17-.54-.18-1.24-.41-2.14-.8-3.79-1.65-6.26-5.52-6.45-5.78-.19-.26-1.55-2.07-1.55-3.95 0-1.88.98-2.8 1.33-3.18.35-.38.76-.48 1.02-.48.26 0 .51 0 .74.01.24.01.56-.09.87.66.32.77 1.1 2.68 1.2 2.88.1.2.16.44.03.7-.13.26-.2.42-.4.65-.2.23-.42.51-.6.69-.2.2-.41.42-.18.82.23.4 1.02 1.68 2.19 2.72 1.5 1.34 2.77 1.75 3.17 1.95.4.2.64.17.88-.1.24-.27 1.02-1.19 1.3-1.6.27-.4.55-.34.92-.2.38.14 2.4 1.13 2.81 1.34.41.2.68.3.78.47.1.17.1.98-.2 1.82z" />
    </svg>
  );
}
