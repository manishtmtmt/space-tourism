import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";

const Navbar = () => {
  let location = useLocation();

  return (
    <div className="flex justify-between w-full mt-6 z-10 h-24 relative">
      <div className="flex items-center pl-8 cursor-pointer">
        <Link to={"/"}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center w-[33%] z-20 absolute top-12 left-36">
        <hr className="border-slate-700 w-full" />
      </div>
      <ul className="flex gap-12 items-center justify-center backdrop-opacity-50 backdrop-invert bg-[#0B0D17]/90 text-background w-[60%] opacity-90 box-border">
        <li className="h-full">
          <Link
            to={"/"}
            className={`text-2xl uppercase font-barlow-condensed min-h-full flex items-center gap-2 cursor-pointer hover:border-b-2 hover:border-background ${
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
            className={`text-2xl uppercase font-barlow-condensed min-h-full flex items-center gap-2 cursor-pointer hover:border-b-2 hover:border-background ${
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
            className={`text-2xl uppercase font-barlow-condensed min-h-full flex items-center gap-2 cursor-pointer hover:border-b-2 hover:border-background ${
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
            className={`text-2xl uppercase font-barlow-condensed min-h-full flex items-center gap-2 cursor-pointer hover:border-b-2 hover:border-background ${
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
    </div>
  );
};

export default Navbar;
