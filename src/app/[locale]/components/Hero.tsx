"use client";

import React, { useEffect } from "react";
import { RxEnvelopeOpen } from "react-icons/rx";
import useSound from "use-sound";
import { useTranslations } from "next-intl";
import { Translate } from "./Translate";

function Hero() {
  const [play, {stop}] = useSound("/audio/backsound.mp3", {
    volume: 0.25,
  });

  const t = useTranslations("");

  useEffect(() => {
    play();
return () => {
stop()
}
  }, [play]);

  return (
    <section >
      <div className="min-h-screen bg-[url('/images/hero/bg.jpg')] bg-cover bg-center text-white relative">
        <Translate />
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="flex flex-col items-center py-28 px-12 text-center z-20 relative h-screen">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl text-center mt-[90px]">Камиль & Элина</h1>
            
          </div>
          <div className="mt-10 flex justify-between items-center">
          <div>
            <p className="text font-extralight max-w-[200px] text-[1.1rem]">{t('heroTitle')}</p>
            <p className="text-[1.3rem] mt-3">{t('date')}</p>
          </div>
          <div className="w-[2px] h-[250px] bg-white mx-[10px]"/>
          <div className="flex flex-col gap-2">
            <p className="text-[1.4rem]">{t('restaurant')}</p>
           <a href="https://2gis.kg/bishkek/firm/70000001039576605" className="text-[1.3rem] text-[#ffeaea] transition-all hover:text-[#5a5858]" target="_blank">{t('location')}</a> 
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
