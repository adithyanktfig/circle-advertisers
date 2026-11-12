import React from 'react';

export default function Founder() {
  return (
    <section className="bg-black text-white w-full overflow-hidden py-16 lg:py-[60px]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-[40px]">
          {/* Founder Portrait (420px x 563px aspect ratio) */}
          <div className="w-full max-w-[420px] h-[450px] sm:h-[500px] lg:h-[563px] shrink-0 relative overflow-hidden rounded-xl lg:rounded-none group shadow-2xl">
            <img
  src="/founder.png"
  alt="Founder"
  className="w-full h-full object-cover object-center rounded-2xl"
/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-4 left-4 lg:hidden">
              <p className="font-inter-tight font-medium text-lg text-white">Dinesh KT</p>
              <p className="text-xs text-neutral-400 font-inter">Founder & Lead Strategist</p>
            </div>
          </div>

          {/* Right Editorial Info */}
          <div className="flex flex-col justify-between items-start w-full py-2 lg:py-6 gap-12 lg:gap-16">
            {/* Top Subheaders */}
            <div className="w-full flex flex-wrap items-center justify-between gap-4 font-inter-tight font-medium text-[14px] lg:text-[16px] text-neutral-400 uppercase tracking-wider pb-6 border-b border-neutral-800">
              <span className="text-white">The Founder</span>
              <span>CIRCLE ADVERTISERS</span>
              <span className="hidden sm:inline">The Man Behind CIRCLE</span>
            </div>

            {/* Central Serif Headline Section */}
            <div className="w-full flex flex-col gap-6 lg:gap-8 my-auto">
              <h2 className="font-didone text-[52px] sm:text-[76px] lg:text-[96px] text-white tracking-[-4px] sm:tracking-[-6px] lg:tracking-[-8.64px] leading-[0.95] capitalize font-normal">
                Meet the Founder
              </h2>

              <div className="flex flex-wrap items-center justify-between gap-4 font-inter-tight font-medium text-[15px] lg:text-[16px] text-white">
                <span className="text-xl lg:text-2xl font-semibold">Dinesh KT</span>
                <span className="text-neutral-300">
                  30+ Years of Experience in Advertising
                </span>
              </div>
            </div>

            {/* Bottom Philosophy Tagline */}
            <div className="w-full pt-6 border-t border-neutral-800">
              <p className="font-inter-tight font-normal text-[15px] lg:text-[16px] text-neutral-300 tracking-[0.32px] italic">
                “Three decades of experience. One commitment — making every message count.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
