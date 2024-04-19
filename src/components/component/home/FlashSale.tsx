import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Product } from "@/type";
import { Heart, Zap } from "lucide-react";
import Link from "next/link";

const FlashSale = ({ flashSaleProducts }: { flashSaleProducts: Product[] }) => {
  return (
    <section className="my-20">
      <Container>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold flex items-center justify-center">
            Flash Sale <Zap className="size-6 ml-2 font-bold text-red-500" />
          </h2>

          <Link href="/flash-sale">
            <Button>View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 my-10">
          {flashSaleProducts?.slice(0, 4)?.map((product) => (
            <div
              key={product._id}
              className="rounded-md border flex flex-col justify-between"
            >
              <div className="flex justify-center  relative">
                <div className="flex justify-between items-center left-4 right-4 top-4 absolute">
                  <div className="flex items-center">
                    <Heart className=" hover:fill-red-500 stroke-red-500 stroke-2 fill-transparent w-[20px] md:w-[30px]" />
                  </div>
                  <button className="bg-primary text-xs duration-200 text-white font-medium px-3 py-1 rounded-xl">
                    30% off
                  </button>
                </div>
                <div>
                  <Image
                    className="rounded-lg bg-black/40 md:my-2 h-40"
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
                <Link href={`/flash-sale/${product._id}`}>
                  <Button className="w-full">View Details</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FlashSale;
