import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";

import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <About />

      <Rooms />

      <Amenities />

      <Gallery />

      <Testimonials />

      <BookingCTA />
      <Footer/>
    </main>
  );
}