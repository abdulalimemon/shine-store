"use client";

import { toast } from "@/components/ui/use-toast";
import { addToCart } from "@/redux/feature/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ShoppingCart } from "lucide-react";

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
      <ShoppingCart
        className="size-6 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          handleAddToCart(product);
        }}
      />
    </>
  );
};

export default AddProductToCart;
