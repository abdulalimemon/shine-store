import { Product } from "@/type";
import { Star } from "lucide-react";

const ProductDetails = ({ product }: { product: Product }) => {
  const { name, description, price, rating, category, brand } = product;
  return (
    <div className="col-span-4 pt-8 lg:pt-0">
      <div className="mb-7 border-b border-gray-300 pb-7">
        <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
          {name}
        </h2>
        <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
          {description}
        </p>
        <div className="mt-5 flex items-center ">
          <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
            ${price}
          </div>
        </div>
      </div>

      <div className="py-6 ">
        <ul className="space-y-5 pb-1 text-sm">
          <li>
            <span className="text-heading pr-2 font-semibold flex items-center">
              Rating:{" "}
              <span className="flex ml-2 items-center">
                {" "}
                {rating}{" "}
                <Star className="size-6 fill-yellow-400 text-yellow-400 ml-1" />
              </span>
            </span>
          </li>
          <li>
            <span className="text-heading inline-block pr-2 font-semibold">
              Category:
            </span>
            {category}
          </li>
          <li className="productTags">
            <span className="text-heading inline-block pr-2 font-semibold">
              brand:
            </span>
            {brand}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
