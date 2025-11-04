import Navbar from "@/components/Navbar";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
