import React, { useCallback, useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyCircle from './components/WhyCircle';
import AboutStats from './components/AboutStats';
import Founder from './components/Founder';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [introActive, setIntroActive] = useState(
    () => !sessionStorage.getItem('circle_intro_seen')
  );

  const handleHeroLoaded = useCallback(() => {
    setHeroLoaded(true);
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    setIntroActive(false);
  }, []);

  return (
    <>
      {introActive && (
        <Preloader
          isHeroLoaded={heroLoaded}
          onComplete={handlePreloaderComplete}
        />
      )}

      <div
        style={{
          opacity: introActive ? 0 : 1,
          transition: 'opacity 600ms ease-in-out',
        }}
        className="min-h-screen bg-white text-black selection:bg-neutral-200 selection:text-black font-inter"
      >
        {/* Sticky Header & Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section */}
          <Hero onLoaded={handleHeroLoaded} />

          {/* What We Do / Services Section */}
          <Services />

          {/* Why CIRCLE / Core Features */}
          <WhyCircle />

          {/* About Us / Social Proof Metrics */}
          <AboutStats />

          {/* Meet the Founder Section */}
          <Founder />

          {/* Lead Capture / Contact Section */}
          <ContactForm />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton phoneNumber="919074443624" />
      </div>
    </>
  );
}