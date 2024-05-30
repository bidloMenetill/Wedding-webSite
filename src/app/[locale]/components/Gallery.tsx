import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { RevealWrapper } from "next-reveal";
import { useTranslations } from "next-intl";

function Gallery() {
  const t = useTranslations()
  return (
    <section id="gallery">
      <div className="bg-[url('/images/gallery/bg.jpg')] bg-cover bg-center relative px-8 py-16">
        <div className="bg-transparent bg-[linear-gradient(360deg,#EAEAEA_53%,#424242_100%)] opacity-90 absolute inset-0"></div>
        <div className="z-10 relative">
          <h1 className="text-xl italic font-light text-center text-white">
Галерея          </h1>
          <div className="flex flex-col items-center text-center gap-4 my-10">
            <img
              src="/images/gallery/quote.jpg"
              alt="quote"
              className="w-[170px] h-[220px] object-cover"
            />
            <RevealWrapper origin="top" duration={1500}>
              <span>
                <FaQuoteRight color="#4242427A" fontSize="1.75rem" />
              </span>
            </RevealWrapper>
            <RevealWrapper origin="top" duration={1500}>
              <p className="text-[0.85rem] font-light leading-loose px-8">
               {t('galleryQuote')}
              </p>
            </RevealWrapper>
          </div>
          <RevealWrapper origin="right" duration={1500}>
            <img
              src="/images/gallery/bigGrid.jpg"
              alt="big-grid"
              className="w-full h-96 object-cover object-top"
            />
          </RevealWrapper>
          <RevealWrapper origin="top" duration={1500}>
            <div className="grid grid-cols-3 gap-1 mt-1">
              <img
                src="/images/gallery/grid-1.jpg"
                alt="grid-1"
                className="h-32 object-cover w-full"
              />
              <img
                src="/images/gallery/grid-2.jpg"
                alt="grid-2"
                className="h-32 object-cover w-full"
              />
              <img
                src="/images/gallery/grid-3.Jpg"
                alt="grid-3"
                className="h-32 object-cover w-full"
              />
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
