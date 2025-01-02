import { Product } from "@/type";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddProductToCart from "./AddProductToCart";

const ProductCard = ({ product, link }: { product: Product; link: string }) => {
  return (
    <>
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
          <Link href={`/${link}/${product._id}`} className="w-full">
            {product.name.length > 30
              ? product.name.slice(0, 26) + "..."
              : product.name}
          </Link>
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
        <div className="flex gap-5 justify-center items-center">
          <Link href={`/${link}/${product._id}`} className="w-full">
            <button className="product-btn">
              View Details <ArrowRight className="size-5 ml-2" />
            </button>
          </Link>
          <AddProductToCart product={product} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;