import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Product } from "@/type";
import { Heart } from "lucide-react";

const FlashSale = ({ flashSaleProducts }: { flashSaleProducts: Product[] }) => {
  return (
    <section className="my-20">
      <Container>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Flash Sale</h2>
          <Button>View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {flashSaleProducts?.slice(0, 4)?.map((product) => (
            <div key={product._id} className="py-5 shadow-lg max-w-[350px] rounded-xl space-y-6 my-10 mx-auto flex flex-col justify-between">
              <div className="flex justify-center w-full h-48 lg:h-[280px] relative">
                <div className="flex justify-between items-center left-4 right-4 top-4 absolute">
                  <div className="flex items-center">
                    <Heart className="hover:fill-red-500 hover:stroke-red-500 stroke-2 fill-transparent stroke-white w-[30px]" />
                    
                  </div>
                  <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">
                    30% off
                  </button>
                </div>
                <Image
                  className="rounded-lg bg-black/40 w-full h-full"
                  src={product?.images?.cover}
                  alt={product.name}
                  width={250}
                  height={100}
                />
              </div>
              <div className="text-center w-[85%] mx-auto font-semibold space-y-2">
                <h6 className="text-sm md:text-base lg:text-lg">
                {product.name}
                </h6>
                <p className="text-gray-400 text-xs md:text-sm font-semibold">
                  ${product.price}
                </p>
              </div>
              <div className="px-5 flex items-center justify-center flex-wrap gap-6 text-sm md:text-base">
                <Button className="w-full">
                  Buy now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FlashSale;