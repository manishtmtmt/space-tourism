import React from 'react'

interface TechnologyStepPropTypes {
  name: string;
  description: string;
}

const TechnologyStep: React.FC<TechnologyStepPropTypes> = ({ name, description }) => {
  return (
    <div className='flex flex-col justify-center'>
      <p className="uppercase text-3xl font-bellefair text-background/50">
        The Terminology...
      </p>
      <p className="uppercase text-background text-[56px] font-bellefair">
        {name}
      </p>
      <p className="text-lg font-barlow text-[#D0D6F9]">{description}</p>
    </div>
  );
}

export default TechnologyStep