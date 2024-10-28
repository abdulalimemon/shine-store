"use client";

import { toast } from "@/components/ui/use-toast";
import { addToCart } from "@/redux/feature/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ShoppingCart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AddProductToCart = ({ product }: any) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    toast({
      title: product?.name,
      description: "Added to the cart successfully.",
    });
  };
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <ShoppingCart
              className="size-6 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product);
              }}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to cart</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default AddProductToCart;
