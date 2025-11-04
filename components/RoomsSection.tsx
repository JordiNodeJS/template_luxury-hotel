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
      badgeColor: "bg-yellow-500",
      title: "Super Deluxe Room",
      description:
        "Spacious and elegantly appointed room with premium amenities and stunning city views.",
      rating: 5.0,
      reviews: 120,
      price: 299,
      amenities: [
        { icon: <Bed size={18} />, text: "King Bed" },
        { icon: <Bath size={18} />, text: "Marble Bath" },
        { icon: <Mountain size={18} />, text: "City View" },
      ],
    },
    {
      image: "/images/rooms/room2.jpg",
      badge: null,
      badgeColor: "",
      title: "Super Deluxe Room",
      description:
        "Comfortable and stylish room perfect for couples, featuring modern amenities and elegant decor.",
      rating: 4.8,
      reviews: 95,
      price: 199,
      amenities: [
        { icon: <Bed size={18} />, text: "Double Bed" },
        { icon: <Wine size={18} />, text: "Free WiFi" },
        { icon: <Wine size={18} />, text: "Mini Bar" },
      ],
    },
    {
      image: "/images/rooms/room3.jpg",
      badge: "PREMIUM",
      badgeColor: "bg-purple-600",
      title: "Signature Room",
      description:
        "Our most luxurious accommodation featuring exclusive amenities and breathtaking ocean views.",
      rating: 5.0,
      reviews: 87,
      price: 499,
      amenities: [
        { icon: <Bed size={18} />, text: "King Suite" },
        { icon: <Bath size={18} />, text: "Private Jacuzzi" },
        { icon: <Waves size={18} />, text: "Ocean View" },
      ],
    },
  ];

  return (
    <section
      ref={ref}
      id="rooms"
      className={cn("bg-white py-12 fade-in-up", isInView && "in-view")}
    >
      <div className="container mx-auto px-3 max-w-[1320px]">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-yellow-600 font-semibold mb-3 tracking-wider uppercase text-sm">
            BEST LUXURY ROOMS
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[35.2px] leading-[1.2] font-bold text-[rgb(51,51,51)] mb-4"
            style={{ fontWeight: 700 }}
          >
            Book your luxury stay
          </h2>
          <p className="text-base lg:text-[16px] leading-relaxed text-[rgb(55,65,81)] max-w-3xl mx-auto">
            Choose from our collection of meticulously designed rooms and suites
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
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group bg-white h-full rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
                  <CardHeader className="p-0 relative overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.title}
                      width={416}
                      height={250}
                      className="w-full h-[250px] object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {room.badge && (
                      <Badge
                        className={`absolute top-4 left-4 ${room.badgeColor} text-white px-3 py-1 text-xs font-bold shadow-lg`}
                      >
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

                    <h4 className="text-xl md:text-2xl lg:text-[24px] font-semibold text-[rgb(31,41,55)] mb-3">
                      {room.title}
                    </h4>

                    <p className="text-sm md:text-base lg:text-[16px] leading-relaxed text-[rgb(55,65,81)]">
                      {room.description}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                      {room.amenities.map((amenity, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          {amenity.icon}
                          <span>{amenity.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex items-center justify-between pt-4 px-6 lg:px-8 pb-6 lg:pb-8 border-t border-gray-200">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[32px] font-bold text-gray-900">
                        ${room.price}
                      </span>
                      <span className="text-[16px] text-gray-600">
                        {" "}
                        / night
                      </span>
                    </div>
                    <Button
                      asChild
                      className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:shadow-md transition-all duration-300 rounded-full px-8 py-3 text-[15.2px] font-semibold"
                    >
                      <Link href="#booking">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 hover:bg-yellow-500 hover:text-white border-2 border-gray-200 hover:border-yellow-500 shadow-lg transition-all duration-300" />
          <CarouselNext className="hidden md:flex -right-12 bg-white/90 hover:bg-yellow-500 hover:text-white border-2 border-gray-200 hover:border-yellow-500 shadow-lg transition-all duration-300" />
        </Carousel>
      </div>
    </section>
  );
}
