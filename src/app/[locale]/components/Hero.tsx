"use client";

import React from "react";
import { RxEnvelopeOpen } from "react-icons/rx";
import useSound from "use-sound";
import { RevealWrapper } from "next-reveal";
import { useTranslations } from "next-intl";
import { Translate } from "./Translate";

function Hero({
  setCurrentOverflow,
}: {
  setCurrentOverflow: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [play] = useSound("/audio/backsound.mp3", {
    volume: 0.25,
  });
const t = useTranslations("")
  return (
    <section id="hero">
     
      <div className="min-h-screen bg-[url('/images/hero/bg.jpg')] bg-cover bg-center text-white relative">
         <Translate />
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="flex flex-col justify-between py-28 px-12 text-center z-20 relative h-screen">
          <div>
            <p className="font-extralight text-[1.5rem]"> {t('marry')}</p>
            <h1 className="text-4xl font-light mt-2">Камиль & Элина</h1>
            <p className="font-extralight text-[1.5rem] mt-4">
{t('date')}
          </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-[1.2rem]">{t('restaurant')}</p>
            <p className="text-[0.9rem]">
            {t('location')}
            </p>
            <RevealWrapper duration={4000} origin="bottom">
              <a
                href="#countdown"
                onClick={() => {
                  setCurrentOverflow("auto");
                  play();
                }}
                className="font-bold text-sm bg-[#ffffff36] border border-[#bdb08f8c] rounded-lg flex items-center gap-2 px-6 py-3 mt-6 hover:scale-90 ease-linear duration-[0.2s]"
              >
                <RxEnvelopeOpen />
                <span>{t('invitation')} </span>
              </a>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
