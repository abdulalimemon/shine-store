import Link from "next/link";
import { Home, ShoppingCart } from "lucide-react";
import { Product } from "@/type";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Heart } from "lucide-react";

const AllProductPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/product`, {
    next: { revalidate: 30 },
  });
  const data = await res.json();
  const flashSaleProducts: Product[] = data.filter(
    (product: Product) => product.flashSale
  );
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 pt-5">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                All Product
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold md:text-2xl">
              All Cleaning Supplies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
            {data?.map((product: Product) => (
              <div
                key={product._id}
                className="rounded-md border flex flex-col justify-between"
              >
                <div className="flex justify-center  relative">
                  <div className="flex justify-between items-center left-4 right-4 top-4 absolute">
                    <div className="flex items-center">
                      <Heart className=" hover:fill-red-500 stroke-red-500 stroke-2 fill-transparent  w-[30px]" />
                    </div>
                    <button className="bg-[#0095FF] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">
                      30% off
                    </button>
                  </div>
                  <Image
                    className="rounded-lg bg-black/40 w-full h-full my-4"
                    src={product?.images?.cover}
                    alt={product.name}
                    width={250}
                    height={100}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-center text-base md:text-lg font-semibold">
                    {product.name}
                  </h2>
                </div>
                <div className="p-4">
                  <div className="mb-3">
                    <p className="block text-sm font-semibold text-center">
                      ${product.price}
                    </p>
                  </div>

                  <Link
                    href={`/cleaning-supplies/${product._id}`}
                    className="text-accent"
                  >
                    <Button className="w-full">View Details</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllProductPage;
