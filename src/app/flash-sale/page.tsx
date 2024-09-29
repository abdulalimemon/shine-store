import { Product } from "@/type";
import FlashSaleBreadcrumb from "@/components/component/flashSale/FlashSaleBreadcrumb";
import FlashSaleProduct from "@/components/component/flashSale/FlashSaleProduct";

const FlashSalePage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/product`, {
    cache: "no-store",
  });
  const data = await res.json();
  const flashSaleProducts: Product[] = data.filter(
    (product: Product) => product.flashSale
  );

  return (
    <main>
      <FlashSaleBreadcrumb />
      <FlashSaleProduct flashSaleProducts={flashSaleProducts} />
    </main>
  );
};

export default FlashSalePage;
