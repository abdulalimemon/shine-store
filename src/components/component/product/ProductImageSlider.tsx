"use client"

import Image from "next/image";
import { useState } from "react";

const sliders = [
  {
    img: "https://source.unsplash.com/1200x540/?nature",
    title: "Escape 1",
    des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
  },
  {
    img: "https://source.unsplash.com/1200x540/?hill",
    title: "Escape 2",
    des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
  },
  {
    img: "https://source.unsplash.com/1200x540/?mountain",
    title: "Escape 3",
    des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
  },
  {
    img: "https://source.unsplash.com/1200x540/?river",
    title: "Escape 4",
    des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
  },
  {
    img: "https://source.unsplash.com/1200x540/?sea",
    title: "Escape 5",
    des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
  },
];

const ProductImageSlider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row-reverse justify-between">
      <div
        className="w-full h-72 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
      >
        
      </div>
      {/* slider container */}
      <div className="flex lg:flex-col justify-center items-center gap-3 p-2">
        {/* sliders */}
        {sliders.map((slide, inx) => (
          <Image
            onClick={() => setCurrentSlider(inx)}
            key={inx}
            src={slide.img}
            className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${
              currentSlider === inx ? "border-2 border-black p-px" : ""
            } rounded-md md:rounded-lg box-content cursor-pointer`}
            alt={slide.title}
            width={500}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;
