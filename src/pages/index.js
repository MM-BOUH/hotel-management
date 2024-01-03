// src/pages/index.js

import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RoomSelection from '@/components/RoomSelection';
import FeaturedRoom from '@/components/FeaturedRoom';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to FASQ Hotel</title>
        <meta name="description" content="Book your stay at FASQ and experience luxury." />
      </Head>

      <Navbar />
      <Hero />
      {/* <RoomSelection /> */}
      <FeaturedRoom />
      {/* <NewsletterSignup /> */}
      <Contact />
      <Footer />
    </div>
  );
}
