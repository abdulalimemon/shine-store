import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, AtSign, Lock } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="pt-10 pb-10">
      <Container>
        <div className="px-5 lg:px-10 py-16 newsLetterBg rounded-md text-white">
          <div className="max-w-2xl mx-auto text-left sm:text-center">
            <h2 className="text-3xl text-center font-bold leading-tight sm:text-4xl lg:text-5xl text-white">
              Subscribe to Our Newsletter
            </h2>
            <p className="max-w-xl text-sm text-center mx-auto mt-4 lg:text-base leading-relaxed text-white">
              Get top deals, latest trends, and more.
            </p>
          </div>

          <form className="max-w-xl mx-auto mt-10">
            <div className="sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-black sm:focus-within:ring-1 sm:focus-within:ring-black">
              <div className="flex flex-col items-start sm:flex-row sm:justify-center">
                <div className="flex-1 w-full min-w-0">
                  <div className="relative">
                    <label className="sr-only"></label>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <AtSign className="size-5 text-black" />
                    </div>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email address"
                      className="block w-full py-4 pl-10 pr-4 text-base transition-all duration-200 border-transparent rounded-full focus:border-transparent focus:ring-0 bg-white text-black"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="inline-flex mx-auto bg-black items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200  border border-transparent rounded-full sm:ml-4 sm:mt-0 sm:w-auto"
                >
                  Subscribe
                  <ArrowRight className="size-5 ml-3 -mr-1" />
                </Button>
              </div>
            </div>
          </form>

          <div className="flex items-center justify-start mt-5 sm:justify-center sm:px-0">
            <Lock className="size-5" />
            <span className="ml-3 text-xs lg:text-sm text-white">
              Your data is complely secured with us. We don’t share with anyone.{" "}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
