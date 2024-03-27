import Footer from "@/components/layout/main/Footer";
import Navbar from "@/components/layout/main/Navbar";
import HeroSlider from "@/components/component/home/HeroSlider";
import FlashSale from "@/components/component/home/FlashSale";
import { Product } from "@/type";

const HomePage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/product`, {
    next: { revalidate: 30 },
  });
  const data = await res.json();
  const flashSaleProducts: Product[] = data.filter(
    (product : Product) => product.flashSale
  );
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <FlashSale flashSaleProducts={flashSaleProducts} />
      <Footer />
    </main>
  );
};

export default HomePage;
