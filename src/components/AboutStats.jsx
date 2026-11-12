import React from 'react';

export default function AboutStats() {
  return (
    <section id="about" className="py-20 lg:py-[120px] bg-white border-t border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
        {/* Left Column: Copy & Stats */}
        <div className="flex flex-col gap-12 lg:gap-[50px] items-start max-w-[698px]">
          <div className="flex flex-col gap-6 lg:gap-[30px] items-start w-full">
            <p className="font-inter-tight font-normal text-[16px] text-black tracking-[0.32px] uppercase">
              About Us
            </p>
            <div className="flex flex-col gap-5 items-start w-full">
              <h2 className="font-inter-tight font-medium text-[36px] md:text-[44px] lg:text-[48px] text-black tracking-[-1.92px] leading-[1.05] max-w-[649px]">
                Local Experience. Advertising That Gets Noticed.
              </h2>
              <p className="font-inter font-medium text-[16px] sm:text-[18px] text-body-text leading-[1.25]">
                CIRCLE Advertisers is an advertising business based in Kozhikode,
                Kerala, supporting businesses, event organisers, and organisations
                with outdoor advertising, banners, and promotional solutions.
              </p>
            </div>
          </div>

          {/* Key Metrics / Social Proof Stats */}
          <div className="flex flex-wrap sm:flex-nowrap gap-8 sm:gap-12 lg:gap-[100px] items-start w-full pt-2">
            <div className="flex flex-col items-start min-w-[130px]">
              <span className="font-inter-tight font-semibold text-[52px] lg:text-[64px] text-black leading-none">
                30+
              </span>
              <span className="font-inter-tight font-normal text-[15px] lg:text-[16px] text-black tracking-[0.32px] mt-2">
                Years of Experience
              </span>
            </div>

            <div className="flex flex-col items-start min-w-[130px]">
              <span className="font-inter-tight font-semibold text-[52px] lg:text-[64px] text-black leading-none">
                500+
              </span>
              <span className="font-inter-tight font-normal text-[15px] lg:text-[16px] text-black tracking-[0.32px] mt-2">
                Projects Completed
              </span>
            </div>

            <div className="flex flex-col items-start min-w-[130px]">
              <span className="font-inter-tight font-semibold text-[52px] lg:text-[64px] text-black leading-none">
                100+
              </span>
              <span className="font-inter-tight font-normal text-[15px] lg:text-[16px] text-black tracking-[0.32px] mt-2">
                Happy Clients
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Floating Logo */}
        <div className="flex items-center justify-center lg:justify-end w-full lg:w-auto">
          <img
            src="/logotrans.png"
            alt="CIRCLE Advertisers Logo"
            className="w-[180px] sm:w-[240px] lg:w-[280px] h-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}