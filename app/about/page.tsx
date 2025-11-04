import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <AboutSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
