"use client";

import Image from "next/image";
import {
  Sparkles,
  UtensilsCrossed,
  Waves,
  Dumbbell,
  Briefcase,
  Ship,
  Fish,
  Anchor,
} from "lucide-react";

export default function ServicesGallery() {
  const services = [
    {
      title: "Spa & Wellness",
      subtitle: "Rejuvenating treatments",
      image: "/images/services/service0.jpg",
      icon: <Sparkles size={24} />,
    },
    {
      title: "Fine Dining",
      subtitle: "Gourmet cuisine",
      image: "/images/services/service1.jpg",
      icon: <UtensilsCrossed size={24} />,
    },
    {
      title: "Pool & Beach",
      subtitle: "Infinity pool & private beach",
      image: "/images/services/service2.jpg",
      icon: <Waves size={24} />,
    },
    {
      title: "Fitness Center",
      subtitle: "State-of-the-art equipment",
      image: "/images/services/service3.jpg",
      icon: <Dumbbell size={24} />,
    },
    {
      title: "Business Center",
      subtitle: "Meeting & conference facilities",
      image: "/images/services/service4.jpg",
      icon: <Briefcase size={24} />,
    },
    {
      title: "Yacht Charter",
      subtitle: "Luxury yacht experiences",
      image: "/images/services/service5.jpg",
      icon: <Ship size={24} />,
    },
    {
      title: "Fishing Charter",
      subtitle: "Luxury yacht experiences",
      image: "/images/services/service6.jpg",
      icon: <Fish size={24} />,
    },
    {
      title: "Yacht Charter",
      subtitle: "Luxury yacht experiences",
      image: "/images/services/service7.jpg",
      icon: <Anchor size={24} />,
    },
  ];

  return (
    <section className="py-12 bg-[rgb(248,250,252)]">
      <div className="container mx-auto px-3 max-w-[1320px]">
        <div className="text-center mb-12">
          <p className="text-yellow-600 font-semibold mb-3 tracking-wider uppercase text-sm">
            BEST SERVICES
          </p>
          <h2
            className="text-[35.2px] leading-[1.2] font-bold text-[rgb(51,51,51)] mb-4"
            style={{ fontWeight: 700 }}
          >
            Explore Our Hotel Services
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-64 lg:h-72 rounded-xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
              {/* Background Image - Optimized */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                quality={85}
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-yellow-900/80 group-hover:via-yellow-800/50 transition-all duration-300 z-10"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center z-20">
                <div className="w-16 h-16 bg-yellow-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-500/40 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h5 className="text-xl font-bold mb-1 group-hover:text-yellow-300 transition-colors">
                  {service.title}
                </h5>
                <p className="text-sm opacity-90">{service.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
