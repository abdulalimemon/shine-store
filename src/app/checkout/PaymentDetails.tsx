import { Input } from "@/components/ui/input";
import { Mail, CreditCard, SquareUserRound } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PaymentDetails = () => {
  return (
    <div>
      <p className="text-xl font-medium">Customer Information</p>
      <div className="">
        <label className="mt-4 mb-2 block text-sm font-medium">Email</label>
        <div className="relative">
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="your.email@gmail.com"
            className="w-full px-2 py-3 pl-11 text-sm"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <Mail />
          </div>
        </div>
        <label className="mt-4 mb-2 block text-sm font-medium">Full Name</label>
        <div className="relative">
          <Input
            type="text"
            id="card-holder"
            name="card-holder"
            className="w-full px-2 py-3 pl-11 text-sm"
            placeholder="Your full name here"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
            <SquareUserRound />
          </div>
        </div>
        <label className="mt-4 mb-2 block text-sm font-medium">
          Card Details
        </label>
        <div className="flex gap-1">
          <div className="relative w-7/12 flex-shrink-0">
            <Input
              type="text"
              id="card-no"
              name="card-no"
              className="w-full px-2 py-3 pl-11 text-sm"
              placeholder="xxxx-xxxx-xxxx-xxxx"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <CreditCard />
            </div>
          </div>
          <Input
            type="text"
            name="credit-expiry"
            className="w-full px-2 py-3 text-sm"
            placeholder="MM/YY"
          />
          <Input
            type="text"
            name="credit-cvc"
            className="w-full px-2 py-3 text-sm"
            placeholder="CVC"
          />
        </div>
        <label className="mt-4 mb-2 block text-sm font-medium">
          Billing Address
        </label>
        <div className="flex flex-col gap-1 sm:flex-row">
          <div className="relative flex-shrink-0 sm:w-7/12">
            <Input
              type="text"
              id="billing-address"
              name="billing-address"
              className="w-full px-2 py-3 text-sm"
              placeholder="Street Address"
            />
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>billing-state</SelectLabel>
                <SelectItem value="State">State</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Input type="text" name="billing-zip" placeholder="ZIP" />
        </div>

        <div className="mt-6 border-t border-b py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Subtotal</p>
            <p className="font-semibold">$399.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Shipping</p>
            <p className="font-semibold">$8.00</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-medium">Total</p>
          <p className="text-2xl font-semibold">$408.00</p>
        </div>
      </div>
      <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
        Place Order
      </button>
    </div>
  );
};

export default PaymentDetails;
