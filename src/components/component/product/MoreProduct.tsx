import { Product } from "@/type";
import ProductCard from "./ProductCard";

const MoreProducts = ({ products }: { products: Product[] }) => {
  return (
    <section className="mb-10 mt-2">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-xl font-bold flex items-center justify-center mb-5 md:mb-0">
          You may also like
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 my-10">
        {products?.slice(0, 4)?.map((product) => (
          <div
            key={product._id}
            className="rounded-md border flex flex-col justify-between"
          >
            <ProductCard product={product} link="products" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreProducts;
