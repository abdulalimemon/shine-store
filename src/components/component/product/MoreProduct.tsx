import { Product } from "@/type";
import ProductCard from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MoreProducts = ({ products }: { products: Product[] }) => {
  return (
    <section className="mb-10 mt-2">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-xl font-bold flex items-center justify-center mb-5 md:mb-0">
          You may also like
        </h2>
      </div>

      <Carousel>
        <CarouselContent className="my-10 gap-5">
          {products?.slice(0, 4)?.map((product) => (
            <CarouselItem
              key={product._id}
              className="rounded-md border flex flex-col justify-between md:basis-1/3 lg:basis-1/4"
            >
              <ProductCard product={product} link="products" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default MoreProducts;
