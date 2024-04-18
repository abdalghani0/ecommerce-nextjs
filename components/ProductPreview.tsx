"use client"
import { useState } from "react";
import { useCart } from "../lib/store/cart";
import { product } from "../lib/store/products";
import { useUser } from "../lib/store/user";
import { Button } from "./ui/button";
import { ShoppingBagIcon } from "./ui/icons";
import { Input } from "./ui/input";
import { supabaseBrowser } from "../lib/supabase/browser";
import { toast } from "sonner";
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";

export default function ProductPreview({product} : {product: product}) {
    const [quantity, setQuantity] = useState(1);
    const { user } = useUser();
    const { addToCart } = useCart();

    const handleAddToCart = async() => {
        const supabase = supabaseBrowser();
        if(quantity >= 1) {
            const cartProduct = {
                id: uuidv4(),
                user_id: user?.id,
                product_id: product.id,
                quantity,
            }
            const { error } = await supabase.from("cart").insert(cartProduct);
            if(error) {
                toast.error(error.message);
            }
            else {
                addToCart({...cartProduct, products: product});
                toast.success("Added to cart successfully")
            }

        }
        else {
            toast.error("Quantity must be greater than zero!")
        }
    }

    const handleQuantityChange = (e) => {
        const q = parseInt(e.currentTarget.value);
        if(q >= 1 && q <=10) {
            setQuantity(q);
        }
    }

    return(
        <div className="flex-col justify-center md:flex-row flex items-center gap-5 lg:gap-20 py-5 md:py-10 lg:px-20 h-full">
            <div className="w-sm h-sm shrink-0">
                <Image 
                    alt="product image"
                    src={product.image_url}
                    className="object-center w-[250px] md:max-w-[350px] max-h-[400px]"
                />
            </div>
            <div className="p-4 max-w-2xl flex flex-col space-y-3 md:space-y-5">
                <h1 className="font-bold text-xl">{product.title}</h1>
                <p className="mb-3">{product.description}</p>
                <p>{product.count > 1 ? <span className="text-green-700">In stock</span> : <span className="text-red-700">Out of stock</span>}</p>
                <p className="flex items-center gap-3">
                    <span className="font-bold">Select a quantity:</span> 
                    <Input 
                        onChange={(e) => handleQuantityChange(e)} 
                        min="1" 
                        max="10"
                        value={quantity} 
                        className="p-1 w-20" 
                        type="number" 
                    />
                </p>
                <p className="font-medium space-x-2">
                    <span className="font-bold">Price:</span> <span>${product.price}</span>
                </p>
                <Button onClick={() => handleAddToCart()} className="w-1/2 self-center">
                    <ShoppingBagIcon className="w-4 h-4 mr-3" /> Add to cart
                </Button>
            </div>
        </div>
    )
}