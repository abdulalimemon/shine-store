import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MyOrdersCard = ({ view }: { view: number }) => {
  return (
    <>
      <div
        className={`grid bg-slate-200 dark:bg-slate-900 rounded-md ${
          view === 1 ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        <div className="p-1">
          <Image
            className="rounded-lg bg-black/40 h-60 w-full"
            src="https://shine-store.vercel.app/_next/image?url=https%3A%2F%2Fimages.othoba.com%2Fimages%2Fthumbs%2F0048410_glitter-glass-cleaner-500ml.jpeg&w=256&q=75"
            alt="product name"
            width={250}
            height={100}
          />
        </div>
        <div className={`flex  ${
          view === 1 ? "items-center justify-center md:justify-start" : "items-center justify-center"
        }`}>
          <div className="space-y-2 p-4">
            <h2 className="text-lg">
              Delivere{" "}
              <span className="py-1 px-2 bg-red-500 text-white rounded-md text-xs mx-2">
                Pending
              </span>
            </h2>
            <h2 className="text-sm font-semibold">
              <Link href={`/products/`} className="w-full">
                Product Name
              </Link>
            </h2>
            <p className="block text-sm font-semibold">
              {/* ${product.price} */} Price: 20$
            </p>
            <p className="text-sm font-semibold flex">
              {/* {product.rating}{" "} */}Rating : 4
              <span>
                <Star className="size-5 fill-yellow-400 text-yellow-400 ml-1" />
              </span>
            </p>
            <div className="flex gap-5 pt-3">
              <Link href={`/products/`}>
                <Button className="bg-[#265450] hover:bg-[#265450]/90 text-white">
                  Order History
                </Button>
              </Link>
              <Link href={`/products/`}>
                <Button className="bg-[#265450] hover:bg-[#265450]/90 text-white">
                  Buy Again
                </Button>
              </Link>
            </div>
          </div>
          <div className="px-4 pb-4"></div>
        </div>
      </div>
    </>
  );
};

export default MyOrdersCard;
