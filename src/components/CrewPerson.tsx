import React from "react";

interface CrewPersonPropTypes {
  name: string;
  role: string;
  bio: string;
}

const CrewPerson: React.FC<CrewPersonPropTypes> = ({ name, bio, role }) => {
  return (
    <div className="flex-1 flex flex-col justify-center">
      <p className="font-bellefair text-[32px] uppercase text-background/50">
        {role}
      </p>
      <h1 className="font-bellefair text-[56px] uppercase text-background">
        {name}
      </h1>
      <p className="font-barlow text-[18px] text-[#D0D6F9]">{bio}</p>
    </div>
  );
};

export default CrewPerson;
