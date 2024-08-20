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
      <h1 className="font-bellefair uppercase text-background text-8xl">
        {title}
      </h1>
      <p className="font-barlow text-[#D0D6F9] text-[18px] tracking-widest font-thin">
        {desc}
      </p>
      <hr className="border border-none h-[1px] bg-gray-500" />
      <div className="flex">
        <div className="flex-1">
          <p className="font-barlow-condensed font-[18px] tracking-[2px] font-thin uppercase text-[#D0D6F9]">
            Avg. Distance
          </p>
          <p className="font-bellefair text-3xl uppercase font-thin text-background">
            {distance}
          </p>
        </div>
        <div className="flex-1">
          <p className="font-barlow-condensed font-[18px] tracking-[2px] font-thin uppercase text-[#D0D6F9]">
            Est. travel time
          </p>
          <p className="font-bellefair text-3xl uppercase font-thin text-background">
            {travelTime}
          </p>
        </div>
      </div>
    </>
  );
};

export default DestinationTab