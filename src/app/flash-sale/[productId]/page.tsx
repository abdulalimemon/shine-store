import MoreProducts from "@/components/component/product/MoreProduct";
import ProductBreadcrumb from "@/components/component/product/ProductBreadcrumb";
import ProductDetails from "@/components/component/product/ProductDetails";
import ProductImageSlider from "@/components/component/product/ProductImageSlider";
import { Product } from "@/type";

interface ProductId {
  params: {
    productId: string;
  };
}

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/product`);
  const products = await res.json();
  return products.slice(0, 5).map((product: Product) => ({
    productId: product._id,
  }));
};

const ProductPage = async ({ params }: ProductId) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/product/${params.productId}`
  );
  const product = await res.json();

  const dynamicLink = {
    name: "Flash Sale",
    url: "flash-sale",
  };

  const moreProduct = await fetch(`${process.env.BACKEND_URL}/product`);

  const moreProductdata = await moreProduct.json();

  const category = moreProductdata.filter((moreProduct: Product) => 
    moreProduct.category === product.category
  );

  console.log(moreProductdata);
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
      <ProductBreadcrumb name={product.name} dynamicLink={dynamicLink} />
      <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
        <div className="col-span-5 pt-8 lg:pt-0">
          <ProductImageSlider images={product.images.details} />
        </div>
        <ProductDetails product={product} />
      </div>
      <MoreProducts product={category} />
    </div>
  );
};

export default ProductPage;
