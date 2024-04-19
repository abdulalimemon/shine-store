import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

const categoryData = [
  {
    id: "1",
    name: "Dishwashing Items",
    URL: "/cleaning-supplies?category=Dishwashing Items",
    image: "https://chaldn.com/_mpimage/dishwashing-supplies?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D83456&q=best&v=1",
  },
  {
    id: "2",
    name: "Cleaning Tools",
    URL: "/cleaning-supplies?category=Cleaning Tools",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Hu82VObdYtYqya-aY6k51sb8hnlrCQDiVFRzx4JRQ4Qr13nl4ZQ9Z7zFDSnsw7NcOO4&usqp=CAU",
  },
  {
    id: "3",
    name: "General Cleaning",
    URL: "/cleaning-supplies?category=General Cleaning",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXxsOZA86TIV0jaegN8CoXui_v9WjINaa7v0UQCN4EpiqWlan1BBuWE7Lcw6BKg_pg-4s&usqp=CAU",
  },
  {
    id: "4",
    name: "Fabric Care",
    URL: "/cleaning-supplies?category=Fabric Care",
    image: "https://4.imimg.com/data4/VD/KD/MY-3521651/fabric-care-500x500.jpg",
  },
  {
    id: "5",
    name: "Metal Cleaning",
    URL: "/cleaning-supplies?category=Metal Cleaning",
    image: "https://media.wd40.in/app/uploads/2021/07/01100548/CLEANING-EQUIPMENT-1-1.jpg.webp",
  },
  {
    id: "6",
    name: "Floor Cleaning",
    URL: "/cleaning-supplies?category=Floor Cleaning",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIGoex0lxMSdSl2Yfc02kC6Le1MoT1yqdJ1-u7jX3L4snaQml7GhThU2b4BPX2Vm3m9jM&usqp=CAU",
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
                src={item.image}
                alt={item.name}
                width={200}
                height={100}
                className="object-cover object-center w-full h-24 rounded-md"
              />
              <div className="mt-5 mb-2">
                <h2 className="text-base text-center font-semibold">{item.name}</h2>
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
