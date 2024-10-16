import { Product } from "@/type";
import FlashSaleBreadcrumb from "@/app/(main)/flash-sale/FlashSaleBreadcrumb";
import FlashSaleProduct from "@/app/(main)/flash-sale/FlashSaleProduct";

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
