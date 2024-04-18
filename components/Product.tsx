"use client"
import Link from "next/link";
import { product } from "../lib/store/products";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Product({product} : {product: product}) {
    
    return (
        <div className="flex flex-col items-center gap-2 rounded-lg border hover:shadow-xl transition-all dark:hover:shadow-lg">
            <Image
                alt="Product image"
                className="aspect-[5/6] rounded-t-lg object-contain object-center"
                height="250"
                src={product.image_url}
                width="200"
            />
            <div className="flex-1 grid gap-2 p-4 pb-2 w-full">
                <h3 className="font-medium text-sm/none line-clamp-2">{product.title}</h3>
                <p className="font-semibold text-gray-900 dark:text-gray-50">{product.price}$</p>
            </div>
            <Link className="w-full" href={`/${product.id}/product`}>
                <Button className="rounded-b-lg w-full" size="sm">
                    View product
                </Button>
            </Link>
        </div>
    )
}