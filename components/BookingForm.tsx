"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BookingForm() {
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
    console.log({ checkIn, checkOut, adults, children });
    alert("Buscando disponibilidad...");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-2">
            Fecha de Entrada
          </label>
          <Input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
            className="h-11 sm:h-12"
          />
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-2">
            Fecha de Salida
          </label>
          <Input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
            className="h-11 sm:h-12"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-2">
            Adultos
          </label>
          <select
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="w-full px-3 sm:px-4 h-11 sm:h-12 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent outline-none bg-background text-sm transition-all"
          >
            <option value="1">1 Adulto</option>
            <option value="2">2 Adultos</option>
            <option value="3">3 Adultos</option>
            <option value="4">4 Adultos</option>
          </select>
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-2">
            Niños
          </label>
          <select
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            className="w-full px-3 sm:px-4 h-11 sm:h-12 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent outline-none bg-background text-sm transition-all"
          >
            <option value="0">0 Niños</option>
            <option value="1">1 Niño</option>
            <option value="2">2 Niños</option>
            <option value="3">3 Niños</option>
          </select>
        </div>
      </div>

      <Button type="submit" className="w-full text-sm sm:text-base" size="lg">
        <Search size={18} className="sm:w-5 sm:h-5" />
        Buscar Disponibilidad
      </Button>
    </form>
  );
}
