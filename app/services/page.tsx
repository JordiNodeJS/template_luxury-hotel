import Navbar from "@/components/Navbar";
import ServicesGallery from "@/components/ServicesGallery";
import ServicesDetails from "@/components/ServicesDetails";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ServicesGallery />
        <ServicesDetails />
      </main>
      <Footer />
    </>
  );
}
