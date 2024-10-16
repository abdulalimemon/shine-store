import Container from "@/components/layout/Container";
import { Clock, Leaf, Truck } from "lucide-react";
import Image from "next/image";

const AboutHeroSection = () => {
  return (
    <section className="pt-16 pb-10">
      <Container>
        <div>
          <div className="grid items-stretch grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
            <div className="h-full pr-12 lg:order-2 lg:mb-40">
              <div className="relative h-full lg:h-auto">
                <div className="absolute w-full h-full -mb-10 overflow-hidden bg-gradient-to-r from-fuchsia-700 to-blue-900 top-10 left-10 xl:left-16 lg:top-0 lg:scale-y-105 lg:origin-top"></div>
                <div className="relative lg:-top-10">
                  <Image
                    className="w-full"
                    src="/about-us-pic.jpg"
                    alt="Image"
                    width={400}
                    height={100}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-start py-10 lg:order-1 sm:py-16 lg:py-4">
              <div>
                <p className="text-sm font-semibold">Why Should your choose?</p>
                <h2 className="mt-8 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl lg:leading-tight">
                  Your Source for Fresh, Organic Essentials
                </h2>
                <p className="text-sm lg:text-base mt-9">
                  At Shine Store, we are passionate about bringing you the
                  finest organic foods, carefully selected for their freshness
                  and quality. From everyday pantry staples to gourmet finds, we
                  deliver wholesome, sustainably sourced products that make
                  healthy living easier and more enjoyable.
                </p>
                <p className="mt-6 text-sm lg:text-base">
                  Although we’re a newer brand, we’ve quickly grown into a
                  trusted source for all things organic. With over 100 new
                  products added every month, Shine Store is constantly evolving
                  to meet your needs. Whether you&apos;re restocking your
                  kitchen or exploring the latest health trends, we’ve got you
                  covered with the freshest options delivered straight to your
                  doorstep.
                </p>
                <div>
                  <ul className="px-5 py-6 space-y-3">
                    <li className="flex items-center space-x-4">
                      <Truck className="size-6" />
                      <div>
                        <h3 className="text-base font-medium">
                          Free delivery on all orders
                        </h3>
                      </div>
                    </li>

                    <li className="flex items-center space-x-4">
                      <Leaf className="size-6" />
                      <div>
                        <h3 className="text-base font-medium">
                          Fresh, organic products you can trust
                        </h3>
                      </div>
                    </li>

                    <li className="flex items-center space-x-4">
                      <Clock className="size-6" />
                      <div>
                        <h3 className="text-base font-medium">
                          Seamless shopping experience, 24/7
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHeroSection;
