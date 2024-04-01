import ProductBreadcrumb from "@/components/component/product/ProductBreadcrumb";
import ProductDetails from "@/components/component/product/ProductDetails";
import ProductImageSlider from "@/components/component/product/ProductImageSlider";


const Page = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
      <ProductBreadcrumb />
      <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
        <div className="col-span-5 pt-8 lg:pt-0">
          <ProductImageSlider/>
        </div>
        <ProductDetails/>
      </div>
    </div>
  );
};

export default Page;
