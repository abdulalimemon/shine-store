import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Minus, Trash2, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const CartComponent = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col space-y-4 w-full lg:w-2/3 border shadow-md rounded-md">
            <h2 className="text-xl font-semibold border-b p-5">My Cart (1)</h2>
            <ul className="flex flex-col px-5">
              <li className="py-3">
                <div className="flex w-full space-x-2">
                  <Image
                    className="rounded-lg bg-black/40 md:my-2 h-24"
                    src="https://www.seventhgeneration.ca/sk-eu/content/dam/brands/seventh_generation/global_use/1638061-22829-8-9-svg-25oz-citrusginger-dishliq-r4-front-copy.jpg.rendition.767.767.jpg"
                    alt="product.name"
                    width={100}
                    height={100}
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex flex-col md:flex-row px-3 justify-between w-full space-y-2">
                      <div className="space-y-1">
                        <h3 className="font-semibold sm:pr-8">
                          Polaroid camera
                        </h3>
                        <p className="font-semibold">$59.99</p>
                      </div>
                      <div className="md:text-right flex flex-wrap gap-5">
                        <div className="flex border">
                          <button className="p-2 flex items-center justify-center">
                            <Minus />
                          </button>
                          <div className="p-2 px-4 border">11</div>
                          <button className="p-2 flex items-center justify-center">
                            <Plus />
                          </button>
                        </div>
                        <div className="flex text-sm">
                          <button
                            type="button"
                            className="flex items-center px-2 py-1 pl-0 space-x-1"
                          >
                            <Trash2 />
                            <span className="hidden lg:block">Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex w-full space-x-2">
                  <Image
                    className="rounded-lg bg-black/40 md:my-2 h-24"
                    src="https://www.seventhgeneration.ca/sk-eu/content/dam/brands/seventh_generation/global_use/1638061-22829-8-9-svg-25oz-citrusginger-dishliq-r4-front-copy.jpg.rendition.767.767.jpg"
                    alt="product.name"
                    width={100}
                    height={100}
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex flex-col md:flex-row px-3 justify-between w-full space-y-2">
                      <div className="space-y-1">
                        <h3 className="font-semibold sm:pr-8">
                          Polaroid camera
                        </h3>
                        <p className="font-semibold">$59.99</p>
                      </div>
                      <div className="md:text-right flex gap-5 flex-wrap">
                        <div className="flex border">
                          <button className="p-2 flex items-center justify-center">
                            <Minus />
                          </button>
                          <div className="p-2 px-4 border">11</div>
                          <button className="p-2 flex items-center justify-center">
                            <Plus />
                          </button>
                        </div>
                        <div className="flex text-sm">
                          <button
                            type="button"
                            className="flex items-center px-2 py-1 pl-0 space-x-1"
                          >
                            <Trash2 />
                            <span className="hidden lg:block">Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4 border shadow-md rounded-md w-full lg:w-1/3">
            <h2 className="text-xl font-semibold p-5 border-b">
              Order Summary
            </h2>
            <ul className="flex flex-col pt-4 space-y-3 p-5">
              <h3 className="font-medium text-lg">Cart Subtotal</h3>
              <li className="flex items-start justify-between">
                <h3>Subtotal (2 items)</h3>
                <div className="text-right">
                  <span className="block">$8.25</span>
                </div>
              </li>
              <li className="flex items-start justify-between">
                <h3>Shipping</h3>
                <div className="text-right">
                  <span className="block">$1</span>
                </div>
              </li>
              <li className="flex items-start justify-between border-t py-3">
                <h3 className="font-semibold">Total</h3>
                <div className="text-right">
                  <span className="block">$10</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5 py-10">
          <div className="flex flex-col items-end w-full lg:w-2/3">
            <div>
              <Link href="/checkout">
                <Button className="px-10 py-7">Proceed to checkout</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CartComponent;
