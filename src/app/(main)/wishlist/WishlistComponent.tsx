import WishlistProductCard from "@/app/(withUser)/user/wishlist/wishlistProductCard";
import Container from "@/components/layout/Container";
import { Product } from "@/type";

const WishlistComponent = ({ products }: { products: Product[] }) => {
  return (
    <div className="my-10">
      <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5">
        {products.map((product) => (
          <div
            key={product._id}
            className="rounded-md border flex flex-col justify-between"
          >
            <WishlistProductCard product={product} />
          </div>
        ))}
      </div>
      </Container>
    </div>
  );
};

export default WishlistComponent;
