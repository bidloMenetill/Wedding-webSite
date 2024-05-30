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
        <div className="flex flex-col justify-between py-28 px-12 text-center z-20 relative h-screen">
          <div className="">
            <h1 className="text-4xl mt-36 ">Камиль & Элина</h1>
            <p className="mt-2 font-extralight text-[1.5rem]">{t('heroTitle')}</p>
            <p className="font-extralight text-[1.5rem] mt-3">{t('date')}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-[1.2rem]">{t('restaurant')}</p>
            <p className="text-[0.9rem]">{t('location')}</p>
            <a
            href="#countdown"
               className="font-bold text-sm bg-[#ffffff36] border border-[#bdb08f8c] rounded-lg flex items-center gap-2 px-6 py-3 mt-6 hover:scale-90 ease-linear duration-[0.2s]"
            >
              <RxEnvelopeOpen />
              <span>{t('invitation')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
