import Container from "@/components/layout/Container";
import ProductSidebar from "./ProductSidebar";
import ProductGrid from "./ProductGrid";
import { Product } from "@/type";

const NewProduct = ({ data }: { data: Product[] }) => {
  return (
    <Container>
      <ProductSidebar />
      <ProductGrid data={data} />
    </Container>
  );
};

export default NewProduct;
