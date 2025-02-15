import { Product } from "@/type";
import AllProduct from "./AllProduct";
import AllProductsBreadcrumb from "./AllProductsBreadcrumb";
import NewProduct from "./NewProduct";
// import TestProduct from "./TestProduct";

const AllProductPage = async ({ searchParams }: { searchParams: string }) => {
  const res = await fetch(`${process.env.BACKEND_URL}/product`, {
    next: { revalidate: 30 },
  });
  const data = await res.json();
  const flashSaleProducts: Product[] = data.filter(
    (product: Product) => product.flashSale
  );

  return (
    <>
      <AllProductsBreadcrumb />
      {/* <AllProduct data={data} /> */}
      {/* <TestProduct/> */}
      <div className="pt-5">
      <NewProduct data={data} />
      </div>

    </>
  );
};

export default AllProductPage;
