"use client";

import Container from "@/components/layout/Container";
import ProductSidebar from "./ProductSidebar";
import ProductGrid from "./ProductGrid";
import { Product } from "@/type";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const NewProduct = ({ data }: { data: Product[] }) => {
  const [filteredData, setFilteredData] = useState<Product[]>(data);
  return (
    <Container>
      <div className="flex h-full">
        <div className="sticky top-5 left-0 h-[calc(100%-5rem)] w-64 z-20 shadow-lg">
          <ScrollArea className="h-full">
            <ProductSidebar data={data} setFilteredData={setFilteredData} />
          </ScrollArea>
        </div>
        <div className="flex-1 overflow-auto pl-5">
          <ProductGrid data={data} />
        </div>
      </div>
    </Container>
  );
};

export default NewProduct;
