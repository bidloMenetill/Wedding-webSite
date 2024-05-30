import React from "react";
import { RevealWrapper } from "next-reveal";
import { useTranslations } from "next-intl";

function ArRum() {
  const t = useTranslations()
  return (
    <section id="qs-ar-rum">
      <div className="bg-[url('/images/anNur/bg.png')] rounded-t-[1.25rem] bg-center bg-no-repeat bg-cover p-12 flex flex-col items-center text-center gap-8 -mt-8 z-20 relative font-light">
        <RevealWrapper duration={1500} origin="top">
          <h1 className="italic text-4xl flex gap-4 text-[#A99C86]">
            {t('guest')}
          </h1>
        </RevealWrapper>
        <RevealWrapper duration={1500} origin="top">
          <p className="text-[1.4rem] leading-loose text-[#424242]">
           {t('quote')}
          </p>
        </RevealWrapper>
        <RevealWrapper duration={1500} origin="bottom">
          <h3 className="italic text-4xl">{t('waiting')}</h3>
        </RevealWrapper>
      </div>
    </section>
  );
}

export default ArRum;
