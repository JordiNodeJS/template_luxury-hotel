"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Users, Baby, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BottomBooking() {
  // Set default dates to today and tomorrow
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const [checkIn, setCheckIn] = useState(formatDate(today));
  const [checkOut, setCheckOut] = useState(formatDate(tomorrow));
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Searching for availability...");
  };

  return (
    <section id="booking" className="relative py-20 overflow-hidden">
      {/* Background Image - Optimized */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner_bg.jpg"
          alt="Luxury Hotel Background"
          fill
          quality={85}
          className="object-cover"
          sizes="100vw"
          style={{
            objectPosition: "center",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 z-[1]"></div>

      <div className="container mx-auto px-3 relative z-10 max-w-[1320px]">
        <div className="text-center text-white mb-8">
          <h3 className="text-[28px] font-bold mb-3">
            Ready for Your Dream Vacation?
          </h3>
          <p className="text-[16px] text-gray-200">
            Book your luxury escape today and create memories that last a
            lifetime
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/15 backdrop-blur-2xl border border-white/30 rounded-2xl p-6 md:p-8 max-w-6xl mx-auto shadow-2xl hover:bg-white/20 transition-all duration-300"
        >
          <div className="grid md:grid-cols-4 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                <Calendar className="inline mr-2" size={16} />
                Check-in
              </label>
              <Input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
                className="bg-white/95 border-white/30 text-gray-900 h-12"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                <Calendar className="inline mr-2" size={16} />
                Check-out
              </label>
              <Input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
                className="bg-white/95 border-white/30 text-gray-900 h-12"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                <Users className="inline mr-2" size={16} />
                Adults
              </label>
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full px-4 h-12 border border-white/30 bg-white/95 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                <Baby className="inline mr-2" size={16} />
                Children
              </label>
              <select
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full px-4 h-12 border border-white/30 bg-white/95 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-900"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full md:w-auto mt-6 md:mt-8 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 h-12 px-12"
          >
            <Search className="mr-2" size={20} />
            Search Availability
          </Button>
        </form>
      </div>
    </section>
  );
}
