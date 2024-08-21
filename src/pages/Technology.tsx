import { useState } from "react";

import Navbar from "@/components/Navbar";
import TechnologyStep from "@/components/TechnologyStep";
import { useLayoutSize } from "@/hooks/useLayoutWidth";
import data from "../data.json";

const Technology = () => {
  const [step, setStep] = useState(0);

  const screenSize = useLayoutSize();

  return (
    <div className="w-screen h-screen lg:bg-technology-desktop md:bg-technology-tablet bg-technology-mobile bg-no-repeat bg-fixed overflow-y-auto absolute top-0 z-0">
      <Navbar />
      <div className="w-11/12 m-auto flex md:justify-start justify-center gap-6 mt-6 lg:px-8 px-6">
        <p className="font-barlow-condensed lg:text-[28px] md:text-xl text-base md:tracking-[4.725px] tracking-[0.15em] font-bold text-background opacity-25">
          03
        </p>
        <p className="font-barlow-condensed lg:text-[28px] md:text-xl text-base md:tracking-[4px] tracking-[0.15em] uppercase text-background">
          Space Launch 101
        </p>
      </div>
      <div className="lg:w-11/12 w-full ml-auto flex lg:flex-row flex-col lg:gap-0 gap-8 items-center py-16">
        <div className="flex-1 m-auto order-last lg:order-first flex lg:flex-row flex-col gap-8 md:px-12 px-4">
          <div className="flex lg:flex-col flex-row justify-center gap-[32px]">
            <div
              className={`lg:w-20 md:w-14 w-10 lg:h-20 md:h-14 h-10 rounded-full border border-background/50 hover:border-background cursor-pointer flex justify-center items-center ${
                step === 0 ? "bg-background text-foreground" : "text-background"
              }`}
              onClick={() => setStep(0)}
            >
              <span className="font-bellefair lg:text-3xl md:text-2xl text-lg">
                1
              </span>
            </div>
            <div
              className={`lg:w-20 md:w-14 w-10 lg:h-20 md:h-14 h-10 rounded-full border border-background/50 hover:border-background cursor-pointer flex justify-center items-center ${
                step === 1 ? "bg-background text-foreground" : "text-background"
              }`}
              onClick={() => setStep(1)}
            >
              <span className="font-bellefair lg:text-3xl md:text-2xl text-lg">
                2
              </span>
            </div>
            <div
              className={`lg:w-20 md:w-14 w-10 lg:h-20 md:h-14 h-10 rounded-full border border-background/50 hover:border-background cursor-pointer flex justify-center items-center ${
                step === 2 ? "bg-background text-foreground" : "text-background"
              }`}
              onClick={() => setStep(2)}
            >
              <span className="font-bellefair lg:text-3xl md:text-2xl text-lg">
                3
              </span>
            </div>
          </div>
          <TechnologyStep
            name={data.technology[step].name}
            description={data.technology[step].description}
          />
        </div>
        <div className="flex-1 flex justify-end">
          {screenSize.width > 920 ? (
            <img
              src={data.technology[step].images.portrait}
              alt={data.technology[step].name}
            />
          ) : (
            <img
              src={data.technology[step].images.landscape}
              alt={data.technology[step].name}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Technology;
