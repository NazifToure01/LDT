import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from 'next/head';
import AboutUs from "@/components/AboutUs";
import OurCauses from "@/components/OurCauses";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import MeetOurVolunteers from "@/components/MeetOurVolunteers";

export default function Home() {
  return (
      <div className="w-full">
        <main className="flex-grow">
            <Hero />
            <AboutUs />
            <OurCauses />
            <Contact />
            <Gallery />
            <MeetOurVolunteers />
        </main>
      </div>
  );
}