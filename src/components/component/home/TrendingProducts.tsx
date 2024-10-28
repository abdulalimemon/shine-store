import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Product } from "@/type";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "../product/ProductCard";

const TrendingProducts = ({
  sortedProducts,
}: {
  sortedProducts: Product[];
}) => {
  return (
    <section className="pt-10 pb-10">
      <Container>
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold">Trending Products</h2>

          <Link href="/trending-products">
            <Button className="bg-[#265450] text-white hover:bg-[#265450]/90 rounded-full flex items-center justify-center">
              View All <MoveRight className="size-5 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 my-10">
          {sortedProducts?.slice(0, 8)?.map((product) => (
            <div
              key={product._id}
              className="rounded-md border flex flex-col justify-between"
            >
              <ProductCard product={product} link="trending-products" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrendingProducts;
