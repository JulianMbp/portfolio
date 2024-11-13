'use client'
import ButtonSmall from "@/app/components/ButtonSmall";
import React, { useState, useEffect } from "react";
const ScrollButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <dl
      className={`md:ml-[950px] md:mt-0 mt-[225px] fixed transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ButtonSmall />
    </dl>
  );
};

export default ScrollButton;
