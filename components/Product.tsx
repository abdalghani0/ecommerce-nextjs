"use client";
import Link from "next/link";
import { product } from "../lib/store/products";
import { Button } from "./ui/button";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Product({ product }: { product: product }) {
  return (
    <Link className="cursor-pointer" href={`/${product.id}/product`}>
      <div className="flex flex-col items-center gap-2 rounded-lg border hover:shadow-2xl transition-all dark:hover:shadow-lg">
        <Image
          alt="Product image"
          className="aspect-[5/6] rounded-t-lg object-contain object-center"
          height="250"
          src={product.image_url}
          width="200"
        />
        <div className="flex-1 flex flex-col justify-between gap-1 p-4 pb-1 w-full">
          <h3 className="font-medium text-sm line-clamp-2">{product.title}</h3>
          <div className="space-y-1">
            <Rate rate={product.rate} />
            <p className="font-semibold text-green-700 text-gray-900">
              {product.price}$
            </p>
          </div>
        </div>
        <Link className="w-full" href={`/${product.id}/product`}>
          <Button className="rounded-b-lg w-full" size="sm">
            View product
          </Button>
        </Link>
      </div>
    </Link>
  );
}

function Rate({ rate }: { rate: number }) {
  const style = (number: number) => {
    let s: string | undefined;
    if (rate >= number) s = `fill-yellow-500 stroke-yellow-500 stroke-1`;
    else s = `stroke-yellow-500 stroke-1`;
    return s;
  };
  return (
    <div className="flex">
      <Star className={style(1)} />
      <Star className={style(2)} />
      <Star className={style(3)} />
      <Star className={style(4)} />
      <Star className={style(5)} />
    </div>
  );
}
