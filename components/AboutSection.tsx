"use client";

import Image from "next/image";
import { Headset, Wifi, Plane, UtensilsCrossed } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Headset size={32} />,
      title: "24/7 Concierge",
      description: "Round-the-clock personalized service",
    },
    {
      icon: <Wifi size={32} />,
      title: "Free High-Speed WiFi",
      description: "Stay connected throughout your stay",
    },
    {
      icon: <Plane size={32} />,
      title: "Airport Transfer",
      description: "Complimentary luxury transportation",
    },
    {
      icon: <UtensilsCrossed size={32} />,
      title: "Fine Dining",
      description: "World-class culinary experiences",
    },
  ];

  return (
    <section id="about" className="bg-[rgb(248,250,252)] py-12">
      <div className="container mx-auto px-3 max-w-[1320px]">
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-[35.2px] leading-[1.2] font-bold text-[rgb(51,51,51)] mb-4"
            style={{ fontWeight: 700 }}
          >
            Your Trip Begins with Our Reservation
          </h2>
          <p className="text-base lg:text-[16px] leading-relaxed text-[rgb(55,65,81)] max-w-3xl mx-auto">
            Experience seamless booking and exceptional service from the moment
            you plan your stay. Our dedicated team ensures every detail is
            perfect.
          </p>
        </div>

        {/* Features Grid - NO background, NO shadow, solo iconos y texto */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 lg:mb-20">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h5 className="text-base md:text-[16px] font-bold text-[rgb(31,41,55)] mb-1">
                  {feature.title}
                </h5>
                <p className="text-sm md:text-[14px] text-[rgb(55,65,81)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Grid asimétrico creativo: 1 imagen grande + 2 pequeñas apiladas */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Imagen grande (ocupa toda la altura en desktop) */}
          <div className="md:row-span-2 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group">
            <div className="relative h-full min-h-[400px] md:min-h-[600px]">
              <Image
                src="/images/aboutus/hotelservice.jpg"
                alt="Hotel Service"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Imagen pequeña 1 */}
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group">
            <div className="relative h-[280px] md:h-[290px]">
              <Image
                src="/images/aboutus/luxurypool.jpg"
                alt="Luxury Pool"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Imagen pequeña 2 */}
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group">
            <div className="relative h-[280px] md:h-[290px]">
              <Image
                src="/images/aboutus/finedining.jpg"
                alt="Fine Dining"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
