import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Product } from "@/type";
import { Heart, Zap, Star } from "lucide-react";
import Link from "next/link";
import CountdownTimer from "@/components/component/flashSale/CountdownTimer";

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 my-10">
          {flashSaleProducts?.map((product) => (
            <div
              key={product._id}
              className="rounded-md border flex flex-col justify-between"
            >
              <div className="flex relative">
                <div className="flex justify-between items-center left-4 right-4 top-4 absolute">
                  <button className="bg-primary dark:bg-slate-100 dark:text-black text-xs duration-200 text-white font-medium px-3 py-1 rounded-xl">
                    30% off
                  </button>
                </div>
                <div className="w-full">
                  <Image
                    className="rounded-t-lg bg-black/40 h-40 w-full"
                    src={product?.images?.cover}
                    alt={product.name}
                    width={250}
                    height={100}
                  />
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-center text-sm font-semibold">
                  {product.name.length > 30
                    ? product.name.slice(0, 26) + "..."
                    : product.name}
                </h2>
              </div>
              <div className="px-4 pb-4">
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
                <Link href={`/flash-sale/${product._id}`}>
                  <Button className="w-full text-sm">View Details</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FlashSaleProduct;
