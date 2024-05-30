import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { RevealWrapper } from "next-reveal";
import { useTranslations } from "next-intl";
import Image from "next/image";

function WeddingEvents() {
  const t = useTranslations('')
  return (
    <section id="wedding-events">
      <div className="bg-[url('/images/weddingEvents/bg.jpeg')] bg-cover bg-center relative px-8 pt-8 pb-12 lg:px-10 lg:pt-10 lg:pb-14">
        <div className="bg-transparent bg-[linear-gradient(360deg,#EAEAEA_53%,#424242_100%)] opacity-90 absolute inset-0"></div>
        <div className="z-10 relative">
          <h1 className="text-xl italic text-white text-center font-light">
            {t('eventTitle')}
          </h1>
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-10">
              <Image
                src="/images/weddingEvents/akad.jpg"
                alt="akad"
                className="w-full h-72 object-cover rounded-t-[1.25rem]"
              />
              <div className="flex">
                <div className="w-[20%] bg-[#424242] rounded-bl-[1.25rem] flex items-center">
                  <p className="rotate-90 text-center text-white font-bold text-[1.75rem] -translate-x-11 tracking-[5px]">
{t('open')}                  </p>
                </div>
                <div className="w-[80%] bg-white px-4 py-6 rounded-br-[1.25rem] flex flex-col gap-5 items-baseline">
                  <h1 className="italic text-xl font-light">{t('eventDate')}</h1>
                  <hr className="border border-[#5a5a5a80] w-full" />
                  <p className="flex items-center text-[#5a5a5a] font-light text-sm gap-1.5">
                    <AiFillClockCircle />
                    <span>{t('eventSecondDate')}</span>
                  </p>
                  <p className="text-[0.785rem] text-[#5a5a5a] font-light leading-[1.9]">
                    <strong className="text-black font-bold">
{t('restaurant')}                    </strong>
                    <br />
                    {t('location')}
                  </p>
        <p className="text-[0.785rem] text-[#5a5a5a] font-light leading-[1.9]">
                    <strong className="text-black font-bold">
{t('presenters')}                    </strong>
                    <br />
                    Эдиль, Гулина
                  </p>
                  <a
                    href="https://2gis.kg/bishkek/firm/70000001039576605"
                    target="_blank"
                    className="text-[0.75rem] text-[#424242] border border-[#424242] px-[0.6rem] py-1.5 rounded-full hover:scale-90 ease-linear duration-[0.2s]"
                  >
                    2GIS MAP
                  </a>
                </div>
              </div>
            </div>
          </RevealWrapper>
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-6">
              <Image
                src="/images/weddingEvents/resepsi.jpg"
                alt="akad"
                className="w-full h-72 object-cover rounded-t-[1.25rem] object-left"
              />
              <div className="flex">
                <div className="w-[80%] bg-white px-4 py-6 rounded-bl-[1.25rem] flex flex-col gap-5 items-baseline">
                  <h1 className="italic text-xl font-light">
 {t('eventDate')}                  </h1>
                  <hr className="border border-[#5a5a5a80] w-full" />
                  <div>
                    <p className="flex items-center text-[#5a5a5a] font-light text-sm gap-1.5">
                      <AiFillClockCircle />
                      <span>18.00 - 00.00</span>
                    </p>
                  </div>
                  <p className="text-[0.785rem] text-[#5a5a5a] font-light leading-[1.9]">
                    <strong className="text-black font-bold">
                     {t('restaurant')}   
                    </strong>
                    <br />
                  {t('location')}   
                  </p>
                   <p className="text-[0.785rem] text-[#5a5a5a] font-light leading-[1.9]">
                    <strong className="text-black font-bold">
Той ээлери:                  </strong>
                    <br />
                    Эдиль, Гулина
                  </p>
                   <a
                    href="https://2gis.kg/bishkek/firm/70000001039576605"
                    target="_blank"
                    className="text-[0.75rem] text-[#424242] border border-[#424242] px-[0.6rem] py-1.5 rounded-full hover:scale-90 ease-linear duration-[0.2s]"
                  >
                    2GIS MAP
                  </a>
                </div>
                <div className="w-[20%] bg-[#424242] rounded-br-[1.25rem] flex items-center">
                  <p className="-rotate-90 text-center text-white font-bold text-[1.4rem]  -translate-x-[2rem] tracking-[5px]">
                    {t('start')} 
                  </p>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default WeddingEvents;
