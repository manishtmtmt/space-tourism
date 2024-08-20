import { useState } from "react";

import DestinationTab from "@/components/DestinationTab";
import Navbar from "@/components/Navbar";
import data from "../data.json";

const Destination = () => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="bg-destination-desktop bg-no-repeat bg-fixed overflow-y-auto absolute top-0 z-0">
      <Navbar />
      <div className="w-screen h-screen flex items-center justify-center mt-4">
        <div className="w-4/5 m-auto">
          <div className="flex gap-6">
            <p className="font-barlow-condensed text-[28px] tracking-[4.725px] font-bold text-background opacity-25">
              01
            </p>
            <p className="font-barlow-condensed text-[28px] tracking-[4px] uppercase text-background">
              Pick your destination
            </p>
          </div>
          <div className="flex gap-8 items-center py-28">
            <div className="flex-1 flex justify-center items-center">
              <img
                src={data.destinations[currentTab].images.webp}
                alt={data.destinations[currentTab].name}
              />
            </div>
            <div className="flex-1 flex flex-col gap-8">
              <ul className="flex w-full h-8 gap-6">
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
