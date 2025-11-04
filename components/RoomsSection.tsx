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
      className={cn("bg-background py-12 fade-in-up", isInView && "in-view")}
    >
      <div className="container mx-auto px-3 max-w-[1320px]">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-3">
            SUITES DE LUJO EXCLUSIVAS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Reserva tu Escapada de Ensueño
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubre nuestra colección de habitaciones y suites diseñadas
            meticulosamente para ofrecerte el máximo confort, elegancia y
            exclusividad
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {rooms.map((room, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full">
                  <CardHeader className="p-0 relative overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.title}
                      width={416}
                      height={250}
                      className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {room.badge && (
                      <Badge className="absolute top-4 left-4">
                        {room.badge}
                      </Badge>
                    )}
                  </CardHeader>

                  <CardContent className="p-6 lg:p-8 space-y-4">
                    <Rating
                      rating={room.rating}
                      showValue={true}
                      reviews={room.reviews}
                      size={16}
                    />

                    <h4 className="text-xl md:text-2xl font-semibold">
                      {room.title}
                    </h4>

                    <p className="text-sm md:text-base text-muted-foreground">
                      {room.description}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                      {room.amenities.map((amenity, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm"
                        >
                          {amenity.icon}
                          <span>{amenity.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex items-center justify-between pt-4 px-6 lg:px-8 pb-6 lg:pb-8 border-t">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">${room.price}</span>
                      <span className="text-base text-muted-foreground">
                        / noche
                      </span>
                    </div>
                    <Button asChild>
                      <Link href="#booking">Reservar Ahora</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
}
