"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-3 max-w-[1320px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 mb-12">
          {/* Column 1 - Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={40}
                height={40}
                className="w-10 h-10 transition-transform group-hover:scale-110"
              />
              <span className="text-xl font-bold text-primary">
                Luxury Hotel
              </span>
            </Link>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Vive una experiencia de lujo y confort sin igual en nuestro resort
              de clase mundial. Cada momento está diseñado a la perfección para
              tu máxima satisfacción y disfrute absoluto.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Explore Links */}
          <div>
            <h6 className="text-lg font-bold mb-6">Enlaces Rápidos</h6>
            <ul className="space-y-3">
              {[
                { name: "Inicio", href: "/" },
                { name: "Nosotros", href: "/about" },
                { name: "Habitaciones", href: "/rooms" },
                { name: "Servicios", href: "/services" },
                { name: "Blog", href: "/blog" },
                { name: "Contacto", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary hover:underline transition-all duration-300 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h6 className="text-lg font-bold mb-6">Servicios</h6>
            <ul className="space-y-3">
              {[
                "Spa & Wellness",
                "Gastronomía Gourmet",
                "Alquiler de Yates",
                "Traslado al Aeropuerto",
                "Conserjería",
                "Centro de Negocios",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-primary hover:underline transition-all duration-300 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Support & Contact */}
          <div>
            <h6 className="text-lg font-bold mb-6">Soporte</h6>
            <ul className="space-y-3 mb-8">
              {[
                "Centro de Ayuda",
                "Política de Privacidad",
                "Términos de Servicio",
                "Política de Cancelación",
                "Preguntas Frecuentes",
                "Comentarios",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary hover:underline transition-all duration-300 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <h6 className="text-lg font-bold mb-6">Información de Contacto</h6>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3 hover:text-foreground transition-colors">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-primary" />
                <span>
                  Avenida del Lujo 123
                  <br />
                  Isla Paraíso, IP 12345
                </span>
              </li>
              <li className="flex items-center gap-3 hover:text-foreground transition-colors">
                <Phone size={20} className="flex-shrink-0 text-primary" />
                <span>+34 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 hover:text-foreground transition-colors">
                <Mail size={20} className="flex-shrink-0 text-primary" />
                <span>info@hotellujo.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Hotel de Lujo. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary hover:underline transition-all duration-300"
              >
                Política de Privacidad
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary hover:underline transition-all duration-300"
              >
                Términos de Servicio
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary hover:underline transition-all duration-300"
              >
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
