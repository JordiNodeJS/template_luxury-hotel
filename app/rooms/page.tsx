import Navbar from "@/components/Navbar";
import RoomsSection from "@/components/RoomsSection";
import BottomBooking from "@/components/BottomBooking";
import Footer from "@/components/Footer";

export default function RoomsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <RoomsSection />
        <BottomBooking />
      </main>
      <Footer />
    </>
  );
}
