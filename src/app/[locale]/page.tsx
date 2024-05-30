"use client";

import { useEffect, useState } from "react";
import Countdown from "./components/Countdown";
import ArRum from "./components/ArRum";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import WeddingEvents from "./components/WeddingEvents";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  

  return (
    <main className="max-w-[28.125rem] mx-auto">
        <Hero  />
      <Countdown />
      <ArRum />
      {/* <Profile /> */}
      {/* <WeddingEvents /> */}
      <Gallery />
      <Footer />
    </main>
  );
}
