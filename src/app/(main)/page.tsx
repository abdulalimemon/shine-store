import HeroSlider from "@/components/component/home/HeroSlider";
import FlashSale from "@/components/component/home/FlashSale";
import { Product } from "@/type";
import TrendingProducts from "@/components/component/home/TrendingProducts";
import Category from "@/components/component/home/Category";
import Newsletter from "@/components/component/home/Newsletter";
import OfferInfo from "@/components/component/home/OfferInfo";

const HomePage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/product`, {
    next: { revalidate: 30 },
  });
  const data = await res.json();
  const flashSaleProducts: Product[] = data.filter(
    (product: Product) => product.flashSale
  );

  const sortedProducts = data
    .map((product: Product) => ({
      _id: product._id,
      name: product.name,
      brand: product.brand,
      category: product.category,
      price: product.price,
      rating: String(parseFloat(product.rating)),
      description: product.description,
      flashSale: product.flashSale,
      images: product.images,
    }))
    .sort(
      (a: Product, b: Product) => parseFloat(b.rating) - parseFloat(a.rating)
    );

  return (
    <main>
      <HeroSlider />
      <FlashSale flashSaleProducts={flashSaleProducts} />
      <TrendingProducts sortedProducts={sortedProducts} />
      <Category />
      <OfferInfo />
      <Newsletter />
    </main>
  );
};

export default HomePage;
