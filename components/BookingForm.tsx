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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fecha de Entrada
          </label>
          <Input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
            className="h-12"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fecha de Salida
          </label>
          <Input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
            className="h-12"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Adultos
          </label>
          <select
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="w-full px-4 h-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-background"
          >
            <option value="1">1 Adulto</option>
            <option value="2">2 Adultos</option>
            <option value="3">3 Adultos</option>
            <option value="4">4 Adultos</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Niños
          </label>
          <select
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            className="w-full px-4 h-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-background"
          >
            <option value="0">0 Niños</option>
            <option value="1">1 Niño</option>
            <option value="2">2 Niños</option>
            <option value="3">3 Niños</option>
          </select>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] hover:shadow-md transition-all duration-300 rounded-full px-8 text-[15.2px] font-semibold"
        size="lg"
      >
        <Search size={20} />
        Buscar Disponibilidad
      </Button>
    </form>
  );
}
