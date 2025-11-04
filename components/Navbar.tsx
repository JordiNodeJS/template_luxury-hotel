"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/about" },
    { name: "Habitaciones", href: "/rooms" },
    { name: "Servicios", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-[15px] py-4",
        isScrolled ? "shadow-lg" : ""
      )}
    >
      <div className="container mx-auto px-3 max-w-[1320px]">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo.png"
              alt="Luxury Hotel"
              width={40}
              height={40}
              className="w-10 h-10 transition-transform group-hover:scale-110"
            />
            <span className="text-xl font-bold text-gray-900">
              Luxury Hotel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative transition-colors font-medium group px-4 py-2",
                    isActive
                      ? "text-indigo-600"
                      : "text-indigo-500 hover:text-indigo-600"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-indigo-500 transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Book Now Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              size="default"
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Link href="#booking">Reservar</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-900 hover:text-indigo-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "transition-colors font-medium",
                      isActive
                        ? "text-indigo-600"
                        : "text-gray-900 hover:text-indigo-500"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Button
                asChild
                size="default"
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600"
              >
                <Link
                  href="#booking"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reservar
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
