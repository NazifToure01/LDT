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
      <div className="min-h-screen flex flex-col">
        <Head>
          <title>Let's Do It Together</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="flex-grow">
            <Hero />
            <AboutUs />
            <OurCauses />
            <Contact />
            <Gallery />
            <MeetOurVolunteers />
        </main>

        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 Let's Do It Together. Tous droits réservés.</p>
            <p>Association à but non lucratif régie par la loi du 1er juillet 1901</p>
            <p>Siège social : 36 Rue André Le Nôtre A003, 34080 Montpellier, Occitanie</p>
          </div>
        </footer>
      </div>
  );
}