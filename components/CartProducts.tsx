"use client";
import React from "react";
import CartProduct from "./CartProduct";
import { useCart } from "../lib/store/cart";

export default function CartProducts() {
  const { cart } = useCart();

  return (
    <table className="border rounded-md text-sm sm:text-base border-spacing-1 md:border-spacing-4 border-separate">
      <tr>
        <th>product</th>
        <th>price</th>
        <th>quantity</th>
        <th>total</th>
        <th>remove</th>
      </tr>
      {cart?.map((cartProduct) => {
        return <CartProduct key={cartProduct.id} cartProduct={cartProduct} />;
      })}
    </table>
  );
}
