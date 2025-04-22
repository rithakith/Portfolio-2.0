"use client";
import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the element with id="hero"
  const scrollToHero = () => {
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    isVisible && (
      <button
        onClick={scrollToHero}
        className="fixed bottom-8 right-8 w-12 h-12 bg-color1 bg-opacity-40 backdrop-blur-xl text-white text-2xl flex items-center justify-center rounded-full shadow-lg hover:bg-color2 transition"
        aria-label="Back to Hero Section"
      >
        ↑
      </button>
    )
  );
};

export default BackToTopButton;
