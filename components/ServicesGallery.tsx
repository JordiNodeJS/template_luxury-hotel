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
import { Badge } from "@/components/ui/badge";

export default function ServicesGallery() {
  const services = [
    {
      title: "Spa & Wellness",
      subtitle: "Tratamientos rejuvenecedores",
      image: "/images/services/service0.jpg",
      icon: <Sparkles size={24} />,
    },
    {
      title: "Gastronomía Gourmet",
      subtitle: "Cocina de autor",
      image: "/images/services/service1.jpg",
      icon: <UtensilsCrossed size={24} />,
    },
    {
      title: "Piscina y Playa",
      subtitle: "Piscina infinita y playa privada",
      image: "/images/services/service2.jpg",
      icon: <Waves size={24} />,
    },
    {
      title: "Centro Fitness",
      subtitle: "Equipamiento de última generación",
      image: "/images/services/service3.jpg",
      icon: <Dumbbell size={24} />,
    },
    {
      title: "Centro de Negocios",
      subtitle: "Salas de reuniones y conferencias",
      image: "/images/services/service4.jpg",
      icon: <Briefcase size={24} />,
    },
    {
      title: "Alquiler de Yates",
      subtitle: "Experiencias náuticas de lujo",
      image: "/images/services/service5.jpg",
      icon: <Ship size={24} />,
    },
    {
      title: "Pesca Deportiva",
      subtitle: "Charter de pesca exclusivo",
      image: "/images/services/service6.jpg",
      icon: <Fish size={24} />,
    },
    {
      title: "Excursiones Marítimas",
      subtitle: "Tours privados en yate",
      image: "/images/services/service7.jpg",
      icon: <Anchor size={24} />,
    },
  ];

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-3 max-w-[1320px]">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3">
            SERVICIOS PREMIUM
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explora Nuestros Servicios de Lujo
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-64 lg:h-72 rounded-lg overflow-hidden group cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                quality={85}
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-primary/80 group-hover:via-primary/50 transition-all duration-300 z-10"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center z-20">
                <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/40 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>

                <div className="relative overflow-hidden h-16">
                  <h5 className="text-xl font-bold mb-1 absolute inset-x-0 translate-y-20 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    {service.title}
                  </h5>
                </div>

                <p className="text-sm opacity-90">{service.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
