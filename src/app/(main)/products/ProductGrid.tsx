"use client"

import { Product } from "@/type";
import ProductPageCard from "./ProductCard";
import { useState } from "react";

const ProductGrid = ({ data }: { data: Product[] }) => {
    const [view, setView] = useState<number>(3); // Default view set to 3 columns
  const [sortType, setSortType] = useState<string>('Most Popular');

  const sortedProducts = [...data].sort((a, b) => {
    const aRating = parseFloat(a.rating);
    const bRating = parseFloat(b.rating);
    if (sortType === 'Most Popular') return bRating - aRating;
    if (sortType === 'Price Low to High') return a.price - b.price;
    if (sortType === 'Price High to Low') return b.price - a.price;
    return 0;
  });

  const handleViewChange = (columns: number) => {
    setView(columns);
  };
  return (
    <div className="flex-1 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-xl">Products</h2>

        {/* Sort dropdown */}
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="border p-2"
        >
          <option value="Most Popular">Most Popular</option>
          <option value="Price Low to High">Price Low to High</option>
          <option value="Price High to Low">Price High to Low</option>
        </select>

        {/* View options */}
        <div className="flex space-x-2">
          <button
            onClick={() => handleViewChange(1)}
            className={`p-2 border rounded ${view === 1 ? 'bg-gray-300' : ''}`}
          >
            1
          </button>
          <button
            onClick={() => handleViewChange(3)}
            className={`p-2 border rounded ${view === 3 ? 'bg-gray-300' : ''}`}
          >
            3
          </button>
          <button
            onClick={() => handleViewChange(4)}
            className={`p-2 border rounded ${view === 4 ? 'bg-gray-300' : ''}`}
          >
            4
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div
        className={`grid gap-4 ${
          view === 1
            ? 'grid-cols-1'
            : view === 3
            ? 'grid-cols-3'
            : 'grid-cols-4'
        }`}
      >
        {sortedProducts.map((product) => (
          <ProductPageCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
