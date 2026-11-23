import React from 'react';

const services = [
  {
    id: 1,
    title: 'Outdoor Advertising',
    description: 'Make your message visible with billboard and outdoor advertising solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1676491394429-37341c0ef75a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    imageAlt: 'Highway billboard and outdoor advertising structure',
  },
  {
    id: 2,
    title: 'Banners & Flex Printing',
    description: 'Promote your business, announcements and events with eye-catching banners.',
    imageUrl: 'https://images.unsplash.com/photo-1789302964452-8a85604c8037?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    imageAlt: 'Vibrant event stage flex banner and backdrop display',
  },
  {
    id: 3,
    title: 'Event Advertising',
    description: 'Bring event spaces to life with promotional displays and event branding.',
    imageUrl: 'https://images.unsplash.com/photo-1757876598502-aee97f90eb7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    imageAlt: 'Interior venue event branding, banners and stair graphics',
  },
  {
    id: 4,
    title: 'Wall Painting & Advertising',
    description: 'Turn suitable walls and surfaces into visible advertising spaces.',
    imageUrl: 'https://images.unsplash.com/photo-1616987089494-93e81b91460a?q=80&w=1130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    imageAlt: 'High-visibility urban wall painting and mural advertisement',
  },
  {
    id: 5,
    title: 'Promotional Displays',
    description: 'Display your message at venues, gatherings and business locations.',
    imageUrl: 'https://images.unsplash.com/photo-1773682614225-c9b92727ce1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    imageAlt: 'Roll-up banner standees and promotional exhibition displays',
  },
  {
    id: 6,
    title: 'ID Cards & Print Services',
    description: 'Practical printed materials for businesses and organisations.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1752231227830-20cee47c4663?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    imageAlt: 'Corporate printed ID cards, stationery, brochures and lanyards',
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-20 lg:pt-[120px] pb-10 lg:pb-[60px] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px] flex flex-col gap-16 lg:gap-[80px] items-center">
        {/* Section Intro */}
        <div className="flex flex-col gap-6 lg:gap-[30px] items-center text-center max-w-[663px]">
          <p className="font-inter-tight font-normal text-[16px] text-black tracking-[0.32px] uppercase">
            What We Do
          </p>
          <div className="flex flex-col gap-5 items-center w-full">
            <h2 className="font-inter-tight font-medium text-[36px] md:text-[44px] lg:text-[48px] text-black tracking-[-1.92px] leading-[1.05] max-w-[500px]">
              Advertising Solutions for Every Occasion.
            </h2>
            <p className="font-inter font-medium text-[16px] sm:text-[18px] text-body-text leading-[1.25]">
              From helping businesses get noticed to making events stand out, we
              bring your message to life through creative advertising and display
              solutions.
            </p>
          </div>
        </div>

        {/* 6 Services Grid (2 Columns on Desktop, 1 Column on Mobile) */}
        <div className="w-full flex flex-col gap-10 lg:gap-[40px] items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-[20px] lg:gap-y-[50px] w-full">
            {services.map((service) => (
              <article
                key={service.id}
                className="flex flex-col gap-4 items-start w-full group"
              >
                {/* Image Container with Exact 400px Height & 20px Border Radius */}
                <div className="h-[280px] sm:h-[350px] lg:h-[400px] w-full relative rounded-card overflow-hidden bg-neutral-100 shadow-sm transition-transform duration-300 group-hover:shadow-md">
                  <img
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-[14px] items-start w-full max-w-[454px]">
                  <h3 className="font-inter-tight font-normal text-[22px] lg:text-[24px] text-black tracking-[0.48px] group-hover:text-neutral-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-inter font-medium text-[16px] lg:text-[18px] text-body-text leading-[1.2]">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Section CTA Button */}
          <div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-black hover:bg-neutral-800 text-white font-inter-tight font-medium text-[16px] px-[20px] py-[15px] rounded-button transition-transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            >
              Discuss Your Requirements
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
