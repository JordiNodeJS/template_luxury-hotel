import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Contact Hero Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12 lg:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Contáctanos
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                ¿Tienes preguntas? Estamos aquí para ayudarte. Contacta con
                nuestro equipo y te responderemos lo antes posible.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Información de Contacto
                  </h2>
                  <p className="text-gray-600 mb-8">
                    No dudes en ponerte en contacto a través de cualquiera de
                    estos canales. Nuestro equipo de conserjería está disponible
                    24/7 para asistirte en lo que necesites.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Dirección
                      </h3>
                      <p className="text-gray-600">
                        Avenida del Lujo 123
                        <br />
                        Isla Paraíso, IP 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Teléfono
                      </h3>
                      <p className="text-gray-600">+34 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">info@hotellujo.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Envíanos un Mensaje
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nombre
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Juan"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Apellidos
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Pérez"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="juan.perez@ejemplo.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Número de Teléfono
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+34 600 000 000"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white py-3"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
