import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Product } from "@/type";
import { Heart, Star } from "lucide-react";
import Link from "next/link";

const MoreProducts = ({ product }: { product: Product[] }) => {
  return (
    <section className="mb-10 mt-5">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-xl font-bold flex items-center justify-center mb-5 md:mb-0">
          You may also like
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 my-10">
        {product?.slice(0, 4)?.map((item) => (
          <div
            key={item._id}
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
                  src={item?.images?.cover}
                  alt={item.name}
                  width={250}
                  height={100}
                />
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-center text-sm font-semibold">
                {item.name.length > 30
                  ? item.name.slice(0, 26) + "..."
                  : item.name}
              </h2>
            </div>
            <div className="px-4 pb-4">
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
                <Button className="w-full text-sm">View Details</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreProducts;
