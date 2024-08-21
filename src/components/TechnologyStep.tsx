import React from 'react'

interface TechnologyStepPropTypes {
  name: string;
  description: string;
}

const TechnologyStep: React.FC<TechnologyStepPropTypes> = ({ name, description }) => {
  return (
    <div className="flex flex-col gap-4 justify-center lg:items-start items-center">
      <p className="uppercase lg:text-3xl md:text-2xl text-lg font-bellefair text-background/50">
        The Terminology...
      </p>
      <p className="uppercase text-background lg:text-[56px] md:text-[40px] text-2xl lg:leading-[64px] font-bellefair">
        {name}
      </p>
      <p className="lg:text-lg text-base font-barlow text-[#D0D6F9] lg:text-left text-center">
        {description}
      </p>
    </div>
  );
}

export default TechnologyStep