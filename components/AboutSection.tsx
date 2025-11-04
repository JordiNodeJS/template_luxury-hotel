"use client";

import Image from "next/image";
import { Headset, Wifi, Plane, UtensilsCrossed } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Headset size={32} />,
      title: "Atención 24/7",
      description: "Servicio personalizado las 24 horas del día",
    },
    {
      icon: <Wifi size={32} />,
      title: "WiFi de Alta Velocidad",
      description: "Conexión premium en todas las áreas",
    },
    {
      icon: <Plane size={32} />,
      title: "Traslado VIP",
      description: "Transporte de lujo desde el aeropuerto",
    },
    {
      icon: <UtensilsCrossed size={32} />,
      title: "Gastronomía de Autor",
      description: "Experiencias culinarias excepcionales",
    },
  ];

  return (
    <section id="about" className="bg-muted/50 py-12">
      <div className="container mx-auto px-3 max-w-[1320px]">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tu Experiencia Comienza con Nuestra Excelencia
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Desde el primer contacto hasta el último momento de tu estadía,
            nuestro equipo se dedica a crear experiencias memorables que superan
            todas tus expectativas. Cada detalle cuenta en tu viaje hacia el
            lujo absoluto.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 lg:mb-20">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h5 className="text-base md:text-lg font-bold mb-1">
                  {feature.title}
                </h5>
                <p className="text-sm md:text-base text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Grid asimétrico creativo: 1 imagen grande + 2 pequeñas apiladas */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Imagen grande (ocupa toda la altura en desktop) */}
          <div className="md:row-span-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group">
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
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group">
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
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group">
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
