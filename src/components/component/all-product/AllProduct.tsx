"use client";

import Link from "next/link";
import { Home, ShoppingCart } from "lucide-react";
import { Product } from "@/type";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

// type TSearchParams = {
//   category: string;
// };

const AllProduct = ({data}: {data: Product[]}) => {
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
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="text-center border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex-1">
            <nav className="grid items-center px-2 text-sm font-medium lg:px-4 pt-5">
              <p className="text-lg font-semibold md:text-xl py-2">Category</p>
              <p
                className="flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-primary cursor-pointer hover:text-white"
                onClick={() => resetData()}
              >
                All Categories
              </p>
              <p
                className="flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-primary cursor-pointer hover:text-white"
                onClick={() => filterCategory("Dishwashing Items")}
              >
                Dishwashing Items
              </p>
              <p
                className="flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-primary cursor-pointer hover:text-white"
                onClick={() => filterCategory("Cleaning Tools")}
              >
                Cleaning Tools
              </p>

              <p
                className="flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-primary cursor-pointer hover:text-white"
                onClick={() => filterCategory("General Cleaning")}
              >
                General Cleaning
              </p>
              <p
                className="flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-primary cursor-pointer hover:text-white"
                onClick={() => filterCategory("Fabric Care")}
              >
                Fabric Care
              </p>

              <p
                className="flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-primary cursor-pointer hover:text-white"
                onClick={() => filterCategory("Metal Cleaning")}
              >
                Metal Cleaning
              </p>
              <p
                className="flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-primary cursor-pointer hover:text-white"
                onClick={() => filterCategory("Floor Cleaning")}
              >
                Floor Cleaning
              </p>
            </nav>
            <nav className="grid items-center px-2 text-sm font-medium lg:px-4 pt-5">
              <p className="text-lg font-semibold md:text-xl py-2">Rating</p>
              <p
                className="flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-primary cursor-pointer hover:text-white"
                onClick={() => resetData()}
              >
                All
              </p>
              <p
                className="flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-primary cursor-pointer hover:text-white"
                onClick={() => filterRating("3")}
              >
                0 to 3 star
              </p>
              <p
                className="flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-primary cursor-pointer hover:text-white"
                onClick={() => filterRating("4")}
              >
                4 star
              </p>

              <p
                className="flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-primary cursor-pointer hover:text-white"
                onClick={() => filterRating("5")}
              >
                5 star
              </p>
            </nav>
            <nav className="grid items-center px-2 text-sm font-medium lg:px-4 py-5">
              <p className="text-lg font-semibold md:text-xl py-2">Price</p>
              <p
                className="flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-primary cursor-pointer hover:text-white"
                onClick={() => resetData()}
              >
                All
              </p>
              <p
                className="flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-primary cursor-pointer hover:text-white"
                onClick={() => filterPrice("10")}
              >
                0 to $10
              </p>
              <p
                className="flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-primary cursor-pointer hover:text-white"
                onClick={() => filterPrice("20")}
              >
                $11 to $20
              </p>

              <p
                className="flex items-center justify-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-primary cursor-pointer hover:text-white mb-5"
                onClick={() => filterPrice("30")}
              >
                $21 to $30
              </p>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold md:text-2xl">
              All Cleaning Supplies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
            {newData?.map((product: Product) => (
              <div
                key={product._id}
                className="rounded-md border flex flex-col justify-between"
              >
                <div className="flex justify-center  relative">
                  <div className="flex justify-between items-center left-4 right-4 top-4 absolute">
                    <div className="flex items-center">
                      <Heart className=" hover:fill-red-500 stroke-red-500 stroke-2 fill-transparent  w-[30px]" />
                    </div>
                    <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">
                      30% off
                    </button>
                  </div>
                  <div>
                  <Image
                    className="rounded-lg bg-black/40 my-4 h-48"
                    src={product?.images?.cover}
                    alt={product.name}
                    width={250}
                    height={100}
                  />
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-center text-base md:text-lg font-semibold">
                    {product.name}
                  </h2>
                </div>
                <div className="p-4">
                  <div className="mb-3">
                    <p className="block text-sm font-semibold text-center">
                      ${product.price}
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
