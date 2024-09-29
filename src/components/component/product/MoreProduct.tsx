import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Product } from "@/type";
import { Heart, Zap, Star } from "lucide-react";
import Link from "next/link";

const MoreProducts = ({ product }: { product: Product[] }) => {
  return (
    <section className="my-20">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-xl font-bold flex items-center justify-center mb-5 md:mb-0">
          You may also like
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 my-10">
          {product?.slice(0,4)?.map((item) => (
            <div
              key={item._id}
              className="rounded-md border flex flex-col justify-between"
            >
              <div className="flex justify-center  relative">
                <div className="flex justify-between items-center left-4 right-4 top-4 absolute">
                  <div className="flex items-center">
                    <Heart className=" hover:fill-red-500 stroke-red-500 stroke-2 fill-transparent  w-[20px] md:w-[30px]" />
                  </div>
                  <button className="bg-primary dark:bg-slate-100 dark:text-black  duration-200 text-white text-xs font-medium px-3 py-1 rounded-xl">
                    30% off
                  </button>
                </div>
                <div>
                  <Image
                    className="rounded-lg bg-black/40 md:my-2 h-40"
                    src={item?.images?.cover}
                    alt={item.name}
                    width={250}
                    height={100}
                  />
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-center text-base font-semibold">
                  {item.name}
                </h2>
              </div>
              <div className="p-4">
                <div className="mb-3 flex justify-between items-center">
                  <p className="block text-sm font-semibold text-center">
                    ${item.price}
                  </p>
                  <p className="text-sm font-semibold text-center flex justify-center items-center">
                    {item.rating}{" "}
                    <span>
                      <Star className="size-6 fill-yellow-400 text-yellow-400 ml-1" />
                    </span>
                  </p>
                </div>
                <Link href={`/flash-sale/${item._id}`}>
                  <Button className="w-full text-sm ">View Details</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MoreProducts;
