"use client";

import Container from "@/components/layout/Container";
import Image from "next/image";
import { useState } from "react";

// data/types.ts
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  weight: string;
  rating: number;
  image: string;
}

// data/products.ts

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Bread and Pastry Flour 200 g",
    category: "Vegetable",
    price: 8.02,
    originalPrice: 15.15,
    weight: "250 ml",
    rating: 4.0,
    image: "/path/to/image1.jpg",
  },
  {
    id: 2,
    name: "Peanut Butter Bite Premium Butter Cookies 600 g",
    category: "Vegetable",
    price: 4.33,
    originalPrice: 10.36,
    weight: "350 G",
    rating: 2.4,
    image: "/path/to/image2.jpg",
  },
  {
    id: 3,
    name: "Fresh Bread and Pastry Flour 200 g",
    category: "Vegetable",
    price: 8.02,
    originalPrice: 15.15,
    weight: "250 ml",
    rating: 4.0,
    image: "/path/to/image1.jpg",
  },
  {
    id: 4,
    name: "Peanut Butter Bite Premium Butter Cookies 600 g",
    category: "Vegetable",
    price: 4.33,
    originalPrice: 10.36,
    weight: "350 G",
    rating: 2.4,
    image: "/path/to/image2.jpg",
  },
  // Add more products as needed
];

const TestProduct = () => {
  const [view, setView] = useState<number>(3); // Default view set to 3 columns
  const [sortType, setSortType] = useState<string>("Most Popular");
  const [filter, setFilter] = useState<string[]>([]);

  // Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "Most Popular") return b.rating - a.rating;
    if (sortType === "Price Low to High") return a.price - b.price;
    if (sortType === "Price High to Low") return b.price - a.price;
    return 0;
  });

  const handleViewChange = (columns: number) => {
    setView(columns);
  };

   // Handle filtering products
   const filteredProducts = sortedProducts.filter((product) =>
    filter.length === 0 || filter.includes(product.category)
  );

  const handleFilterChange = (category: string) => {
    setFilter((prev) =>
      prev.includes(category)
        ? prev.filter((f) => f !== category)
        : [...prev, category]
    );
  };

  return (
    <Container className="flex">
      {/* Sidebar Filters */}
      <aside className="w-1/4 p-4 border-r">
        <h2 className="font-semibold text-lg mb-2">Filters</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Category</h3>
          {['Vegetable', 'Fruit', 'Snacks'].map((category) => (
            <label key={category} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filter.includes(category)}
                onChange={() => handleFilterChange(category)}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </aside>

      {/* Products List */}
      <main className="flex-1 p-4">
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
              className={`p-2 border rounded ${
                view === 1 ? "bg-gray-300" : ""
              }`}
            >
              1
            </button>
            <button
              onClick={() => handleViewChange(3)}
              className={`p-2 border rounded ${
                view === 3 ? "bg-gray-300" : ""
              }`}
            >
              3
            </button>
            <button
              onClick={() => handleViewChange(4)}
              className={`p-2 border rounded ${
                view === 4 ? "bg-gray-300" : ""
              }`}
            >
              4
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div
          className={`grid gap-4 ${
            view === 1
              ? "grid-cols-1"
              : view === 3
              ? "grid-cols-3"
              : "grid-cols-4"
          }`}
        >
          {filteredProducts.map((product: Product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="h-32 w-full object-cover"
              />
              <h3 className="font-semibold mt-2">{product.name}</h3>
              <p>{product.weight}</p>
              <div className="flex items-center justify-between">
                <span className="text-green-600">
                  ${product.price.toFixed(2)}
                </span>
                <span className="line-through text-gray-400">
                  ${product.originalPrice.toFixed(2)}
                </span>
              </div>
              <button className="w-full mt-2 bg-blue-500 text-white p-2 rounded">
                Add
              </button>
            </div>
          ))}
        </div>
      </main>
    </Container>
  );
};

export default TestProduct;
