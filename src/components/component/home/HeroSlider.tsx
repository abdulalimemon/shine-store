"use client";

import { useState, useEffect } from "react";
import { HeroSliderItem } from "@/type";
import Image from "next/image";

const sliders: HeroSliderItem[] = [
  {
    id: "1",
    title: "Get Your Home Sparkling Clean",
    subtitle: "Discover premium cleaning supplies for a pristine home",
    img: "https://cdn.dockwalk.com/files/2022/08/7a475d60-1824-11ed-b706-d366c8308a58-eco-bio-friendly-cleaning-products-iStock.jpg",
  },
  {
    id: "2",
    title: "Experience Freshness Every Day",
    subtitle: "Elevate your cleaning routine with our natural products",
    img: "https://cdn.sanity.io/images/tbvc1g2x/production/25b99ddabe34f4cc08c917b5c78c48e410a2dec3-2400x1296.jpg?w=2400&h=1296&auto=format",
  },
  {
    id: "3",
    title: "Shop Smart, Clean Smart",
    subtitle: "Find the perfect cleaning solutions for your home",
    img: "https://hips.hearstapps.com/hmg-prod/images/eco-friendly-cleaning-products-66268d1f26b09.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
  },
];

const HeroSlider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
    <>
      {/* Main Slider Section */}
      <div
        className="relative w-full h-60 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center transition-all duration-1000 ease-linear"
        style={{
          backgroundImage: `url(${sliders[currentSlider].img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        {/* Text container */}
        <div className="relative z-10 drop-shadow-lg text-white text-center px-5">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
            {sliders[currentSlider].title}
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            {sliders[currentSlider].subtitle}
          </p>
        </div>
      </div>

      {/* Slider Navigation Thumbnails */}
      <div className="flex justify-center items-center gap-3 p-2 mb-10 overflow-x-auto">
        {sliders.map((slide, inx) => (
          <Image
            onClick={() => setCurrentSlider(inx)}
            key={inx}
            src={slide.img}
            className={`w-10 sm:w-14 md:w-20 h-6 sm:h-8 md:h-12 object-cover cursor-pointer transition-all duration-200 ease-in-out ${
              currentSlider === inx
                ? "border-2 border-[#265450] dark:border-[#FF6464] p-0.5 opacity-100"
                : "opacity-90"
            } rounded-md md:rounded-lg`}
            alt={slide.title}
            width={100}
            height={100}
          />
        ))}
      </div>
    </>
  );
};

export default HeroSlider;
