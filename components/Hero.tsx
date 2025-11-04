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

      <div className="container mx-auto px-3 relative z-10 max-w-[1320px]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white max-w-xl">
            <Badge variant="secondary" className="mb-6 gap-2">
              <Star className="fill-primary text-primary" size={20} />
              <span className="font-medium">
                Resort de Lujo 5 Estrellas Premiado
              </span>
            </Badge>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Tu Santuario de Lujo y Exclusividad
            </h1>

            <p className="text-lg leading-relaxed mb-8 text-white/90">
              Sumérgete en una experiencia única donde el lujo se fusiona con la
              naturaleza. Disfruta de instalaciones de primera clase, atención
              personalizada y momentos inolvidables en cada rincón de nuestro
              resort.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="/rooms">
                  Ver Habitaciones
                  <ArrowRight size={20} />
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="/about">Descubre Más</a>
              </Button>
            </div>
          </div>

          {/* Right Content - Booking Form */}
          <Card className="max-w-[636px]">
            <CardHeader>
              <h3 className="text-2xl font-bold">Reserva tu Estancia</h3>
              <p className="text-muted-foreground">
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
