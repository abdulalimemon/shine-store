import Footer from "@/components/layout/main/Footer";
import Navbar from "@/components/layout/main/Navbar";
import HeroSlider from "@/components/component/home/HeroSlider";
import FlashSale from "@/components/component/home/FlashSale";
import { Product } from "@/type";
import FlashSaleBreadcrumb from "@/components/component/flashSale/FlashSaleBreadcrumb";
import FlashSaleProduct from "@/components/component/flashSale/FlashSaleProduct";


const FlashSalePage = async() => {
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
    <FlashSaleBreadcrumb/>
    <FlashSaleProduct flashSaleProducts={flashSaleProducts} />
    <Footer />
  </main>
 );
};

export default FlashSalePage;