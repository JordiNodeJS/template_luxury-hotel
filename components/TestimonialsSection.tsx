"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Rating from "@/components/ui/rating";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils";

export default function TestimonialsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const testimonials = [
    {
      name: "María González",
      role: "Huésped Verificado",
      image: "/images/testimonials/testimonial1.png",
      rating: 5,
      text: "Una experiencia absolutamente maravillosa. El servicio fue impecable, las suites eran impresionantes y el charter en yate fue el punto culminante de nuestra luna de miel. ¡Volveremos sin duda!",
    },
    {
      name: "Carlos Rodríguez",
      role: "Huésped Verificado",
      image: "/images/testimonials/testimonial2.jpg",
      rating: 5,
      text: "El lujo redefinido en su máxima expresión. Desde nuestra llegada, cada detalle fue perfecto. Los tratamientos de spa fueron divinos y la vista al océano desde nuestra suite era simplemente espectacular. ¡Altamente recomendado!",
    },
  ];

  return (
    <section
      ref={ref}
      className={cn(
        "bg-[rgb(249,249,249)] py-12 fade-in-up",
        isInView && "in-view"
      )}
    >
      <div className="container mx-auto px-3 max-w-[1320px]">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-yellow-600 font-semibold mb-3 tracking-wider uppercase text-sm">
            TESTIMONIOS DE NUESTROS HUÉSPEDES
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[35.2px] leading-[1.2] font-bold text-[rgb(51,51,51)] mb-4"
            style={{ fontWeight: 700 }}
          >
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-base lg:text-[16px] leading-relaxed text-[rgb(55,65,81)] max-w-3xl mx-auto">
            Descubre las experiencias inolvidables que nuestros huéspedes han
            vivido y lo que opinan sobre su estancia en nuestro resort de lujo
          </p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <Card className="hover:shadow-2xl transition-all duration-300 relative bg-white hover:-translate-y-1 h-full">
                  <CardContent className="p-8 lg:p-10">
                    <Quote
                      className="absolute top-8 right-8 text-yellow-100"
                      size={64}
                    />

                    <Rating
                      rating={testimonial.rating}
                      size={20}
                      className="mb-6"
                    />

                    <p className="text-gray-700 text-lg mb-8 italic leading-relaxed relative z-10">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="w-16 h-16 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
                        />
                      </div>
                      <div>
                        <h6 className="text-lg font-bold text-gray-900">
                          {testimonial.name}
                        </h6>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
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
