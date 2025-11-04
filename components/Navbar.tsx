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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-lg border-b",
        isScrolled
          ? "shadow-lg py-2 sm:py-3"
          : "border-transparent py-3 sm:py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group flex-shrink-0"
          >
            <Image
              src="/images/logo.png"
              alt="Luxury Hotel"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover:scale-110"
            />
            <span className="text-lg sm:text-xl font-bold truncate">
              Luxury Hotel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative transition-colors font-medium group px-3 py-2 text-sm xl:text-base",
                    isActive
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Book Now Button - Desktop */}
          <div className="hidden lg:block flex-shrink-0">
            <Button asChild size="default">
              <Link href="#booking">Reservar</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden hover:text-primary transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-3 mt-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "transition-colors font-medium py-2 px-4 rounded-md",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "hover:text-primary hover:bg-accent"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Button asChild size="default" className="w-full mt-2">
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
