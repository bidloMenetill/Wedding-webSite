import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { RevealWrapper } from "next-reveal";
import { useTranslations } from "next-intl";
import Image from "next/image";

function Gallery() {
  const t = useTranslations()
  return (
    <section id="gallery">
      <div className="bg-[url('/images/gallery/bg.jpg')] bg-cover bg-center relative px-8 py-16">
        <div className="bg-transparent bg-[linear-gradient(360deg,#EAEAEA_53%,#424242_100%)] opacity-90 absolute inset-0"></div>
        <div className="z-10 relative">
          <h1 className="text-[2rem] text-italic font-light text-center text-white">
Галерея          </h1>
          <div className="flex flex-col items-center text-center gap-4 my-10">
            <Image
              src="/images/gallery/main_quote.JPG"
              alt="quote"
              width={240}
  height={240} 
              className="w-[240px] h-[240px] object-cover"
            />
            <RevealWrapper origin="top" duration={1500}>
              <span>
                <FaQuoteRight color="#4242427A" fontSize="1.75rem" />
              </span>
            </RevealWrapper>
            <RevealWrapper origin="top" duration={1500}>
              <p className="text-[1.3rem] font-light leading-loose">
               {t('galleryQuote')}
              </p>
            </RevealWrapper>
          </div>
          <RevealWrapper origin="left" duration={1500}>
            <img
              src="/images/gallery/bigGrid.jpg"
              alt="big-grid"
              height={384}
              width={100}
              className="w-full h-96 object-cover object-top"
            />
          </RevealWrapper>
          <RevealWrapper origin="top" duration={1500}>
            <div className="grid grid-cols-3 gap-1 mt-1">
              <Image
                src="/images/gallery/grid.jpg"
                alt="grid-1"
                height={128}
                width={100}
                className="h-32 object-cover w-full"
              />
              <Image
                src="/images/gallery/grid-2.jpg"
                alt="grid-2"
                height={128}
                width={100}
                className="h-32 object-cover w-full"
              />
              <Image
                src="/images/gallery/grid-3.jpg"
                alt="grid-3"
                height={128}
                width={100}
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
