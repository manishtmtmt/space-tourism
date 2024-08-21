import { useState } from "react";

import CrewPerson from "@/components/CrewPerson";
import Navbar from "@/components/Navbar";
import data from "../data.json";

const Crew = () => {
  const [crewIndex, setCrewIndex] = useState(0);

  return (
    <div className="w-screen h-screen lg:bg-crew-desktop md:bg-crew-tablet bg-crew-mobile bg-no-repeat bg-fixed overflow-y-auto absolute top-0 z-0">
      <Navbar />
      <div className="flex items-center justify-center mt-6">
        <div className="lg:w-4/5 w-11/12 m-auto">
          <div className="flex gap-6 md:justify-start justify-center">
            <p className="font-barlow-condensed lg:text-[28px] md:text-xl text-base md:tracking-[4.725px] tracking-[0.15em] font-bold text-background opacity-25">
              02
            </p>
            <p className="font-barlow-condensed lg:text-[28px] md:text-xl text-base md:tracking-[4px] tracking-[0.15em] uppercase text-background">
              Meet your crew
            </p>
          </div>
          <div className="md:w-4/5 lg:w-full m-auto grid lg:grid-cols-2 gird-cols-1 gap-6 lg:my-28 my-14">
            <div className="flex flex-col lg:items-start items-center">
              <CrewPerson
                name={data.crew[crewIndex].name}
                bio={data.crew[crewIndex].bio}
                role={data.crew[crewIndex].role}
              />
              <div className="flex-none flex items-end gap-6 h-16 px-4">
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
            <div className="flex justify-end">
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
