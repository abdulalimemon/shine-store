import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

const categoryData = [
  {
    id: "1",
    name: "Dishwashing Items",
    URL: "/cleaning-supplies?category=Dishwashing Items",
    image: "https://example.com/dishwashing.jpg",
  },
  {
    id: "2",
    name: "Cleaning Tools",
    URL: "/cleaning-supplies?category=Cleaning Tools",
    image: "https://example.com/cleaning-tools.jpg",
  },
  {
    id: "3",
    name: "General Cleaning",
    URL: "/cleaning-supplies?category=General Cleaning",
    image: "https://example.com/general-cleaning.jpg",
  },
  {
    id: "4",
    name: "Fabric Care",
    URL: "/cleaning-supplies?category=Fabric Care",
    image: "https://example.com/fabric-care.jpg",
  },
  {
    id: "5",
    name: "Metal Cleaning",
    URL: "/cleaning-supplies?category=Metal Cleaning",
    image: "https://example.com/metal-cleaning.jpg",
  },
  {
    id: "6",
    name: "Floor Cleaning",
    URL: "/cleaning-supplies?category=Floor Cleaning",
    image: "https://example.com/floor-cleaning.jpg",
  },
];

const Category = () => {
  return (
    <section className="mb-20">
      <Container>
        <h2 className="text-2xl font-bold py-7">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categoryData.map((item) => (
            <div className="p-3 rounded-md shadow-md" key={item.id}>
              <Link href={`${item.URL}`}><Image
                src="https://source.unsplash.com/random/300x300/?1"
                alt={item.name}
                width={200}
                height={100}
                className="object-cover object-center w-full rounded-md"
              />
              <div className="mt-5 mb-2">
                <h2 className="text-base font-semibold">{item.name}</h2>
              </div>
            </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Category;
