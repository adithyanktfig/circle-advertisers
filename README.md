# CIRCLE Advertisers - Homepage Frontend

Production-ready, responsive frontend implementation of the **CIRCLE Advertisers** Figma homepage design (`node-id=72:30`).

---

## 🚀 Quick Start

### Option 1: Instant Browser Preview (Zero Installation)
Simply open `index.html` in your web browser (Chrome, Safari, Edge, Firefox):
```bash
# On Windows PowerShell
start C:\Users\user\.gemini\antigravity\scratch\circle-advertisers\index.html
```

### Option 2: React + Vite Development Server
Run the modular React components:
```bash
cd C:\Users\user\.gemini\antigravity\scratch\circle-advertisers
npm install
npm run dev
```

---

## 🎨 Design System & Token Mappings

Derived directly from the Figma document inspect data:

### Typography
| Style | Font Family | Weight | Size | Line Height | Letter Spacing | Color |
|---|---|---|---|---|---|---|
| **H1 (Hero & Main)** | `Inter Tight` | Medium (500) | 48px | 86.45% / 1.05 | -1.92px (-0.04em) | `#010101` |
| **Founder Headline** | `Antic Didone` | Regular (400) | 96px | 0.95 | -8.64px (-0.09em) | `#FFFFFF` |
| **H2 / H3 (Card Titles)** | `Inter Tight` | Regular (400) | 24px | 1.1 | 0.48px (0.02em) | `#000000` |
| **Section Tag / Nav** | `Inter Tight` | Regular (400) / Medium (500) | 16px / 14px | 1.1 | 0.32px / 0.28px | `#000000` |
| **Body Large** | `Inter` | Medium (500) | 18px | 1.2 | 0 | `#5C5C5C` (`#404040` hero) |
| **Body Small** | `Inter` | Regular (400) / Medium (500) | 15px / 16px | 1.2 | 0 | `#615E54` |
| **Big Stats** | `Inter Tight` | SemiBold (600) | 64px | 1.0 | 0 | `#000000` |

### Color Palette
- **Brand Black:** `#010101` / `#000000`
- **Body Text:** `#5c5c5c` / `#404040`
- **Surface Light:** `#f5f5f5`
- **Input Background:** `#dedede`
- **Input Text / Placeholders:** `#615e54`
- **Footer Background:** `rgba(243, 243, 243, 0.9)`
- **Footer Border:** `#c1c1c1`
- **WhatsApp Green:** `#25D366` (Hover `#1ebe5d`)

### Spacing & Radii
- **Card Radius:** `rounded-[20px]` (20px)
- **Input Radius:** `rounded-[17px]` (17px, 64px height)
- **Icon Container:** `rounded-[16px]` (16px, 56px x 56px, background `#f5f5f5`)
- **Button Radius:** `rounded-[10px]` (10px, 64px height for main form submit, padding `15px 20px`)

---

## 🧩 Modular Components Structure

```
circle-advertisers/
├── index.html                   # Standalone self-contained HTML5 + Tailwind + Vanilla JS
├── app.html                     # Vite React root HTML
├── package.json                 # React 18 + Vite + Tailwind CSS dependencies
├── tailwind.config.js           # Custom Tailwind tokens matching Figma specs
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx                 # React root bootstrap
    ├── App.jsx                  # Main application container
    ├── index.css                # Global styles, fonts, and scrollbar
    └── components/
        ├── Navbar.jsx           # Sticky nav, mobile drawer, secondary CTA
        ├── Hero.jsx             # Headline, CTA, aerial view & billboard mockup
        ├── Services.jsx         # 6 feature cards (Outdoor, Banners, Event, etc.)
        ├── WhyCircle.jsx        # 4 value pillars with 56px icon containers
        ├── AboutStats.jsx       # 30+ years, 500+ projects, 100+ clients & brand mark
        ├── Founder.jsx          # Dinesh KT portrait, Didone typography & quote
        ├── ContactForm.jsx      # Interactive lead form with name, email, budget, message
        ├── Footer.jsx           # Modular footer with navigation and quick actions
        ├── WhatsAppButton.jsx   # Fixed floating button with bounce animation
        └── Icons.jsx            # Reusable inline SVGs (Brand mark, arrows, features)
```

---

## 💬 WhatsApp Click-to-Chat Integration

- **Position:** Fixed `bottom-6 right-6` with z-index 50.
- **Brand Styling:** WhatsApp brand green `#25D366`, white SVG icon, multi-layer drop shadow, hover bounce animation.
- **Direct Link:**
  `https://wa.me/919074443624?text=Hi%2C%20I'm%20interested%20in%20your%20services!`
