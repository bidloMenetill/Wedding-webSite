"use client";

import Countdown from "./components/Countdown";
import ArRum from "./components/ArRum";
import Hero from "./components/Hero";

import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  

  return (
    <main className="max-w-[28.125rem] mx-auto">
        <Hero  />
      <Countdown />
      <ArRum />
      
      <Gallery />
      <Footer />
    </main>
  );
}
