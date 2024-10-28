import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Product } from "@/type";
import { Zap, MoveRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "../product/ProductCard";

const FlashSale = ({ flashSaleProducts }: { flashSaleProducts: Product[] }) => {
  return (
    <section className="pt-10 pb-10">
      <Container>
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold flex items-center justify-center">
            Flash Sale{" "}
            <Zap className="size-6 ml-2 font-bold fill-[#FF6464] text-[#FF6464]" />
          </h2>

          <Link href="/flash-sale">
            <Button className="bg-[#265450] text-white hover:bg-[#265450]/90 rounded-full flex items-center justify-center">
              View All <MoveRight className="size-5 ml-2" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 my-10">
          {flashSaleProducts?.slice(0, 4)?.map((product) => (
            <div
              key={product._id}
              className="rounded-md border flex flex-col justify-between"
            >
              <ProductCard product={product} link='flash-sale' />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FlashSale;
