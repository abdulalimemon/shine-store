import { Product } from "@/type";
import TrendingProductsBreadcrumb from "@/components/component/trendingProducts/TrendingProductsBreadcrumb";
import TrendingProduct from "@/components/component/trendingProducts/TrendingProduct";

const TrendingProductsPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/product`, {
    cache: "no-store",
  });
  const data = await res.json();
  const sortedProducts = data.map((product: Product)  => ({
    _id: product._id,
    name: product.name,
    brand: product.brand,
    category: product.category,
    price: product.price,
    rating: String(parseFloat(product.rating)),
    description: product.description,
    flashSale: product.flashSale,
    images: product.images
  })).sort((a : Product, b: Product) => parseFloat(b.rating) - parseFloat(a.rating));

  return (
    <main>
      <TrendingProductsBreadcrumb />
      <TrendingProduct sortedProducts={sortedProducts} />
    </main>
  );
};

export default TrendingProductsPage;
