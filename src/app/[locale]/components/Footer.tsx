import React from "react";
import { RevealWrapper } from "next-reveal";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations()
  return (
    <section id="footer">
      <div className="h-screen bg-[url('/images/hero/bg.jpg')] bg-cover bg-[47.5%] bg-no-repeat flex items-end">
        <div className="relative">
          <div className="bg-[linear-gradient(180deg,#FFFFFF00_0%,#424242_67%)] absolute inset-x-0 bottom-0 -top-24"></div>
          <div className="flex flex-col items-center text-center gap-4 text-white p-6 z-10 relative">
            <RevealWrapper duration={1500} origin="top">
              <p className="text-[0.85rem] font-light leading-relaxed">
            {t('footerTitle')}
              </p>
            </RevealWrapper>
            <RevealWrapper duration={1500} origin="top">
              <p className="text-[0.85rem] font-light leading-relaxed">
   {t('footerDescription')}
              </p>
            </RevealWrapper>
            <RevealWrapper duration={1500} origin="bottom">
              <h1 className="text-[1.75rem] font-light">Камиль & Элина</h1>
            </RevealWrapper>
          </div>
        </div>
      </div>
      <div className="bg-[#424242] p-20 flex flex-col items-center justify-center">
       <h6 className="text-[1.7rem]">Органзитаоры:</h6>
       <p className="text-[1.4rem]">Эдиль & Гулина</p>
      </div>
    </section>
  );
}

export default Footer;
