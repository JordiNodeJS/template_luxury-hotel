"use client";

import Image from "next/image";
import { ArrowRight, Award, Wifi } from "lucide-react";

export default function ServicesDetails() {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="container mx-auto px-3 max-w-[1320px]">
        <div className="text-center mb-12">
          <p className="text-yellow-600 font-semibold mb-3 tracking-wider uppercase text-sm">
            NUESTROS SERVICIOS
          </p>
          <h2
            className="text-[35.2px] leading-[1.2] font-bold text-[rgb(51,51,51)] mb-4"
            style={{ fontWeight: 700 }}
          >
            Descubre Nuestras Amenidades Exclusivas
          </h2>
          <p className="text-[16px] leading-relaxed text-[rgb(55,65,81)] max-w-3xl mx-auto">
            Explora un mundo de comodidades de lujo y servicios personalizados
            diseñados especialmente para superar todas tus expectativas y crear
            momentos inolvidables.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left - Images */}
          <div className="space-y-6">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/services/service0.jpg"
                alt="Hotel Service"
                fill
                quality={85}
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative h-56 rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/services/service1.jpg"
                  alt="Hotel Service"
                  fill
                  quality={85}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-56 rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/services/service2.jpg"
                  alt="Hotel Service"
                  fill
                  quality={85}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-600 flex-shrink-0">
                  <svg
                    className="w-8 h-8"
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
                  Piscina Infinita
                </h5>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Impresionante piscina infinita con vistas al océano, servicio de
                bar junto a la piscina y cabañas privadas para tu máximo
                confort.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-600 flex-shrink-0">
                  <svg
                    className="w-8 h-8"
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
                <h5 className="text-2xl font-bold text-gray-900">
                  Spa de Lujo
                </h5>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Tratamientos de spa de nivel mundial con productos premium y
                técnicas ancestrales de bienestar para tu relajación total.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-medium group/link"
              >
                Conocer Más
                <ArrowRight
                  size={18}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </div>

            <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Award className="text-yellow-600 flex-shrink-0" size={32} />
                <h4 className="text-xl font-bold text-gray-900">
                  Servicios VIP
                </h4>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Tratamiento VIP exclusivo con servicio de mayordomo personal y
                amenidades premium diseñadas para tu máximo disfrute.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-medium group/link"
              >
                Conocer Más
                <ArrowRight
                  size={18}
                  className="group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-600 mb-4">
                  <Award size={24} />
                </div>
                <h5 className="text-lg font-bold text-gray-900 mb-2">
                  Top 5 en Europa
                </h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Clasificado entre los 5 mejores hoteles de lujo de Europa por
                  la revista Travel & Leisure.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-600 mb-4">
                  <Wifi size={24} />
                </div>
                <h5 className="text-lg font-bold text-gray-900 mb-2">
                  WiFi de Alta Velocidad
                </h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Acceso gratuito a internet de alta velocidad en todas las
                  áreas del resort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
