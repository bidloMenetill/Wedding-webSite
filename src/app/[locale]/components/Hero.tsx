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
        <div className="flex flex-col justify-between items-center py-28 px-6 text-center z-20 relative h-screen">
          <div className="flex mt-[150px] flex-col justify-center items-center">
            <h1 className="text-[2.3rem] text-center mt-[90px]">Камиль & Элина</h1>
            <p className="mt-2 text font-extralight text-[1.15rem]">{t('heroTitle')}</p>
            <p className="text-[#b0b0b0] text-[1.4rem] mt-3">{t('date')}</p>
          </div>
          <div className="flex text-[#b0b0b0] flex-col items-center gap-2">
            <p className="text-[1.4rem]">{t('restaurant')}</p>
           <a href="https://2gis.kg/bishkek/firm/70000001039576605" className="text-[1.4rem] text-[#ffeaea] transition-all hover:text-[#5a5858]" target="_blank">{t('location')}</a> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
