"use client";

import Image from "next/image";

export default function ServicesGallery() {
  const services = [
    {
      title: "Spa & Wellness",
      subtitle: "Rejuvenating treatments",
      image: "/images/services/service0.jpg",
    },
    {
      title: "Fine Dining",
      subtitle: "Gourmet cuisine",
      image: "/images/services/service1.jpg",
    },
    {
      title: "Pool & Beach",
      subtitle: "Infinity pool & private beach",
      image: "/images/services/service2.jpg",
    },
    {
      title: "Fitness Center",
      subtitle: "State-of-the-art equipment",
      image: "/images/services/service3.jpg",
    },
    {
      title: "Business Center",
      subtitle: "Meeting & conference facilities",
      image: "/images/services/service4.jpg",
    },
    {
      title: "Yacht Charter",
      subtitle: "Luxury yacht experiences",
      image: "/images/services/service5.jpg",
    },
    {
      title: "Fishing Charter",
      subtitle: "Luxury yacht experiences",
      image: "/images/services/service6.jpg",
    },
    {
      title: "Yacht Charter",
      subtitle: "Luxury yacht experiences",
      image: "/images/services/service7.jpg",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 xl:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-yellow-600 font-semibold mb-2 tracking-wider uppercase text-sm">
            BEST SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Hotel Services
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-64 lg:h-72 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image - Optimized */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                quality={85}
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 group-hover:from-yellow-600/40 group-hover:via-yellow-600/60 group-hover:to-yellow-600/80 transition-all duration-500 z-10"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center z-20 group-hover:translate-y-[-4px] transition-transform duration-300">
                <h5 className="text-xl font-bold mb-1 drop-shadow-lg">
                  {service.title}
                </h5>
                <p className="text-sm opacity-90 drop-shadow-md">
                  {service.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
