import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Product } from "@/type";
import { Zap, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

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
            <Button className="bg-[#3d5940] text-white hover:bg-[#3d5940]/90 rounded-full flex items-center justify-center">
              View All <ArrowRight className="size-5 ml-2" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 my-10">
          {flashSaleProducts?.slice(0, 4)?.map((product) => (
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
                      <Star className="size-5 fill-yellow-400 text-yellow-400 ml-1" />
                    </span>
                  </p>
                </div>
                <Link href={`/flash-sale/${product._id}`}>
                  <Button className="w-full text-sm bg-[#265450] text-white hover:bg-[#265450]/90 rounded-full">
                    View Details
                  </Button>
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
