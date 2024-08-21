import React from "react";

interface CrewPersonPropTypes {
  name: string;
  role: string;
  bio: string;
}

const CrewPerson: React.FC<CrewPersonPropTypes> = ({ name, bio, role }) => {
  return (
    <div className="flex-1 flex flex-col md:gap-6 gap-3 lg:gap-0 justify-center">
      <p className="font-bellefair md:text-3xl text-[18px] uppercase text-background/50 lg:text-left text-center">
        {role}
      </p>
      <h1 className="font-bellefair lg:text-[56px] md:text-[40px] text-[24px] uppercase text-background lg:text-left text-center">
        {name}
      </h1>
      <p className="font-barlow lg:text-[18px] text-base text-[#D0D6F9] lg:text-left text-center">
        {bio}
      </p>
    </div>
  );
};

export default CrewPerson;
