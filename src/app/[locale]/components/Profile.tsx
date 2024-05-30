import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";
import { RevealWrapper } from "next-reveal";
import { useTranslations } from "next-intl";

function Profile() {
  const t = useTranslations()
  return (
    <section id="people">
      <div className="bg-[url('/images/profile/bg.jpg')] bg-center bg-no-repeat bg-cover px-12 py-16">
        <RevealWrapper duration={1500}>
          <p className="text-center text-[0.75rem] leading-loose text-[#424242]">
            <strong>Бисмиллахиррахманиррахим</strong>
            <br />
           {t('parrentsQuote')}
          </p>
        </RevealWrapper>
        <div className="grid grid-cols-2 mt-20">
          <div className="-rotate-90 flex flex-col justify-end lg:mr-2 -translate-y-10 lg:-translate-y-10">
            <RevealWrapper duration={1500} origin="bottom">
              <p className="text-[1.2rem] tracking-[5px] flex gap-2.5 text-[#424242] text-center">
              
                <span>{t('bridge')}</span>
              </p>
            </RevealWrapper>
          </div>
          <RevealWrapper duration={1500} origin="right">
            <img
              src="/images/profile/bridge.jpg"
              alt="Elina"
              className="translate-x-[3rem]"
            />
          </RevealWrapper>
        </div>
        <div className="flex flex-col items-end text-right gap-6 mt-8">
          <RevealWrapper duration={1500} origin="bottom">
            <h1 className="italic text-2xl font-light">
 Элина            </h1>
          </RevealWrapper>
          <p className="text-sm leading-relaxed">
            <strong className="text-[0.95rem]">{t('parrents')}:</strong>
            <br />
            Эсен Камбычбеков 
            <br />
Динара Мухаммедова          </p>
          <a
            href="https://www.instagram.com/axypixk/"
            target="_blank"
            className="text-sm text-white bg-[#424242] px-[0.4375rem] py-1 rounded-[0.625rem] flex items-center gap-1 hover:scale-90 ease-linear duration-[0.2s]"
          >
            <AiOutlineInstagram />
            <span>Элина</span>
            <HiArrowLongRight />
          </a>
        </div>
        <div className="grid grid-cols-2 mt-20">
          <RevealWrapper duration={1500} origin="left">
            <img
              src="/images/profile/groom.jpg"
              alt="Kamil"
              className="-translate-x-[3rem]"
            />
          </RevealWrapper>
          <div className="rotate-90 flex flex-col justify-end lg:ml-4 translate-y-12 lg:translate-y-12">
            <RevealWrapper duration={1500} origin="bottom">
              <p className="text-[1.2rem] tracking-[5px] flex gap-2.5 text-[#424242] text-center">
                <span>{t('groom')}</span>
              </p>
            </RevealWrapper>
          </div>
        </div>
        <div className="flex flex-col items-start text-left gap-6 mt-8">
          <RevealWrapper duration={1500} origin="bottom">
            <h1 className="italic text-2xl font-light">
Камиль             </h1>
          </RevealWrapper>
          <p className="text-sm leading-relaxed">
            <strong className="text-[0.95rem]">{t('parrents')}:</strong>
            <br />
            Эсен Камбычбеков 
            <br />
Динара Мухаммедова          </p>
          <a
                      target="_blank"
            href="https://www.instagram.com/kamil.81/"
            className="text-sm text-white bg-[#424242] px-[0.4375rem] py-1 rounded-[0.625rem] flex items-center gap-1 hover:scale-90 ease-linear duration-[0.2s]"
          >
            <AiOutlineInstagram />
            <span>Камиль</span>
            <HiArrowLongRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
