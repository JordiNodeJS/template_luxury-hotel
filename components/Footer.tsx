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
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-3 max-w-[1320px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 mb-12">
          {/* Column 1 - Brand */}
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-2 mb-6 group">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={40}
                height={40}
                className="w-10 h-10 transition-transform group-hover:scale-110"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Luxury Hotel
              </span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Experience unparalleled luxury and comfort in our world-class
              resort. Every moment is crafted to perfection for your ultimate
              satisfaction.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Explore Links */}
          <div>
            <h6 className="text-lg font-bold mb-6">Explore Links</h6>
            <ul className="space-y-3">
              {["Home", "About Us", "Rooms", "Services", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                      className="text-gray-400 hover:text-yellow-400 hover:underline transition-all duration-300 inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h6 className="text-lg font-bold mb-6">Services</h6>
            <ul className="space-y-3">
              {[
                "Spa & Wellness",
                "Fine Dining",
                "Yacht Charter",
                "Airport Transfer",
                "Concierge",
                "Business Center",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#services"
                    className="text-gray-400 hover:text-yellow-400 hover:underline transition-all duration-300 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Support & Contact */}
          <div>
            <h6 className="text-lg font-bold mb-6">Support</h6>
            <ul className="space-y-3 mb-8">
              {[
                "Help Center",
                "Privacy Policy",
                "Terms of Service",
                "Cancellation Policy",
                "FAQ",
                "Feedback",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 hover:underline transition-all duration-300 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <h6 className="text-lg font-bold mb-6">Contact Info</h6>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3 hover:text-gray-300 transition-colors">
                <MapPin
                  size={20}
                  className="flex-shrink-0 mt-1 text-yellow-500"
                />
                <span>
                  123 Luxury Avenue
                  <br />
                  Paradise Island, PI 12345
                </span>
              </li>
              <li className="flex items-center gap-3 hover:text-gray-300 transition-colors">
                <Phone size={20} className="flex-shrink-0 text-yellow-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 hover:text-gray-300 transition-colors">
                <Mail size={20} className="flex-shrink-0 text-yellow-500" />
                <span>info@lu.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Luxury Hotel. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-400 hover:underline transition-all duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-400 hover:underline transition-all duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-400 hover:underline transition-all duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
