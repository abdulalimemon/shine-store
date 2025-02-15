"use client";

import { Product } from "@/type";
import ProductPageCard from "./ProductCard";
import { useState } from "react";
import { Tally4, Tally3, List } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductGrid = ({ data }: { data: Product[] }) => {
  const [view, setView] = useState<number>(3); // Default view set to 3 columns
  const [sortType, setSortType] = useState<string>("Most Popular");

  const sortedProducts = [...data].sort((a, b) => {
    const aRating = parseFloat(a.rating);
    const bRating = parseFloat(b.rating);
    if (sortType === "Most Popular") return bRating - aRating;
    if (sortType === "Price Low to High") return a.price - b.price;
    if (sortType === "Price High to Low") return b.price - a.price;
    return 0;
  });

  const handleViewChange = (columns: number) => {
    setView(columns);
  };
  return (
    <div className="flex-1">
      <div className="mb-5 border-b pb-5">
        <h2 className="font-semibold text-xl">Products</h2>
        <h3 className="font-semibold pt-1">
          Showing {data.length} items in Best Selling Products.
        </h3>
      </div>
      <div className="flex items-center justify-between mt-5 mb-7">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Most Popular" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Most Popular">Most Popular</SelectItem>
              <SelectItem value="Price Low to High">
                Price Low to High
              </SelectItem>
              <SelectItem value="Price High to Low">
                Price High to Low
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* View options */}
        <div className="flex gap-3 cursor-pointer">
          <div
            onClick={() => handleViewChange(1)}
            className={`p-2 border rounded ${
              view === 1
                ? "bg-slate-200 hover:bg-slate-100 dark:bg-[#27272A] dark:hover:bg-[#27272A]"
                : "hover:bg-slate-100 dark:hover:bg-[#27272A]"
            }`}
          >
            <List className="size-5" />
          </div>
          <div
            onClick={() => handleViewChange(3)}
            className={`p-2 border rounded ${
              view === 3
                ? "bg-slate-200 hover:bg-slate-100 dark:bg-[#27272A] dark:hover:bg-[#27272A]"
                : "hover:bg-slate-100 dark:hover:bg-[#27272A]"
            }`}
          >
            <Tally3 className="size-5" />
          </div>

          <div
            onClick={() => handleViewChange(4)}
            className={`p-2 border rounded ${
              view === 4
                ? "bg-slate-200 hover:bg-slate-100 dark:bg-[#27272A] dark:hover:bg-[#27272A]"
                : "hover:bg-slate-100 dark:hover:bg-[#27272A]"
            }`}
          >
            <Tally4 className="size-5" />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div
        className={`grid gap-4 mb-10 ${
          view === 1
            ? "grid-cols-1"
            : view === 3
            ? "grid-cols-3"
            : "grid-cols-4"
        }`}
      >
        {sortedProducts.map((product) => (
          <ProductPageCard key={product._id} product={product} view={view} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
