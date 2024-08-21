import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import Logo from "/assets/shared/logo.svg";

const Navbar = () => {
  let location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="grid md:grid-cols-6 grid-cols-2 w-full lg:mt-6 z-10 h-24">
      <div className="col-span-1 flex items-center md:justify-center justify-start cursor-pointer px-6">
        <Link to={"/"}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="hidden lg:block lg:col-span-1 items-center z-20 relative">
        <div className="w-full absolute h-full flex items-center left-12">
          <hr className="border-slate-700 w-full" />
        </div>
      </div>
      <ul className="hidden lg:col-span-4 md:col-span-5 md:flex gap-12 items-center justify-center backdrop-opacity-50 bg-[#0B0D17]/90 text-background">
        <li className="h-full">
          <Link
            to={"/"}
            className={`lg:text-2xl text-base uppercase font-barlow-condensed min-h-full flex items-center gap-2 cursor-pointer hover:border-b-2 hover:border-background ${
              location.pathname === "/" ? "border-b-2 border-background" : ""
            }`}
          >
            <span className="font-bold tracking-wider">00</span>
            <span className="font-light tracking-wider">Home</span>
          </Link>
        </li>
        <li className="h-full">
          <Link
            to={"/destination"}
            className={`lg:text-2xl text-base uppercase font-barlow-condensed min-h-full flex items-center gap-2 cursor-pointer hover:border-b-2 hover:border-background ${
              location.pathname === "/destination"
                ? "border-b-2 border-background"
                : ""
            }`}
          >
            <span className="font-bold tracking-wider">01</span>
            <span className="font-light tracking-wider">Destination</span>
          </Link>
        </li>
        <li className="h-full">
          <Link
            to={"/crew"}
            className={`lg:text-2xl text-base uppercase font-barlow-condensed min-h-full flex items-center gap-2 cursor-pointer hover:border-b-2 hover:border-background ${
              location.pathname === "/crew"
                ? "border-b-2 border-background"
                : ""
            }`}
          >
            <span className="font-bold tracking-wider">02</span>
            <span className="font-light tracking-wider">Crew</span>
          </Link>
        </li>
        <li className="h-full">
          <Link
            to={"/technology"}
            className={`lg:text-2xl text-base uppercase font-barlow-condensed min-h-full flex items-center gap-2 cursor-pointer hover:border-b-2 hover:border-background ${
              location.pathname === "/technology"
                ? "border-b-2 border-background"
                : ""
            }`}
          >
            <span className="font-bold tracking-wider">03</span>
            <span className="font-light tracking-wider">Technology</span>
          </Link>
        </li>
      </ul>
      <div
        className="md:hidden col-span-1 flex justify-end items-center px-6"
        onClick={() => setOpen(true)}
      >
        <img
          src="/assets/shared/icon-hamburger.svg"
          alt="hamburger-icon"
          className="w-8"
        />
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="bg-[#0B0D17]/90 backdrop-opacity-50 px-0">
          <div className="flex justify-end px-4" onClick={() => setOpen(false)}>
            <img src="/assets/shared/icon-close.svg" alt="close-icon" />
          </div>

          <ul className="flex flex-col gap-4 text-background mt-4 ml-4">
            <li>
              <Link
                to={"/"}
                className={`text-base uppercase font-barlow-condensed flex items-center gap-2 ${
                  location.pathname === "/"
                    ? "border-r-4 border-background"
                    : ""
                }`}
              >
                <span className="font-bold tracking-wider">00</span>
                <span className="font-light tracking-wider">Home</span>
              </Link>
            </li>
            <li className="h-full">
              <Link
                to={"/destination"}
                className={`text-base uppercase font-barlow-condensed flex items-center gap-2 ${
                  location.pathname === "/destination"
                    ? "border-r-4 border-background"
                    : ""
                }`}
              >
                <span className="font-bold tracking-wider">01</span>
                <span className="font-light tracking-wider">Destination</span>
              </Link>
            </li>
            <li className="h-full">
              <Link
                to={"/crew"}
                className={`text-base uppercase font-barlow-condensed flex items-center gap-2 ${
                  location.pathname === "/crew"
                    ? "border-r-4 border-background"
                    : ""
                }`}
              >
                <span className="font-bold tracking-wider">02</span>
                <span className="font-light tracking-wider">Crew</span>
              </Link>
            </li>
            <li className="h-full">
              <Link
                to={"/technology"}
                className={`text-base uppercase font-barlow-condensed flex items-center gap-2 ${
                  location.pathname === "/technology"
                    ? "border-r-4 border-background"
                    : ""
                }`}
              >
                <span className="font-bold tracking-wider">03</span>
                <span className="font-light tracking-wider">Technology</span>
              </Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
