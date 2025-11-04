"use client";

import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Mountain, Wine, Waves } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Rating from "@/components/ui/rating";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils";

export default function RoomsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const rooms = [
    {
      image: "/images/rooms/room1.jpg",
      badge: "POPULAR",
      title: "Suite Deluxe Premium",
      description:
        "Espaciosa suite elegantemente decorada con amenidades premium, diseño contemporáneo y vistas espectaculares de la ciudad que te dejarán sin aliento.",
      rating: 5.0,
      reviews: 120,
      price: 299,
      amenities: [
        { icon: <Bed size={18} />, text: "Cama King" },
        { icon: <Bath size={18} />, text: "Baño de Mármol" },
        { icon: <Mountain size={18} />, text: "Vista Panorámica" },
      ],
    },
    {
      image: "/images/rooms/room2.jpg",
      badge: null,
      title: "Suite Ejecutiva",
      description:
        "Habitación confortable y elegante, perfecta para parejas, con amenidades modernas, decoración sofisticada y todos los detalles pensados para tu comodidad.",
      rating: 4.8,
      reviews: 95,
      price: 199,
      amenities: [
        { icon: <Bed size={18} />, text: "Cama Doble" },
        { icon: <Wine size={18} />, text: "WiFi Premium" },
        { icon: <Wine size={18} />, text: "Mini Bar" },
      ],
    },
    {
      image: "/images/rooms/room3.jpg",
      badge: "PREMIUM",
      title: "Suite Signature",
      description:
        "Nuestro alojamiento más exclusivo con amenidades de lujo, jacuzzi privado, sala de estar independiente y vistas panorámicas al océano que te cautivarán.",
      rating: 5.0,
      reviews: 87,
      price: 499,
      amenities: [
        { icon: <Bed size={18} />, text: "Suite King" },
        { icon: <Bath size={18} />, text: "Jacuzzi Privado" },
        { icon: <Waves size={18} />, text: "Vista al Mar" },
      ],
    },
  ];

  return (
    <section
      ref={ref}
      id="rooms"
      className={cn(
        "bg-background py-12 sm:py-16 lg:py-20 fade-in-up",
        isInView && "in-view"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-3 text-xs sm:text-sm">
            SUITES DE LUJO EXCLUSIVAS
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Reserva tu Escapada de Ensueño
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Descubre nuestra colección de habitaciones y suites diseñadas
            meticulosamente para ofrecerte el máximo confort, elegancia y
            exclusividad
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-6">
            {rooms.map((room, index) => (
              <CarouselItem
                key={index}
                className="pl-2 sm:pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden hover:shadow-xl hover:border-border/60 transition-all duration-500 ease-out group hover:-translate-y-1 backdrop-blur-sm h-full flex flex-col">
                  <CardHeader className="p-0 relative overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.title}
                      width={416}
                      height={250}
                      className="w-full h-[200px] sm:h-[220px] md:h-[250px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      style={{ height: "auto" }}
                    />
                    {room.badge && (
                      <Badge className="absolute top-3 sm:top-4 left-3 sm:left-4 text-xs backdrop-blur-sm bg-primary/90">
                        {room.badge}
                      </Badge>
                    )}
                  </CardHeader>

                  <CardContent className="p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 flex-1 flex flex-col">
                    <Rating
                      rating={room.rating}
                      showValue={true}
                      reviews={room.reviews}
                      size={14}
                    />

                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold">
                      {room.title}
                    </h4>

                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground flex-1">
                      {room.description}
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                      {room.amenities.map((amenity, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                        >
                          {amenity.icon}
                          <span>{amenity.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pt-4 px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 border-t mt-auto">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-bold">
                        ${room.price}
                      </span>
                      <span className="text-sm sm:text-base text-muted-foreground">
                        / noche
                      </span>
                    </div>
                    <Button asChild size="default" className="w-full sm:w-auto">
                      <Link href="#booking">Reservar Ahora</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-8 lg:-left-12" />
          <CarouselNext className="hidden md:flex -right-8 lg:-right-12" />
        </Carousel>
      </div>
    </section>
  );
}
