import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    const width = typeof window !== "undefined" ? window.innerWidth : null;
    const height = typeof window !== "undefined" ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const larguraTela = windowDimensions.width ?? 0;

  const larguraMobile = 767;
  const larguraTablet = 1023;

  const isMobile = larguraTela <= larguraMobile;
  const isTablet = larguraTela <= larguraTablet && !isMobile;
  const isDesktop = larguraTela > larguraTablet;

  return {
    ...windowDimensions,
    isMobile,
    isTablet,
    isDesktop,
  };
}
