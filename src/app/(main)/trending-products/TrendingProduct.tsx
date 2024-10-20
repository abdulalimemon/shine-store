import Container from "@/components/layout/Container";
import { Product } from "@/type";
import ProductCard from "@/components/component/product/ProductCard";

const TrendingProduct = ({ sortedProducts }: { sortedProducts: Product[] }) => {
  return (
    <section className="my-20">
      <Container>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Trending Products</h2>
        </div>
        <div>
          <h2 className="font-semibold my-5">
            Check Out the Exclusive {sortedProducts.length} Trending Products!
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 my-10">
          {sortedProducts?.map((product) => (
            <div
              key={product._id}
              className="rounded-md border flex flex-col justify-between"
            >
               <ProductCard product={product} link="trending-products" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrendingProduct;