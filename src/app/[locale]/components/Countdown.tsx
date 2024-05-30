import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { RevealWrapper } from "next-reveal";
import { useTranslations } from "next-intl";

function CountdownComp() {
  const t = useTranslations("");

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function renderer({ days, hours, minutes, seconds, completed }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;}) {
    if (completed) {
      return <span>{t("finished")}</span>;
    } else {
      return (
        <span>
          {days} {t('days')} {hours} {t('hours')} {minutes} мин {seconds} сек
        </span>
      );
    }
  }

  return (
    <section id="countdown">
      <div className="min-h-screen bg-[url('/images/gallery/bg.jpg')] bg-cover bg-[44.5%] text-white relative py-28 flex items-end">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative py-8 px-10 w-full">
          <div
            className="bg-[#00000021] rounded-tr-[3.125rem] rounded-bl-[3.125rem] absolute inset-x-4 inset-y-0 z-10"
            style={{ backdropFilter: "blur(6px)" }}
          />
          <div className="relative z-20">
            <RevealWrapper duration={1500} origin="right">
              <p className="text-[1.2rem] mb-2 font-light">{t('secondInvitation')}</p>
             
              <div className="grid grid-cols-1 border-y border-y-white text-center text-[0.75rem] font-light">
               
                <div className="py-2 px-2 text-[1.3rem] flex flex-col gap-2">
               
                  {isMounted ? (
                    <Countdown
                      date={new Date("2024-07-04")}
                      renderer={renderer}
                    />
                  ) : (
                    <span>Loading...</span>
                  )}
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountdownComp;
