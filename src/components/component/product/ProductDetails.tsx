import Image from "next/image";

const ProductDetails = () => {
  return (
    <div className="col-span-4 pt-8 lg:pt-0">
      <div className="mb-7 border-b border-gray-300 pb-7">
        <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
          Nike Air Max 95 By You
        </h2>
        <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
          The Nike Air Max 95 By You lets you take inspiration from the human
          body itself. The midsole represents the spine, graduated panels are
          the muscles, the lace loops are the shoe&apos;s ribs and the mesh in
          the upper is the skin.
        </p>
        <div className="mt-5 flex items-center ">
          <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
            $40.00
          </div>
          <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
            $50.00
          </span>
        </div>
      </div>
      
      <div className="py-6 ">
        <ul className="space-y-5 pb-1 text-sm">
          <li>
            <span className="text-heading inline-block pr-2 font-semibold">
              SKU:
            </span>
            N/A
          </li>
          <li>
            <span className="text-heading inline-block pr-2 font-semibold">
              Category:
            </span>
            <a
              className="hover:text-heading transition hover:underline"
              href="#"
            >
              kids
            </a>
          </li>
          <li className="productTags">
            <span className="text-heading inline-block pr-2 font-semibold">
              Tags:
            </span>
            <a
              className="hover:text-heading inline-block pr-1.5 transition last:pr-0 hover:underline"
              href="#"
            >
              Sneakers
            </a>
          </li>
        </ul>
      </div>
      <div className="shadow-sm ">
        <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
          <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
            Product Details
          </h2>
          <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
            <div className="bg-heading h-0.5 w-full rounded-sm" />
            <div className="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out" />
          </div>
        </header>
        <div>
          <div className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
            Our Customer Experience Team is available 7 days a week and we offer
            2 ways to get in contact.Email and Chat . We try to reply quickly,
            so you need not to wait too long for a response!.
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductDetails;
