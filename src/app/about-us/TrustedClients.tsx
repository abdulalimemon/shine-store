import Container from "@/components/layout/Container";
import { Calendar, ShoppingCart, Smile } from "lucide-react";
const clientsContent = [
  {
    id: 1,
    icon: <Calendar className="size-14 mb-4" />,
    title: "Years in Business",
    description:
      "Over 5 years of delivering quality organic products. Committed to sustainability and customer satisfaction.",
  },
  {
    id: 2,
    icon: <ShoppingCart className="size-14 mb-4" />,
    title: "Products Sold",
    description:
      "Over 1 million organic products sold. Join our community of health-conscious customers.",
  },
  {
    id: 3,
    icon: <Smile className="size-14 mb-4" />,
    title: "Happy Customers",
    description:
      "Thousands of satisfied customers trust us. Experience the Shine Store difference today!",
  },
];

const TrustedClients = () => {
  return (
    <section className="pb-10">
      <Container>
        <div>
          <h2 className="text-2xl lg:text-4xl text-center font-bold text">
            We are Trusted by Clients.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10">
          {clientsContent.map((item) => (
            <div
              className={`flex flex-col w-full p-6 border shadow rounded-lg`}
              key={item.id}
            >
              <div>{item.icon}</div>

              <h2 className="text-2xl font-semibold">
                {item.title}
              </h2>
              <p className="mt-4 mb-8 text-sm lg:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustedClients;
