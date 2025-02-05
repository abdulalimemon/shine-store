import Container from "@/components/layout/Container";
import ProductSidebar from "./ProductSidebar";
import ProductGrid from "./ProductGrid";
import { Product } from "@/type";

const NewProduct = ({ data }: { data: Product[] }) => {
  return (
    <Container>
      <div className="grid w-full min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="h-full">
        <ProductSidebar data={data} />
        </div>

        <div className="h-full">
        <ProductGrid data={data} />
        </div>
      </div>
    </Container>
  );
};

export default NewProduct;
