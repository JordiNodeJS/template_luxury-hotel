"use client";

import Image from "next/image";
import { ArrowRight, Award, Wifi } from "lucide-react";

export default function ServicesDetails() {
  return (
    <section
      id="services"
      className="py-16 md:py-20 lg:py-24 xl:py-32 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-yellow-600 font-semibold mb-2 tracking-wider uppercase">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Hotel Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover a world of luxury amenities and personalized services
            designed to exceed your expectations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          {/* Left - Images */}
          <div className="space-y-6 md:space-y-8">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/services/service0.jpg"
                alt="Hotel Service"
                fill
                quality={85}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/services/service1.jpg"
                  alt="Hotel Service"
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/services/service2.jpg"
                  alt="Hotel Service"
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                    />
                  </svg>
                </div>
                <h5 className="text-2xl font-bold text-gray-900">
                  Infinity Pool
                </h5>
              </div>
              <p className="text-gray-600">
                Stunning infinity pool overlooking the ocean with poolside
                service and private cabanas.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h5 className="text-2xl font-bold text-gray-900">Luxury Spa</h5>
              </div>
              <p className="text-gray-600 mb-4">
                World-class spa treatments using premium products and ancient
                wellness techniques.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
              >
                Learn More
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-yellow-600" size={28} />
                <h4 className="text-xl font-bold text-gray-900">
                  VIP Services
                </h4>
              </div>
              <p className="text-gray-700 mb-4">
                Exclusive VIP treatment with personal butler service and premium
                amenities.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
              >
                Learn More
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-yellow-200 hover:shadow-lg transition-all">
                <Award className="text-yellow-600 mb-3" size={32} />
                <h5 className="text-lg font-bold text-gray-900 mb-2">
                  Top 5 in Europe
                </h5>
                <p className="text-sm text-gray-600">
                  Ranked among the top 5 luxury hotels in Europe by Travel &
                  Leisure magazine.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-yellow-200 hover:shadow-lg transition-all">
                <Wifi className="text-yellow-600 mb-3" size={32} />
                <h5 className="text-lg font-bold text-gray-900 mb-2">
                  High Speed WiFi
                </h5>
                <p className="text-sm text-gray-600">
                  Complimentary high-speed internet access throughout the
                  property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
