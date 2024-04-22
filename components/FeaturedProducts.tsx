import React from "react";
import Product from "./Product";
import { supabaseServer } from "../lib/supabase/server";

export default async function FeaturedProducts() {
  const supabase = await supabaseServer();
  const { data } = await supabase.from("products").select("*").gt("rate", 4);

  return (
    <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-3 md:gap-6">
      {
        data?.map((product) => {
          return (
            <Product key={product.id} product={product} />
          )
        })
      }
    </div>
  )
}
