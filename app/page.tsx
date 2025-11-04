import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import RoomsSection from "@/components/RoomsSection";
import ServicesGallery from "@/components/ServicesGallery";
import ServicesDetails from "@/components/ServicesDetails";
import TestimonialsSection from "@/components/TestimonialsSection";
import BottomBooking from "@/components/BottomBooking";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <RoomsSection />
      <ServicesGallery />
      <ServicesDetails />
      <TestimonialsSection />
      <BottomBooking />
      <BlogSection />
      <Footer />
    </>
  );
}
