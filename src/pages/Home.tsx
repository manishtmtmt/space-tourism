import { useNavigate } from "react-router-dom";

import Navbar from "@/components/Navbar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen lg:bg-home-desktop md:bg-home-tablet bg-home-mobile bg-no-repeat bg-fixed overflow-y-auto absolute top-0 z-0">
      <Navbar />
      <div className="h-full flex lg:items-center justify-center lg:mt-0">
        <div className="w-4/5 lg:h-[400px] flex lg:flex-row flex-col">
          <div className="flex-1 flex flex-col justify-center lg:items-start items-center">
            <p className="uppercase text-[#D0D6F9] md:text-[28px] text-base font-barlow-condensed font-normal leading-8 tracking-[4px]">
              So, You want to travel to
            </p>
            <h1 className="uppercase font-bellefair text-background md:text-[144px] text-[80px] md:leading-[165px]">
              Space
            </h1>
            <p className="text-[#D0D6F9] font-barlow md:text-lg text-base">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="flex-1 flex flex-col lg:items-end items-center">
            <button className="md:w-[400px] md:h-[400px] w-[180px] h-[180px] rounded-full flex justify-center items-center hover:bg-slate-900/50 z-0">
              <span
                className="md:w-[272px] md:h-[272px] w-[144px] h-[144px] rounded-full flex justify-center items-center bg-background z-10 font-bellefair md:text-[32px] text-[18px] uppercase text-[##0B0D17] shawdow-[0px_4px_4px_rgba(0px,0px,0px,0.25%)]"
                onClick={() => navigate("/destination")}
              >
                Explore
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
