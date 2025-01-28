import WishlistProductCard from "./wishlistProductCard";
import { Product } from "@/type";

const WishlistProduct = ({products}:{products : Product[]}) => {
  return (
    <div className="border rounded-md p-5">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">My Wishlist</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {products.map((product) => (
          <div
          key={product._id}
          className="rounded-md border flex flex-col justify-between"
        >
          <WishlistProductCard product={product} />
        </div>
          
        ))}
      </div>
    </div>
  );
};

export default WishlistProduct;
