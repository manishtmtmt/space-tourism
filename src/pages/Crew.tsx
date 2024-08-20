import { useState } from "react";

import Navbar from "@/components/Navbar";
import CrewPerson from "@/components/CrewPerson";
import data from "../data.json";

const Crew = () => {
  const [crewIndex, setCrewIndex] = useState(0);

  return (
    <div className="bg-crew-desktop bg-no-repeat bg-fixed absolute top-0 z-0 overflow-y-auto">
      <Navbar />
      <div className="w-screen h-screen flex items-center justify-center mt-4">
        <div className="w-4/5 m-auto flex flex-col gap-8 pb-16">
          <div className="flex gap-6">
            <p className="font-barlow-condensed text-[28px] tracking-[4.725px] font-bold text-background opacity-25">
              02
            </p>
            <p className="font-barlow-condensed text-[28px] tracking-[4px] uppercase text-background">
              Meet your crew
            </p>
          </div>
          <div className="flex">
            <div className="flex-1 flex flex-col">
              <CrewPerson
                name={data.crew[crewIndex].name}
                bio={data.crew[crewIndex].bio}
                role={data.crew[crewIndex].role}
              />
              <div className="flex-none flex gap-6 h-16 px-4">
                <div
                  className={`w-4 h-4 rounded-full cursor-pointer ${
                    crewIndex === 0
                      ? "bg-background"
                      : "bg-background/50 hover:bg-background/70"
                  }`}
                  onClick={() => setCrewIndex(0)}
                ></div>
                <div
                  className={`w-4 h-4 rounded-full cursor-pointer ${
                    crewIndex === 1
                      ? "bg-background"
                      : "bg-background/50 hover:bg-background/70"
                  }`}
                  onClick={() => setCrewIndex(1)}
                ></div>
                <div
                  className={`w-4 h-4 rounded-full cursor-pointer ${
                    crewIndex === 2
                      ? "bg-background"
                      : "bg-background/50 hover:bg-background/70"
                  }`}
                  onClick={() => setCrewIndex(2)}
                ></div>
                <div
                  className={`w-4 h-4 rounded-full cursor-pointer ${
                    crewIndex === 3
                      ? "bg-background"
                      : "bg-background/50 hover:bg-background/70"
                  }`}
                  onClick={() => setCrewIndex(3)}
                ></div>
              </div>
            </div>
            <div className="flex-1 flex justify-end">
              <img
                src={data.crew[crewIndex].images.webp}
                alt={data.crew[crewIndex].name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
