"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Product } from "@/type";
import { LayoutList, Star, CircleDollarSign } from "lucide-react";
import { useState, useEffect } from "react";

const ProductSidebar = ({ data, setFilteredData }: { data: Product[], setFilteredData: (products: Product[]) => void }) => {
  const [filtered, setFiltered] = useState<Product[]>(data);

  useEffect(() => {
    setFilteredData(filtered);
  }, [filtered, setFilteredData]);

  const resetData = () => {
    setFiltered(data);
  };

  const filterCategory = (category: string) => {
    if (category === "All Categories") {
      resetData();
    } else {
      const result = data.filter((item) => item.category === category);
      setFiltered(result);
    }
  };

  const filterRating = (value: string) => {
    const ratingValue = parseFloat(value);
    const result = data.filter((item) => parseFloat(item.rating) >= ratingValue && parseFloat(item.rating) < ratingValue + 1);
    setFiltered(result);
  };

  const filterPrice = (max: number) => {
    let min = 0;
    if (max === 10) min = 0;
    else if (max === 20) min = 11;
    else if (max === 30) min = 21;

    const result = data.filter((item) => item.price >= min && item.price <= max);
    setFiltered(result);
  };

  return (
    <ScrollArea className="md:h-screen md:border-r">
      <div className="text-center md:h-screen">
        <div className="flex h-screen flex-col gap-2">
          <div className="flex-1">
            <nav className="grid items-center px-2 text-sm font-medium mb-5">
              <Accordion type="multiple" className="w-full mx-auto pr-5">
                
                {/* Category */}
                <AccordionItem value="category">
                  <AccordionTrigger className="text-lg font-semibold py-2">
                    <span className="flex justify-center items-center">
                      <LayoutList className="size-5 mr-3" /> Category
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    {["All Categories", "Dishwashing Items", "Cleaning Tools", "General Cleaning", "Fabric Care", "Metal Cleaning", "Floor Cleaning"].map((category, index) => (
                      <p key={index} className="cursor-pointer accordionNav" onClick={() => filterCategory(category)}>
                        {category}
                      </p>
                    ))}
                  </AccordionContent>
                </AccordionItem>

                {/* Rating */}
                <AccordionItem value="rating">
                  <AccordionTrigger className="text-lg font-semibold py-2">
                    <span className="flex justify-center items-center">
                      <Star className="size-5 mr-3" /> Rating
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="cursor-pointer accordionNav" onClick={resetData}>All</p>
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <p key={rating} className="cursor-pointer accordionNav flex" onClick={() => filterRating(rating.toString())}>
                        {Array.from({ length: rating }).map((_, index) => (
                          <Star key={index} className="star text-yellow-500" />
                        ))}
                      </p>
                    ))}
                  </AccordionContent>
                </AccordionItem>

                {/* Price */}
                <AccordionItem value="price">
                  <AccordionTrigger className="text-lg font-semibold py-2">
                    <span className="flex justify-center items-center">
                      <CircleDollarSign className="size-5 mr-3" /> Price
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="cursor-pointer accordionNav" onClick={resetData}>All</p>
                    {[{ label: "0 to $10", value: 10 }, { label: "$11 to $20", value: 20 }, { label: "$21 to $30", value: 30 }].map(({ label, value }, index) => (
                      <p key={index} className={`cursor-pointer accordionNav ${index === 2 ? "mb-5" : ""}`} onClick={() => filterPrice(value)}>
                        {label}
                      </p>
                    ))}
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </nav>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default ProductSidebar;
