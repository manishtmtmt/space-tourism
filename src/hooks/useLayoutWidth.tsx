import { useEffect, useState } from "react";

const getScreenSize = () => {
  const {availHeight: height, availWidth: width} = window.screen;

  return {width, height};
}

export const useLayoutSize = () => {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    const handleChangeScreenSize = () => {
      setScreenSize(getScreenSize())
    }

    window.addEventListener("resize", handleChangeScreenSize);

    return () => window.removeEventListener('resize', handleChangeScreenSize);
  }, [])

  return screenSize;
}