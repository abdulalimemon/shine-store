"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Product } from "@/type";
import { LayoutList, Star, CircleDollarSign } from "lucide-react";
import { useState } from "react";

const ProductSidebar = ({ data }: { data: Product[] }) => {
  const [newData, setNewData] = useState(data);

  const filterRating = (value: string) => {
    const ratingValue = parseFloat(value);
    const minValue = ratingValue - 0.1;
    const maxValue = ratingValue + 0.9;

    const result = data.filter((curData) => {
      return (
        parseFloat(curData.rating) >= minValue &&
        parseFloat(curData.rating) <= maxValue
      );
    });

    setNewData(result);
  };

  const resetData = () => {
    const result = data;
    setNewData(result);
  };

  const filterCategory = (value: string) => {
    const result = data.filter((curData) => {
      return curData.category === value;
    });
    setNewData(result);
  };

  const filterPrice = (value: string) => {
    const priceValue = parseFloat(value);
    let minValue: number, maxValue: number;

    if (priceValue >= 0 && priceValue <= 10) {
      minValue = 0;
      maxValue = 10;
    } else if (priceValue >= 11 && priceValue <= 20) {
      minValue = 11;
      maxValue = 20;
    } else if (priceValue >= 21 && priceValue <= 30) {
      minValue = 21;
      maxValue = 30;
    } else {
      return;
    }

    const result = data.filter((curData) => {
      return curData.price >= minValue && curData.price <= maxValue;
    });

    setNewData(result);
  };

  return (
    <div className="hidden text-center border-r md:block sticky top-1 z-10 h-screen">
        <div className="flex h-full flex-col gap-2">
          <div className="flex-1">
            <nav className="grid items-center px-2 text-sm font-medium lg:px-4 pt-5">
              <Accordion type="multiple" className="w-[180px] mx-auto">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold py-2">
                    <span className="flex justify-center items-center">
                      <LayoutList className="size-5 mr-3" /> Category
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="accordionNav" onClick={() => resetData()}>
                      All Categories
                    </p>
                    <p
                      className="accordionNav"
                      onClick={() => filterCategory("Dishwashing Items")}
                    >
                      Dishwashing Items
                    </p>
                    <p
                      className="accordionNav"
                      onClick={() => filterCategory("Cleaning Tools")}
                    >
                      Cleaning Tools
                    </p>

                    <p
                      className="accordionNav"
                      onClick={() => filterCategory("General Cleaning")}
                    >
                      General Cleaning
                    </p>
                    <p
                      className="accordionNav"
                      onClick={() => filterCategory("Fabric Care")}
                    >
                      Fabric Care
                    </p>

                    <p
                      className="accordionNav"
                      onClick={() => filterCategory("Metal Cleaning")}
                    >
                      Metal Cleaning
                    </p>
                    <p
                      className="accordionNav"
                      onClick={() => filterCategory("Floor Cleaning")}
                    >
                      Floor Cleaning
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold py-2">
                    <span className="flex justify-center items-center">
                      <Star className="size-5 mr-3" /> Rating
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="accordionNav" onClick={() => resetData()}>
                      All
                    </p>
                    <p
                      className="accordionNav"
                      onClick={() => filterRating("1")}
                    >
                      <Star className="star" />
                    </p>
                    <p
                      className="accordionNav"
                      onClick={() => filterRating("2")}
                    >
                      {Array(2)
                        .fill(null)
                        .map((_, index: number) => (
                          <Star key={index} className="star" />
                        ))}
                    </p>
                    <p
                      className="accordionNav"
                      onClick={() => filterRating("3")}
                    >
                      {Array(3)
                        .fill(null)
                        .map((_, index: number) => (
                          <Star key={index} className="star" />
                        ))}
                    </p>
                    <p
                      className="accordionNav"
                      onClick={() => filterRating("4")}
                    >
                      {Array(4)
                        .fill(null)
                        .map((_, index: number) => (
                          <Star key={index} className="star" />
                        ))}
                    </p>

                    <p
                      className="accordionNav"
                      onClick={() => filterRating("5")}
                    >
                      {Array(5)
                        .fill(null)
                        .map((_, index: number) => (
                          <Star key={index} className="star" />
                        ))}
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold py-2">
                    <span className="flex justify-center items-center">
                      <CircleDollarSign className="size-5 mr-3" /> Price
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="accordionNav" onClick={() => resetData()}>
                      All
                    </p>
                    <p
                      className="accordionNav"
                      onClick={() => filterPrice("10")}
                    >
                      0 to $10
                    </p>
                    <p
                      className="accordionNav"
                      onClick={() => filterPrice("20")}
                    >
                      $11 to $20
                    </p>

                    <p
                      className="accordionNav mb-5"
                      onClick={() => filterPrice("30")}
                    >
                      $21 to $30
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </nav>
          </div>
        </div>
      </div>
  );
};

export default ProductSidebar;
