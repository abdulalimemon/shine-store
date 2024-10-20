"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button
        type="button"
        onClick={scrollToTop}
        className={`inline-flex items-center p-2 rounded-full shadow-lg text-white bg-[#3d5940] hover:opacity-80 transition-opacity overflow-y-auto ${
          isVisible ? "flex" : "hidden"
        }`}
      >
        <ChevronUp className="size-6 text-white" aria-hidden="true" />
      </button>
    </div>
  );
};

export default BackToTop;
