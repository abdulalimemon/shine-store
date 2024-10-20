"use client";

import Image from "next/image";
import { useState } from "react";

type ImageArray = string[];

const ProductImageSlider = ({ images }: { images: ImageArray }) => {
  const [currentSlider, setCurrentSlider] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row-reverse justify-between gap-5">
      {/* Main Image */}
      <div className="w-full h-72 sm:h-96 md:h-[540px] lg:w-5/6">
        <Image
          src={images[currentSlider]} 
          width={600}
          height={600}
          alt="Product Image"
          className="w-full h-full rounded-md"
        />
      </div>

      {/* Slider Thumbnails */}
      <div className="flex lg:flex-col justify-center items-center gap-5 p-2 lg:w-1/6 overflow-x-auto lg:overflow-y-auto">
        {images.map((slide, inx) => (
          <div
            key={inx}
            className="w-10 sm:w-14 md:w-20 h-10 sm:h-14 md:h-20 cursor-pointer"
            onClick={() => setCurrentSlider(inx)}
          >
            <Image
              src={slide}
              alt={`Thumbnail ${inx}`}
              width={100}
              height={100}
              className={`w-full h-full object-cover rounded-md transition-all duration-200 ease-in-out ${
                currentSlider === inx
                  ? "border-2 border-[#265450] dark:border-[#FF6464] p-0.5"
                  : "opacity-70"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;

