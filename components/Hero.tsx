"use client";

import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 md:pt-20 lg:pt-24 overflow-hidden"
    >
      {/* Background Image - Optimized */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner_bg.jpg"
          alt="Luxury Hotel Background"
          fill
          priority
          loading="eager"
          quality={85}
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white max-w-xl mx-auto lg:mx-0">
            <Badge
              variant="secondary"
              className="mb-4 sm:mb-6 gap-2 text-xs sm:text-sm"
            >
              <Star className="fill-primary text-primary" size={18} />
              <span className="font-medium">
                Resort de Lujo 5 Estrellas Premiado
              </span>
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Tu Santuario de Lujo y Exclusividad
            </h1>

            <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 text-white/90">
              Sumérgete en una experiencia única donde el lujo se fusiona con la
              naturaleza. Disfruta de instalaciones de primera clase, atención
              personalizada y momentos inolvidables en cada rincón de nuestro
              resort.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="/rooms">
                  Ver Habitaciones
                  <ArrowRight size={20} />
                </a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="w-full sm:w-auto"
              >
                <a href="/about">Descubre Más</a>
              </Button>
            </div>
          </div>

          {/* Right Content - Booking Form */}
          <Card className="w-full max-w-2xl mx-auto lg:max-w-none">
            <CardHeader className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold">
                Reserva tu Estancia
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Encuentra la suite perfecta para tu escape de lujo
              </p>
            </CardHeader>
            <CardContent>
              <BookingForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
