import { useState } from "react";

import DestinationTab from "@/components/DestinationTab";
import Navbar from "@/components/Navbar";
import data from "../data.json";

const Destination = () => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="w-screen h-screen lg:bg-destination-desktop md:bg-destination-tablet bg-destination-mobile bg-no-repeat bg-fixed overflow-y-auto absolute top-0 z-0">
      <Navbar />
      <div className="flex items-center justify-center mt-6">
        <div className="lg:w-4/5 w-11/12 m-auto">
          <div className="flex gap-6 md:justify-start justify-center">
            <p className="font-barlow-condensed lg:text-[28px] md:text-xl text-base md:tracking-[4.725px] tracking-[0.15em] font-bold text-background opacity-25">
              01
            </p>
            <p className="font-barlow-condensed lg:text-[28px] md:text-xl text-base md:tracking-[4px] tracking-[0.15em] uppercase text-background">
              Pick your destination
            </p>
          </div>
          <div className="md:w-4/5 lg:w-full w-11/12 m-auto flex lg:flex-row flex-col gap-8 items-center lg:my-28 my-14">
            <div className="flex-1 flex justify-center items-center lg:w-80 lg:h-80 md:w-72 md:h-72 w-40 h-40">
              <img
                src={data.destinations[currentTab].images.webp}
                alt={data.destinations[currentTab].name}
              />
            </div>
            <div className="flex-1 flex flex-col lg:items-start items-center gap-8">
              <ul className="flex w-full lg:justify-start justify-center h-8 gap-6">
                <li
                  className={`font-barlow-condensed leading-5 tracking-[2px] text-background uppercase cursor-pointer hover:border-b-2 hover:border-gray-700 hover:delay-100 ${
                    currentTab === 0 ? "border-b-2 border-background" : ""
                  }`}
                  onClick={() => setCurrentTab(0)}
                >
                  Moon
                </li>
                <li
                  className={`font-barlow-condensed leading-5 tracking-[2px] text-background uppercase cursor-pointer hover:border-b-2 hover:border-gray-700 hover:delay-100 ${
                    currentTab === 1 ? "border-b-2 border-background" : ""
                  }`}
                  onClick={() => setCurrentTab(1)}
                >
                  Mars
                </li>
                <li
                  className={`font-barlow-condensed leading-5 tracking-[2px] text-background uppercase cursor-pointer hover:border-b-2 hover:border-gray-700 hover:delay-100 ${
                    currentTab === 2 ? "border-b-2 border-background" : ""
                  }`}
                  onClick={() => setCurrentTab(2)}
                >
                  Europa
                </li>
                <li
                  className={`font-barlow-condensed leading-5 tracking-[2px] text-background uppercase cursor-pointer hover:border-b-2 hover:border-gray-700 hover:delay-100 ${
                    currentTab === 3 ? "border-b-2 border-background" : ""
                  }`}
                  onClick={() => setCurrentTab(3)}
                >
                  Titan
                </li>
              </ul>
              <DestinationTab
                title={data.destinations[currentTab].name}
                desc={data.destinations[currentTab].description}
                distance={data.destinations[currentTab].distance}
                travelTime={data.destinations[currentTab].travel}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
