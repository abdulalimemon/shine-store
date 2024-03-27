import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Product } from "@/type";
import { Heart } from "lucide-react";


const TrendingProduct = ({ sortedProducts }: { sortedProducts: Product[] }) => {
 return (
    <section className="my-20">
    <Container>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Trending Products</h2>
          
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
        {sortedProducts?.map((product) => (
          <div key={product._id} className="rounded-md border flex flex-col justify-between">
          <div className="flex justify-center  relative">
            <div className="flex justify-between items-center left-4 right-4 top-4 absolute">
              <div className="flex items-center">
                <Heart className=" hover:fill-red-500 stroke-red-500 stroke-2 fill-transparent  w-[30px]" />
              </div>
              <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">
                30% off
              </button>
            </div>
            <Image
              className="rounded-lg bg-black/40 w-full h-full my-4"
              src={product?.images?.cover}
              alt={product.name}
              width={250}
              height={100}
            />
          </div>
          <div className="p-4">
            <h2 className="text-center text-base md:text-lg font-semibold">
              {product.name}
            </h2>
          </div>
          <div className="p-4">
          <div className="mb-3">
              <p className="block text-sm font-semibold text-center">{product.rating} star</p>
            </div>
            <Button className="w-full">View Details</Button>
          </div>
        </div>
        ))}
      </div>
    </Container>
  </section>
 );
};

export default TrendingProduct;