"use client";
import React, { useState } from "react";
import { useCart, cartProduct } from "../lib/store/cart";
import { supabaseBrowser } from "../lib/supabase/browser";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Dialog, DialogClose } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { X } from "lucide-react";
import Image from "next/image";
import debounce from "debounce";

export default function CartProduct({
  cartProduct,
}: {
  cartProduct: cartProduct;
}) {
  const { updateCartProduct, deleteCartProduct } = useCart();
  const [quantity, setQuantity] = useState(cartProduct.quantity);
  const [quantityChanged, setQuantityChanged] = useState(false);
  const total = cartProduct.products.price * quantity;
  

  const handleQuantityChange = (e) => {
    const q = parseInt(e.currentTarget.value);
    if (q >= 1 && q <= 10) {
      setQuantity(q);
      setQuantityChanged(true);
    }
  };

  const handleConfirmQuantity = async () => {
    const supabase = supabaseBrowser();
    const newCartProduct = { ...cartProduct, quantity };
    updateCartProduct(newCartProduct);
    setQuantityChanged(false);
    const { error } = await supabase
      .from("cart")
      .update({ quantity })
      .eq("id", cartProduct.id);
    if (error) {
      toast.error(error.message);
    }
  };

  const handleCancel = async () => {
    const supabase = supabaseBrowser();
    deleteCartProduct(cartProduct);
    const { error } = await supabase.from("cart").delete().eq("id", cartProduct.id);
    if(error)
        toast.error(error.message);
  };

  return (
    <tr className="pb-4">
      <td className="w-60 md:w-96">
        <Link
          href={`/${cartProduct.products.id}/product`}
          className="mx-auto border rounded-md p-1 md:p-2 cursor-pointer flex flex-col md:flex-row items-center gap-1 md-gap-4"
        >
          <Image
            alt="Product Image"
            className="aspect-square object-contain h-[70px] w-[70px] md:h-[130px] md:w-[130px]"
            height={130}
            src={cartProduct.products.image_url}
            width={130}
          />
          <h2 className="line-clamp-2 text-sm md:text-base md:line-clamp-4">{cartProduct.products.title}</h2>
        </Link>
      </td>
      <td>
        <p className="mx-auto w-fit">${cartProduct.products.price}</p>
      </td>
      <td>
        <div className="flex flex-col items-center gap-2 mx-auto my-3">
          <Input
            onChange={(e) => handleQuantityChange(e)}
            min="1"
            max="10"
            value={quantity}
            className="p-1 w-10 md:w-20"
            type="number"
          />
          {
            quantityChanged && <Button onClick={() => handleConfirmQuantity()} >confirm</Button>
          }
        </div>
      </td>
      <td>
        <p className="mx-auto w-fit font-semibold">
          ${total.toFixed(2)}
        </p>
      </td>
      <td>
        <div className="mx-auto w-fit">
          <Dialog>
            <DialogTrigger className="p-1 border rounded-md"><X /></DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription className="py-2">
                  This action cannot be undone. This will delete
                  the product from your cart.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex flex-row justify-center md:justify-end gap-2">
                <DialogClose>
                    <Button onClick={() => handleCancel()}>Confirm</Button>
                </DialogClose>
                <DialogClose>
                    <Button variant="outline">cancel</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </td>
    </tr>
  );
}
