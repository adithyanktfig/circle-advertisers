import React, { useEffect, useRef } from 'react';
import { ArrowRightIcon } from './Icons';

const HERO_BG = '/hero.jpg';
const HERO_MOBILE = '/mobilebg.webp';

export default function Hero({
  onHeroLoad,
  onLoaded,
  isIntroActive = false,
}) {
  const imgRef = useRef(null);

  const notifyLoaded = () => {
    onHeroLoad?.();
    onLoaded?.();
  };

  // If the browser already cached the image before React hydrated, trigger load callback immediately
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      notifyLoaded();
    }
  }, []);

  // Keep delays tight so text and CTA appear cleanly right as the preloader fades out
  const delayOffset = isIntroActive ? 0.3 : 0;

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] md:min-h-screen overflow-x-clip flex items-end md:items-center"
    >
      {/* Background Media Container - Responsive <picture> loads active viewport image */}
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Mobile-Only Portrait Background */}
          <source media="(max-width: 767px)" srcSet={HERO_MOBILE} />
          {/* Desktop-Only Landscape Background */}
          <img
            ref={imgRef}
            src={HERO_BG}
            alt="Hero Background"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            onLoad={notifyLoaded}
            onError={notifyLoaded}
            className="w-full h-full object-cover object-center"
          />
        </picture>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-[1440px] mx-auto pl-6 pr-20 sm:px-6 md:px-12 lg:px-[100px] w-full pt-24 pb-6 sm:pb-10 md:py-24">
        <div className="max-w-[300px] sm:max-w-[620px] text-left">
          <div className="flex flex-col gap-2.5 md:gap-4">
            {/* 1. Headline */}
            <h1
              className="text-[#010101] animate-cinematic will-change-transform"
              style={{
                fontFamily: '"Inter Tight", sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(26px, 6.8vw, 48px)',
                lineHeight: '105%',
                letterSpacing: '-0.04em',
                color: '#010101',
                animationDelay: `${(0.1 + delayOffset).toFixed(1)}s`,
              }}
            >
              Make Your Brand Seen. Make Your Event Matter.
            </h1>

            {/* 2. Supporting text */}
            <p
              className="font-inter font-medium text-[13px] sm:text-[18px] leading-[1.38] text-[#404040] animate-cinematic will-change-transform"
              style={{
                color: '#404040',
                animationDelay: `${(0.2 + delayOffset).toFixed(1)}s`,
              }}
            >
              We help businesses stand out and events make an impression with
              eye-catching banners, outdoor advertising and creative displays.
            </p>
          </div>

          {/* 3. CTA button */}
          <div
            className="pt-4 md:pt-8 animate-cinematic will-change-transform"
            style={{ animationDelay: `${(0.3 + delayOffset).toFixed(1)}s` }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-[10px] bg-black text-white hover:bg-white hover:text-black border border-black/10 hover:border-black font-inter-tight font-semibold text-[14px] sm:text-[16px] py-[13px] px-[22px] sm:py-[15px] sm:px-[28px] rounded-xl transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl active:scale-95"
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