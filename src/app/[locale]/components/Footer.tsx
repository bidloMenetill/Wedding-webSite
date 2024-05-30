import React from "react";
import { RevealWrapper } from "next-reveal";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations()
  return (
    <section id="footer">
       <div className="bg-[#a09f9f] p-5 flex flex-col items-center relative justify-center">
        <RevealWrapper duration={1500} origin="top">
       <h6 className="text-[1.7rem]">Той ээлери:</h6>
       <p className="text-[1.4rem]">Эдиль & Гулина</p>
       </RevealWrapper>
      </div>
      <div className="h-screen bg-[url('/images/footer/bg.jpg')] bg-cover bg-[47.5%] bg-no-repeat flex items-end justify-center">
        <div className="relative"
        >
          
          <div className="bg-[linear-gradient(180deg,#FFFFFF00_0%,#424242_67%)] blur-md absolute inset-x-0 bottom-0 -top-24"></div>
          <div className="flex flex-col items-center justify-center mx-auto text-center gap-4 text-white p-6 z-10 relative">
            <RevealWrapper duration={1500} origin="top">
              <p className="text-[1.2rem] font-light leading-relaxed">
            {t('restaurant')}
              </p>
            </RevealWrapper>
            <RevealWrapper duration={1500} origin="top">
              <a  href="https://2gis.kg/bishkek/firm/70000001039576605"
                    target="_blank">
              <p className="text-[1rem] font-light leading-relaxed transition-all hover:text-[#717070]">
   {t('location')}
              </p>
              <p className="text-[1rem] font-light leading-relaxed transition-all hover:text-[#717070]">{t('locationDate')}</p>
              </a>
            </RevealWrapper>
            <RevealWrapper duration={1500} origin="bottom">
               <a
                    href="https://2gis.kg/bishkek/firm/70000001039576605"
                    target="_blank"
                    className=""
                  >
                    <button className="text-[0.9rem] bg-white text-[#000000] border border-[#424242] px-[1rem] py-1.5 rounded-full hover:scale-90 ease-linear duration-[0.2s]">2GIS MAP</button>
                  </a>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
