import Container from "@/components/layout/Container";
import Image from "next/image";
import freshProduct from "../../../../public/received.png";
import freeDelivery from "../../../../public/delivery.png";
import discounts from "../../../../public/discount.png";
import bestPrice from "../../../../public/best-price.png";

const OfferData = [
  {
    id: "1",
    name: "Every Fresh Products",
    icon: freshProduct,
  },
  {
    id: "2",
    name: "Free Delivery For Order Over $50",
    icon: freeDelivery,
  },
  {
    id: "3",
    name: "Daily Mega Discounts",
    icon: discounts,
  },
  {
    id: "4",
    name: "Best Price On The Market",
    icon: bestPrice,
  },
];

const OfferInfo = () => {
  return (
    <section className="pb-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {OfferData.map((item) => (
            <div
              className="px-3 py-5 rounded-md shadow-md border flex flex-col gap-1 items-center justify-center"
              key={item.id}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={100}
                height={100}
                className="object-cover object-center size-14 rounded-md"
              />
              <div>
                <h2 className="text-base text-center font-medium">
                  {item.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OfferInfo;
