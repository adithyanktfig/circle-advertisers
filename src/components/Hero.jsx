import React from 'react';
import { ArrowRightIcon } from './Icons';
import heroBg from '../assets/hero.jpg';
import heroMobile from '../assets/heromobile.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex items-end md:items-center"
    >
      {/* Background Media Container - Pure images with zero overlays */}
      <div className="absolute inset-0 z-0">
        {/* Mobile-Only Portrait Background */}
        <img
          src={heroMobile}
          alt="Hero Background Mobile"
          className="block md:hidden w-full h-full object-cover object-center"
        />

        {/* Desktop-Only Landscape Background */}
        <img
          src={heroBg}
          alt="Hero Background"
          className="hidden md:block w-full h-full object-cover object-center"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] w-full pt-28 pb-10 md:py-24">
        <div className="max-w-[620px] text-left">
          <div className="flex flex-col gap-3 md:gap-4">
            {/* 1. Headline enters slowly first (0.2s delay) */}
            <h1
              className="text-[#010101] animate-cinematic"
              style={{
                fontFamily: '"Inter Tight", sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(30px, 7.5vw, 48px)',
                lineHeight: '104.6%',
                letterSpacing: '-0.04em',
                color: '#010101',
                animationDelay: '0.2s',
              }}
            >
              Make Your Brand Seen. Make Your Event Matter.
            </h1>

            {/* 2. Supporting text glides in second (0.5s delay) */}
            <p
              className="font-inter font-medium text-[15px] sm:text-[18px] leading-[1.4] text-[#404040] animate-cinematic"
              style={{
                color: '#404040',
                animationDelay: '0.5s',
              }}
            >
              We help businesses stand out and events make an impression with
              eye-catching banners, outdoor advertising and creative displays.
            </p>
          </div>

          {/* 3. CTA button settles in last (0.8s delay) */}
          <div
            className="pt-6 md:pt-8 animate-cinematic"
            style={{ animationDelay: '0.8s' }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-[10px] bg-black text-white hover:bg-white hover:text-black border border-black/10 hover:border-black font-inter-tight font-semibold text-[15px] sm:text-[16px] py-[15px] px-[28px] rounded-xl transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl active:scale-95"
            >
              <span>Discuss Your Project</span>
              <ArrowRightIcon className="w-[18px] h-[12px] text-white group-hover:text-black transition-colors duration-300 ease-in-out" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}