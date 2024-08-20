import { useNavigate } from "react-router-dom";

import Navbar from "@/components/Navbar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-home-desktop bg-no-repeat bg-fixed overflow-y-auto absolute top-0 z-0">
      <Navbar />
      <div className="w-full h-screen flex items-center justify-center mt-4">
        <div className="w-4/5 h-[400px] flex justify-between">
          <div className="flex-1 flex flex-col justify-center">
            <p className="uppercase text-[#D0D6F9] text-[28px] font-barlow-condensed font-normal leading-8 tracking-[4px]">
              So, You want to travel to
            </p>
            <h1 className="uppercase font-bellefair text-background text-[144px] leading-[165px]">
              Space
            </h1>
            <p className="text-[#D0D6F9] font-barlow text-lg">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-center items-end">
            <button className="w-[400px] h-full rounded-full flex justify-center items-center hover:bg-slate-900/50 z-0">
              <span
                className="w-[272px] h-[272px] rounded-full flex justify-center items-center bg-background z-10 font-bellefair text-[32px] uppercase leading-[37px] text-[##0B0D17] shawdow-[0px_4px_4px_rgba(0px,0px,0px,0.25%)]"
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
