import React from 'react'

interface DestinationPropTypes {
  title: string;
  desc: string;
  distance: string;
  travelTime: string;
}

const DestinationTab: React.FC<DestinationPropTypes> = ({
  title, desc, distance, travelTime
}) => {
  return (
    <>
      <h1 className="font-bellefair uppercase text-background lg:text-8xl md:text-7xl text-5xl">
        {title}
      </h1>
      <p className="font-barlow text-[#D0D6F9] lg:text-[18px] text-base tracking-widest font-thin lg:text-left text-center">
        {desc}
      </p>
      <hr className="border border-none h-[1px] bg-gray-500 w-full" />
      <div className="flex w-full md:flex-row flex-col gap-4">
        <div className="flex-1">
          <p className="font-barlow-condensed lg:text-[18px] text-sm  tracking-[2px] font-thin uppercase text-[#D0D6F9] lg:text-left text-center">
            Avg. Distance
          </p>
          <p className="font-bellefair text-3xl uppercase font-thin text-background lg:text-left text-center">
            {distance}
          </p>
        </div>
        <div className="flex-1">
          <p className="font-barlow-condensed lg:text-[18px] text-sm  tracking-[2px] font-thin uppercase text-[#D0D6F9] lg:text-left text-center">
            Est. travel time
          </p>
          <p className="font-bellefair text-3xl uppercase font-thin text-background lg:text-left text-center">
            {travelTime}
          </p>
        </div>
      </div>
    </>
  );
};

export default DestinationTab