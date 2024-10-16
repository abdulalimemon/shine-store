import Container from "@/components/layout/Container";
import Image from "next/image";
import OrderOverview from "./OrderOverview";
import PaymentDetails from "./PaymentDetails";

const CheckOutComponent = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10">
          <OrderOverview />
          <PaymentDetails />
        </div>
      </Container>
    </section>
  );
};

export default CheckOutComponent;
