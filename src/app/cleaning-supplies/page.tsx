import { Product } from "@/type";
import AllProduct from "@/components/component/all-product/AllProduct";

const AllProductPage = async ({searchParams} : {searchParams: string}) => {
  const res = await fetch(`${process.env.BACKEND_URL}/product`, {
    next: { revalidate: 30 },
  });
  const data = await res.json();
  const flashSaleProducts: Product[] = data.filter(
    (product: Product) => product.flashSale
  );

  console.log(searchParams)
  return (
    <>
    <AllProduct data={data} searchParams={searchParams} />
    </>
  );
};

export default AllProductPage;
