import React from 'react';
import { UsersIcon, WalletIcon, CheckCircleIcon, MapPinIcon } from './Icons';

const benefits = [
  {
    id: 1,
    title: 'Personal Service',
    description: 'Discuss your requirements directly with our team.',
    icon: <UsersIcon className="w-6 h-6 text-black" />,
  },
  {
    id: 2,
    title: 'Solutions for Your Budget',
    description: 'Explore options suited to your needs and budget.',
    icon: <WalletIcon className="w-6 h-6 text-black" />,
  },
  {
    id: 3,
    title: 'Attention to Quality',
    description: 'Focus on suitable specifications and finishes.',
    icon: <CheckCircleIcon className="w-6 h-6 text-black" />,
  },
  {
    id: 4,
    title: 'Local Understanding',
    description: 'Serving customers in urban Kozhikode.',
    icon: <MapPinIcon className="w-6 h-6 text-black" />,
  },
];

export default function WhyCircle() {
  return (
    <section id="why-circle" className="py-20 lg:py-[120px] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] flex flex-col gap-14 lg:gap-[54px] items-center">
        {/* Section Intro */}
        <div className="flex flex-col gap-6 lg:gap-[30px] items-center text-center max-w-[663px]">
          <p className="font-inter-tight font-normal text-[16px] text-black tracking-[0.32px] uppercase">
            Why CIRCLE
          </p>
          <div className="flex flex-col gap-5 items-center w-full">
            <h2 className="font-inter-tight font-medium text-[36px] md:text-[44px] lg:text-[48px] text-black tracking-[-1.92px] leading-[1.05] max-w-[566px]">
              Good Work Starts with Understanding Your Needs.
            </h2>
            <p className="font-inter font-medium text-[16px] sm:text-[18px] text-body-text leading-[1.25]">
              Every business and event has a different message to share. We work
              with you to understand your requirements and find a suitable
              advertising solution.
            </p>
          </div>
        </div>

        {/* Benefits Grid (2x2 on Desktop, 1 Col on Mobile) */}
        <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-x-[120px] lg:gap-y-[50px] pt-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col gap-4 items-start max-w-[454px]"
            >
              {/* Icon Container with exact Figma spec: bg-[#f5f5f5], size 56px, rounded 16px */}
              <div className="w-[56px] h-[56px] bg-surface-light rounded-icon flex items-center justify-center shrink-0 shadow-sm">
                {benefit.icon}
              </div>

              {/* Copy */}
              <div className="flex flex-col gap-[10px] items-start w-full">
                <span className="font-inter font-normal text-[12px] text-black tracking-wider uppercase">
                  {benefit.title}
                </span>
                <p className="font-inter font-medium text-[18px] text-body-text leading-[1.25]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
