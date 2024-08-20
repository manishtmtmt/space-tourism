import { useState } from "react";

import Navbar from "@/components/Navbar";
import TechnologyStep from "@/components/TechnologyStep";
import data from "../data.json";

const Technology = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="bg-technology-desktop bg-no-repeat bg-fixed absolute top-0 z-0 overflow-y-auto">
      <Navbar />
      <div className="w-screen h-screen flex items-center justify-end mt-16">
        <div className="w-[90%] flex flex-col gap-8">
          <div className="flex gap-6">
            <p className="font-barlow-condensed text-[28px] tracking-[4.725px] font-bold text-background opacity-25">
              03
            </p>
            <p className="font-barlow-condensed text-[28px] tracking-[4px] uppercase text-background">
              Space Launch 101
            </p>
          </div>
          <div className="flex items-center py-16">
            <div className="flex-1 flex gap-8">
              <div className="flex flex-col gap-[32px]">
                <div
                  className={`w-20 h-20 rounded-full border border-background/50 hover:border-background cursor-pointer flex justify-center items-center ${
                    step === 0
                      ? "bg-background text-foreground"
                      : "text-background"
                  }`}
                  onClick={() => setStep(0)}
                >
                  <span className="font-bellefair text-3xl">1</span>
                </div>
                <div
                  className={`w-20 h-20 rounded-full border border-background/50 hover:border-background cursor-pointer flex justify-center items-center ${
                    step === 1
                      ? "bg-background text-foreground"
                      : "text-background"
                  }`}
                  onClick={() => setStep(1)}
                >
                  <span className="font-bellefair text-3xl">2</span>
                </div>
                <div
                  className={`w-20 h-20 rounded-full border border-background/50 hover:border-background cursor-pointer flex justify-center items-center ${
                    step === 2
                      ? "bg-background text-foreground"
                      : "text-background"
                  }`}
                  onClick={() => setStep(2)}
                >
                  <span className="font-bellefair text-3xl">3</span>
                </div>
              </div>
              <TechnologyStep
                name={data.technology[step].name}
                description={data.technology[step].description}
              />
            </div>
            <div className="flex-1 flex justify-end">
              <img
                src={data.technology[step].images.portrait}
                alt={data.technology[step].name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
