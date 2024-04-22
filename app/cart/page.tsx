"use client";
import CartProducts from "../../components/CartProducts";
import { Button } from "../../components/ui/button";
import { useCart } from "../../lib/store/cart";

export default function Page() {
  const { cart } = useCart();
  let subtotal = 0;
  cart?.forEach((cartProduct) => {
    subtotal += cartProduct.quantity * cartProduct.products.price;
  });
  return (
    <>
      <div className="flex w-full md:p-5 border rounded-md flex-col gap-4">
        <h1 className="text-2xl md:text-3xl font-bold mx-auto md:mx-0 px-8 pt-4">Cart</h1>
        <p className="text-lg md:text-lg mx-auto md:mx-0 px-8">Your cart products</p>
        <CartProducts />
        <div className="p-5 flex flex-col items-center gap-5 md:self-end">
          <div className="p-3 w-60 sm:w-80 border rounded-md space-y-3">
            <p className="flex border-b pb-2 justify-between">
              <span className="font-semibold">Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </p>
            <p className="flex border-b pb-2 justify-between">
              <span className="font-semibold">Taxes:</span>
              <span>0</span>
            </p>
            <p className="flex border-b pb-2 justify-between">
              <span className="font-semibold">Shipping:</span>
              <span>Free</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="font-semibold">Grand Total:</span>
              <span className="font-bold text-lg md:text-xl">${subtotal.toFixed(2)}</span>
            </p>
          </div>
          <Button>Check out</Button>
        </div>
      </div>
    </>
  );
}
