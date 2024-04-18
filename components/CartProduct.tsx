"use client"
import React, { useState } from 'react'
import { useCart, cartProduct } from '../lib/store/cart';
import { supabaseBrowser } from '../lib/supabase/browser';
import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner';

export default function CartProduct({ cartProduct }: { cartProduct: cartProduct }) {
    const {updateCartProduct} = useCart();
    const [quantity, setQuantity] = useState(cartProduct.quantity);
    const [quantityChanged, setQuantityChanged] = useState(false);

    const handleQuantityChange = async(e) => {
        const q = parseInt(e.currentTarget.value);
        if(q >= 1 && q <=10) {
            setQuantity(q);
            setQuantityChanged(true);
        }
    }
    
    const handleConfirmQuantity = async() => {
        const supabase = supabaseBrowser();
        const newCartProduct = {...cartProduct, quantity};
        updateCartProduct(newCartProduct);
        setQuantityChanged(false);
        const {error} = await supabase.from("cart").update({quantity}).eq("id", cartProduct.id);
        if(error) {
            toast.error(error.message);
        }
    }

    return (
        <div className="flex pb-5 text-base flex-col md:flex-row justify-between w-full items-center md:p-4 border-b">
            <Link href={`/${cartProduct.products.id}/product`} className="w-96 shrink-0 border rounded-md p-2 cursor-pointer flex items-center gap-2 md-gap-4">
                <img
                    alt="Product Image"
                    className="aspect-square object-contain"
                    height={130}
                    src={cartProduct.products.image_url}
                    width={130}
                />
                <h2 className="">{cartProduct.products.title}</h2>
            </Link>
            <p className="flex flex-col items-center gap-2 my-3">
                <div className="flex gap-3 items-center">   
                    <span>quantity:</span>
                    <Input
                        onChange={(e) => handleQuantityChange(e)}
                        min="1"
                        max="10"
                        value={quantity}
                        className="p-1 w-20"
                        type="number"
                    />
                </div>
                {quantityChanged && <Button onClick={() => handleConfirmQuantity()} size="sm">Confirm change</Button>}
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:ml-auto font-semibold">${cartProduct.products.price}</div>
                <Button size="sm">Cancel</Button>
            </div>
        </div>
    )
}