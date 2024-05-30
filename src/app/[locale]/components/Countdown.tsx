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
          {days} {t('days')} {hours} {t('hours')}
          <br />
          {minutes} мин {seconds} сек
        </span>
      );
    }
  }

  return (
    <section id="countdown">
      <div className="min-h-screen bg-[url('/images/countdown/bg.jpg')] bg-cover bg-[44.5%] text-white relative py-28 flex items-end">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative py-8 px-10 w-full">
          <div
            className="bg-[#00000021] rounded-tr-[3.125rem] rounded-bl-[3.125rem] absolute inset-x-4 inset-y-0 z-10"
            style={{ backdropFilter: "blur(6px)" }}
          />
          <div className="relative z-20">
            <RevealWrapper duration={1500} origin="right">
              <p className="text-sm font-light">{t('secondInvitation')}</p>
              <h1 className="text-3xl font-light mt-2 mb-4">Камиль & Элина</h1>
              <div className="grid grid-cols-2 border-y border-y-white text-center text-[0.75rem] font-light">
                <p className="leading-[1.85] py-2 px-2 border-r border-r-white flex flex-col gap-2">
                  <span className="text-[1rem]">{t('date')}</span>
                </p>
                <div className="py-2 px-2 flex flex-col gap-2">
                  <span className="text-[0.85rem]">{t('countdown')}</span>
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
