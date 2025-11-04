"use client";

import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-[90px] overflow-hidden"
    >
      {/* Background Image - Optimized */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner_bg.jpg"
          alt="Luxury Hotel Background"
          fill
          priority
          loading="eager"
          quality={90}
          className="object-cover"
          sizes="100vw"
          style={{
            objectPosition: "center",
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="fill-yellow-400 text-yellow-400" size={20} />
              <span className="font-medium text-[15px]">
                5 Star Luxury Hotel & Best Resort
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.2] font-bold mb-6">
              Best Luxury hotel In the world.
            </h1>

            <p className="text-base md:text-lg lg:text-[19.2px] leading-[1.6] mb-8 text-white">
              Experience unparalleled luxury and comfort in our world-class
              resort. From breathtaking views to exceptional service, every
              moment is crafted to perfection.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6">
              <a
                href="#rooms"
                className="bg-indigo-600 text-white px-6 md:px-8 py-3 rounded-full hover:bg-indigo-700 transition-all hover:shadow-lg font-semibold text-sm md:text-[15.2px] inline-flex items-center gap-2"
              >
                Explore Rooms
                <ArrowRight size={20} />
              </a>
              <a
                href="#about"
                className="bg-transparent text-white px-6 md:px-8 py-3 rounded-full hover:bg-white/10 transition-all font-semibold text-sm md:text-[15.2px] border border-white/30"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Content - Booking Form */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] max-w-[636px]">
            <h3 className="text-2xl md:text-[28px] font-bold text-gray-900 mb-2">
              Book Your Stay
            </h3>
            <p className="text-gray-600 mb-6 text-[16px]">
              Find the perfect room for your luxury getaway
            </p>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
