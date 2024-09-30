import Image from "next/image";

const OrderOverview = () => {
  return (
    <div>
      <p className="text-xl font-medium">Order Summary</p>
      <div className="mt-8 space-y-3 rounded-lg border px-2 py-4 sm:px-6">
        <div className="flex  rounded-lg">
          <Image
            className="rounded-lg bg-black/40 md:my-2 h-24"
            src="https://www.seventhgeneration.ca/sk-eu/content/dam/brands/seventh_generation/global_use/1638061-22829-8-9-svg-25oz-citrusginger-dishliq-r4-front-copy.jpg.rendition.767.767.jpg"
            alt="product.name"
            width={100}
            height={100}
          />
          <div className="flex w-full flex-col px-4 lg:py-4">
            <span className="font-semibold text-sm">
              Nike Air Max Pro 8888 - Super Light
            </span>
            <p className="text-sm font-bold">$138.99</p>
          </div>
        </div>
        <div className="flex  rounded-lg">
          <Image
            className="rounded-lg bg-black/40 md:my-2 h-24"
            src="https://www.seventhgeneration.ca/sk-eu/content/dam/brands/seventh_generation/global_use/1638061-22829-8-9-svg-25oz-citrusginger-dishliq-r4-front-copy.jpg.rendition.767.767.jpg"
            alt="product.name"
            width={100}
            height={100}
          />
          <div className="flex w-full flex-col px-4 lg:py-4">
            <span className="font-semibold text-sm">
              Nike Air Max Pro 8888 - Super Light
            </span>
            <p className="text-sm font-bold">$138.99</p>
          </div>
        </div>
      </div>

      <p className="mt-8 text-lg font-medium">Delivery Method</p>
      <form className="mt-5 grid gap-6">
        <div className="relative">
          <input
            className="peer hidden"
            id="radio_1"
            type="radio"
            name="radio"
            checked
          />
          <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 hidden lg:block"></span>
          <label className="peer-checked:border-2   flex cursor-pointer select-none rounded-lg border  p-4">
            <Image
              className="rounded-lg bg-black/40 md:my-2 h-24"
              src="https://www.seventhgeneration.ca/sk-eu/content/dam/brands/seventh_generation/global_use/1638061-22829-8-9-svg-25oz-citrusginger-dishliq-r4-front-copy.jpg.rendition.767.767.jpg"
              alt="product.name"
              width={100}
              height={100}
            />
            <div className="ml-5">
              <span className="mt-2 font-semibold">Fedex Delivery</span>
              <p className="text-sm leading-6">
                Delivery: 2-4 Days
              </p>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default OrderOverview;
