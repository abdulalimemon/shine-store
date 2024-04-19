"use client";

import Link from "next/link";
import { Product } from "@/type";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Heart, Star, LayoutList, CircleDollarSign} from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// type TSearchParams = {
//   category: string;
// };

const AllProduct = ({ data }: { data: Product[] }) => {
  const [newData, setNewData] = useState(data);

  const filterCategory = (value: string) => {
    const result = data.filter((curData) => {
      return curData.category === value;
    });
    setNewData(result);
  };

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

  const resetData = () => {
    const result = data;
    setNewData(result);
  };

  // const filterSearchParams = () => {
  //   const result = data.filter((curData) => {
  //     return curData.category === searchParams.category;
  //   });
  //   setNewData(result);
  // };

  return (
    <div className="grid  w-full min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden text-center border-r bg-muted/40 md:block">
        <div className="flex h-full flex-col gap-2">
          <div className="flex-1">
            <nav className="grid items-center px-2 text-sm font-medium lg:px-4 pt-5">
              <Accordion type="multiple" className="w-[180px] mx-auto">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold py-2">
                    <span className="flex justify-center items-center"><LayoutList className="size-5 mr-3" /> Category</span>
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
                  <span className="flex justify-center items-center"><Star className="size-5 mr-3" /> Rating</span> 
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="accordionNav" onClick={() => resetData()}>
                      All
                    </p>
                    <p
                      className="accordionNav"
                      onClick={() => filterRating("1")}
                    >
                      <Star className="size-5 fill-yellow-400 text-yellow-400" />
                    </p>
                    <p
                      className="accordionNav"
                      onClick={() => filterRating("2")}
                    >
                      <Star className="size-5 fill-yellow-400 text-yellow-400" /><Star className="size-5 fill-yellow-400 text-yellow-400" />
                    </p>
                    <p
                      className="accordionNav"
                      onClick={() => filterRating("3")}
                    >
                      <Star className="size-5 fill-yellow-400 text-yellow-400" /><Star className="size-5 fill-yellow-400 text-yellow-400" />
                      <Star className="size-5 fill-yellow-400 text-yellow-400" />
                    </p>
                    <p
                      className="accordionNav"
                      onClick={() => filterRating("4")}
                    >
                      <Star className="size-5 fill-yellow-400 text-yellow-400" /><Star className="size-5 fill-yellow-400 text-yellow-400" />
                      <Star className="size-5 fill-yellow-400 text-yellow-400" /><Star className="size-5 fill-yellow-400 text-yellow-400" />
                    </p>

                    <p
                      className="accordionNav"
                      onClick={() => filterRating("5")}
                    >
                      <Star className="size-5 fill-yellow-400 text-yellow-400" /><Star className="size-5 fill-yellow-400 text-yellow-400" />
                      <Star className="size-5 fill-yellow-400 text-yellow-400" /><Star className="size-5 fill-yellow-400 text-yellow-400" /><Star className="size-5 fill-yellow-400 text-yellow-400" />
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold py-2">
                  <span className="flex justify-center items-center"><CircleDollarSign className="size-5 mr-3" /> Price</span> 
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
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold md:text-2xl pt-5 md:pt-0">
              All Cleaning Supplies
            </h2>
          </div>
          
          <nav className="grid items-center px-2 text-sm font-medium lg:px-4 pt-5 md:hidden">
              <Accordion type="multiple" className="w-full px-5">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-base font-semibold py-2">
                    <span className="flex justify-center items-center"><LayoutList className="size-5 mr-3" /> Category</span>
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
                  <AccordionTrigger className="text-base font-semibold py-2">
                  <span className="flex justify-center items-center"><Star className="size-5 mr-3" /> Rating</span> 
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="accordionNav" onClick={() => resetData()}>
                      All
                    </p>
                    <p
                      className="accordionNav"
                      onClick={() => filterRating("1")}
                    >
                      <Star className="size-5 fill-yellow-400 text-yellow-400" />
                    </p>
                    <p
                      className="accordionNav"
                      onClick={() => filterRating("2")}
                    >
                      <Star className="size-5 fill-yellow-400 text-yellow-400" /><Star className="size-5 fill-yellow-400 text-yellow-400" />
                    </p>
                    <p
                      className="accordionNav"
                      onClick={() => filterRating("3")}
                    >
                      <Star className="size-5 fill-yellow-400 text-yellow-400" /><Star className="size-5 fill-yellow-400 text-yellow-400" />
                      <Star className="size-5 fill-yellow-400 text-yellow-400" />
                    </p>
                    <p
                      className="accordionNav"
                      onClick={() => filterRating("4")}
                    >
                      <Star className="size-5 fill-yellow-400 text-yellow-400" /><Star className="size-5 fill-yellow-400 text-yellow-400" />
                      <Star className="size-5 fill-yellow-400 text-yellow-400" /><Star className="size-5 fill-yellow-400 text-yellow-400" />
                    </p>

                    <p
                      className="accordionNav"
                      onClick={() => filterRating("5")}
                    >
                      <Star className="size-5 fill-yellow-400 text-yellow-400" /><Star className="size-5 fill-yellow-400 text-yellow-400" />
                      <Star className="size-5 fill-yellow-400 text-yellow-400" /><Star className="size-5 fill-yellow-400 text-yellow-400" /><Star className="size-5 fill-yellow-400 text-yellow-400" />
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-base font-semibold py-2">
                  <span className="flex justify-center items-center"><CircleDollarSign className="size-5 mr-3" /> Price</span> 
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
            <div>
            <h2 className="font-semibold pt-3">
              Showing all {newData.length} Products!
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 my-10">
            {newData?.map((product: Product) => (
              <div
                key={product._id}
                className="rounded-md border flex flex-col justify-between"
              >
                <div className="flex justify-center  relative">
                  <div className="flex justify-between items-center left-4 right-4 top-4 absolute">
                    <div className="flex items-center">
                      <Heart className=" hover:fill-red-500 stroke-red-500 stroke-2 fill-transparent  w-[20px] md:w-[30px]" />
                    </div>
                    <button className="bg-primary dark:bg-slate-100 dark:text-black duration-200 text-white font-medium px-3 text-xs py-1 rounded-xl">
                      30% off
                    </button>
                  </div>
                  <div>
                    <Image
                      className="rounded-lg bg-black/40 md:my-2 h-48"
                      src={product?.images?.cover}
                      alt={product.name}
                      width={250}
                      height={100}
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-center text-base font-semibold">
                    {product.name}
                  </h2>
                </div>
                <div className="p-4">
                  <div className="mb-3 flex justify-between items-center">
                    <p className="block text-sm font-semibold text-center">
                      ${product.price}
                    </p>
                    <p className="text-sm font-semibold text-center flex justify-center items-center">
                      {product.rating}{" "}
                      <span>
                        <Star className="size-6 fill-yellow-400 text-yellow-400 ml-1" />
                      </span>
                    </p>
                  </div>

                  <Link
                    href={`/cleaning-supplies/${product._id}`}
                    className="text-accent"
                  >
                    <Button className="w-full">View Details</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllProduct;
