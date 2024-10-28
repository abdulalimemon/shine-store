import Container from "@/components/layout/Container";
import { Product } from "@/type";
import { Zap } from "lucide-react";
import CountdownTimer from "@/app/(main)/flash-sale/CountdownTimer";
import ProductCard from "@/components/component/product/ProductCard";

const FlashSaleProduct = ({
  flashSaleProducts,
}: {
  flashSaleProducts: Product[];
}) => {
  return (
    <section className="my-20">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold flex items-center justify-center mb-5 md:mb-0">
            Flash Sale{" "}
            <Zap className="size-6 ml-2 font-bold text-red-500 fill-red-500" />
          </h2>

          <CountdownTimer />
        </div>
        <div>
          <h2 className="font-semibold my-5">
            Check Out the Exclusive {flashSaleProducts.length} Flash Sale
            Products!
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 my-10">
          {flashSaleProducts?.map((product) => (
            <div
              key={product._id}
              className="rounded-md border flex flex-col justify-between"
            >
              <ProductCard product={product} link="flash-sale" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FlashSaleProduct;
